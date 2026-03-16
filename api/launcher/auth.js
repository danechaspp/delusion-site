// Vercel Serverless Function — POST /api/launcher/auth
// Env vars needed (set in Vercel dashboard):
//   GITHUB_TOKEN   — personal access token (repo scope)
//   GITHUB_OWNER   — your GitHub username
//   GITHUB_REPO    — private repo name containing users.json

    // ── ВСТАВЬ ТОКЕН СЮДА ────────────────────────────────────────────────────
 const GITHUB_TOKEN = "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";
 const GITHUB_OWNER = "danechaspp";
 const GITHUB_REPO  = "client";
 const USERS_FILE   = "users.json";
    // ─────────────────────────────────────────────────────────────────────────

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
      body: JSON.stringify({ message: 'Update users', content, sha })
    }
  );
  if (!res.ok) throw new Error('Failed to write users.json');
}

module.exports = async function handler(req, res) {
  // CORS — allow launcher to call this
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });

  const { username, password, hwid } = req.body || {};

  if (!username || !password || !hwid) {
    return res.status(400).json({ success: false, error: 'Missing fields' });
  }

  try {
    const { users, sha } = await readUsers();

    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());

    if (!user) {
      return res.status(401).json({ success: false, error: 'Пользователь не найден' });
    }

    if (user.password !== password) {
      return res.status(401).json({ success: false, error: 'Неверный пароль' });
    }

    if (!user.subscription) {
      return res.status(401).json({ success: false, error: 'Нет активной подписки. Купите на delusion.fun' });
    }

    // Check subscription expiry if set
    if (user.subscriptionExpiry) {
      const expiry = new Date(user.subscriptionExpiry);
      if (expiry < new Date()) {
        return res.status(401).json({ success: false, error: 'Подписка истекла. Продлите на delusion.fun' });
      }
    }

    // HWID binding
    let needsWrite = false;
    if (!user.hwid || user.hwid === '') {
      user.hwid = hwid;
      needsWrite = true;
    } else if (user.hwid !== hwid) {
      return res.status(401).json({ success: false, error: 'HWID не совпадает. Вход с другого устройства запрещён' });
    }

    if (needsWrite) await writeUsers(users, sha);

    return res.status(200).json({ success: true, username: user.username, uuid: user.uuid });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
}
