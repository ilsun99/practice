const testFolder = "./data/";
const fs = require("fs");

fs.readdir(testFolder, function (error, filelist) {
  console.log(filelist);
});

// 배열로 산출됨
