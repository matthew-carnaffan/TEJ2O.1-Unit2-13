/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matthew Carnaffan
 * Created on: Apr 2026
 * This program counts down from 4
*/

// Variable creation and value assign
let myStrip: neopixel.Strip = null
myStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
let strip = 4

// Clean up
basic.showIcon(IconNames.Happy)
myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
myStrip.show()

// Timer
input.onButtonPressed(Button.A, function () {
    strip = 4

    while (strip >= 0) {

        let currentRange = myStrip.range(0, strip)
        currentRange.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showNumber(strip)
        myStrip.show()
        basic.pause(1000)
        strip = strip - 1
    }
})
