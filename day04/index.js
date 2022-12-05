
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8").split("\n").map(x=>x.split(",").map(x=>x.split("-")))

const testData = fs.readFileSync("testinput.txt", "utf8").split("\n").map(x=>x.split(",").map(x=>x.split("-")))
console.log(testData)
const container =[]
testData.forEach(x=>{
  const firstsections = x[0]
  const secondsections = x[1]
  const firstFS = parseInt(firstsections[0])
  const secondFS = parseInt(firstsections[1])
  const firstSS = parseInt(secondsections[0])
  const secondSS = parseInt(secondsections[1])

  if(firstFS>=firstSS&&firstFS<=secondSS){
    console.log("första är innanför")
    if(secondFS>=firstSS&&secondFS<= secondSS){
      console.log("båda är innanför",firstFS,secondFS,",",firstSS,secondSS)
      container.push(1)
    }else{
      console.log("delvis utanför")
    }
  }else if(firstSS>=firstFS&&firstSS<=secondFS){
    console.log("andra är innanför")
    if(secondSS>=firstFS&&secondSS<=secondFS){
      console.log("båda är innanför",firstFS,secondFS,",",firstSS,secondSS)
      container.push(1)
    }else{
      console.log("delvis utanför")
    }
  }else{
    console.log("Utanför")
  }
})
console.log(container)
const total = container.reduce((x,y)=>{return x+y},0)
console.log(total)


