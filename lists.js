// lists
// index          0       1       2       3        4
let students = [`Jeff`, `Barb`, `John`, `Katy`, `Sarah`, "Bilford", "Buford", `Bomeranian`]
// length --> however many in list. If three names then 3   


// traversal, iteration
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i])
// }

// How many students have names starting with B?

// accumulation
let  numBs = 0
for (let i = 0; i < students.length; i ++) {
    if (students[i].startsWith(`B`)) {
        numBs ++
    }
}
console.log(numBs)


let nums = [1, 2, 3, 4, 5, 6, 99, 123, 122]


let total = 0
for (let i = 0; i < nums.length; i ++) {
    if (nums[i] % 2 === 0) {
        total += nums[i]
    }
}
console.log(total)


// list iterating functions

for (let i = 0; i < students.length; i++) {
    console.log(students[i])
}   // instead do:

students.forEach(student => console.log(student))

// create new version of lists

// get rid of people whose name start with B
// filtering
let noBs = students.filter(student => {
    return !student.startsWith(`B`)
})
console.log(noBs)


// modify all spots in list
// mapping


let doubled = nums.map (num => {
    return 2 * num
})

console.log(doubled)
console.log(nums)

nums.push(100)
console.log(nums)

let hundred = []

for (let i = 0; i < 100; i += 7) {
    hundred.push(i)
}
console.log(hundred)

// make a list of all number less than or equal to 100, evenly divisible by 7
let hundred7 = []
for (let i = 1; i <= 100; i +=7) {
    hundred7.push(i)
}



