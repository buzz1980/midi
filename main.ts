input.onPinPressed(TouchPin.P0, function () {
    midi.playTone(262, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P2, function () {
    midi.playTone(330, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    midi.playTone(294, music.beat(BeatFraction.Whole))
})
midi.useRawSerial()
