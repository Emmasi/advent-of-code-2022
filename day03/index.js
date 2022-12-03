const array = [
  ["vJrwpWtwJgWrhcsFMMfFFhFp"],
  ["jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL"],
  ["PmmdzqPrVvPwwTWBwg"],
  ["wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn"],
  ["ttgJtRGJQctTZtZT"],
  ["CrZsJsPPZsGzwwsLwLmpwMDw"],
];
const fs = require('fs')
const data =fs.readFileSync('input.txt', 'utf8').split("\n").map(x => x.split(" "))

array.forEach(rucksacks=>{
    rucksacks.forEach(rucksack =>{
        let half = rucksack.length/2
        function split(str, index) {
            const result = [str.slice(0, index), str.slice(index)];
            return result;
          }
          const splitWords = split(rucksack, half);
          function include(word,letter){
            let letterArr = letter.split("")
            const sameLatter = word.include(letterArr)
            return sameLatter
          }
          const checkLetter = include(splitWords[0],splitWords[1])
 
    })
})


