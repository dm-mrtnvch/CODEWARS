// 1. Invert values
function invert(array) {
    return array.map(number => number * -1)
}

// 2. Beginner - Lost Without a Map
function maps(x){
    return x.map(number => number * 2)
}

// 3. Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
    if(input == null || input.length == 0) return []
    let positive = 0
    let negative = 0
    input.forEach(number => number > 0 ? positive++ : negative += number)
    return [positive, negative]
}

// 4. A Needle in the Haystack
function findNeedle(haystack) {
    return 'found the needle at position ' + haystack.findIndex(ndl => ndl === 'needle')
}

// 5. Abbreviate a Two Word Name
function abbrevName(name){
    return name.split(' ').map(n => n[0].toUpperCase()).join('.')
}

// 6. Convert number to reversed array of digits
function digitize(n) {
    return n.toString().split('').map(num => parseInt(num)).reverse()
}

// 7. Keep Hydrated!
function litres(time) {
    return Math.floor(time / 2)
}

// 8. Basic Mathematical Operations
function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2)
}

// 9. Century From Year
function century(year) {
    return Math.ceil(year / 100)
}

// 10. Is n divisible by x and y?
const isDivisible = (n, x, y) => n % x == 0 && n % y == 0

// 11. Square(n) Sum
function squareSum(numbers){
    return numbers.reduce((result, number) => result + (Math.pow(number, 2)), 0) // (number * number)
}

// 12. Convert a Number to a String!
function numberToString(num) {
    return `${num}`
}

// 13. Counting sheep...
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep => sheep === true).length
}

// 14. Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
    return bool ? 'Yes' : 'No'
}

// 15. Reversed Strings
function solution(str){
    return str.split('').reverse().join('')
}

// 16. Grasshopper - Summation
let summation = function (num) {
    return result = (num * (num + 1)) / 2;
}

// 17. Remove String Spaces
function noSpace(x){
    return x.split(' ').join('')
}

// 18. String repeat
function repeatStr (n, s) {
    if (n > 0)
        return s.repeat(n);
    else
        return "";
}

// 19. Return Negative
function makeNegative(num) {
    return num > 0 ? -num : num
}

// 20. Remove First and Last Character
const removeChar = str => str.substr(1, str.length -2);

// 21. Opposite number
function opposite(number) {
    return -1 * number
}

// 22. Sum of positive
function positiveSum(arr) {
    return !arr.length ? 0 : arr.reduce((result, number) => number > 0 ? result + number : result, 0);
}

// 23. Even or Odd
function even_or_odd(number) {
    return number % 2 ? 'Odd' : 'Even'
}

// 24. Multiply
function multiply(a, b){
    return a * b
}

// 25. Beginner Series #2 Clock
function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000
}

// 26. Total amount of points
function points(games) {
    let point
    let result = games.map(num => {
        if(Number(num.charAt(0)) > Number(num.charAt(2))) {
            return point = 3
        } else if(Number(num.charAt(0)) === Number(num.charAt(2))){
            return point = 1
        } else {
            return point = 0
        }
    })

    return result.reduce((x, y) => x + y)
}

// 27. Convert a String to a Number!
let stringToNumber = function(str){
    return +str;
}

// 28. Sum without highest and lowest number
function sumArray(array) {
    if(!array) {
        return 0
    }
    let sum = 0
    array.sort((a, b) => a - b).forEach((a, i) => {
        if(i !== array.length - 1 && i !== 0) {
            sum += a
        }
    })
    return sum
}

// 29. Fake Binary
function fakeBin(x){
    return x.split('').map(function(num) {
        return num < 5 ? '0' : '1'
    }).join('')
}

// 30. Function 1 - hello world
function greet() {
    let message = 'hello world!'
    return message
}

// 31. Count the Monkeys!
function monkeyCount(n) {
    let monkeys = [];
    for (let i = 1; i < n+1; i++) {
        monkeys.push(i);
    }
    return monkeys;
}

