const nome = "Heroi"
var xp = 0

function evoluir() {
    console.log("Evoluindo...");
    xp += 500
}

if (xp < 1000) {
    console.log("O nível atual do Heroi é Ferro.");
}

do {
    evoluir()
} while (xp < 5500)

if (xp > 5000 && xp < 7001) {
    console.log("O nível atual do Heroi é Ouro.")
}