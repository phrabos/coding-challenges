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

// function useState(init) {
//   let currentState = init;
//   setState(data){
//     return currentState = data;
//   };
//   return [currentState, function setState(){}];
// }

export function isPalindrome(head) {
  let arr = [];
  head.map(num => arr.unshift(num))
  // console.log(arr)
  // console.log(head)
  for (let i = 0; i <= head.length; i++){
    if (head[i] !== arr[i]) return false;
    // console.log(head[i], arr[i])
  }
  return true;
};
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

 

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
// Example 2:

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]
// Example 3:

// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

export function shuffle(nums, n) {
  let result = [];
  const subArr = nums.slice(n)

  for (let i = 0; i < subArr.length; i++){
    result.push(nums[i])
    result.push(subArr[i])
  }
 
  return result;
};

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

 

// Example 1:

// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".
// Example 2:

// Input: s = "What is the solution to this problem", k = 4
// Output: "What is the solution"
// Explanation:
// The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
// The first 4 words are ["What", "is", "the", "solution"].
// Hence, you should return "What is the solution".

export function truncateSentence(s, k) {
  let result = '';
  let splitSentence = s.split(' ')
  for (let i = 0; i < k; i++){
    if (k - 1 !== i) result += (splitSentence[i]) + ' '
    else result += (splitSentence[i]);
  }

  return result
};

function calcResistance(arr){
  const colorMap = new Map([
    ['Black', 0],
    ['Brown', 1],
    ['Red', 2],
    ['Orange', 3],
    ['Yellow', 4],
    ['Green', 5],
    ['Blue', 6],
    ['Violet', 7],
    ['Grey', 8],
    ['White', 9]

  ])
  return `${colorMap.get(arr[0])}${colorMap.get(arr[1])}` * colorMap.get(arr[2])
}

const bandGen = arr => {
  const colors = {
      Black: 0,Brown: 1,Red: 2,
      Orange: 3, Yellow: 4, Green: 5,
      Blue: 6, Violet: 7, Grey: 8,
      White: 9}
  const n = arr.map(col => colors[col])
  return `${n[0]}${n[1]}` * n[2]
}

const time = ''
console.time('time')
bandGen(['Brown', 'Green', 'Yellow']);
console.timeEnd('time')

function sameFrequency(num1, num2){

  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  for(let j = 0; j < strNum2.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

const multsOf3and5 = (number)=>{
  if(number <= 0)return 0
  let multsArr = [];
  for (let i = number - 1; i > 0; i--) {
    if(i % 5 === 0 || i % 3 === 0){
      multsArr.push(i)
    }
  }
  return multsArr.reduce((acc, curr)=>acc + curr, 0);
}