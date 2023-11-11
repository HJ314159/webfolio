const highlight = document.getElementById('highlight');

window.onscroll = function() {
    const scrollY = window.scrollY;
    const initialHeight = 200; 
    const minHeight = 100; 

    const newHeight = initialHeight - (scrollY * (initialHeight - minHeight) / 10);

    highlight.style.height = newHeight + 'px';
};

const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));