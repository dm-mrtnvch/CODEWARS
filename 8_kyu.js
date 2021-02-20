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

// 81. Cat years, Dog years
let humanYearsCatYearsDogYears = function(humanYears) {
    let dogYears = 0
    let catYears = 0
    if(humanYears === 1){
        dogYears = 15
        catYears = 15
    }
    if(humanYears === 2){
        dogYears = 24
        catYears = 24
    }
    if(humanYears > 2){
        dogYears = ((humanYears - 2) * 5) + 24
        catYears = ((humanYears - 2) * 4) + 24
    }
    return [humanYears, catYears, dogYears]
}

// 82. No zeros for heros
function noBoringZeros(n) {
    let str = n.toString().split('')
    for(i = str.length; i > 0; i--){
        if(n === 0){
            return 0
        }
        if(str[str.length - 1] === '0'){
            str.pop()
        } else {
            return +str.join('')
        }
    }
}

// 83. Grasshopper - Personalized Message
function greet (name, owner) {
    if (name === owner) {
        return 'Hello boss'
    }
    else
        return 'Hello guest'
}

// 84. Parse nice int from char problem
function getAge(inputString){
    return Number(inputString[0]);
}

// 85. Sort and Star
function twoSort(s) {
    return s.sort()[0].split('').join('***');
}

// 86. Simple Fun #1: Seats in Theater
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols-col+1) * (nRows - row)
}

// 87. Area or Perimeter
const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : (l + w) * 2
}

// 88. All Star Code Challenge #18
function strCount(str, letter){
    return str.split('').filter(lttr => lttr === letter).length
}

// 89. To square(root) or not to square(root)
function squareOrSquareRoot(array) {
    return array.map(num => Math.sqrt(num) == Math.sqrt(num).toFixed(0) ? Math.sqrt(num) : Math.pow(num, 2))
}

// 90. Is the string uppercase?
String.prototype.isUpperCase=function() {
    return this == this.toUpperCase()
}

// 91. Unfinished Loop - Bug Fixing #1
function createArray(number){
    let newArray = [];

    for(let counter = 1; counter <= number; counter++){
        newArray.push(counter);
    }
    return newArray;
}

// 92. Generate range of integers
function generateRange(min, max, step){
    let arr = [];
    for (let i=min; i<=max; i += step) {
        arr.push(i);
    }
    return arr;
}

// 93. Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
function replace(s){
    let str ='';
    let vowel = 'aeiouAEIOU';
    for(let i = 0; i < s.length; i++){
        if(vowel.includes(s[i])){
            str += '!';
        }else{
            str += s[i];
        }
    }
    return str;
}

// 94. Training JS #7: if..else and ternary operator
function saleHotdogs(n){
    if(n<5){
        return n*100;
    }else if(n<10){
        return n*95;
    }else{
        return n*90;
    }
}

// 95. Volume of a Cuboid
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}

// 96. Check the exam
function checkExam(array1, array2) {
    let score = 0;
    for(let i = 0; i < array1.length; i++) {
        if(array1[i] === array2[i]){
            score += 4;
        }
        else if(array2[i] === '') {
            score += 0;
        }
        else {
            score -= 1;
        }
    }
    if(score < 0) {
        score = 0;
    }
    return score;
}

// 97. My head is at the wrong end!
function fixTheMeerkat(arr) {
    return arr.reverse();
}

// 98. Keep up the hoop
function hoopCount (n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}

// 99. Filter out the geese
function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b))
};

// 100. Opposites Attract
function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 !== 0 ? true : false;
}

// 101. Get Nth Even Number
function nthEven(n){
    return n*2-2
}

// 102. Exclusive "or" (xor) Logical Operator
function xor(a, b) {
    return Boolean(a^b);
}

// 103. Thinkful - Logic Drills: Traffic light
function updateLight(current) {
    switch(current){
        case 'green': return 'yellow'
        case 'yellow': return 'red'
        case 'red': return 'green'
        default: 'ERROR!!!'
    }
}

// 104. 5 without numbers !!
function unusualFive() {
    return 'fives'.length;
}

// 105. Watermelon
function divide(weight) {
    return weight % 2 === 0 && weight > 2;
}

