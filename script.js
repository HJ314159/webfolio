const highlight = document.getElementById('highlight');

window.onscroll = function() {
    const scrollY = window.scrollY;
    const maxHeight = 100; 
    const minHeight = 50;  

    const newHeight = maxHeight - (scrollY * (maxHeight - minHeight) / document.body.scrollHeight);
    
    scrollingElement.style.height = newHeight + 'vh';
};