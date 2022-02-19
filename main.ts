let reading = 0
let number = 0
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    number = Math.idiv(reading, 50)
    basic.showNumber(number)
    if (number > 5) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
