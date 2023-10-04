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

$(document).on('click', '.portofolio-filter li', function(){
    $(this).addClass('portofolio-filter-active').siblings().removeClass('portofolio-filter-active')
});

$(document).ready(function() {
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.project-box').show('1000');
        } else {
            $('.project-box').not('.'+value).hide('1000');
            $('.project-box').filter('.'+value).show('1000');
        }
    })
})