// 106. Squash the bugs
function findLongest(str) {

    let spl = str.split(" ");
    let longest = 0;

    for (let i = 0; i < spl.length; i++){
        if (spl[i].length > longest){
            longest = spl[i].length;
        }
    }
    return longest;
};

// 107. Quarter of the year
const quarterOf = (month) => {
    if(month<4)return 1;
    if(month<7)return 2;
    if(month<10)return 3;
    return 4;

}

// 108. Student's Final Grade
function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    else if (exam > 75 && projects >= 5) return 90;
    else if (exam > 50 && projects >= 2) return 75;
    else return 0;
}

// 109. Difference of Volumes of Cuboids
function findDifference(a, b) {
    let valueA = a.reduce((acc, num) => acc * num)
    let valueB = b.reduce((acc, num) => acc * num)
    return valueA > valueB ? valueA - valueB : valueB - valueA
}

// 110. noobCode 01: SUPERSIZE ME.... or rather, this integer!
function superSize(num){
    return Number(String(num).split('').sort((a, b) => b - a).join(''));
}

// 111. Training JS #1: create your first JS function and print "Helloworld!"
function helloWorld(){
    var str = "Hello World!";
    console.log(str);
}

// 112. Hello, Name or World!
function hello(name) {
    return name
        ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
        : 'Hello, World!';
}

// 113. Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// 114. Filling an array (part 1)
const arr = N => {
    let array = [];
    for (i = 0; i < N; i++ ) {
        array.push(i);
    }
    return array;
}

// 115. Dollars and Cents
function formatMoney(amount){
    return '$' + amount.toFixed(2);
}

// 116. Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (sonYearsOld*2));
}

// 117. Reversing Words in a String
function reverse(string){
    return string.split(' ').reverse().join(' ');
}

// 118. Is it even?
function testEven(n) {
    return n % 2 === 0;
}

// 119. Grasshopper - Terminal game combat function
function combat(health, damage) {
    return health - damage > 0 ? health - damage : 0;
}

// 120. Reversed sequence
const reverseSeq = n => {
    let arr = [];
    for (let i=n; i>0; i--) {
        arr.push(i);
    } return arr;
};

// 121. get character from ASCII Value
function getChar(c) {
    return String.fromCharCode(c)
}

// 122. Capitalization and Mutability
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// 123. Triple Trouble
function tripleTrouble(one, two, three){
    let str ='';
    for (let i=0;i<one.length;i++){
        str+= `${one[i]}${two[i]}${three[i]}`
    }
    return str;
}

// 124. Sum The Strings
function sumStr(a,b) {
    return (+a + +b).toString();
}

// 125. Powers of 2
function powersOfTwo(n){
    let arr = [1];
    while(arr.length <= n){
        arr.push(arr[arr.length-1] * 2);
    }
    return arr;
}

// 126. Grasshopper - If/else syntax debug
function checkAlive(health) {
    return health > 0;
}

// 127. Super Duper Easy
function problem(x){
    return typeof x=='number'?x*50+6:'Error'
}

// 128. Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
function remove(s,n){
    let input = s;
    while (n) {
        input = input.replace(/!/, "");
        n-=1;
    }
    return input;
}

// 129. Hex to Decimal
function hexToDec(hexString){
    return parseInt(hexString, 16);
}

// 130. Grasshopper - Check for factor
function checkForFactor (base, factor) {
    return base % factor === 0;
}

// 131. Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol){
    return Math.trunc( hol / ( normPrice * ( discount / 100)));
}

// 132. Find Multiples of a Number
function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i <= limit; i++) {
        if (i % integer === 0) {
            arr.push(i);
        }
    }
    return arr;
}

// 133. Function 3 - multiplying two numbers
function multiply( a, b ){
    return a * b;
}

// 134. Exclamation marks series #1: Remove a exclamation mark from the end of string
function remove(s){
    if(s[s.length - 1] === '!') return s.split('').slice(0, s.split('').length -1).join('')
    else return s
}

// 135. Convert to Binary
function toBinary(n){
    return parseInt(n.toString(2));
}

// 136. Bin to Decimal
function binToDec(bin){
    return parseInt(bin,2);
}

// 137. Is this my tail?
function correctTail(body, tail) {
    return body[body.length - 1] === tail;
}

