// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys ([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

export function countSmileys(arr) {
  let counter = 0;
  for (const smiley of arr) {
    if (
      (smiley.length === 3 ) &&
      (smiley.startsWith(':') ||
        smiley.startsWith(';'))
      &&
      (smiley.endsWith(')') ||
        smiley.endsWith('D'))
        &&
        (smiley.charAt(1) === ''||
        smiley.charAt(1) === '-' ||
        smiley.charAt(1) === '~')
    ) counter++
    else if (
      (smiley.length === 2 ) &&
      (smiley.startsWith(':') ||
        smiley.startsWith(';'))
      &&
      (smiley.endsWith(')') ||
        smiley.endsWith('D'))
    ) counter++
  }
  return counter;
}

//better answer
export function countSmileys2(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

export function wave(str){
  function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
      let result = [];
  for (let i = 0; i < str.length; i++) {
   if(str[i] !== ''){
     let upperCase = str[i].toUpperCase()
     let oneUpperCase = setCharAt(str, i, upperCase)
      result.push(oneUpperCase)
     } else if(str[i] === ''){
        let upperCase = str[i + 1].toUpperCase()
     let oneUpperCase = setCharAt(str, i, upperCase)
      result.push(oneUpperCase)
       }
     }
     return result;
  }

function useState(init) {
  let currentState = init;
  setState(data){
    return currentState = data;
  };
  return [currentState, function setState(){}];
}

var isPalindrome = function(head) {
  let arr = [];
  head.map(num => arr.unshift(num))
  for (let i = 0; i <= head.length; i++){
    if (head[i] === arr[i]) return true;
    else return false;
  } 
};


