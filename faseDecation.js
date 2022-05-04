const config = require("./config");
const skybiometry = require("skybiometry");

const client = new skybiometry.Client(config.apiKey, config.apiSecret);
const filePath = "./face.jpg";

console.log("Running...");

client.faces
  .detect({
    urls: "https://thumbs.dreamstime.com/b/beauty-woman-face-portrait-beautiful-model-girl-perfect-fresh-clean-skin-spa-brunette-female-looking-camera-smiling-66363112.jpg",
    // files:filePath
  })

  .then((result) => {
    console.log(result, "*************************");
  })
  .catch((err) =>
    console.log(`ERROR: ${err} `, "*********************************")
  );
