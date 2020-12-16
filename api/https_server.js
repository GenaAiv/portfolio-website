const https = require('https');
const fs = require('fs');


const privateKey = fs.readFileSync("/home/ubuntu/cert/genaaiv_privkey.key");
const certificate = fs.readFileSync("/home/ubuntu/cert/genaaiv_dev.crt");


const credentials = {key: privateKey, cert: certificate, passphrase: 'abc123'};

https.createServer(credentials, function(req, res) {
  res.writeHead(200);
  res.end("Welcome to my portfolio website")
}).listen(8081);
