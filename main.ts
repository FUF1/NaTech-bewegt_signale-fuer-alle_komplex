// Dieser Teil wird nur dann aktiv, wenn du den Knopf A auf dem Calliope drückst.
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0x00ff00)
    music.playMelody("C - C - C - C - ", 80)
    // Hier wartet der Calliope 5 Sekunden (= 5000 Millisekunden) bevor er das Licht wieder auf Rot stellt.
    basic.pause(5000)
    basic.setLedColor(0xff0000)
})
// Dieser Teil macht, dass wenn der Calliope eingesteckt wird, das Lichtsignal bereits auf Rot steht.
basic.setLedColor(0xff0000)
// Bei diesem Programm brauchen wir diesen Teil ausnahmsweise nicht.
basic.forever(function () {
	
})