// 32. Jenny's secret message
function greet(name){
    if(name !== "Johnny") {
        return "Hello, " + name + "!";
    } else {
        return "Hello, my love!";
    }
}

// 33. Calculate average
function find_average(array) {
    let total = 0
    for(let i = 0; i < array.length; i++) {
        total += array[i]
    }
    let avarage = total / array.length
    return avarage
}

// 34. Array plus array
function arrayPlusArray(arr1, arr2) {
    return total = arr1.concat(arr2).reduce((x, y) => x + y)
}

// 35. Do I get a bonus?
function bonusTime(salary, bonus) {
    if(bonus)
        return '£' + salary*10
    else
        return '£'+salary;
}

// 36. Reversed Words
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}

// 37. Rock Paper Scissors!
const rps = (p1, p2) => {
    let rank = {
        'scissors' : 'paper',
        'paper' : 'rock',
        'rock' : 'scissors'
    }
    if(p1 == p2) return 'Draw!'
    if(rank[p1] == p2){
        return 'Player 1 won!'
    } else {
        return'Player 2 won!'
    }
}

// 38. DNA to RNA Conversion
function DNAtoRNA(dna) {
    let str = '';
    for(let i = 0; i < dna.length; i++){
        if(dna[i] == "T"){
            str += "U";
        }else{
            str += dna[i];
        }
    }
    return str;
}

// 39. How good are you really?
function betterThanAverage(classPoints, yourPoints) {
    let total = 0;
    for (let i = 0; i < classPoints.length; i++) {
        total += classPoints[i];
    }
    return total / classPoints.length < yourPoints ? true : false;
}

// 40. You only need one - Beginner
const check = (a, x) => a.includes(x);

// 41. Are You Playing Banjo?
function areYouPlayingBanjo(name) {
    if (name.toLowerCase().charAt(0) == 'r'){
        name = name + ' plays banjo';
    }else{
        name = name + ' does not play banjo';
    }
    return name;
}

// 42. Expressions Matter
function expressionMatter(a, b, c) {
    return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
}

// 43. Count by X
function countBy(x, n) {
    let z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

// 44. Beginner Series #1 School Paperwork
function paperwork(n, m) {
    if(n<0 || m<0) return 0;
    return n*m;
}

// 45. Sum Arrays
function sum (numbers) {
    let total= 0;
    for (i=0; i<numbers.length; i++) {
        total+= numbers[i];
    }
    return total;
}

// 46. Find the first non-consecutive number
function firstNonConsecutive (arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] != (arr[i] + 1)) {
            return arr[i + 1]
        }
    }
    return null
}

// 47. Find Maximum and Minimum Values of a List
let min = function(list){
    return Math.min(...list)
}
let max = function(list){
    return Math.max(...list)
}

// 48. If you can't sleep, just count sheep!!
function countSheep(num){
    let s = ''
    for(let i = 1; i <= num; i++){
        s = s + i + ' sheep...'
    }
    return s
}

// 49. Beginner - Reduce but Grow
function grow(x) {
    let total = 1;
    for (i=0; i<x.length; i++) {
        total *= x[i];
    }
    return total;
}

// 50. Is he gonna survive?
function hero(bullets, dragons){
    return dragons * 2 <= bullets
}

// 51. The Feast of Many Beasts
function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

// 52. Count Odd Numbers below n
function oddCount(n){
    return Math.floor(n/2);
}

// 53. Double Char
function doubleChar(str) {
    return str.split('').map(letter => letter + letter).join('')
}

// 54. Convert a Boolean to a String
function booleanToString(b){
    return b ? 'true' : 'false';
}

// 55. Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump/fuelLeft <= mpg) {
        return true;
    } else {
        return false;
    }
};

// 56. Sum Mixed Array
function sumMix(x){
    let total=0;
    for (i = 0; i <x.length; i++) {
        total += Number(x[i]);
    }
    return total;
}

// 57. Simple multiplication
function simpleMultiplication(number){
    if (number % 2 === 0) return number * 8;
    else return number * 9;
}

