const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.user-result img');
const computerResult = document.querySelector('.computer-result img');
const result = document.querySelector('.result');
const optionImages = document.querySelectorAll('.option'); // Use querySelectorAll to select multiple elements

// Loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active');

        userResult.src = computerResult.src = './images/paper.png'; // Correct the image paths
        result.textContent = "Wait..."; // Use textContent to set the text

        // Loop through each option image again
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove('active');
        });

        gameContainer.classList.add('start');

        // Set a timeout to delay the result calculation
        let time = setTimeout(() => {
            gameContainer.classList.remove('start');

            // Get the source of the clicked option image
            let imageSrc = e.target.querySelector('img').src;
            // Get the user image to the clicked option image
            userResult.src = imageSrc;

            // Generate a random number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3);
            // Create an array of computer image options
            let computerImages = ['./images/paper.png', './images/rock.png', './images/scissors.png'];
            // Set the computer image to a random option from the array
            computerResult.src = computerImages[randomNumber];

            // Assign a letter value to the computer option (P for paper, R for rock, S for scissors)
            let computerValue = ['P', 'R', 'S'][randomNumber];
            // Assign a letter value to the clicked option (based on index)
            let userValue = ['P', 'R', 'S'][index];

            // Create an object with all possible outcomes
            let outcomes = {
                PP: 'Draw',
                PR: 'User',
                PS: 'Computer',
                RR: 'Draw',
                RP: 'Computer',
                RS: 'User',
                SS: 'Draw',
                SR: 'Computer',
                SP: 'User'
            };

            // Look up the outcome value based on user and computer option
            let outComeValue = outcomes[userValue + computerValue];

            // Display the result using a template literal
            result.textContent = userValue === computerValue ? 'Match Draw' : `${outComeValue} Won!`;
        }, 2500);
    });
});
