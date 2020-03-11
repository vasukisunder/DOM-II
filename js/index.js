// Your code goes here

allnav.addEventListener('click', () => {
    allnav.style.backgroundColor = 'rebeccapurple';
})
document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', () => {
        el.style.color = 'pink';
    })
})

document.querySelector('.nav-link').addEventListener('click', (event) => {
    event.preventDefault();
})

about.addEventListener('click', () => {
    about.style.color = 'hotpink';
    about.style.backgroundColor = 'black';
    event.stopPropagation()
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

para2.addEventListener('cut', (event) => {
    const selection = document.getSelection();
    selection.deleteFromDocument();
    event.preventDefault();
})

welcome.addEventListener('copy', () =>{
    welcome.style.color = 'blue';
})

window.addEventListener('resize', () => {
    lets.innerText = 'You resized the window!';
})
