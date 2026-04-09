/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matthew Carnaffan
 * Created on: Apr 2026
 * This program counts down from 4
*/

//Variable creation
let myStrip: neopixel.Strip = null
myStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
let strip: number
strip = 4
let range = myStrip.range(0, 4)

//clean up
basic.showIcon(IconNames.Happy)
myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
myStrip.show()

//timer
input.onButtonPressed(Button.A, function() {
    while (strip >= 0) {
        myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
        let range = myStrip.range(strip, -1)
        myStrip.show()
        basic.pause(1000)
        strip = strip - 1
    }
})
