// Invert values
function invert(array) {
    return array.map(number => number * -1)
}

// Beginner - Lost Without a Map
function maps(x){
    return x.map(number => number * 2)
}

// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
    if(input == null || input.length == 0) return []
    let positive = 0
    let negative = 0
    input.forEach(number => number > 0 ? positive++ : negative += number)
    return [positive, negative]
}

// A Needle in the Haystack
function findNeedle(haystack) {
    return 'found the needle at position ' + haystack.findIndex(ndl => ndl === 'needle')
}

// Abbreviate a Two Word Name
function abbrevName(name){
    return name.split(' ').map(n => n[0].toUpperCase()).join('.')
}

// Convert number to reversed array of digits
function digitize(n) {
    return n.toString().split('').map(num => parseInt(num)).reverse()
}

// Keep Hydrated!
function litres(time) {
    return Math.floor(time / 2)
}

// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2)
}

// Century From Year
function century(year) {
    return Math.ceil(year / 100)
}

// Is n divisible by x and y?
const isDivisible = (n, x, y) => n % x == 0 && n % y == 0

// Square(n) Sum
function squareSum(numbers){
    return numbers.reduce((result, number) => result + (Math.pow(number, 2)), 0) // (number * number)
}

// Convert a Number to a String!
function numberToString(num) {
    return `${num}`
}

// Counting sheep...
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep => sheep === true).length
}

// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
    return bool ? 'Yes' : 'No'
}

// Reversed Strings
function solution(str){
    return str.split('').reverse().join('')
}

// Grasshopper - Summation
var summation = function (num) {
    return result = (num * (num + 1)) / 2;
}

// Remove String Spaces
function noSpace(x){
    return x.split(' ').join('')
}

// String repeat
function repeatStr (n, s) {
    if (n > 0)
        return s.repeat(n);
    else
        return "";
}

// Return Negative
function makeNegative(num) {
    return num > 0 ? -num : num
}

// Remove First and Last Character
const removeChar = str => str.substr(1, str.length -2);

// Opposite number
function opposite(number) {
    return -1 * number
}

// Sum of positive
function positiveSum(arr) {
    return !arr.length ? 0 : arr.reduce((result, number) => number > 0 ? result + number : result, 0);
}

// Even or Odd
function even_or_odd(number) {
    return number % 2 ? 'Odd' : 'Even'
}

// Multiply
function multiply(a, b){
    return a * b
}