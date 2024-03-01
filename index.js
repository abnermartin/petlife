 var elementosDuvida = document.querySelectorAll('.duvida') //o "elementosDuvida" representa toda a classe "duvida" lá no HTML

 elementosDuvida.forEach (function(duvida){
    duvida.addEventListener('click' , function(){
        duvida.classList.toggle('ativa')                   //esse toggle é como se fosse um "liga e desliga"
    })
 })