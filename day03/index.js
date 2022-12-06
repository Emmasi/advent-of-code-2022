const alfa=[
    {type:"a",value:1},
    {type:"b",value:2},
    {type:"c",value:3},
    {type:"d",value:4},
    {type:"e",value:5},
    {type:"f",value:6},
    {type:"g",value:7},
    {type:"h",value:8},
    {type:"i",value:9},
    {type:"j",value:10},
    {type:"k",value:11},
    {type:"l",value:12},
    {type:"m",value:13},
    {type:"n",value:14},
    {type:"o",value:15},
    {type:"p",value:16},
    {type:"q",value:17},
    {type:"r",value:18},
    {type:"s",value:19},
    {type:"t",value:20},
    {type:"u",value:21},
    {type:"v",value:22},
    {type:"w",value:23},
    {type:"x",value:24},
    {type:"y",value:25},
    {type:"z",value:26},
    {type:"A",value:27},
    {type:"B",value:28},
    {type:"C",value:29},
    {type:"D",value:30},
    {type:"E",value:31},
    {type:"F",value:32},
    {type:"G",value:33},
    {type:"H",value:34},
    {type:"I",value:35},
    {type:"J",value:36},
    {type:"K",value:37},
    {type:"L",value:38},
    {type:"M",value:39},
    {type:"N",value:40},
    {type:"O",value:41},
    {type:"P",value:42},
    {type:"Q",value:43},
    {type:"R",value:44},
    {type:"S",value:45},
    {type:"T",value:46},
    {type:"U",value:47},
    {type:"V",value:48},
    {type:"W",value:49},
    {type:"X",value:50},
    {type:"Y",value:51},
    {type:"Z",value:52},
]

const fs = require('fs')
const data =fs.readFileSync('input.txt', 'utf8').split("\n")
const testData =fs.readFileSync('testinput.txt', 'utf8').split("\n")
console.log(testData)

let totalvalue = []
//split in to two 
function split (str) {
    const half = str.length/2
    const result = [str.slice(0, half), str.slice(half)];
    return result;
}
//find the same latter
function findletter(word,letter,mySet) {
    let letters = letter.split("")
    letters.forEach(x=>{
        if(word.includes(x)){
            mySet.add(x)  
        }
    })
}

data.forEach(rucksack =>{
    let mySet = new Set([])
    const splitWords = split(rucksack);
    findletter(splitWords[0],splitWords[1],mySet)
    mySet.forEach(x=>{
            if(x=== y.type){
                totalvalue.push(y.value)
            }
        })
})
 

console.log(totalvalue.reduce((x,y)=>{return x+y},0))


