window.onload = document.getElementById('quiz1').scrollIntoView({
    behavior: "smooth",
    block: "center"
})

const answers = document.querySelectorAll('table td');
let quizNumber = 1;
quiz();

function quiz(){
answers.forEach((element)=>{
    element.onclick = function(){
        if(element.classList.contains('wrong')){
            wrong(element);
        }else{
            correct(element);
        }
    }
})
}

function reset(choice, reset){
    setTimeout(()=>{
    choice.style.removeProperty('background-color')
    choice.innerText = reset;
    choice.style

    return;
}, 1000)
}

function wrong(choice){
    const resetText = choice.textContent;
    choice.style.backgroundColor = 'red';
    choice.innerText = 'Wrong!'
    
    reset(choice, resetText);
}
function correct(choice){
    choice.style.backgroundColor = 'green';
    choice.innerText = 'Correct!!!'
    setTimeout(() => {
    if(quizNumber!==9){
    
        quizNumber++;
        document.getElementById(`quiz${quizNumber}`).scrollIntoView({
            behavior:"smooth",
            block: "center"
        })
        quiz();
    }
    else{
        document.getElementById('vid-container').scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        })

        const back = document.createElement('div');

        back.innerHTML = '<i class="fa fa-arrow-left" aria-hidden="true"></i>';
        document.body.appendChild(back);

        document.querySelector('.fa.fa-arrow-left').onclick = function(){
            window.location.href = 'planets.html';
        }
    }
    }, 1000);
}