// 138. Smallest unused ID
function nextId(ids){
    let i = 0;
    while(true) {
        if(!ids.includes(i)) return i;
        i++
    }
}

// 139. Grasshopper - Debug sayHello
function sayHello(name) {
    return `Hello, ${name}`
}

// 140. Surface Area and Volume of a Box
function getSize(width, height, depth){
    let surface = (width * height + width * depth + height * depth) * 2
    let volume = width * height * depth
    return [surface, volume]
}

// 141. Short Long Short
function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
}

// 142. 101 Dalmatians - squash the bugs, not the dogs!
function howManyDalmatians(number) {
    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    let respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number == 101 ?  dogs[3] : dogs[2]
    return respond
}

// 143. Training JS #2: Basic data types--Number
let v1 = 50; v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250;
function equal1(){
    let a = v1;
    let b = v1;
    return a + b;
}
function equal2(){
    let a = v4;   //set number value to a
    let b = v2;   //set number value to b
    return a - b;
}
function equal3(){
    let a = v1;   //set number value to a
    let b = v5;   //set number value to b
    return a * b;
}
function equal4(){
    let a = v4;   //set number value to a
    let b = v5;   //set number value to b
    return a / b;
}
function equal5(){
    let a = v6;   //set number value to a
    let b = v3;   //set number value to b
    return a % b;
}

// 144. How many stairs will Suzuki climb in 20 years?
function stairsIn20(s){
    let arr = [].concat(...s)
    return (arr.reduce((current, item) => current + item)) * 20
}

// 145. Is it a palindrome?
function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}

// 146. Grasshopper - Terminal game move function
function move (position, roll) {
    return position + roll * 2
}

// 147. Palindrome Strings
function isPalindrome(line) {
    return String(line) === (String(line).split('').reverse().join(''));
}

// 148. Multiple of index
function multipleOfIndex(array) {
    return array.filter((value,index) => value % index === 0);
}

// 149. Regex count lowercase letters
function lowercaseCount(str){
    return str.match(/[a-z]/g) ? str.match(/[a-z]/g).length:0;
}

// 150. Remove duplicates from list
function distinct(a) {
    let arr = [];
    for(let i = 0; i < a.length; i++){
        if (!arr.includes(a[i])) {
            arr.push(a[i]);
        }
    }
    return arr;
}

// 151. String cleaning
function stringClean(s){
    return s.replace(/[1234567890]/g,'');
}

// 152. Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages){
    return [Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)]
}

// 153. Reverse List Order
function reverseList(list) {
    return list.reverse();
}

// 154. Vowel remover
function shortcut(string){
    return string.replace(/[aeiou]/g,'')
}

// 155. Find the position!
function position(letter){
    return "Position of alphabet: " + ((letter.charCodeAt(0)-97) + 1);
}

// 156. What's the real floor?
function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

// 157. Find Nearest square number
function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)), 2);
}

// 158. Area of a Square
function squareArea(A){
    return Number(((2 * A / 3.1416)**2).toFixed(2));
}

// 159. Sum of differences in array
function sumOfDifferences(arr) {
    const sortedArray = arr.sort((a, b) => b - a)
    let total = 0
    for(let i = 1; i < sortedArray.length; i++){
        total += sortedArray[i - 1] - sortedArray[i]
    }
    return total
}

// 160. Tip Calculator
function calculateTip(amount, rating) {
    switch(rating.toLowerCase()){
        case "terrible":return 0;
        case "poor":return Math.ceil(amount * 0.05);
        case "good":return Math.ceil(amount * 0.1);
        case "great":return Math.ceil(amount * 0.15);
        case "excellent":return Math.ceil(amount * 0.2);
        default:return "Rating not recognised";
    }
}

// 161. Regular Ball Super Ball
let Ball = function(ballType = 'regular') {
    this.ballType = ballType;
};

// 162. simple calculator
function calculator(a,b,sign){
    if(typeof a === 'number'&& typeof b === 'number'){
        switch(sign){
            case '+': return a+b;
            case '-': return a-b;
            case '*': return a*b;
            case '/': return a/b;
            default: return 'unknown value'
        }
    }
    else return 'unknown value';
}

// 163. Function 2 - squaring an argument
function square(num) {
    return Math.pow(num,2);
}

// 164. Formatting decimal places #0
function twoDecimalPlaces(n) {
    return Number(n.toFixed(2));
}

