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