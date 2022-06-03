const openEye = document.querySelector('.open')
const closeEye = document.querySelector('.closed')

// Event listener

closeEye.addEventListener('click',() => {
    if(openEye.classList.contains('open')){
        openEye.classList.add('active');
        closeEye.classList.remove('active')
    }
})

openEye.addEventListener('click',() => {
    if(closeEye.classList.contains('closed')){
        closeEye.classList.add('active');
                openEye.classList.remove('active')

    }
})


