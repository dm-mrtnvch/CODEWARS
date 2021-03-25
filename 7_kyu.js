// 1. Mumbling
function accum(s) {
    return s.split('').map((letter, index) => {
        const repeatingLetter = letter.repeat(index + 1)
        return (
            repeatingLetter.charAt(0).toUpperCase() +
            repeatingLetter.slice(1).toLowerCase()
        )
    })
        .join('-')
}

// 2. Highest and Lowest
function highAndLow(numbers){
    const num = numbers.split(' ').map(string => Number(string))
    return  `${Math.max(...num)} ${Math.min(...num)}`
}


// 3. Square Every Digit
function squareDigits(num){
    return Number(String(num)
        .split('')
        .map(number => number ** 2)
        .join(''))
}

// 4. Get the Middle Character
function getMiddle(s) {
    if(s.length % 2 === 0){
        return `${s.split('')[s.length / 2 - 1]}${s.split('')[s.length / 2]}`
    }
    return s.split('')[Math.floor(s.length / 2)]
}

// 5. Disemvowel Trolls
function disemvowel(str) {
    return str.replace(/[ieoau]/gi,'')
}

// 6. Descending Order
function descendingOrder(n){
    return Number(String(n)
        .split('')
        .sort((a, b) => b - a)
        .join(''))
}

// 7. You're a square!
let isSquare = function(n){
    return Number.isInteger(Math.sqrt(n))
}

// 8. Shortest Word
function findShort(s){
    return Math.min(...s.split(' ').map(w => w.length))
}

// 9. Isograms
function isIsogram(str){
    if(str.length === 0) return true

    const stringToLowerCase = str
        .split('')
        .map(letter => letter.toLowerCase())
        .join('')
    const set = new Set(stringToLowerCase)

    return set.size === str.length
}

// 10. Vowel Count
function getCount(str) {
    let vowelsCount = 0;
    let string = str.split('')

    for(let i = 0; i < str.length; i++){
        if(string[i] === 'a' ||
            string[i] === 'e' ||
            string[i] === 'i' ||
            string[i] === 'o' ||
            string[i] === 'u'
        ){vowelsCount += 1}
    }
    return vowelsCount;
}

// 11. Exes and Ohs
function XO(str) {
    return (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length
}

// 12. Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    return sortedNumbers[0] + sortedNumbers[1];
}

// 13. Two to One
function longest(s1, s2) {
    const a = s1.split('')
    const b = s2.split('')

    return [...new Set([...a, ...b])].sort().join('')
}

// 14. Sum of odd numbers
function rowSumOddNumbers(n) {
    return n ** 3
}

// 15. Regex validate PIN code
function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/g.test(pin);
}

// 16. List Filtering
function filter_list(l) {
    return l.filter((el) => typeof(el) == 'number')
}

// 17. Beginner Series #3 Sum of Numbers
function getSum( a,b ) {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

// 18. Growth of a Population
function nbYear(p0, percent, aug, p) {
    let a = 0
    for (a; p0 < p; a++) p0 = p0 * (1 + percent / 100) + aug
    return a
}

// 19. Credit Card Mask
function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, "#");
}

// 20. Complementary DNA
function DNAStrand(dna){
    const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' }

    return dna
        .split('')
        .map(string => pairs[string])
        .join('')
}

// 21. Ones and Zeros
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
};

// 22. Friend or Foe?
function friend(friends){
    return friends.filter(friend=>friend.length===4);
}

// 23. Printer Errors
function printerError(s) {
    return `${s.replace(/[a-m]/gi,'').length}/${s.length}`;
}

// 24. Categorize New Member
function openOrSenior(data){
    return data.map(member => {
        const age = member[0];
        const handicap = member[1];
        return (age >= 55 && handicap > 7) ?
            'Senior' : 'Open';
    });
}

// 25. Find the next perfect square!
const isSquare = n => Number.isInteger(Math.sqrt(n))

const findNextSquare = sq => {
    if (!isSquare(sq)) return -1

    let number = sq + 1
    while (!isSquare(number)) number++

    return number
}

// 26. Reverse words
function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// 27. Is this a triangle?
function isTriangle(a,b,c) {
    let max = Math.max(a, b, c);
    let sum = a + b + c;
    return sum - max > max;
}

// 28. Number of People in the Bus
let number = function(busStops){
    return busStops.reduce((rem, [on, off]) => rem + on - off, 0);
}

