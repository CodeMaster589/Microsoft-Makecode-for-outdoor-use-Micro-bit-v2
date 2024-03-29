input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 129), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(500)
    }
    basic.showArrow(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    for (let countdown_numbers = 0; countdown_numbers <= 2; countdown_numbers++) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.showNumber(3 - countdown_numbers)
    }
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
    basic.showString("GO!")
    steps = 0
    for (let index = 0; index < 100000000000000000000; index++) {
        basic.showNumber(steps)
    }
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    led.stopAnimation()
})
let steps = 0
music.setBuiltInSpeakerEnabled(true)
for (let index = 0; index < 2; index++) {
    music.play(music.stringPlayable("C D E F G A B - ", 120), music.PlaybackMode.InBackground)
    basic.showString("WELCOME")
}