// 165. Return the day
function whatday(num) {
    switch(num) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return 'Wrong, please enter a number between 1 and 7';
    }
}

// 166. The falling speed of petals
function sakuraFall(v) {
    return v < 1 ? 0 : 400 / v;
}

// 167. Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])].sort((a, b)=> a - b)
}

// 168. Lario and Muigi Pipe Problem
const pipeFix = numbers =>
    Array.from(
        {length : numbers[numbers.length - 1] - numbers[0] + 1},
        (_, i) => numbers[0] + i
    )

// 169. Training JS #5: Basic data types--Object
function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// 170. Training JS #4: Basic data types--Array
function getLength(arr){
    //return length of arr
    return arr.length;
}
function getFirst(arr){
    //return the first element of arr
    return arr[0];
}
function getLast(arr){
    //return the last element of arr
    return arr[arr.length-1];
}
function pushElement(arr){
    let el = 1;
    arr.push(el);
    return arr;
}
function popElement(arr){
    arr.pop();
    return arr;
}

// 171. Exclamation marks series #2: Remove all exclamation marks from the end of sentence
function remove(s){
    return s.replace(/!*$/g,"");
}

// 172. IXME: Replace all dots
let replaceDots = function(str) {
    return str.replace(/\./g,'-');
}

// 173. Is it a number?
function isDigit(s) {
    return s==parseFloat(s);
}

// 174. Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
function remove(s){
    return `${s.replace(/!+/g, '')}!`;
}

// 175. Multiplication table for number
function multiTable(number) {
    return [...new Array(10)].map((_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`).join('\n');
}

// 176. Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin){
        sharkSpeed /= 2;
    }
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}

// 177. Grasshopper - Basic Function Fixer
function addFive(num) {
    let total = num + 5
    return total;
}

// 178. Who is going to pay for the wall?
function whoIsPaying(name) {
    return name.length <= 2 ? [ name ] : [ name, name.slice(0, 2) ];
}

// 179. Determine offspring sex based on genes XX and XY chromosomes
function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XX' ? 'daughter' : 'son'}.`;
}

// 180. The Wide-Mouthed frog!
function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}

// 181. Enumerable Magic #3 - Does My List Include This?
function include(arr, item){
    return arr.includes(item);
}

// 182. Take the Derivative
function derive(coefficient,exponent) {
    return `${coefficient*exponent}x^${exponent-1}`
}

// 183. Grasshopper - Messi Goals
let laLigaGoals = 43
let championsLeagueGoals = 10
let copaDelReyGoals = 5
let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

function messiTotalGoals(){
    return totalGoals
}

// 184. Add Length
function addLength(str){
    return str.split(" ").map( word => `${word} ${word.length}`)
}

// 185. Enumerable Magic #25 - Take the First N Elements
function take(arr, n) {
    return arr.slice(0, n);
}

// 186. Training JS #10: loop statement --for
function pickIt(arr) {
    let odd = [], even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    return [odd, even];
}


// 187. Training JS #8: Conditional statement--switch
function howManydays(month){
    let days;
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return days = 31

        case 4:
        case 6:
        case 9:
        case 11:
            return days = 30

        case 2:
            return days = 28
    }
    return days;
}

// 188. No Loops 2 - You only need one
function check(a, x) {
    return a.includes(x);
}

// 189. Pre-FizzBuzz Workout #1
function preFizz(n) {
    return [...new Array(n)].map((_, i) => i+1)
}

// 190. Name Shuffler
function nameShuffler(str){
    return str.split(' ').reverse().join(" ");
}

// 191. String Templates - Bug Fixing #5
function buildString(...template){
    return `I like ${template.join(', ')}!`;
}

// 192. Plural
function plural(n) {
    return (n !== 1);
}

// 193. Drink about
function peopleWithAgeDrink(old){
    if(old < 14){
        return "drink toddy";
    }
    if(old < 18){
        return "drink coke";
    }
    if(old < 21){
        return "drink beer";
    }
    if(old >= 21){
        return "drink whisky";
    }
}

// 194. Man in the west
function checkTheBucket(bucket){
    return bucket.includes('gold');
}

// 195. repeatIt
let repeatIt = function(str, n) {
    return typeof(str) === "string" ? str.repeat(n) : "Not a string";
}

