document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function (evento){
        evento.preventDefault();
        
        let numMaximo = document.getElementById('numero-maximo').value;
        numMaximo = parseInt(numMaximo);

        let numeroAleatorio = Math.random() * numMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})