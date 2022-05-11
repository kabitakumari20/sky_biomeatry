async function splitPdf(url) {
  var convertapi = require("convertapi")("HdyHQpcMuL44xmgr");
  const splitdata = await convertapi.convert(
    "split",
    {
      File: url,
    },
    "pdf"
  );

  const array = [];
  
  const data = await splitdata.response.Files;
  // console.log(data);

  const map = await data.map(function (item) {
    return item.Url;
  });
  // console.log(map);
  const array1 = ["Url"];
  const array3 = ["pageNo"];
  const array4 = [];
  for (x of map) {
    array.push(x);
  }
  for (x in map) {
    array4.push(x);
  }
  // console.log(array4);
  // console.log(array);
  const arry2 = [];
  let i = 0;
  let obj = {};
  let newKey;
  let newVal;
  let newKeyPage;
  let newKeyPageVa;
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array4.length; j++) {
      newKeyPage = array3[0];
      newKeyPageVa = array4[j];
      obj[newKeyPage] = newKeyPageVa;
    }
    newKey = array1[0];
    newVal = array[i];
    obj[newKey] = newVal;
    arry2.push(obj);
  }
  console.log(arry2);
  // return arry2;
}
splitPdf(
  "https://stagingdbpscasting.fra1.cdn.digitaloceanspaces.com/3d3ddbd-158c-d08-1f-772d2571052.pdf"
);

// console.log(
//   splitPdf(
//     "https://stagingdbpscasting.fra1.cdn.digitaloceanspaces.com/3d3ddbd-158c-d08-1f-772d2571052.pdf"
//   )
// );