// 196. Find out whether the shape is a cube
var cubeChecker = function(volume, side){
    if (volume < 1 || side < 1) {
        return false;
    }
    if (side ** 3 === volume) {
        return true;
    }
    return false;
}

// 197. Grasshopper - Array Mean
let findAverage = function (nums) {
    return nums.reduce((acc, el) => acc + el, 0) / nums.length
}


// 198. What is between?
function between(a, b) {
    let arr =[];
    while(a <= b){
        arr.push(a);
        a += 1;
    }
    return arr;
}

// 199. Printing Array elements with Comma delimiters
function printArray(array){
    return array.toString();
}

// 200. Welcome to the City
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}


// 201. Parse float
function parseF(s) {
    return isNaN(Number.parseFloat(s)) ? null : Number.parseFloat(s);
}

// 202. Remove First and Last Character Part Two
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
}

// 203. Evil or Odious
function evil(n) {
    return n.toString(2).match(/1/g).length % 2 ? 'It\'s Odious!' : 'It\'s Evil!';
}

// 204. How old will I be in 2099?
function  calculateAge(yearOfBirth, currentYear) {
    if(currentYear > yearOfBirth){
        return `You are ${currentYear - yearOfBirth} ${currentYear - yearOfBirth <= 1 ? 'year' : 'years'} old.`;
    }
    if(currentYear < yearOfBirth){
        return `You will be born in ${yearOfBirth - currentYear} ${yearOfBirth - currentYear > 1 ? 'years' : 'year'}.`
    }
    if(currentYear === yearOfBirth){
        return 'You were born this very year!'
    }
}


// 205. Get number from string
function getNumberFromString(s) {
    return Number(s.split('').filter(el => parseInt(el) == el).join(''))
}


// 206. A Strange Trip to the Market
function isLockNessMonster(s) {
    return s.includes('treefiddy') || s.includes('tree fiddy') || s.includes(3.50)
}

// 207. Grasshopper - Function syntax debugging
function main(verb, noun){
    return (verb + noun).toString()
}

// 208. For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
let quote = function(fighter) {
    switch(fighter.toLowerCase()) {
        case 'conor mcgregor': return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
        case 'george saint pierre': return "I am not impressed by your performance.";
        default : 'Who are you?'
    }
};

// 209. They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?
function isOpposite(s1,s2){
    let str = ''
    if(s1.length !== s2.length || s1.length === 0 || s2.length === 0){
        return false
    }
    for(i = 0; i < s1.length; i++){
        s1[i] === s1[i].toLowerCase() ? str += s1[i].toUpperCase() : str += s1[i].toLowerCase()
    }
    return str === s2
}

// 210. How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0;
}

// 211. Find the Slope
function slope([x1, y1, x2, y2]) {
    const result = (y2 - y1) / (x2 - x1)
    return isFinite(result) ? `${result}` : 'undefined'
}

// 212. Is your period late?
function periodIsLate(last, today, cycleLength) {
    return Math.floor(today.getTime() - last.getTime()) / 86400000 > cycleLength;
}

// 213. validate code with simple regex
function validateCode (code) {
    return /^[1-3]/g.test(code);
}

// 214. Number toString
let number = 123;
let a = number.toString();

// 215. Find the Integral
function integrate(coefficient, exponent) {
    return `${coefficient/(exponent+1)}x^${exponent+1}`
}

// 216. Training JS #3: Basic data types--String
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
    //select some variable to combine "Dad"
    return `${d1}${a2}${d2}`;
}
function Bee(){
    //select some variable to combine "Bee"
    return `${b1}${e2}${e2}`;
}
function banana(){
    //select some variable to combine "banana"
    return `${b2}${a2}${n2}${a2}${n2}${a2}`;
}

//answer some questions if you finished works above
function answer1(){
    //the answer should be "yes" or "no"
    return "no";
}
function answer2(){
    //the answer should be "yes" or "no"
    return "no";
}
function answer3(){
    //the answer should be "yes" or "no"
    return "yes";
}

// 217. Price of Mangoes
function mango(quantity, price){
    return (quantity - Math.floor(quantity/3))*price;
}

