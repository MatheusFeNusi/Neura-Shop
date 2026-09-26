const fs = require('fs');
const path = require('path');
const srcConfig = fs.readFileSync(path.join(__dirname, '..', 'js', 'config.js'), 'utf8');
const supaUrl = (srcConfig.match(/url:\s*"([^"]+)"/) || [])[1];
const supaAnon = (srcConfig.match(/anon:\s*"([^"]+)"/) || [])[1];

async function tryLogin(email, password) {
  const r = await fetch(supaUrl + "/auth/v1/token?grant_type=password", {
    method: "POST",
    headers: { "Content-Type": "application/json", "apikey": supaAnon },
    body: JSON.stringify({ email, password })
  });
  if (!r.ok) {
    const data = await r.json();
    console.log('Login failed for', email, ':', data);
    return null;
  }
  const session = await r.json();
  console.log('Login SUCCESS! Token:', session.access_token.slice(0, 30) + '...');
  return session.access_token;
}

async function main() {
  await tryLogin('admin@wattwheel.com', 'admin123');
  await tryLogin('matheus@neurashop.com', '123456');
}

main().catch(console.error);
