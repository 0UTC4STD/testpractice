console.log('My first Javascript');
console.error("You absolute donkey wtf did you")
if (501===501){
    console.log('Hell Yeah Brother!')
}
let rating =501; 
if (rating===501) {
    console.log('God tier!')
}
else if (rating<501){
    console.log("Weak Shit")
}

let firstVariable;
let secondVariable = "";
let thirdVariable = 1;
let secretMessage = "Shh!";

if(firstVariable){
  console.log("first");
} else if(firstVariable || secondVariable){
  console.log("second");
} else if(firstVariable || thirdVariable){
  console.log("third");
} else {
  console.log("fourth");
}


if  (Math.random() >= 0.5) {
console.log('Over 0.5') }
 else {
 console.log('Under 0.5') }

const people = ['Greg', 'Mary', 'Devon','James']

const DylanSPECIALstats = {
  Strength : 5,
  Perception : 7,
  Endurance: 4,
  Charisma: 8,
  Intelligence: 7,
  Agility: 6,
  Luck: 6
};
 DylanSPECIALstats.CritHitChance =45;
 
for (let i = 1; i <= 10; i++){
  console.log ('DANK MEMES FOR SALE');
}
const Highscores = [
  {Intials: 'DMC',
Score: '501'},
{Intials: 'JFK',
Score:'69'},
{Intials:'ASS',
Score:'88'}
];

for (let i = 0; i < Highscores.length; i++) {
  let player = Highscores[i];
  console.log(`${player.Intials} scored ${player.Score}`);
}

// Dank Meme
let j = 0;
  while(j <=10){
    console.log(j);
    j++;
  }
for (let HS of Highscores){
  console.log(HS);
}
  for (let stat of Object.keys(DylanSPECIALstats)){
    console.log(stat, DylanSPECIALstats[stat]);
  }
  const ratings = Object.values(DylanSPECIALstats);
  let total= 0;
  for(let r of ratings){
    total += r;
  }
  total /= ratings.length;
  console.log(total);

  function wednesday (){
    console.log ('It is')
    console.log ('Wednesday')
    console.log ('my dudes')
  }
  wednesday()

  for(let i=0; i<2; i++){
    wednesday()
  }
 function D20() {
  let roll = Math.floor(Math.random()*20)+1;
  console.log(`Rolled: ${roll}`);
 }
 function throwDice(times){
  for(let i=0; i<times; i++){
    D20();
  }
 }
function loggedON(username){
  console.log(`${username} Logged On`);
}
function multiply(x, y){
  return x*y;
}
function isValidPassword(password, username){
  if(password.length <8){
      return false;
  }
  if(password.indexOf(' ') !== -1){
      return false;
  }
  if (password.indexOf(username)!== -1){
      return false;
  }
  return true;
}
function avg(arr){
  let total=0
  for(let num of arr){
      total+=num;
  }
  return(total/arr.length)
  }
  function getCard(){
    const values =[
    '1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const numba=Math.floor(Math.random()* values.length);
    const value= values[numba];

    const suits =['clubs', 'spades', 'hearts', 'diamonds']
    const shape=Math.floor(Math.random()* suits.length);
    const suit =suits[shape];

    console.log((value),('of'),(suit))
}
function RPS(){

  function determineComputer(num){
    if(num <= .33) return "rock";
    else if(num <= .66) return "paper";
    return "scissor";
  }

  let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
  let computerChoice = determineComputer(Math.random());


  let answers = ["rock", "paper", "scissor"];

  if(!userChoice || answers.indexOf(userChoice) === -1){
    return "Please select a valid option";
  }

  if(userChoice === computerChoice) return "Tie!";

  if(userChoice === "rock" && computerChoice === "paper") {
    return "You lose, computer picked " +  computerChoice;
  }
  if(userChoice === "paper" && computerChoice === "scissor") {
    return "You lose, computer picked " +  computerChoice;
  }
  if(userChoice === "scissor" && computerChoice === "rock") {
    return "You lose, computer picked " +  computerChoice;
  }

  return "You win! Computer picked " +  computerChoice;
} 
function repeatStringNumTimes(string, times) {
  if(Math.floor,times === 1) 
    return string;
  else 
    return string += repeatStringNumTimes(string, times-1);}
  
    function multiples(x, n) {
      let answer=[];
      for(let i=x;i<=n; i=i+(x*x)){
          answer.push(i*i);
      }
          return answer;
      }
      // function values(json) {
      //   var obj = JSON.parse(json);
      //   for(let value in obj){
      //       console.log(`${obj[value]}`)};
      //   }
      //   function keys(json) {
      //     var obj = JSON.parse(json);
      //     for(let key in obj){
      //         console.log(`${key}:${obj[key]}`);
      //     }
      // }
      function kello() {
        console.log(Object.values(kello));
      }
      function slice(arr, start, end) {
        let result = [];
        from = Math.max(start, 0);
        to = Math.min(end);
        
        if((!end) || (end > arr.length)) {
          for(let i = from; i<arr.length; i++) {
          result.push(arr[i]);}
        } else { 
          for(let i = from; i<to; i++) {
          result.push(arr[i]);
          }
        }
        return result;
        }
        // function twoHighest(arr) {
        //   let high = 0;
        //   let secHigh = 0;
        //   for (let i=0; i<arr.length; i++){
        //       if (arr[i>=high]){
        //           secHigh=high;
        //           high=arr[i];}
        //       }else if (arr[i]> secHigh && arr[i<high]){
        //       secHigh=arr[i];
        //   }
        //   return [secHigh, high];
        //   }
          
          function twoHighest(arr) {
            let high = 0;
            let secHigh = 0;
          
            for (var i = 0; i < arr.length; i++) { 
              if (arr[i] >= high) { 
                secHigh = high; 
                high = arr[i];
              } else if (arr[i] > secHigh && arr[i] < high) {
                secHigh = arr[i];
              }
            }
          
            return [secHigh, high];
          }