async function splitPdf(url) {
  var convertapi = require("convertapi")("HdyHQpcMuL44xmgr");
  const splitdata = await convertapi.convert(
    "split",
    {
      File: url,
    },
    "pdf"
  );

  const data = await splitdata.response.Files;
  const finalArr = [];
  const arrOfPages = Promise.all(
    data.map((val, i) => {
      const data = { Url: val.Url, pageNo: i + 1 };
      finalArr.push(data);
    })
  );
console.log(finalArr)
  return finalArr;
}
console.log(
  splitPdf(
    "https://stagingdbpscasting.fra1.cdn.digitaloceanspaces.com/3d3ddbd-158c-d08-1f-772d2571052.pdf"
  )
);
