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