// 29. Sum of the first nth term of Series
function SeriesSum(n){
    return Array(n)
        .fill(0)
        .map((_, i) => 3 * i + 1)
        .reduce((total, next) => total + 1 / next, 0)
        .toFixed(2)
}

// 30. Odd or Even?
function oddOrEven(array) {
    return array.reduce((start, next)=> start + next, 0) % 2 === 0 ? `${'even'}` : `${'odd'}`
}

// 31. String ends with?
function solution(str, ending){
    return str.endsWith(ending);
}

// 32. Money, Money, Money
function calculateYears(principal, interest, tax, desired) {
    let year = 0
    while (principal < desired && ++year)
        principal += principal * interest - principal * interest * tax
    return year
}

// 33. Two fighters, one winner.
function declareWinner(fighter1, fighter2, firstAttacker) {
    const firstFighter = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    const secondFighter = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    return firstFighter < secondFighter ? fighter2.name : (secondFighter < firstFighter ? fighter1.name : firstAttacker)
}

// 34. Don't give me five!
function dontGiveMeFive(start, end){
    return Array
        .from(Array(end - start + 1), (_, i) => i + start)
        .filter(num => !num.toString().includes('5'))
        .length
}

// 35. Find the stray number
function stray(numbers) {
    return numbers.find(number => numbers.indexOf(number) === numbers.lastIndexOf(number));
}

// 36. The highest profit wins!
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}

// 37. Breaking chocolate problem
function breakChocolate(n,m) {
    return n && m ? n*m -1 : 0
}

// 38. Testing 1-2-3
let number = function(array){
    return array.map((char, index) => `${index + 1}: ${char}`)
}

// 39. Sum of a sequence
const sequenceSum = (begin, end, step) => {
    return begin > end ? 0 : begin + sequenceSum(begin + step, end, step)
};

// 40 Maximum Length Difference
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1

    const length1 = a1.map(string => string.length)
    const length2 = a2.map(string => string.length)

    return Math.max(
        Math.max(...length1) - Math.min(...length2),
        Math.max(...length2) - Math.min(...length1)
    )
}

// 41. Sort array by string length
function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
};

// 42. Make a function that does arithmetic!
function arithmetic(a, b, operator){
    switch(operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
    }
}

// 43. Sum of all the multiples of 3 or 5
function findSum(n) {
    let result = 0;
    for (let i = 0; i <= n; i += 1) {
        if (i % 3 ===0 || i % 5 === 0) result += i
    }
    return result
}

// 44. Count the Digit
function nbDig(n, d) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        let square =(i * i + '').split('')
        square.forEach((s) => (s == d) ? result++ : null)
    }
    return result
}

// 45. Largest 5 digit number in a series
function solution(digits){
    let result = 0;
    for (let i = 0; i < digits.length ; i++){
        let number = digits.substr(i, 5);
        if (Number(number) > result) {
            result = Number(number);
        }
    }
    return result;
}

// 46.Find the middle element
let gimme = function (inputArray) {
    return [...inputArray].indexOf(inputArray.sort((a,b)=>a-b)[1])
};

// 47. Alternate capitalization
function capitalize(s){
    return [0, 1].map(bool => [...s].map((char, i) => (i % 2 === bool ? char.toUpperCase() : char)).join(''));
};

// 48. Form The Minimum
function minValue(values){
    return +(Array.from(new Set(values)).sort((a,b) => a - b)).join('');
}

// 49. Factorial
function factorial(n){
    if (n < 0 || n > 12) throw new RangeError('Range must be between 0 and 12')
    return n>1?n*factorial(n-1):1;
}

// 50. Maximum Multiple
function maxMultiple(divisor, bound){
    return bound-bound%divisor
}

// 51. Round up to the next multiple of 5
function roundToNext5(n){
    return Math.ceil(n/5)*5;
}

// 52. Count the divisors of a number
function getDivisorsCnt(n){
    let div = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            div += 1;
        }
    }
    return div;
}

// 53. Simple Fun #176: Reverse Letter
function reverseLetter(str) {
    return str.replace(/[^a-z]/gi, '').split('').reverse().join('');
}

// 54. The Coupon Code
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

// 55. Moves in squared strings (I)
function vertMirror(strng) {
    return strng.map(s => [...s].reverse().join(''));
}
function horMirror(strng) {
    return strng.reverse()
}
function oper(fct, s) {
    return fct(s.split("\n")).join("\n");
}

