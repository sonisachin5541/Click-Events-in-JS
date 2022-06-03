const handMouth = document.querySelector('.mouth')
const handEar = document.querySelector('.ear')
const handEye = document.querySelector('.eye')


// Event listeners

handMouth.addEventListener('click',() => {
    if(handEar.classList.contains('ear')){
        handEar.classList.add('active');
        handMouth.classList.remove('active')
    }
})

handEar.addEventListener('click',() => {
    if(handEye.classList.contains('eye')){
        handEye.classList.add('active');
        handEar.classList.remove('active')
    }
})

handEye.addEventListener('click',() => {
    if(handMouth.classList.contains('mouth')){
        handMouth.classList.add('active');
        handEye.classList.remove('active')
    }
})