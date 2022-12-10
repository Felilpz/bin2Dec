let pegarBinario = window.document.getElementById('bin2dec')
let pegarDecimal = window.document.getElementById("dec2bin")

function paraDecimal(binario) {
    let decimal = 0;
    let i = 0;
    let restante
    
    while(binario != 0) {
        restante = binario % 10
        binario = Number.parseInt(binario / 10)
        
    }
}