// 56. Find the capitals
let capitals = function (word) {
    let numbers = word.split('')
    let array = []
    for(let i = 0; i < word.length; i++){
        if(numbers[i] === numbers[i].toUpperCase()){
            array.push(i)
        }
    }
    return array
};


// 57. Remove duplicate words
function removeDuplicateWords (s) {
    return [...new Set(s.split(' '))].join(' ');
}

//58. Anagram Detection
let isAnagram = function(test, original) {
    let check = (string) => string.toLowerCase().split('').sort().join('')
    return check(original) ===  check(test)
};

// 59. Summing a number's digits
function sumDigits(number) {
    return Math.abs(number)
        .toString()
        .split('')
        .reduce((total, number) => total + Number(number), 0)
}

// 60. Fix string case
function solve(s){
    return s.replace(/[a-z]/g,'').length>s.length / 2 ? s.toUpperCase() : s.toLowerCase()
}

// 61. Power of two
function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
}

// 62. Remove anchor from URL
function removeUrlAnchor(url){
    return url.replace(/#.*/g, '')
}

// 63. Two Oldest Ages
function twoOldestAges(ages){
    return ages.sort((a,b)=>a-b).slice(-2);
}

// 64. Palindrome chain length
let palindromeChainLength  = function(n) {
    let a = parseInt(('' + n).split('').reverse().join(''));
    if(n !== a){
        return 1 + palindromeChainLength (n + a);
    }
    return 0;
};

// 65. Most digits
function findLongest(array){
    let maxNumber = 0
    for(let i = 0; i < array.length; i++){
        if(String(array[i]).length > String(maxNumber).length){
            maxNumber = array[i]
        }
    }
    return maxNumber
}

// 66. Going to the cinema
function movie(card, ticket, perc) {
    let total = 0
    let price = 0
    let tckt = ticket
    let crd = card

    while (price <= Math.ceil(crd)) {
        crd += (tckt * perc);
        tckt *= perc;
        price += ticket;
        total += 1;
    }
    return total;
};

// 67. Flatten and sort an array
"use strict";
function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => a - b);
}

// 68. Sort Out The Men From Boys
function menFromBoys(arr){
    return [...new Set(arr.filter(v => v % 2 === 0)
        .sort((a,b)=> a - b)
        .concat(arr.filter(v => v % 2 !== 0)
            .sort((a,b)=> b -a )))]
}

// 69. Predict your age!
function predictAge(...ages){
    return Math.hypot(...ages) / 2 | 0;
}

// 70. Love vs friendship
function wordsToMarks(string){
    return [...string].reduce((total, valueOfEachLetter) => total += valueOfEachLetter.charCodeAt() - 96, 0)
}

// 71. Are the numbers in order?
function inAscOrder(arr) {
    return arr.every((_, i) => i === 0 || arr[i] > arr[i - 1]);
}

// 72. Deodorant Evaporator
function evaporator(content, evap_per_day, threshold){
    let result = 0;
    var percentage = 100;
    while (percentage > threshold) {
        percentage = percentage - percentage * (evap_per_day / 100);
        result += 1;
    }
    return result;
}

// 73. Alphabetical Addition
function addLetters(...letters) {
    return String.fromCharCode((letters.reduce((sum, letter) => sum + letter.charCodeAt() - 96, 0) % 26 || 26) + 96)
}

// 74. Sorted? yes? no? how?
function isSortedAndHow(array) {
    return array.every((a, b)=> b == 0 || array[b] >= array[b - 1]) ? 'yes, ascending' :
        array.every((a, b)=> b == 0 ||array[b] <= array[b - 1]) ? 'yes, descending' : 'no'
}

// 75. Sum of Minimums!
function sumOfMinimums(arr) {
    return arr.reduce((a, b) => a + Math.min(...b), 0);
}

// 76. Minimize Sum Of Array (Array Series #1)
function minSum(arr) {
    const sortedNumber = arr.sort((a, b) => a - b)
    let total = 0
    for(let i = 0; i < arr.length / 2; i ++) {
        total += sortedNumber[i] * sortedNumber[sortedNumber.length - 1 - i]
    }
    return total
}

// 77. Ordered Count of Characters
let orderedCount = function (text) {
    return [...new Set(text)].map(letter => [letter, text.split(letter).length - 1])
}

// 78. Speed Control
function gps(s, x) {
    if (x.length<=1){
        return 0;
    }
    let output = [];
    for (let i = 0; i<x.length-1; i++){
        output.push((x[i+1]-x[i])*3600/s);
    }
    return Math.max(...output);
}