// 58. Welcome!
function greet(language) {
    let state = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    for(let key in state){
        if(key === language){
            return state[key]
        }
    }
    return state['english']
}

// 59. altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
    return this.split('').map(changeCase).join('');
}
function changeCase(char){
    if(char.toLowerCase() === char){
        return char.toUpperCase();
    }else{
        return char.toLowerCase();
    }
}

// 60. Returning Strings
function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

// 61. Find numbers which are divisible by given number
function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
}

// 62. Will there be enough space?
function enough(cap, on, wait) {
    if (cap - on<wait) {
        return wait+on-cap;
    } else  {
        return 0;
    }
}

// 63. Convert a string to an array
function stringToArray(string){
    return string.split(' ');
}

// 64. Removing Elements
function removeEveryOther(arr){
    return arr.filter((i, index) => index%2 === 0)
}

// 65. Can we divide it?
function isDivideBy(number, a, b) {
    if ((number % a === 0) && (number % b === 0))
    {
        return true
    }
    else
    {
        return false
    }
}

// 66. Sentence Smash
function smash (words) {
    "use strict";
    return words.join(' ');
}

// 67. Correct the mistakes of the character recognition software
const correct = string =>
    string
        .split('')
        .map(char => {
            if (char === '5') return 'S'
            if (char === '0') return 'O'
            if (char === '1') return 'I'
            return char
        })
        .join('')

// 68. L1: Set Alarm
function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false;
}

// 69. MakeUpperCase
function makeUpperCase(str) {return str.toUpperCase()}

// 70. Beginner Series #4 Cockroach
function cockroachSpeed(s) {
    return Math.floor(s/3.6*100);
}

// 71. I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    for (let i = 0; i <= nbPetals; i++){
        arr.push(arr[i]);
    }
    return arr[nbPetals-1];
}

// 72. Switch it Up!
function switchItUp(number){
    switch(number){
        case 0: return 'Zero'
        case 1: return 'One'
        case 2: return 'Two'
        case 3: return 'Three'
        case 4: return 'Four'
        case 5: return 'Five'
        case 6: return 'Six'
        case 7: return 'Seven'
        case 8: return 'Eight'
        case 9: return 'Nine'
        default: alert('type number from 0 till 9')
    }
}

// 73. Stringy Strings
function stringy(size) {
    let str = ''
    for (let i = 1; i < size+1; i++){
        if (i % 2 === 0){
            str +='0'
        } else {
            str += '1'
        }
    }
    return str
}

// 74. Third Angle of a Triangle
function otherAngle(a, b) {
    return thirdAngle = 180 - (a + b);
}

// 75. N-th Power
function index(array, n){
    if(array.length <= n) {
        return -1;
    }
    return Math.pow(array[n],n);
}

// 76. You Can't Code Under Pressure #1
function doubleInteger(i) {
    return i * 2;
}

// 77. Remove exclamation marks
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}

// 78. Grasshopper - Grade book
function getGrade (s1, s2, s3) {
    let scores = (s1 + s2 + s3) / 3
    if(scores >= 90) return 'A'
    if(scores >= 80) return 'B'
    if(scores >= 70) return 'C'
    if(scores >= 60) return 'D'
    if(scores < 60) return 'F'
}

// 79. Get Planet Name By ID
function getPlanetName(id){
    switch(id){
        case 1:
            return 'Mercury'
        case 2:
            return 'Venus'
        case 3:
            return 'Earth'
        case 4:
            return 'Mars'
        case 5:
            return 'Jupiter'
        case 6:
            return 'Saturn'
        case 7:
            return 'Uranus'
        case 8:
            return 'Neptune'
    }
}

// 80. Transportation on vacation
function rentalCarCost(d) {
    let rentCostPerDay = 40
    if(d >= 7) return rentCostPerDay * d - 50
    if(d < 7 && d >=3) return rentCostPerDay * d - 20
    if(d < 3) return rentCostPerDay * d
}