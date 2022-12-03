const array = [
  ["vJrwpWtwJgWrhcsFMMfFFhFp"],
  ["jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL"],
  ["PmmdzqPrVvPwwTWBwg"],
  ["wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn"],
  ["ttgJtRGJQctTZtZT"],
  ["CrZsJsPPZsGzwwsLwLmpwMDw"],
];
const alfa=[
    {"a":1},
    {"b":2},
    {"c":3},
    {"d":4},
    {"e":5},
    {"f":6},
    {"g":7},
    {"h":8},
    {"i":9},
    {"j":10},
    {"k":11},
    {"l":12},
    {"m":13},
    {"n":14},
    {"o":15},
    {"p":16},
    {"q":17},
    {"r":18},
    {"s":19},
    {"t":20},
    {"u":21},
    {"v":22},
    {"x":23},
    {"w":24},
    {"y":25},
    {"z":26},
    {"A":27},
    {"B":28},
    {"C":29},
    {"D":30},
    {"E":31},
    {"F":32},
    {"G":33},
    {"H":34},
    {"I":35},
    {"J":36},
    {"K":37},
    {"L":38},
    {"M":39},
    {"N":40},
    {"O":41},
    {"P":42},
    {"Q":43},
    {"R":44},
    {"S":45},
    {"T":46},
    {"U":47},
    {"V":48},
    {"W":49},
    {"X":50},
    {"Y":51},
    {"Z":52},
]
const fs = require('fs')
const data =fs.readFileSync('input.txt', 'utf8').split("\n").map(x => x.split(" "))

array.forEach(rucksacks=>{
    rucksacks.forEach(rucksack =>{
        function split (str) {
            const half = str.length/2
            const result = [str.slice(0, half), str.slice(half)];
            return result;
        }
        const splitWords = split(rucksack);

        let mySet = new Set([])

        function findletter(word,letter) {
            let letters = letter.split("")
            letters.forEach(x=>{
                if(word.includes(x)){
                    mySet.add(x)  
                }
            })
        }
        findletter(splitWords[0],splitWords[1])
    
        mySet.forEach(x=>{
            alfa.forEach(y=>{
                console.log(x,y)

            })
        })
        
    })  
})