// 79. Row Weights
function rowWeights(array) {
    return array.reduce((a, b, i) => (a[i%2] += b, a), [0, 0]);
}

// 80. Form The Largest
function maxNumber(n){
    return Number(String(n).split('').sort((a,b) => b - a).join(''))
}

// 81. All Inclusive?
function containAllRots(strng, arr) {
    for (let i = 0; i < strng.length; i++)
        if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1)
            return false;
    return true;
}

// 82. Reverse a Number
function reverseNumber(n) {
    return (n>0?1:-1)*Math.abs(n).toString().split('').reverse().join('');
}

// 83. Thinkful - String Drills: Repeater
function repeater(string, n){
    return string.repeat(n)
}

// 84. Automorphic Number (Special Numbers Series #6)
function automorphic(n){
    return (String(n) === String(Math.pow(n, 2)).slice(-String(n).length)) ? "Automorphic" : "Not!!";
}

// 85. Small enough? - Beginner
function smallEnough(a, limit){
    return a.every(num => num <= limit)
}

// 86. Fizz Buzz
function fizzbuzz(n) {
    let i = 1, arr = []
    while(i <= n) {
        let f = (i % 3 == 0)
        let b = (i % 5 == 0)
        if(f || b) {
            arr.push((f ? "Fizz" : "") + (b ? "Buzz" : ""))
        } else {
            arr.push(i)
        }
        i++
    }
    return arr
}

// 87. Sum of Odd Cubed Numbers
function cubeOdd(arr) {
    const isNumber = arr.every(el => typeof el === 'number')
    if(!isNumber) return undefined

    return arr
        .map(num => num ** 3)
        .filter(num => num % 2 !== 0)
        .reduce((sum, value) => sum + value, 0)
}

// 88. Simple remove duplicates
function solve(arr){
    return [...new Set([...arr].reverse())].reverse()
}

// 89. Sort Numbers
function solution(nums){
    return (nums||[]).sort((a, b) => a - b);
}

// 90. My Languages
function myLanguages(results) {
    return Object.keys(results).filter(i => results[i] >= 60).sort((a,b)=>results[b]-results[a])
}

// 91. Drying Potatoes
function potatoes(p0, w0, p1) {
    return Math.floor(w0 * (100 - p0) / (100 - p1))
}

// 92. Find the vowels
function vowelIndices(word){
    let arr=[]
    let splitedWords = word.split('');
    for (let i = 0; i < word.length; i++){
        if(/[aeuoiy]/gi.test(splitedWords[i])) {
            arr.push(i+1)
        }
    }
    return arr
}

// 93. Complete The Pattern #1
function pattern(n){
    let str="";
    for (let i = 1; i <= n; i++){
        for (let j=0; j < i ; j++){
            str += i;
        }
        if (i !== n)
            str += "\n";
    }
    return str;
}

// 94. Compare Strings by Sum of Chars
function compare(s1, s2) {
    if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2))
        return s1.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b) ===
            s2.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b);
    return true;
}

// 95. Number of Decimal Digits
function digits(n) {
    return String(n).length
}

// 96. Digital cypher
function encode(str,  n) {
    return Array.from(str, (c, i) => c.charCodeAt(0) - 96 + Number(String(n)[i % String(n).length]));
}

// 97. Sum of array singles
function repeats(arr){
    return  arr
        .filter((num, i, arr) =>
            arr.indexOf(num) === arr.lastIndexOf(num))
        .reduce((a, b) => a + b, 0)
}

// 98. Halving Sum
function halvingSum(n) {
    let sum = 0
    while (n>0){
        sum += n
        n = Math.floor(n/2)
    }
    return sum
}

// 99. Factorial
function factorial(n) {
    if(n < 0 || n > 12) { throw RangeError;}
    for(var temp = 1; n > 1; n--) temp *= n;
    return temp;
}

// 100. Array element parity
function solve(arr){
    return arr.filter(value => arr.indexOf(-value) === -1)[0]
};

// 101. Disarium Number (Special Numbers Series #3)
function disariumNumber(n){
    let string = String(n).split('')
    let total = []
    for(let i = 0; i < string.length; i++){
        total.push(Math.pow(string[i], i+ 1))
    }
    return total.reduce((a, b) => a + (b * 1), 0) === n ? 'Disarium !!' : 'Not !!'
}

