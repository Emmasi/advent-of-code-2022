const array = [
  [1000, 2000, 3000],
  [4000],
  [5000, 6000],
  [7000, 8000, 9000],
  [10000],
];

const fs = require('fs')
const data =fs.readFileSync('input.txt', 'utf8').split("\n\r").map(x=>x.split("\n").map(x=>{return parseInt(x)}))
console.log(data)


const allTotalarray =[]
const allCalo = data.forEach(elve =>
  {let totalCalo = elve.filter(x =>{return !Number.isNaN(x)}).reduce((x,y)=>{return x+y},0)
  console.log(totalCalo)
  allTotalarray.push(totalCalo)
  })
  console.log(allTotalarray)
  const maxvalue = Math.max(...allTotalarray)

console.log(maxvalue)






