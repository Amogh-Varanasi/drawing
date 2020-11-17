console.log(`Drawing app loaded`)

function setup () {
    // run once when page loads - initialize
    createCanvas(800, 1000)
}

function draw () {
    background (230)  // 0-255 (black-white scale) or string w/ hex code like `#c0c0c0#

    fill (`#ebfc03`)
    stroke (0)
    strokeWeight (5)
    ellipse (400, 100, 75, 75)

    fill (0)
    ellipse (390, 90, 10, 10)
    ellipse (410, 90, 10, 10)

    noFill();
    arc(400, 100, 50, 50, 0, PI);
    line (400, 137.5, 400, 250)

    line (400, 250, 350, 285)
    line (350, 285, 400, 350)

    line (400, 250, 550, 350)
    
    line (400, 200, 300, 130)
    line (300, 130, 395, 35)

    line (400, 200, 500, 130)
    line (500, 130, 405, 35)



    fill (200)
    strokeWeight (2)
    rect (5, 700, 100, 300 )
    triangle (5, 700, 105, 700, 55, 500)

    // dancing stick figure
    // godzilla attacking a city with sky scrapers
}


