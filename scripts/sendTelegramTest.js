const https = require('https');

const BOT_TOKEN = "8985470259:AAEP5YHeX8sSz65Pfb3aoJv8Re61F10AONg";
const CHAT_ID = "8810036834";
const message = `Test message from local debug at ${new Date().toISOString()}`;

const data = JSON.stringify({ chat_id: CHAT_ID, text: message });

const options = {
  hostname: 'api.telegram.org',
  path: `/bot${BOT_TOKEN}/sendMessage`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => (body += chunk));
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', body);
  });
});

req.on('error', (err) => {
  console.error('Request error:', err);
});

req.write(data);
req.end();
