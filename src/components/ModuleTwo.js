//ints are the position on the keypad
//strings are labeles on the key pads

const stageOne = {
    1: 2,
    2: 2,
    3: 3,
    4: 4
}
const stageTwo = {
    1: "4",
    2: stageOne[2],
    3: 1,
    4: stageOne[4]
}

const stageThree = {
    1: stageTwo[2],
    2: stageOne[2], //fuck how do we track the previous label
    3: 3,
    4: "4"
}

const stageFour = {
    1: stageOne[1],
    2: 1,
    3: stageTwo[3],
    4: stageTwo[4]
}

const stageFive = {
    1: stageOne[1],
    2: 1,
    3: stageTwo[3],
    4: stageTwo[4]

}

class ARound {
    // ListNode constructor function
    constructor(stage, position, label) {
        this.stage = stage;
        this.position = position || null;
        this.label = label || null;
    }
}



process.stdout.write('Ready fo a game of Memory > ')

class moduleTwo {
    constructor() {
        this.stage = 'stageOne'
        this.passedStatus = false
        this.rounds = []
    }


}

class display {
    constructor() {
        this.displayValue = 0
        this.buttons = []

    }
}
const currentGame = new moduleTwo()

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim() // remove the newline

    if (cmd === 'q') {
        //print the drectory
        console.log(stageFour[4])
        done()


    } else {



        done('you type: ' + cmd)

    }

    // process.stdout.write('\nprompt > ')
})

const done = (output) => {
    if (!output) {
        return process.stdout.write('\nprompt > ')
    } else {
        process.stdout.write(output)
        process.stdout.write('\nprompt > ')

    }
}
