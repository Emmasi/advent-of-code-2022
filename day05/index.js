const movingArray=[
   {1:[Z][N][D]},
   {2:[C]},
   {3:[M][P]}
]
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8")

const testData = fs.readFileSync("testinput.txt", "utf8").split("\n").map(x=>x.split(",").map(x=>x.split("-")))
console.log(testData)