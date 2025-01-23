

const bHole = document.getElementById('blackHole');
const sun = document.getElementById('sun');
const mWay = document.getElementById('milky-way');
const galaxies = document.getElementById('galaxies');
const universe = document.getElementById('universe');

const allPlanets = document.querySelectorAll('img')
const allBody = document.querySelectorAll('body *');
const html = document.documentElement;
const body = document.getElementById('space-body')

bHole.addEventListener('click',function(){
    html.classList.add('ftb');
    allBody.forEach(element=>{
        element.classList.add('remove-everything')
    })
    youDied();
})

sun.addEventListener('click',function(){
    html.classList.add('burn')
    setTimeout(()=>{
        html.classList.remove('burn');

    },10000)
    youDied();

})

mWay.addEventListener('click', function(){
    body.classList.add('zoom-out');
    html.classList.add('ftb2')

    setTimeout(() => {
        document.querySelectorAll('body *').forEach(element=>{
            if(element.id!=='galaxies'&&!galaxies.contains(element))
            element.classList.add('hidden');
        })

        galaxies.style.display = 'flex';
        galaxies.classList.add('zoom-in');
    
    }, 1900);

})


function youDied(){
    setTimeout(() => {
        body.style.backgroundImage = 'none';
        body.style.backgroundColor = 'black';
        body.innerHTML = `<div id="vid-container">
        <iframe src="https://www.youtube.com/embed/-ZGlaAxB7nI?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0" frameborder="0" id="you-died"></iframe>
    </div>`
    setTimeout(()=>{
        document.getElementById('you-died').style.display = 'flex';
    },1500)
    setTimeout(() => {
        body.innerHTML = '';

        if(html.classList.contains('ftb')){
            
        body.innerHTML = `<div id="vid-container">
        <iframe src="https://www.youtube.com/embed/kOEDG3j1bjs" allowfullscreen frameborder="0" id="video"></iframe>
    </div>
    <i class="fa fa-arrow-left" aria-hidden="true"></i>
    <script src="../js/planets.js"></script>`

    back();
    }else{
        body.innerHTML = `<div id="vid-container">
        <iframe src="https://www.youtube.com/embed/2HoTK_Gqi2Q" allowfullscreen frameborder="0" id="video"></iframe>
    </div>
    <i class="fa fa-arrow-left" aria-hidden="true"></i>
    <script src="../js/planets.js"></script>`

    back();

    }
    }, 10000);
    }, 10000);
}


const mercury = document.getElementById('mercury');
const venus = document.getElementById('venus');
const earth = document.getElementById('earth');
const mars = document.getElementById('mars');
const jupiter = document.getElementById('jupiter');
const saturn = document.getElementById('saturn');
const uranus = document.getElementById('uranus');
const neptune = document.getElementById('neptune');
const moon = document.getElementById('moon');

mercury.onclick = function() {
    window.location.href = 'mercury.html';
};

venus.onclick = function() {
    window.location.href = 'venus.html';
};

earth.onclick = function() {
    window.location.href = 'earth.html';
};

mars.onclick = function() {
    window.location.href = 'mars.html';
};

jupiter.onclick = function() {
    window.location.href = 'jupiter.html';
};

saturn.onclick = function() {
    window.location.href = 'saturn.html';
};

uranus.onclick = function() {
    window.location.href = 'uranus.html';
};

neptune.onclick = function() {
    window.location.href = 'neptune.html';
};

moon.onclick = function(){
    window.location.href = 'moon.html';
}

function back(){
    document.querySelector('.fa.fa-arrow-left').onclick = function(){
        window.location.href = 'planets.html'
    }
}

const seeMore = document.querySelector('.fa.fa-refresh');
const header1 = document.getElementById('planets')
const header2 = document.getElementById('space-misc');
header1.style.display='flex';

seeMore.onclick = function(){
    if(header1.style.display==='flex'){
        header1.style.opacity = 0;
        setTimeout(() => {
            header1.style.display = 'none';
            header2.style.display = 'flex'; 
            setTimeout(() => {
                header2.style.opacity = 1;
            }, 50);
            
        }, 1000);
    }else{
        header2.style.opacity = 0;
        setTimeout(() => {
            header2.style.display = 'none';
            header1.style.display = 'flex';
            setTimeout(() => {
                header1.style.opacity = 1;
            }, 50);
            
        }, 1000);
    }
}