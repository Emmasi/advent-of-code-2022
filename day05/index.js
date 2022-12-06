const movingArray = [{ 1: ["Z", "N", "D"] }, { 2: ["C"] }, { 3: ["M", "P"] }];
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");

const testData = fs.readFileSync("testinput.txt", "utf8").split("\n");

const moveInstruktion = testData.map((x) => {
  const newArray = [{ move: x[5], from: x[12], to: x[17] }];
  return newArray;
});

const moveFunktion = (instr,item) =>{
   const firstrow = item[0]
   console.log(firstrow)
   const secendrow =item[1]
   const thirdrow =item[2]
   console.log(firstrow)
   instr.forEach(X=>{
      const moveValue = X[0].move
      const fromValue = X[0].from
      console.log(fromValue)
      const toValue = X[0].to
      console.log("Flytta från rad",fromValue," ", moveValue,"sty, till rad",toValue)
      if(fromValue === firstrow){
         console.log("jupp")
      }else{
         console.log("näpp")
      }
   })
}
moveFunktion(moveInstruktion,movingArray)
