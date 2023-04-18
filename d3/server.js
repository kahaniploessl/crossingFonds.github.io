// const express = require('express');
// const fs = require('fs');
// const csv = require('csv-parser');

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.sendFile('index.html', { root: __dirname });
// });

// app.get('data.csv', (req, res) => {
//   const results = [];

//   fs.createReadStream('data.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//       res.json(results);
//     });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);

// });


const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const extension = path.extname(url);
  let filePath = path.join(__dirname, 'index.html');
  let contentType = 'text/html';
  
  if (extension === '.json') {
    filePath = path.join(__dirname, url);
    contentType = 'application/json';
  } else if (extension === '.jpg') {
    filePath = path.join(__dirname, url);
    contentType = 'image/jpeg';
  } else if (extension === '.tif') {
    filePath = path.join(__dirname, url);
    contentType = 'image/tif';
  } else if (extension === '.mp4') {
    filePath = path.join(__dirname, url);
    contentType = 'video/mp4';
  } else if (extension === '.js') {
    filePath = path.join(__dirname, url);
    contentType = 'text/javascript';
  } else if (extension === '.csv') {
    filePath = path.join(__dirname, url);
    contentType = 'text/csv';
  }


  fs.readFile(filePath, (err, data) => {

    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('404 Not Found');
    } else {

      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
});


server.listen(port, () => {
  console.log('Server running at http://localhost:' + port +'/');

});