// 102. No oddities here
function noOdds(values) {
    return values.filter(value => value % 2 === 0);
}

// 103. Functional Addition
function add(n) {
    return function(a){
        return n + a;
    }
}

// 104. Sum of Cubes
function sumCubes(n) {
    return (n * (n + 1) / 2) ** 2;
}

// 105. Currying functions: multiply all elements in an array
function multiplyAll(array){
    return function multiply_all(integer){
        return array.map(el => el * integer)
    }
}

// 106. Nth Smallest Element (Array Series #4)
function nthSmallest(arr, pos){
    return arr.sort((a,b)=>a-b)[pos-1]
}

// 107. Unique string characters
function solve(a,b){
    let firstString = a.split('').filter(v => !b.split('').includes(v)).join('')
    let secondString = b.split('').filter(v => !a.split('').includes(v)).join('')
    return firstString + secondString
}

// 108. Simple beads count
function countRedBeads(n) {
    if(n<2) return 0;
    return (n-1) * 2;
}

// 109. Return the first M multiples of N
function multiples(m, n){
    let array = []
    for (let i = 1; i <= m; i++){
        array.push(n*i)
    }
    return array
}

// 110. Longest vowel chain
function solve(s){
    return Math.max(...s.match(/[aeiou]+/g).map(x => x.length));
}

// 111. Simple Fun #152: Invite More Women?
function inviteMoreWomen(L) {
    return L.reduce((a,b)=>a+b,0)>0
}

// 112. Product Of Maximums Of Array (Array Series #2)
function maxProduct(numbers, size){
    return numbers.sort((a,b)=>a-b).slice(numbers.length-size).reduce((a,b)=>a*b,1)
}

// 113. Even numbers in an array
function evenNumbers(array, number) {
    const result = []
    array.map(eachNumber => {
        if(eachNumber % 2 === 0){
            result.push(eachNumber)
        }
    })
    return result.splice(-number)
}

// 114. Indexed capitalization
function capitalize(s,arr){
    const string = s.split('')
    arr.forEach((index) => {
        if(string[index] !== undefined){
            string[index] = string[index].toUpperCase()
        }
    })
    return string.join('')
};

// 115. Maximum Triplet Sum (Array Series #7)
function maxTriSum(numbers){
    return [...new Set(numbers)]
        .sort((a, b) => a - b)
        .slice(-3)
        .reduce((acc, el) => acc + el, 0)
}

// 116. Leap Years
function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

// 117. Difference Of Squares
function differenceOfSquares(n){
    return (n * (n * n - 1) * (3 * n + 2)) / 12;
}

// 118. Simple string characters
function solve(s){
    return [(s.match(/[A-Z]/g)||[]).length, (s.match(/[a-z]/g)||[]).length, (s.match(/\d/g)||[]).length, (s.match(/\W/g)||[]).length]
}

// 119. Bumps in the Road
function bump(x) {
    return x.split('n').length>16 ? "Car Dead" : "Woohoo!";
}

// 120. Alternate case
function alternateCase(s) {
    const isLowerCase = char => char === char.toLowerCase()
    return s
        .split('')
        .map(char => (isLowerCase(char) ? char.toUpperCase() : char.toLowerCase()))
        .join('')
}

// 121. Find all occurrences of an element in an array
const findAll = (array, n) => {
    return array.reduce((acc, number, index) => (number === n ? [...acc, index] : acc), [])
}

// 122. Divide and Conquer
function divCon(x){
    return x.reduce((s, v) => s + (v === +v ? v : -v), 0)
}

// 123. Happy Birthday, Darling!
function womensAge(n) {
    return `${n}? That's just ${20+n%2}, in base ${Math.floor(n/2)}!`
}

// 124. Count all the sheep on farm in the heights of New Zealand
function lostSheep(friday,saturday,total) {
    return total - [...friday, ...saturday].reduce((sum, sheeps) => sum + sheeps, 0)
}

// 125. List to Array
function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.next) {
        array.push(node.value);
    }
    return array;
}

// 126. Special Number (Special Numbers Series #5)
function specialNumber(n){
    return /[6-9]/.test(n)?"NOT!!":"Special!!"
}

// 127. Word values
function wordValue(a) {
    return a.map(value => value.replace(/\ /gi,'').split('').map(value => value.charCodeAt(0)-96)
        .reduce((a, b)=> a + b, 0)).map((value, i)=> value * (i + 1))
}

