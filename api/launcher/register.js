// Vercel Serverless Function — POST /api/register
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO  = process.env.GITHUB_REPO;
const FILE_PATH    = 'users.json';

async function readUsers() {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
    { headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, 'User-Agent': 'delusion-backend' } }
  );
  if (!res.ok) throw new Error('Failed to read users.json');
  const data = await res.json();
  return {
    users: JSON.parse(Buffer.from(data.content, 'base64').toString('utf8')),
    sha: data.sha
  };
}

async function writeUsers(users, sha) {
  const content = Buffer.from(JSON.stringify(users, null, 2)).toString('base64');
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'delusion-backend'
      },
      body: JSON.stringify({ message: 'Register user', content, sha })
    }
  );
  if (!res.ok) throw new Error('Failed to write users.json');
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });

  const { username, email, password } = req.body || {};

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, error: 'Missing fields' });
  }

  // Validate username
  if (!/^[a-zA-Z0-9_]{3,16}$/.test(username)) {
    return res.status(400).json({ success: false, error: 'Invalid username' });
  }

  try {
    const { users, sha } = await readUsers();

    // Check duplicate username
    if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
      return res.status(409).json({ success: false, error: 'Username already taken' });
    }

    // Check duplicate email
    if (users.find(u => u.email === email.toLowerCase())) {
      return res.status(409).json({ success: false, error: 'Email already registered' });
    }

    // Generate sequential UID
    const maxUid = users.reduce((max, u) => {
      const n = parseInt((u.uid || '#1000').replace('#', ''));
      return n > max ? n : max;
    }, 1000);

    const newUser = {
      username,
      email: email.toLowerCase(),
      password, // already SHA-256 hashed from client
      hwid: '',
      subscription: false,
      uuid: generateUUID(),
      uid: '#' + (maxUid + 1),
      joined: new Date().toISOString(),
      subscriptionExpiry: ''
    };

    users.push(newUser);
    await writeUsers(users, sha);

    return res.status(200).json({
      success: true,
      username: newUser.username,
      uid: newUser.uid,
      uuid: newUser.uuid,
      joined: newUser.joined
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
}
