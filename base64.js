const imageToBase64 = require("image-to-base64");

function url(url) {
  // const filePath = "./face.jpg";

  // imageToBase64(filePath) // Path to the image
  //   .then((response) => {
  //     console.log(response,"*******************");
  //   })
  //   .catch((error) => {
  //     console.log(error); // Logs an error if there was one
  //   });

  imageToBase64(url) // Image URL
    .then((response) => {
      console.log(response, "&&&&&&&&&&&&&&&&&&"); // "iVBORw0KGgoAAAANSwCAIA..."
    })

    .catch((error) => {
      console.log(error); // Logs an error if there was one
    });
}
url(
  "https://thumbs.dreamstime.com/b/beauty-woman-face-portrait-beautiful-model-girl-perfect-fresh-clean-skin-spa-brunette-female-looking-camera-smiling-66363112.jpg"
  //"https://www.npmjs.com/package/image-to-base64"
);
