const wrapper = document.querySelector('.wrapper');

function changeColor(color){
    const bgAnimate = document.getElementById('bg-animate');
    const curved = document.getElementById('curved');

    bgAnimate.style.background = color;
    curved.style.background = color;
    bgAnimate.classList.add('active');

    setTimeout(function(){
        bgAnimate.classList.remove('active');
    }, 1200);
}

const colors = document.querySelectorAll('.color');

function activeLink(){
    colors.forEach((item) => 
    item.classList.remove('active'))
    this.classList.add('active');
    document.body.style.backgroundColor = '';
}

colors.forEach((circle) =>
    circle.addEventListener('click', activeLink));

colors.forEach((circle => {
    circle.addEventListener('click', () => {
        const selectedColor = circle.getAttribute('data-color');
        document.body.style.backgroundColor = selectedColor;
    })
}))




