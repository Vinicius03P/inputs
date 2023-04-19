function pegatexto() {
    var input = document.querySelector('#texto');
    if (input != null) {
        var texto = parseFloat(input.value);
        var ress = document.querySelector('#resultado');
        var n = parseFloat(ress.value);
        var soma = document.querySelector('#soma');
        soma.value = String(texto + n);
    }
}
