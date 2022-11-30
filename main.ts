input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Asleep)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Angry)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
