let arrow=document.querySelector('.fas');

setInterval(() => {
    down = document.querySelector('.fas');
    down.classList.add('downit');
},0);
setInterval(() => {
    down = document.querySelector('.fas');
    down.classList.remove('downit');
},100);
