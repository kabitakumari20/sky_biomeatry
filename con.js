const config = require("./config");
const skybiometry = require("skybiometry");
const finalArr = [];
const array = [];
const splitPdf = async (url) => {
  var convertapi = require("convertapi")("24AowN6993St3sJH");
  const splitdata = await convertapi.convert(
    "split",
    {
      File: url,
    },
    "pdf"
  );
  const data = splitdata.response.Files;

  const arrOfPages = data.map((val, i) => {
    const data = { Url: val.Url, pageNo: i + 1 };
    finalArr.push(data);
  });
  //   console.log(finalArr);

  const client = new skybiometry.Client(config.apiKey, config.apiSecret);

  const Convertapi = require("convertapi")("24AowN6993St3sJH", {
    auth: {
      username: "kabita",
      password: "24AowN6993St3sJH",
    },
  });
  const pdfUrl = await Promise.all(
    finalArr.map(async (val) => {
      const convert = await Convertapi.convert("extract-images", {
        File: val.Url,
      });
      const image = convert.response.Files;
      //   console.log(image);

      const map = image.map((url) => {
        const obj = { ImageUrl: url.Url };
        const myobj = { ...val, ...obj };
        //   console.log(myobj);
        array.push(myobj);
      });
    })
  );
  const array1 = [];
  const imageWithFace = await Promise.all(
    array.map(async (val) => {
      try {
        const imgDetect = await client.faces.detect({
          urls: val.ImageUrl,
        });
        // console.log(imgDetect);
        const data2 = JSON.parse(imgDetect);
        if (data2.status == "success") {
         
          array1.push(val);
        }
      } catch (error) {}
    })
  );

  //   console.log(array);
  console.log(array1);
};

splitPdf(
  "https://stagingdbpscasting.fra1.cdn.digitaloceanspaces.com/3d3ddbd-158c-d08-1f-772d2571052.pdf"
);
