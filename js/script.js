// Binario para decimal
let saida = document.getElementById('pegarAqui')

function paraDecimal() {
    let binario = document.getElementById('bin2dec').value

    let decimal = parseInt(binario, 2)

    saida.innerHTML = `<p class="res">${decimal}</p>`
}


// Decimal para binario
let saida2 = document.getElementById('pegarAqui2')

function paraBinario() {
    let decimal = Number(window.document.getElementById('dec2bin').value)

    let binario = decimal.toString(2)

    saida2.innerHTML = `<p class="res">${binario}</p>`
}