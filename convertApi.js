const Convertapi = require("convertapi")("HdyHQpcMuL44xmgr", {
  auth: {
    username: "kabita",
    password: "HdyHQpcMuL44xmgr",
  },
});

Convertapi.convert("extract-images", {
  File: "https://stagingdbpscasting.fra1.cdn.digitaloceanspaces.com/3d3ddbd-158c-d08-1f-772d2571052.pdf",
})
  .then(function (result) {
    console.log(result.response);
    // const map = result.map(FileExt);
    // console.log(map.FileExt);
    // get converted file url

    console.log("Converted file url: " + result.file.url);

    // save to file
    return result.file.save("kabita.pdf");
  })
  .then(function (file) {
    console.log("File saved: " + file);
  })
  .catch(function (e) {
    console.error(e.toString());
  });
