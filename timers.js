console.log('Timer');

function countdown(num){
    let counter=setInterval(function(){num--;
        if(num===0){
            console.log('"Done!"');
            clearInterval(counter);
        }
        else {console.log(num);}
    },1000)
}

console.log ('Random Game')

// function randomGame(rdmNum){
//     if(rdmNum>1){
//         console.log('Number Selected is to high')};
//     if(rdmNum<0){
//         console.log('Number Selected is to low')};
//     let time=setInterval(function(){
//          rdmNum=Math.random;
//         if(rdmNum>.75){
//             clearInterval(time);
//         }
//         else{console.log(rdmNum);}
//     },1000)
// } My 1st Attempt Above, Correct Below

// function randomGame(){
//     let num;
//     let times = 0;
//     let timer = setInterval(function(){
//       num = Math.random();
//       times++
//       if(num > .75) {
//         clearInterval(timer);
//         console.log("It took " + times + " try/tries.");
//       }
//     },1000)
//   }

  function randomGame(rdmNum){
    let times=0;
    // if(rdmNum>1){
    //     console.log('Number Selected is to high')};
    // if(rdmNum<0){
    //     console.log('Number Selected is to low')}; 
    // I kept these not realizing the input didn't need to be a number between 0 and 1 until after 
    let time=setInterval(function(){
         rdmNum=Math.random();
         times++;
        if(rdmNum>.75){
            clearInterval(time);
            console.log("It took "+times+" attempt(s)!")
        }
       else{console.log(rdmNum);}
    },1000)
}
// I like my final solution of the provided because it shows the failed attempts but it also lets any number or blank get put into the function in the console with one less let in the code 