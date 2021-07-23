const WebSocketServer =  require('ws');
const http = require('http');
const fs = require('fs');
// const { Socket } = require('dgram');

const sendFile = (res, filePath, type) => {
  const fullFilePath = (`${__dirname}/${filePath}`);

  res.writeHead(200, {
    'Content-Type': type
  });

  const readSream = fs.createReadStream(fullFilePath);
  readSream.pipe(res);  
}

const httpServer = http.createServer((req, res) => {
  if (req.url === '/') {
    
    sendFile(res, `public/index.html`, 'text/html')
    return;
  }

  if (req.url === '/js/main.js') {
    
    sendFile(res, `public/js/main.js`, `application/javascript`)
    return;
  }


  res.writeHead(404);
  res.end();

}) 

httpServer.listen(8000, () => {
  console.log('Server on');
});

//web Server
const wss =  new WebSocketServer.Server( {server: httpServer} );
wss.on('connection', (ws) => {
  console.log('bac: web socket ON');

  ws.on('message', (message)=> {
  console.log('Front send: ', message);

  })

  ws.send('blabla')
});



