let _123456 = 0
let rps = 0
input.onButtonPressed(Button.A, function () {
    music.playMelody("- - - - - - - - ", 330)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
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
    music.playMelody("- - - - - - - - ", 120)
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
    radio.sendNumber(5)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    music.playMelody("G F G F - A - - ", 330)
    music.playMelody("G F G A - F E D ", 330)
})
