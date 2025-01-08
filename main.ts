let contador = 0
basic.forever(function () {
    basic.showNumber(contador)
    contador += 1
    if (contador > 20) {
        contador = 0
    }
    basic.pause(1000)
})
