var fs = require("fs");
var array = fs.readFileSync("./file-expamle.txt").toString().split("\n");
for (line in array) {
  const str = array[line];
  console.log(str);
}
