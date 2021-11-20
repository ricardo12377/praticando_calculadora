function inserir(num){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}



function clean () {
    document.getElementById('resultado').innerHTML = ''
}

function apagar() {
   var conteudo = document.getElementById('resultado').innerHTML
   document.getElementById('resultado').innerHTML = conteudo.substring(0, conteudo.length -1)
}

function fazerCalculo () {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}