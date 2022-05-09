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
