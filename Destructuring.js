// 8, 1846

// yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

// Your name is Alejandro and you like purple, Your name is Melissa and you like green, Your name is undefined and you like green

// Maya, Marisa, Chi

// "Raindrops on roses","whiskers on kittens","Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"

// 10,30,20

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  const {a, b}= obj.numbers

  var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]]

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})



// Maps and Sets Excerise

new Set([1,1,2,2,3,4])
// {1,2,3,4}

[...new Set("referee")].join("")
// ref

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// 0: {Array(3) => true}, 1: {Array(3) => false}

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => new  Set(arr).size !==length

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
function vowel(char){
    return  'aeiou'.includes(char);
}

function vowelCount(str){
  let vowelMap = new Map();
  for(let char of str){
    let lC= char.toLowerCase()
    if(vowel(lC)){
      if(vowelMap.has(lC)){
        vowelMap.set(lC, vowelMap.get(lC)+1);
      } 
      else {
        vowelMap.set(lC,1);}
      }
    }
    return vowelMap;
}