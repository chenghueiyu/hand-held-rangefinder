TM1650.on()
basic.forever(function () {
    TM1650.showNumber(ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P0P1))
    basic.pause(500)
    TM1650.off()
})
