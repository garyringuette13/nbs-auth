const https = require('https');

const BOT_TOKEN = "8985470259:AAEP5YHeX8sSz65Pfb3aoJv8Re61F10AONg";

function call(method, body) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const options = {
      hostname: 'api.telegram.org',
      path: `/bot${BOT_TOKEN}/${method}`,
      method: 'GET',
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, body });
        }
      });
    });

    req.on('error', (err) => reject(err));
    req.end();
  });
}

(async () => {
  try {
    const me = await call('getMe');
    console.log('getMe:', me);
    const updates = await call('getUpdates');
    console.log('getUpdates:', updates);
  } catch (e) {
    console.error('Error:', e);
  }
})();
