var fs = require("fs");
var array = fs.readFileSync("./file-expamle.txt").toString().split("\n");
for (line in array) {
  const latter = array[line].split(" ")[0];
  const minValue = array[line].split(" ")[1].split("-")[0];
  const maxValue = array[line].split(" ")[1].split("-")[1].split(":")[0];
  const pass = array[line].split(" ")[2];

  const matchNumber = pass.split(latter).length - 1;

  if (matchNumber >= minValue && matchNumber <= maxValue) {
    console.log(pass, true);
  } else {
    console.log(pass, false);
  }
}
