const fs = require("fs");
const { default: test } = require("node:test");
const testData = fs.readFileSync("testinput.txt", "utf8").split("");
const data = fs.readFileSync("input.txt", "utf8").split("");

function filtreraDubbleter(array) {
    const newarray = array.filter((element, index) => array.indexOf(element) === index)
    return newarray
}
function miniArray(item) {
  for (let i = 0; i < item.length; i++) {
    const four = item.slice(i, i + 4);
    console.log(four);
    const noDubbleLetterArray = filtreraDubbleter(four);
    console.log(noDubbleLetterArray)
    if(noDubbleLetterArray.length > 3){
      console.log(i+4)
      break;
    }
  }
}
miniArray(data);
