let counts = [3, 9, 4, 10, 16, 1, 2, 3, 17, 10, 10, 3]

let total = 0

for (let i = 0; i < counts.length; i++) {
    total += counts[i]
}
console.log(total)

let avg = counts.map(count => {
    return total / counts.length
})
console.log(avg[1])

let odds = 0

for (let i = 0; i < counts.length; i++) {
    if (counts[i] % 2 != 0) {
        odds ++
    }
}
console.log(odds)

console.log(Math.max(...counts))
console.log(Math.min(...counts))



let animals = [`zebra`, `giraffe`, `lion`, `tiger`]

let fav = prompt(`What is your favorite animal?`)

// for (let i = 0; i < animals.length; i++) {
//     i
// }

let aniMatch = animals.filter(animal => {
    if (animal.startsWith(fav)) {
        return animal.startsWith(fav)

        // if (animal.length === 0) {
        //     console.log(`no`)
        // }
    }

    
})
console.log(aniMatch)

let fahrs = [32, 76, 89]

let cels = fahrs.map(fahr => {
    return (fahr - 32) * 5/9
})
console.log(cels)



let divFive = 0
let list = []

counts.forEach(count => {
    divFive ++
    if (count % 5 === 0) list.push(divFive)
})
console.log(list[0])


let word = `racecars`
let vowelCount = 0


// for (let i = 0; i < word.length; i++) {
//    if (word[i].startsWith ( 'a' || 'e' || 'i' || 'o' || 'u')) {
//         // vowelCount++
//         console.log(word[i])
//    }
// }
// console.log(vowelCount)

let drow = []
for (let i = word.length - 1; i >= 0; i = i - 1) {
    drow.push(word[i])
    // console.log(word[i])
}
console.log(drow)


// for (let  i = 0; i < counts.length; i++) {
//     if (word[i] === drow[i]) {
//         console.log(`woo`)
//     }
// }

if (word === drow) {
    console.log(`It's a palindrome!`)
} else {
    console.log(`Just a lame normal word.`)
}