// 218. Sum of Multiples
function sumMul (n, m) {
    if (n >= m) return 'INVALID';
    let total = 0;
    for (let i = n; i < m ; i += n) {
        total += i;
    }
    return total;
}

// 219. Remove the time
function shortenToDate(longDate) {
    return longDate.split(",")[0];
}

// 220. Draw stairs
function drawStairs(n) {
    return [...Array(n)].map((_, i) => ' '.repeat(i) + 'I').join('\n');
}

// 221. Object Oriented Piracy
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;

    this.isWorthIt = function(){
        return 20 < this.draft - this.crew * 1.5;
    }
}


// 222. Training JS #18: Methods of String object--concat() split() and its good friend join()
function splitAndMerge(string, separator) {
    return string.split(' ').map(word => word.split('').join(separator)).join(' ')
}

// 223. Heads and Legs
const isPositive = animal => animal >= 0 && Number.isInteger(animal)

function animals(heads, legs){
    let cows = legs / 2 - heads
    let chickens = heads - cows

    return isPositive(chickens) && isPositive(cows)
        ? [chickens, cows]
        : 'No solutions'
}

// 224. Pillars
function pillars(num_pill, dist, width) {
    return (num_pill >= 2 ? ((num_pill-1)*dist*100) +((num_pill-2)*width) : 0);
}

// 225. Pirates!! Are the Cannons ready!??
const cannonsReady = (gunners) => {
    return Object.values(gunners).includes('nay')?'Shiver me timbers!':'Fire!';
}

// 226. Character Frequency
function charFreq(message) {
    return message.split('').reduce((frequence, character) => {
        frequence[character] = frequence[character] ? frequence[character] + 1 : 1
        return frequence
    }, {})
}

// 227. Define a card suit
function defineSuit(card) {
    if (card.includes("♣")) return "clubs";
    if (card.includes("♠")) return "spades";
    if (card.includes("♦")) return "diamonds";
    if (card.includes("♥")) return "hearts";
}

// 228. Calculate Price Excluding VAT
function excludingVatPrice(price){
    return price === null ? -1 : Number((price / 1.15).toFixed(2));
}

// 229. Power
function numberToPower(number, power){
    let pow = 1;
    for(let i =0;i<power;i++){
        pow*=number;}
    return pow;
}

// 230. Compare within margin
function closeCompare(a, b, margin){
    return  (Math.abs(a-b) <= margin) ? 0 : Math.sign(a-b);
}

// 231. Grader
function grader(score) {
    if(score > 1 || score < 0.6) return 'F';
    if(score >= 0.9) return 'A';
    if(score >= 0.8) return 'B';
    if(score >= 0.7) return 'C';
    if(score >= 0.6) return 'D';
}

// 232. Contamination #1 -String-
function contamination(text, char){
    return char.repeat(text.length)
}

// 233. Fuel Calculator
function fuelPrice(litres, pricePerLitre) {
    let discount = 0
    if (litres >= 2) discount = 0.5
    if (litres >= 4) discount = 0.1
    if (litres >= 6) discount = 0.15
    if (litres >= 8) discount = 0.2
    if (litres >= 10) discount = 0.25
    const totalPrice = litres * pricePerLitre - litres * discount
    return Number(totalPrice.toFixed(2))
}

// 234. Simple Fun #261: Whose Move
function whoseMove(lastPlayer, win) {
    return win?lastPlayer:lastPlayer==='black'?'white':'black';
}

// 235. Leonardo Dicaprio and Oscars
function leo(oscar){
    if (oscar === 88) {
        return "Leo finally won the oscar! Leo is happy";
    }
    if (oscar === 86) {
        return "Not even for Wolf of wallstreet?!";
    }
    if ((oscar < 88) && (oscar !== 86)) {
        return "When will you give Leo an Oscar?";
    }
    if (oscar > 88) {
        return "Leo got one already!";
    }
}

// 236. Geometry Basics: Distance between points in 2D
function distanceBetweenPoints({ x: x1, y: y1 }, { x: x2, y: y2 }) {
    return  Math.hypot(x1 - x2, y1 - y2)
}

// 237. 8kyu interpreters: HQ9+
function HQ9(code) {
    switch(code){
        case 'H': return 'Hello World!'
        case 'Q': return code
        case '9': return '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
        case 'X': return undefined
    }
}

