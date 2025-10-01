document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-somador').addEventListener('submit', function(evento) { 
        evento.preventDefault(); 
        let primeiroNumero = document.getElementById('primeiro-numero').value;
        primeiroNumero = Number(primeiroNumero); // Number() converte para números inteiros e decimais
        let segundoNumero = document.getElementById('segundo-numero').value;
        segundoNumero = parseInt(segundoNumero); //parseInt() converte apenas para inteiros
                                                //parseFloat() converte para números com decimais

        let resultado = primeiroNumero + segundoNumero;

        document.getElementById('resultado-valor').innerText = resultado; 
        document.querySelector('.resultado').style.display = 'block';
    })
})