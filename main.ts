input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    for (let index = 0; index < 50; index++) {
        led.plot(randint(0, 4), randint(0, 4))
        basic.pause(100)
    }
    for (let index = 0; index < 50; index++) {
        led.unplot(randint(0, 4), randint(0, 4))
        basic.pause(100)
    }
})
