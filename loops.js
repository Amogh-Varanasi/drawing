function setup () {
    createCanvas (800, 600)
}

let start = 20
let changw = 25
let size = 10
let repeats = 10

function draw () {
    background (100)

    fill (`hotpink`)
    noStroke ()

    


    // for loop. needs 3 parts in paranthesis: start; condition (shuold it keep going); change
    // for (let i = 100; i <= 550; i += change) {
    //     rect (i, 100, size, size)
    // }


    for (let i = start; i <= 600; i += 50) {
        circle (50, i, 20)
    }
}