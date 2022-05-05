const axios = require("axios");
const fs = require("fs");
const mime = require("mime");

var config = {
  responseType: "stream",
};

async function getImage(url) {
  let time = Math.floor(Date.now() / 1000);
  let resp = await axios.get(url, config);

  const contentLength = resp.headers["content-length"];
  const contentType = resp.headers["content-type"];
  const extension = mime.extension(contentType);

  console.log(`Content type: ${contentType}`);
  console.log(`Extension: ${extension}`);
  const fileName = time + "." + extension;

  console.log(`Writing ${contentLength} bytes to file ${fileName}`);
  resp.data.pipe(fs.createWriteStream(fileName));
}

const url =
  "https://thumbs.dreamstime.com/b/beauty-woman-face-portrait-beautiful-model-girl-perfect-fresh-clean-skin-spa-brunette-female-looking-camera-smiling-66363112.jpg";
getImage(url);




// var fs = require('fs'),
//     request = require('request');

// var download = function(uri, filename, callback){
//   request.head(uri, function(err, res, body){
//     console.log('content-type:', res.headers['content-type']);
//     console.log('content-length:', res.headers['content-length']);

//     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//   });
// };

// download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
//   console.log('done');
// });
