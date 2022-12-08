const fs = require("fs");
const { default: test } = require("node:test");
const testData = fs.readFileSync("testinput.txt", "utf8").split("");
const data = fs.readFileSync("testinput.txt", "utf8");

console.log(testData);
// for (let i = 0; i < testData.length; i++) {
//     const first = testData[i]
//     const secend = testData[i+1]
//     console.log(first,secend)

//   }
const list =[]
function equal(array) {
    array.forEach((x)=>{
        for (let i = 0; i < array.length; i++) {
            if(x=== array[i]){
                list.push(x)
            }
          }
     })
}
equal(testData)

