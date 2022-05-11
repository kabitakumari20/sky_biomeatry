const config = require("./config");
const skybiometry = require("skybiometry");
async function getdata() {
  const Convertapi = require("convertapi")("HdyHQpcMuL44xmgr", {
    auth: {
      username: "kabita",
      password: "HdyHQpcMuL44xmgr",
    },
  });

  await Convertapi.convert("extract-images", {
    File: "https://stagingdbpscasting.fra1.cdn.digitaloceanspaces.com/3d3ddbd-158c-d08-1f-772d2571052.pdf",
  })
    .then(function (result) {
      const data = result.response.Files;
      console.log(data);
      console.log("Converted file url: " + result.file.url);

      const urldata = data.map((item) => item.Url);
      console.log(urldata);
      const client = new skybiometry.Client(config.apiKey, config.apiSecret);

      console.log("Running...");
      for (let i = 0; i < urldata.length; i++) {
        if (
          urldata[i] ==
          client.faces
            .detect({
              urls: urldata[i],
            })
            .then((result) => {
              const data = JSON.pares(result)
              const data3 = (await data2.status) == "success" && data2.photos[0].url;
              console.log(data3);
              console.log(result, "*************************");
              console.log("   ");
            })
            .catch((err) =>
              console.log(
                `ERROR: ${err}`,
                "((((((((((((((((((((((((()))))))))))))))))))))))))"
              )
            )
        ) {
          console.log("");
        }
      }

      //   return result.file.save("kabita.pdf");
    })
    .then(function (file) {
      console.log("File saved: " + file);
    })

    .catch(function (e) {
      console.error(e.toString());
    });
}

getdata();



// const config = require("./config");
// const skybiometry = require("skybiometry");

// async function getdata() {
//   const client = new skybiometry.Client(config.apiKey, config.apiSecret);

//   const Convertapi = require("convertapi")("HdyHQpcMuL44xmgr", {
//     auth: {
//       username: "kabita",
//       password: "HdyHQpcMuL44xmgr",
//     },
//   });

//   const convert = await Convertapi.convert("extract-images", {
//     File: "https://stagingdbpscasting.fra1.cdn.digitaloceanspaces.com/3d3ddbd-158c-d08-1f-772d2571052.pdf",
//   });
//   const array = [];
//   const images = convert.response.Files;
//   const imageWithFace = await Promise.all(
//     images.map(async (val) => {
//       try {
//         const imgDetect = await client.faces.detect({
//           urls: val.Url,
//         });
//         const data2 = JSON.parse(imgDetect);

//         if (data2.status == "success") {
//           array.push(data2.photos[0].url);
//         }
//       } catch (error) {
//         console.log(error.message);
//       }
//     })
//   );
//   console.log(array);
// }
// getdata();

// // console.log(getdata());

