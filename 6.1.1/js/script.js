const musicbtn = document.getElementById('music-btn');
const music = document.getElementById('bg-music');
const musicicon = document.getElementById('music-icon');

let Playing = true;

function musicPlay(){
    if (Playing){
        music.pause();
        musicicon.src = "img/music-off.png";
    }
    else {
        music.play();
        musicicon.src = "img/music-on.svg";
    }
    Playing = !Playing
};
function changebg(imgPath){
    document.body.style.backgroundImage = "url('" + imgPath + "')";
};