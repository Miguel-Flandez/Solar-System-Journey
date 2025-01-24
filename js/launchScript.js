const launch = document.getElementById('launch');
const body = document.getElementById('launch-body');
const video = document.getElementById('rocket');

window.onload = function opacity(){
    launch.classList.add('opacity');
    setTimeout(()=>{
        launch.classList.remove('opacity');
        setTimeout(()=>{
            opacity();
        },2000)
    },2000)

    setTimeout(()=>{
        video.style.display = 'flex';
    },1000)
}

window.addEventListener('click', function(){
    launch.style.display = 'none';

    setInterval(() => {
        window.location = 'html/planets.html'
    }, 3000);
})
