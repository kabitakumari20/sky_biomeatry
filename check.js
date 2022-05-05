const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "uplode");
// // "/home/webxpert/Downloads/insta.pdf"

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    console.log("Unable to scan directory: " + err);
  }
  const data = files.map(function (file) {});
  console.log(files);
});