// 238. Multiply the number
function multiply(number){
    let num = number.toString().length
    return number > 0 ? number * Math.pow(5, num) : number * Math.pow(5, num-1);
}

// 239. ES6 string addition
function joinStrings(string1, string2){
    return `${string1.toString()} ${string2.toString()}`;
}

// 240. Fix your code before the garden dies!
function rainAmount(mm){"You need to give your plant 1mm of water"
    return mm >= 40 ? "Your plant has had more than enough water for today!" : `You need to give your plant ${40 - mm}mm of water`
}

// 241. Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
function howManySmaller(arr,n){
    return arr.filter(num=>num.toFixed(2)<n).length;
}

// 242. Find the Remainder
function remainder(a, b){
    return (a > b) ? a % b : b % a;
}

// 243. Type of sum
function typeOfSum(a, b) {
    return typeof(a + b);
}

// 244. Age Range Compatibility Equation
function datingRange(age){
    return age <= 14 ? `${Math.floor(age - 0.1 * age)}-${Math.floor(age + 0.1 * age)}` : `${Math.floor(age / 2 + 7)}-${(age - 7) * 2}`
}

// 245. Count the number of cubes with paint on
var countSquares = function(cuts){
    return  cuts ? 6*cuts**2 + 2 : 1
}

// 246. BASIC: Making Six Toast.
function sixToast(num) {
    return Math.abs(num-6)
}

// 247. easy logs
function logs(x , a, b){
    return (Math.log(a*b) / Math.log(x));
}

// 248. Training JS #16: Methods of String object--slice(), substring() and substr()
function cutIt(arr){
    const minLength = Math.min(...arr.map(str => str.length));
    return arr.map(str => str.slice(0, minLength));
}

// 249. Chuck Norris VII - True or False? (Beginner)
function ifChuckSaysSo(){
    return !true;
}

// 250. USD => CNY
function usdcny(usd) {
    return `${Number(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

// 251. Switch/Case - Bug Fixing #6
function evalObject(value){
    switch(value.operation){
        case'+': return value.a + value.b;
        case'-': return value.a - value.b;
        case'/': return value.a / value.b;
        case'*': return value.a * value.b;
        case'%': return value.a % value.b;
        case'^': return Math.pow(value.a, value.b);
    }
}

// 252. Grasshopper - Combine strings
function combineNames(name, lastName) {
    return `${name} ${lastName}`
}

// 253. Do you speak "English"?
function spEng(sentence){
    return sentence.toLowerCase().includes("english");
}

// 254. Incorrect division method
const solve = (x, y) => {
    return x / y
}

// 255. Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj){
    //coding here
    const arr = []
    for (const key in obj){
        if (obj.hasOwnProperty(key)) {
            if (key.length === 5) arr.push(key)
            if (obj[key].length === 5) arr.push (obj[key])
        }
    }
    return arr
}

// 256. Simple Fun #352: Reagent Formula
function isValid(formula){
    const ruleOne = !(formula.includes(1) && formula.includes(2))
    const ruleTwo = !(formula.includes(3) && formula.includes(4))
    const ruleThree= formula.includes(5) === formula.includes(6)
    const ruleFour = formula.includes(7) || formula.includes(8)

    return ruleOne && ruleTwo && ruleThree && ruleFour
}

// 257. Be Concise I - The Ternary Operator
function describeAge(a) {
    return `You're a(n) ${a<13?'kid':a<18?'teenager':a<65?'adult':'elderly'}`;
}

// 258. Classy Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get info() {
        return `${this.name}s age is ${this.age}`;
    }
}

// 259. Simple Comparison?
function add(a, b){
    return a == b
}

// 260. Freudian translator
function toFreud(string) {
    return string ? string.split(' ').map(_ => 'sex').join(' ') : '';
}

// 261. Name on billboard
function billboard(name, price = 30){
    return name.split('').reduce(total => total + price, 0);
}

// 262. How much water do I need?
function howMuchWater(water, load, clothes){
    return clothes > 2 * load ? 'Too much clothes' : clothes < load ? 'Not enough clothes' : Number((water * 1.1 ** (clothes - load)).toFixed(2))
}

// 263. Improving Math.round(x)
Math.roundTo = function (number, precision) {
    return Number(number.toFixed(precision));
}

