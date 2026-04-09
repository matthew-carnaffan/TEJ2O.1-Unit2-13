/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matthew Carnaffan
 * Created on: Apr 2026
 * This program counts down from 4
*/

// Variable creation
let myStrip: neopixel.Strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
let stripCount = 4 // This tracks how many LEDs should be ON

// Clean up
basic.showIcon(IconNames.Happy)
myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
myStrip.show()

//Input for timer
input.onButtonPressed(Button.A, function () {
    stripCount = 4 

    while (stripCount >= 0) {
        //clear neopixels
        myStrip.clear() 
        
        //timer
        let currentRange = myStrip.range(0, stripCount)
        currentRange.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showNumber(stripCount)
        myStrip.show()
        basic.pause(1000)
        stripCount = stripCount - 1 
    }

    //Beep and return to icon
    music.ringTone(Note.GSharp)
    basic.showIcon(IconNames.Happy)
    music.stopAllSounds()
})
