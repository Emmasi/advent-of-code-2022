const array = [
  [2 - 4, 6 - 8],
  [2 - 3, 4 - 5],
  [5 - 7, 7 - 9],
  [2 - 8, 3 - 7],
  [6 - 6, 4 - 6],
  [2 - 6, 4 - 8],
];

const fs = require('fs')
const data =fs.readFileSync('input.txt', 'utf8').split("\n").map(x => x.split(" "))

array.forEach(list => {x =>
    console.log(x)
});