// 128. Simple string reversal
function solve(str){
    const arr = [...str.split(` `).join(``)];
    return str.replace(/\S/g, a => arr.pop());
}

// 129. Tidy Number (Special Numbers Series #9)
function tidyNumber(n){
    const arr=n.toString().split('')
    for (let i=0;i<arr.length-1;i++)
    {
        if (arr[i]<=arr[i+1]){continue}
        else { return false}
    }
    return true
}

// 130. Numbers in strings
function solve(s){
    return Math.max(...s.match(/\d+/g));
};

// 131. SevenAte9
function sevenAte9(str){
    return str.replace(/79(?=7)/g, '7');
}

// 132. Greatest common divisor
function mygcd(x,y){
    return y === 0 ? x : mygcd(y, x % y);
}

// 133. ToLeetSpeak
function toLeetSpeak(str) {
    let alphabet = {
        A : '@',
        B : '8',
        C : '(',
        D : 'D',
        E : '3',
        F : 'F',
        G : '6',
        H : '#',
        I : '!',
        J : 'J',
        K : 'K',
        L : '1',
        M : 'M',
        N : 'N',
        O : '0',
        P : 'P',
        Q : 'Q',
        R : 'R',
        S : '$',
        T : '7',
        U : 'U',
        V : 'V',
        W : 'W',
        X : 'X',
        Y : 'Y',
        Z : '2'
    }
    return str.replace(/[A-Z]/g, char => alphabet[char])
}

// 134. Inspiring Strings
function longestWord(stringOfWords){
    let word = stringOfWords.split(' ')
    let result = ''
    for(i = 0; i < word.length; i++){
        if(word[i].length >= result.length){
            result = word[i]
        }
    }
    return result
}

// 135. Minimum Steps (Array Series #6)
function minimumSteps(numbers, value){
    let temp = 0
    numbers = numbers.sort((a, b) => a - b)
    for(let i = 0;i < numbers.length; i++){
        temp +=numbers[i]
        if(temp >= value){
            return i
        }
    }
}

// 136. All unique
function hasUniqueChars(str){
    return new Set(str).size === str.length;
}

// 137. Simple Fun #37: House Numbers Sum
function houseNumbersSum(inputArray) {
    return inputArray.slice(0, inputArray.indexOf(0)).reduce((total, houseNumber) => total + houseNumber, 0)
}

// 138. Consecutive items
function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}

// 139. Complete The Pattern #2
function pattern(n){
    if (n < 1) return '';
    let arr = [];
    for (let i = 0; i < n; i++) {
        let str = ''
        for (let j = n; j > i; j--)
            str += j
        arr.push(str);
    }
    return arr.join('\n');
}

// 140. Help the Fruit Guy
function removeRotten(bagOfFruits){
    return bagOfFruits ? bagOfFruits.map(x => x.toLowerCase().replace(/rotten/ig, '')) : []
}

// 141. By 3, or not by 3? That is the question . . .
function divisibleByThree(str){
    return str.split('').reduce((a, b) => a - b, 0) % 3 === 0
}

// 142. Maximum Gap (Array Series #4)
function maxGap (numbers){
    let result = []
    let sortedNumbers = numbers.sort((a, b) => a - b)
    for(let i = 1; i < sortedNumbers.length; i++)
        result.push(numbers[i] - numbers[i - 1])
    return Math.max(...result)
}

// 143. How many arguments
const args_count = (...arguments) => arguments.length

// 144. Basic Math (Add or Subtract)
function calculate(str) {
    return ('' + str
            .split('plus')
            .join(' ')
            .split('minus')
            .join(' -')
            .split(' ')
            .reduce((total, number) => total + Number(number), 0)
    )
}

// 145. Consecutive Ducks
function consecutiveDucks(num) {
    return !Number.isInteger( Math.log2(num) );
}

// 146. Vampire Numbers
let vampire_test = function(a, b){
    return ('' + a + b).split('').sort().join() == ('' + (a * b)).split('').sort().join();
}

// 147. Discover The Original Price
function discoverOriginalPrice(discountedPrice, salePercentage){
    return (discountedPrice/((100-salePercentage))*100).toFixed(2)*1
}

// 148. Switcheroo
function switcheroo(x){
    return x.replace(/[ab]/g, match => match === 'a' ? 'b' : 'a')
}


// 149. GCD sum
function solve(s,g){
    return s%g ? -1 : [g, s-g]
}
