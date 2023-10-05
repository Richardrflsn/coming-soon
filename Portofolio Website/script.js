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

// Function to handle click filter
function handleFilterClick(event) {
    const filterItems = document.querySelectorAll('.portofolio-filter li');
    for(const item of filterItems) {
        item.classList.remove('portofolio-filter-active');
    }
    event.target.classList.add('portofolio-filter-active');
}

// Add click event listeners to '.portofolio-filter li' elements
const filterItems = document.querySelectorAll('.portofolio-filter li');
for (const item of filterItems) {
    item.addEventListener('click', handleFilterClick);
}

// Function to handle document ready event
function onDocumentReady() {
    const listItems = document.querySelectorAll('.list');
    for(const listItem of listItems) {
        listItem.addEventListener('click', function() {
            const value = this.getAttribute('data-filter');
            const projectBoxes = document.querySelectorAll('.project-box');

            if(value === 'all') {
                for(const box of projectBoxes) {
                    box.style.display = 'block';
                }
            } else {
                for(const box of projectBoxes) {
                    if(!box.classList.contains(value)) {
                        box.style.display = 'none';
                    } else {
                        box.style.display = 'block';
                    }
                }
            }
        });
    }
}

  // Add a DOMContentLoaded event listener to trigger code when the document is ready
document.addEventListener('DOMContentLoaded', onDocumentReady);
