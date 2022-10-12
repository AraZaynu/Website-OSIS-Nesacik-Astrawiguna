// PlayPause Audio

var musik=new Audio ();
musik.src="../src/mars/mars-nesacik.wav";
musik.loop=true;
musik.play();
musik.volume= 0.2;

window.addEventListener('load', playpause);

function playpause () {
    var play=document.getElementById("play-pause");

    play.addEventListener('click', fplay);

    function fplay() {
        if(musik.paused) {
            musik.play();
            play.style.background="url('../src/playpause/pause-sharp.svg')";
        }else{
            musik.pause();
            play.style.background="url('../src/playpause/play-sharp.svg')"; 
        }
    }
};

// Header

// news
document.getElementById('news').addEventListener('click', function(){
    document.getElementById('pemilu').classList.toggle('hidden');
});

// navfixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const py =document.getElementById('py');
    const navfixed = header.offsetTop;  

    if (window.pageYOffset > navfixed) {
        header.classList.add('navfixed');
        py.classList.remove('lg:py-4')
    }else {
        header.classList.remove('navfixed');
        py.classList.add('lg:py-4')
    }
};


// filter item
let list = document.querySelectorAll('.list');
let item = document.querySelectorAll('.item');

for(let i =0; i<list.length; i++){
    list[i].addEventListener('click',
    function(){
        for(let j= 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let data = this.getAttribute('data-filter');

        for( let k = 0; k<item.length; k++){
            item[k].classList.add('hidden');

            if(item[k].getAttribute('data-item') == data || data == ''){
                item[k].classList.remove('hidden');
            }
        }
    })
}

// AOS
AOS.init({
    once: true,
    duration: 500,
});