// 264. Enumerable Magic #1 - True for All?
function all( arr, fun ){
    return arr.filter(i => fun(i)).length === arr.length
}

// 265. Geometry Basics: Circle Circumference in 2D
function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
}

// 266. Coding 3min : Jumping Dutch act
function sc(floor) {
    if(floor <= 1) return '';
    if(floor <= 6) return `${'Aa~ '.repeat(floor - 1)}Pa! Aa!`;
    if(floor > 6) return `${'Aa~ '.repeat(floor - 1)}Pa!`;
}

// 267. Training JS #32: methods of Math---round() ceil() and floor()
function roundIt(n){
    const splitedString = String(n).split('.')
    if(splitedString[0].length > splitedString[1].length) return Math.floor(n)
    if(splitedString[0].length < splitedString[1].length) return Math.ceil(n)
    if(splitedString[0].length === splitedString[1].length) return Math.round(n)
}

// 268. UEFA EURO 2016
function uefaEuro2016(teams, scores){
    return (scores[0] !== scores[1]) ? `At match ${teams[0]} - ${teams[1]}, ${(scores[0]>scores[1]) ? teams[0]:teams[1]} won!`: `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
}

// 269. Basic Training: Add item to an Array
websites.push('codewars')

// 270. For Twins: 2. Math operations
function iceBrickVolume(radius, bottleLength, rimLength) {
    return ((bottleLength-rimLength)*(radius*2)*radius);
}

// 271. Shifty Closures
let name;

let greet_abe = function() {
    name = 'Abe';
    return "Hello, " + name + '!';
};

let greet_ben = function() {
    name = 'Ben';
    return "Hello, " + name + '!';
};

// 272. Circular Objects #1 - Running around in circles
const circular = {
    value: "Hello World"
};
circular.self = circular;

// 273. Learning TypeScript. Basic Types. Type Assertions
export class SuccessServerResult {
    constructor (public httpCode: number, public resultObject:Object) {}
}

export class ErrorServerResult {
    constructor (public httpCode: number, public message:string) {}
}

export function getResult(result: SuccessServerResult | ErrorServerResult) {
    if (result.httpCode === 200) {
        return (result as SuccessServerResult).resultObject;
    } else {
        return (result as ErrorServerResult).message;
    }
}

// 274. noobCode 02: TRICKY QUESTIONS ( primitives and operator precedence)
function greaterThanLessThan (a,b,c) {
    return a<b<c
}

// 275. Lexical this
let Person = function() {
    let person = {
        _name: "Leroy",
        _friends: [],
        fillFriends(f) {
            this._friends.push(...f)
        }
    }
    return person
}

// 276. Semi-Optional
function wrap(value) {
    return {value};
}

// 277. Hello Happy Codevarrior!
class Warrior {
    constructor(newName) {
        this.Name = newName
    }
    name(newName) {
        if (newName) {
            this.Name = newName
        }
        return this.Name
    }
}

Warrior.prototype.toString = function() {
    return `Hi! my name's ${this.Name}`
}

// 278. Learning TypeScript. Basic Types
export enum Color {Red = 1, Green = 2, Blue = 4}
export const var1Boolean: boolean = true;
export const var2Decimal: number = 13;
export const var3Hex : number = 0xf00d;
export const var4Binary : number = 0b111111;
export const var5Octal : number = 0o744;
export const var6String : string = 'Hello, world!';
export const var7Array : any[] = [1, 'test', {a: 3}, 4, 5];
export const var8NumericArray : number[] = [1, 2, 3, 4, 5];
export const var9Tuple  : [string,number] = ['key', 12345];
export const var10Enum   : Color = Color.Blue;
export const var11ArrayOfAny   : Array<any> = [1, 'test', {a: 3}, 4, 5];
export const var12VoidFunction =(): void =>{}
export const var13Null   : null = null;
export const var14Undefined   : undefined = undefined;
export const var15NeverFunction =():never=>{throw new Error('')};

// 279. Max Headroom and JavaScript style
function getMax1() {
    let max = {
        name: 'Max Headroom',
    }
    return max;
}

function getMax2() {
    return {
        name: 'Max Headroom',
    }
}

// 280. Return to Sanity
function mystery() {
    let results = {sanity: 'Hello'};
    return results;
}