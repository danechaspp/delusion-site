// Vercel Serverless Function — POST /api/hwid-reset
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
      body: JSON.stringify({ message: 'HWID reset', content, sha })
    }
  );
  if (!res.ok) throw new Error('Failed to write users.json');
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });

  const { username } = req.body || {};
  if (!username) return res.status(400).json({ success: false, error: 'Missing username' });

  try {
    const { users, sha } = await readUsers();
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());

    if (!user) return res.status(404).json({ success: false, error: 'User not found' });

    user.hwid = '';
    await writeUsers(users, sha);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};
