def on_button_pressed_a():
    for index in range(2):
        music.play(music.string_playable("G B A G C5 B A B ", 129),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_icon(IconNames.HEART)
        basic.pause(500)
        basic.show_icon(IconNames.SMALL_HEART)
        basic.pause(500)
    basic.show_arrow(input.temperature())
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global steps
    for index2 in range(3):
        music.play(music.tone_playable(262, music.beat(BeatFraction.QUARTER)),
            music.PlaybackMode.UNTIL_DONE)
        basic.show_number(3 - index2)
    music.play(music.tone_playable(392, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_string("GO!")
    steps = 0
    for index3 in range(100000000000000000000):
        basic.show_number(steps)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global steps
    steps += 1
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

steps = 0
for index4 in range(2):
    music.play(music.string_playable("C D E F G A B - ", 120),
        music.PlaybackMode.IN_BACKGROUND)
    basic.show_string("WELCOME")