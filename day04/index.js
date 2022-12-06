const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8").split("\n").map(x=>x.split(",").map(x=>x.split("-")))

const testData = fs.readFileSync("testinput.txt", "utf8").split("\n").map(x=>x.split(",").map(x=>x.split("-")))
console.log(testData)

const container =[]
data.forEach(x=>{
  const firstsections = x[0]
  const secondsections = x[1]
  const xStart = parseInt(firstsections[0])
  const xEnd = parseInt(firstsections[1])
  const yStart = parseInt(secondsections[0])
  const yEnd = parseInt(secondsections[1])

  if(xStart<=yEnd && xStart>=yStart && xEnd<=yEnd && xEnd>=yStart){
      container.push(1)
  }else if(yStart<=xEnd && yStart>=xStart && yEnd<=xEnd && yEnd>=xStart){
        container.push(1)
  }else{
  }
})
const total = container.reduce((x,y)=>{return x+y},0)
console.log(total)


