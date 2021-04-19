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

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA" 

function DNAStrnd(dna){
  let result = '';

  for (let i = 0; i < dna.length; i++) {
    const strand = dna[i];
    
    if(strand === 'G') result += 'C'
    if(strand === 'C') result += 'G'
    if(strand === 'A') result += 'T'
    if(strand === 'T') result += 'A'
  }

  return result;
}

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

function findEvenIndex(arr){
  let arrSum = arr.reduce((a,b)=> a + b)
  if(arrSum === 0)return 0;

  let accum = 0;
  for (let i = 0; i < arr.length; i++) {
    accum += arr[i]
    if(accum - arr[i] === arrSum - accum)return i;
  }
  return -1;
}

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

function queueTime(customers, n) {
  // if(n === 1)return customers.reduce((a,b)=> a + b)
  // let sortedByTills = customers.slice(0, n).sort
  // return sortedByTills;
}

// reutn the length of the shortest word
function findShort(s){
  return s.split(' ').sort((a,b)=> a.length - b.length)[0].length
}

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s)
{
  if(s.length % 2 !== 0)return s[Math.floor(s.length/2)]
  else return  s[((s.length/2) -1)] + s[(s.length/2)] 
}

// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// JavaScript: returns an Array;

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

// function towerBuilder(n) {

  // let length = n + n-1
  // let tower = []
  // let floor = []

  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < length; j++) {
  //     floor.push('*')
  //   }
  //   length -=1
  //   tower.push(floor[i])
//   }
//   return tower;
// }

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example: solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
if(!nums)return [];
return nums.sort((a,b)=> a-b)
};

//linear search vs binary search examples returning the index
linearSearch(arr, val){
 for(let i = 0; i < arr.length; i++){
  num = arr[i]
  if(val === num) return i
 }
 return -1
}

binarySearch(arr, val){
let left = 0;
let right = arr.length - 1;
let center = Math.floor((left + right)/2);

while(arr[center] !== val && left <= right){


  if(arr[center] < val) left = center + 1;
  if(arr[center] > val) right = center - 1;
  center = Math.floor((left + right)/2);

}
if(arr[center] === val)return center;
return -1;

}

binarySearch([5,24, 30, 43, 58, 60, 63], 58)

// find all duplicates in array
const findDuplictes = (nums)=>{
  let result = [];
  for(let i = 0; i < nums.length; i++){
    let value = Math.abs(nums[i])
    let index = value - 1;
    if(nums[index] < 0){
      result.push(value)
    }else{
      nums[index] *= -1
    }
    }
    
  }
  
  return result;
}
