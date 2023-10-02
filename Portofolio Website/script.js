const text = document.querySelector('.sec-text');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Graphic Designer";
    }, 8000); // 1 second = 1000 miliseconds
}

textLoad();
setInterval(textLoad, 12000);