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

// 164. Vowel remover
function shortcut(string){
    return string.replace(/[aeiou]/g,'')
}

// 165. Find the position!
function position(letter){
    return "Position of alphabet: " + ((letter.charCodeAt(0)-97) + 1);
}

// 166. What's the real floor?
function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

// 167. Find Nearest square number
function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)), 2);
}

// 168. Area of a Square
function squareArea(A){
    return Number(((2 * A / 3.1416)**2).toFixed(2));
}

// 169. Sum of differences in array
function sumOfDifferences(arr) {
    const sortedArray = arr.sort((a, b) => b - a)
    let total = 0
    for(let i = 1; i < sortedArray.length; i++){
        total += sortedArray[i - 1] - sortedArray[i]
    }
    return total
}

// 170. Tip Calculator
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