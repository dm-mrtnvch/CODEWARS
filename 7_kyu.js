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