let _123456 = 0
let rps = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        music.playMelody("C5 A B G A F G E ", 330)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    rps = randint(1, 3)
    if (rps == 1) {
        basic.showString("R")
    } else if (rps == 2) {
        basic.showString("P")
    } else {
        basic.showString("S")
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        music.playMelody("G B A G C5 B A B ", 340)
        basic.showIcon(IconNames.Cow)
        basic.pause(1)
        basic.clearScreen()
        basic.pause(1)
    }
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("G F G F - A - - ", 330)
    music.playMelody("G F G A - F E D ", 330)
    _123456 = randint(1, 6)
    if (_123456 == 1) {
        basic.showString("1")
    } else if (_123456 == 2) {
        basic.showString("2")
    } else if (_123456 == 3) {
        basic.showString("3")
    } else if (_123456 == 4) {
        basic.showString("4")
    } else if (_123456 == 5) {
        basic.showString("5")
    } else {
        basic.showString("6")
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    let ymn = 0
    music.playMelody("B A G A G F A C5 ", 340)
    if (ymn == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (ymn == 2) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . . . .
            . . # . .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
})
