
//  * Complete the 'logicalColors' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts following parameters:
//  *  1. BOOLEAN x
//  *  2. BOOLEAN y
//  */

function logicalColors(x, y) {
    if (x===true && y=== false){
     return('Blue')
 }
    if (x===true){
        return('Red')
    }
    if (y===false){
        return('Yellow')
    }
 if (x===true && y=== false){
     return('Blue')
 }
 return 'Purple' ;
}

// * Complete the 'max' function below.
// *
// * The function is expected to return an INTEGER.
// * The function accepts INTEGER_ARRAY arr as parameter.
// */
function max(arr) {
   let high= arr[0];
   for(let num of arr){
       if(num > high){
           high=num;
       }
   }   
   return high;
}

//  * Complete the 'removeNumbers' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts STRING str as parameter.
//  */
function removeNumbers(str) {
    let noNum=str.replace(/\d/g, '')
    return noNum;
    }

    // * Complete the 'onlyEvens' function below.
    // *
    // * The function is expected to return an INTEGER_ARRAY.
    // * The function accepts INTEGER_ARRAY arr as parameter.
    // */
   function onlyEvens(arr) {
   let removeOdd=[]
      for (let num of arr){
           if(num% 2===0){
           removeOdd.push(num);
           }
       }
   return removeOdd;
   }

//    * Complete the 'containsEveryVowel' function below.
//    *
//    * The function is expected to return a BOOLEAN.
//    * The function accepts STRING str as parameter.
//    */
  function containsEveryVowel(str) {
     if(!str.includes('a')) {
         return false;
     }
      if(!str.includes('e')) {
         return false;
     }
      if(!str.includes('i')) {
         return false;
     }
      if(!str.includes('o')) {
         return false;
     }
      if(!str.includes('u')) {
         return false;
     }
      return true;
  }

 
//  * Complete the 'vowelFrequency' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts STRING str as parameter.
//  */
function vowelFrequency(str) {
    let answer = {};
    let vowel= 'aeiou';
    
    for(let char of str){
        if(vowel.includes(char)){
            if(answer[char]){
                answer[char]++;
            } else {
                answer[char]=1;
            }
        }
    }
    let newStr='';
    for(let key in answer){
        newStr += key + answer[key];
    }
    return newStr;
}
