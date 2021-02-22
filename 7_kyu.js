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