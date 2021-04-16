//Variáveis globais
var songIntro = document.getElementById('song1');
var songSelct = document.getElementById('songselect');
var icon = document.getElementById('icon');
var btn = document.getElementById('btn');
var init = document.getElementById('initial');
var select = document.getElementById('select');
var startSong = document.getElementById('start')
var change = document.getElementById('change')
var imagens = document.querySelectorAll('#select .img')

//adicionar som
icon.onclick = function(){
   if(songIntro.paused){
       songIntro.play();
       icon.src="./img/volume-mute-solid.svg"
   } else {
       songIntro.pause();
       icon.src = "./img/volume-up-solid.svg";
   }
}
//botão para iniciar tela de seleção e adicionar os sons
btn.onclick = function(){
    init.style.display = 'none';
    select.style.display = 'block'
    startSong.play();
    setTimeout(function(){
        songSelct.play();
    }, 300)
    if(songIntro.play){
       songIntro.pause();
    }
}
//função para (selecionar e mudar personagem)
function starts(){
    startSong.play();
} 
function changes(){
    change.play();
} 
console.log(imagens)
