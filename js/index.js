// Your code goes here


document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', () => {
        el.style.color = 'pink';
    })
})

pic1.addEventListener('mouseover', () => {
    pic1.style.transform = 'scale(1.2)';
    pic1.style.transition = 'all 0.2s';
})

pic1.addEventListener('mouseout', () => {
    pic1.style.transform = 'scale(0.8)';
    pic1.style.transition = 'all 0.2s';
})

funbus.addEventListener('dblclick', () => {
    funbus.style.color = 'white';
    funbus.style.fontSize = '50px';
    funbus.style.backgroundColor = 'yellow';
    funbus.style.letterSpacing = '1.5px';
})

pic2.addEventListener('wheel', () => {
    

    pic2.style.borderRadius = '50%';

})

pic3.addEventListener('drag', () => {
    pic3.style.display = 'none';
})

para1.addEventListener('mousemove', () => {
    para1.style.color = 'green';
    para1.style.fontSize = '20px';
})

welcome.addEventListener('select', (event) => {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);

    welcome.style.backgroundColor = 'purple';
})