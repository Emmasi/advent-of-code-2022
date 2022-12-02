const { Console } = require("console");
const fs = require('fs')
const data =fs.readFileSync('input.txt', 'utf8').split("\n").map(x => x.split(" "))
console.log(data)

console.log("hej")
const array = [
  ["A", "Y"],
  ["B", "X"],
  ["C", "Z"],
];

//sten,papper
//papper,sten¨
//sax,sax

//0p vid förlust, 3p lika, 6p vinst
//1p sten, 2p papper, 3psax

// A och X = sten 1p
// B och Y = Papper 2p
// c och Z = sax 3p

const gameScore=[]

const allGames = data.forEach(game =>{
    console.log(game)
    if(game.includes("A")){
        if(game.includes("X")){
            console.log("Lika")
            gameScore.push(4)
            // 1p 3p = 4p
        }
        else if(game.includes("Y")){
            console.log("Vinst")
            gameScore.push(8)
            // 2p + 6p = 8p
        }
        else{
            console.log("förlust")
            gameScore.push(3)
            //3p +0p= 3p
        }
    }else if(game.includes("B")){
        if(game.includes("X")){
            console.log("förlust")
            gameScore.push(1)
            // 1p+0p=1p
            
        }
        else if(game.includes("Y")){
            console.log("lika")
            gameScore.push(5)
            // 2p+3p=5p
            
        }
        else{
            console.log("Vinst")
            gameScore.push(9)
            // 3p+6p=9p  
        }
    }else{
        if(game.includes("X")){
            console.log("vinst")
            gameScore.push(7)
            // 1p+6p=7p
            
        }
        else if(game.includes("Y")){
            console.log("förlust")
            gameScore.push(2)
            // 2p+0p=2p  
        }
        else{
            console.log("lika")
            gameScore.push(6)
            // 3p+3p=6p  
        }
    }
})

const totalScore = gameScore.reduce((x,y)=>{return x+y},0)
console.log(totalScore)
