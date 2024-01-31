// Dieser Teil wird nur dann aktiv, wenn du den Knopf A auf dem Calliope drückst.
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    // Warte nach dem Drücken zwischen 0 und 3 Sekunden mit Grün, da vielleicht noch Autos vorbei fahren. In echt würde mit Sensoren geschaut, ob Autos fahren.
    basic.pause(randint(0, 3000))
    // Welche Farbe ist das wohl? Hinweis: Du kannst Werte von 0-255 in die Felder eintragen. Was passiert wann?
    basic.setLedColor(basic.rgb(0, 255, 0))
    // Der Vibrationsmotor wird aktiviert.
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showIcon(IconNames.ArrowNorth)
    // Die Töne werden 2 Mal abgespielt, damit alle genügend Zeit haben, um die Strasse zu überqueren bevor es wieder rot wird. Hinweis: Während die Melodie spielt kann nichts anderes geändert werden.
    for (let index = 0; index < 2; index++) {
        music.playMelody("E - E - E - E - ", 120)
    }
    basic.setLedColor(basic.rgb(255, 0, 0))
    // Der Vibrationsmotor wird deaktiviert.
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showIcon(IconNames.No)
})
// BEACHTE DIE KLEINEN KOMMENTARSYMBOLE FÜR ERKLÄRUNGEN.
// Dieser Teil macht, dass wenn der Calliope eingesteckt wird, das Lichtsignal bereits auf Rot steht.
// Unten siehst du Beispiele, wie man Farben auch noch beschreiben kann ("Rot: 0, Grün: 255, Blau: 0"). Erforsche das ein bisschen. Findest du Regeln dazu?
basic.setLedColor(0xff0000)
// Hier wird sichergestellt, dass am Anfang der Vibrationsmotor nicht läuft.
pins.digitalWritePin(DigitalPin.P0, 0)
// Dieser Teil macht, dass immer wenn der Calliope Strom hat alle 5 Sekunden (=5000 Millisekunden) ein kurzer Ton ausgesendet wird. Warum wohl?
basic.forever(function () {
    music.playTone(131, music.beat(BeatFraction.Quarter))
    basic.pause(5000)
})
