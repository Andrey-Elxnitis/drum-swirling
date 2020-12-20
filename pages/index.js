let lastRotate = 0;
const button = document.querySelector('.drum__button');
const drumCircle = document.querySelector('.drum__circle');

function randomRotate() {
    drumCircle.style.transform = 'rotate('+(lastRotate +=Math.random()*Math.PI*10)+'rad)';
    return false;
}


button.addEventListener('click', () => (randomRotate()));