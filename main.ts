input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
    basic.showString("A")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("D")
    basic.showString("D")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("G")
    basic.showString("G")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("R")
    basic.showString("R")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("S")
    basic.showString("S")
})
radio.setGroup(1)
basic.showIcon(IconNames.Pitchfork)
basic.forever(function () {
	
})
