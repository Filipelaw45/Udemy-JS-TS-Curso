function getTimeSeconds(segundos) {
    const date = new Date(segundos * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const timer = document.querySelector('.timer');
let segundos = 0;
let count;

const startCount = () => {
    count = setInterval(function(){
        segundos++
        timer.innerHTML = getTimeSeconds(segundos)
    }, 1000);
};

document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('zero')){
        clearInterval(count);
        timer.innerHTML = '00:00:00';
        segundos = 0;
        timer.classList.remove('pausado');
    }
    if(el.classList.contains('start')){
        clearInterval(count);
        startCount();
        timer.classList.remove('pausado');
    }
    if(el.classList.contains('pause')){
        clearInterval(count);
        timer.classList.add('pausado');
    }
});
