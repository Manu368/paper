// document.addEventListener("DOMContentLoaded", function() {
//     const rocks = document.getElementById("rocks");
//     const papers = document.getElementById("papers");
//     const scissors = document.getElementById("scissors");
//     const playButton = document.getElementById("button02");
//     const resultImage = document.getElementById("resultimage");
//     const resultMessage = document.getElementById("manu");
//     const shakeSound = new Audio("rocktheme.mp3");
//     const b = document.getElementById("resulname");
  
//     const options = [rocks, papers, scissors];


//     const slides = document.querySelectorAll('.slide');
//     let currentSlide = 0;

//     function showNextSlide() {
//         slides[currentSlide].style.display = 'none';
//         currentSlide = (currentSlide + 1) % slides.length;
//         slides[currentSlide].style.display = 'block';
//     }

//     setInterval(showNextSlide, 1000);
  
//     playButton.addEventListener("click", function() {
//       let selectedOption = null;
//       for (const option of options) {
//         if (option.classList.contains("selected")) {
//           selectedOption = option;
//           break;
//         }
//       }
  
//       if (!selectedOption) {
//         resultMessage.textContent = "Please select at least one option from below.";
//         resultMessage.style.color = "#fff";
//         return;
//       }
  
//       // Reset styling and animations
//       options.forEach(option => {
//         option.style.border = "none";
//         option.classList.remove("shakePlayer");
//       });
//       playButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
  
//       setTimeout(function() {
//         const computerChoices = [
//           "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056995/computerScissors-removebg-preview_c3pamv.png",
//           "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056995/computerPaper-removebg-preview_1_wwiieb.png",
//           "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056369/computerRock-removebg-preview_1_ac3ejs.png"
//         ];
//         const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
//         resultImage.src = computerChoice;
//         resultImage.classList.remove("shakeComputer"); // Remove the animation class
//         void resultImage.offsetWidth; // Trigger reflow
//         resultImage.classList.add("shakeComputer"); // Add the animation class again
  
//         selectedOption.style.border = "1px solid #E3BC3F";
//         selectedOption.classList.add("shakePlayer");
  
//         shakeSound.play();
  
//         resultMessage.classList.remove("won", "lose", "draw");
  
//         setTimeout(function() {
//           if (selectedOption.id === "rocks") {
//             if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056369/computerRock-removebg-preview_1_ac3ejs.png") {
//               resultMessage.textContent = "Game Draw";
//               resultMessage.classList.add("draw");
//             } else if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056995/computerScissors-removebg-preview_c3pamv.png") {
//               resultMessage.textContent = "Congratulations! You Won";
//               resultMessage.classList.add("won");
//             } else {
//               resultMessage.textContent = "Sorry! You Lose";
//               resultMessage.classList.add("lose");
//             }
//           } else if (selectedOption.id === "papers") {
//             if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056995/computerPaper-removebg-preview_1_wwiieb.png") {
//               resultMessage.textContent = "Game Draw";
//               resultMessage.classList.add("draw");
//             } else if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056369/computerRock-removebg-preview_1_ac3ejs.png") {
//               resultMessage.textContent = "Congratulations! You Won";
//               resultMessage.classList.add("won");
//             } else {
//               resultMessage.textContent = "Sorry! You Lose";
//               resultMessage.classList.add("lose");
//             }
//           } else if (selectedOption.id === "scissors") {
//             if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056369/computerRock-removebg-preview_1_ac3ejs.png") {
//               resultMessage.textContent = "Sorry! You Lose";
//               resultMessage.classList.add("lose");
//             } else if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056995/computerScissors-removebg-preview_c3pamv.png") {
//               resultMessage.textContent = "Game Draw";
//               resultMessage.classList.add("draw");
//             } else {
//               resultMessage.textContent = "Congratulations! You Won";
//               resultMessage.classList.add("won");
//             }
//           }
  
//           // Update the result text based on computerChoice
//           let resultText = "";
//           if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056369/computerRock-removebg-preview_1_ac3ejs.png") {
//             resultText = "Rock";
//           } else if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056995/computerScissors-removebg-preview_c3pamv.png") {
//             resultText = "Scissors";
//           } else {
//             resultText = "Paper";
//           }
//           b.textContent = resultText;
  
//           playButton.innerHTML = "Play Now";
//         }, 1000);
//       }, 1000);
//     });
  
//     // Add click event listeners to the options
//     options.forEach(option => {
//       option.addEventListener("click", function() {
//         options.forEach(opt => {
//           opt.classList.remove("selected");
//           opt.style.border = "none"; // Reset border for all options
//         });
//         this.classList.add("selected");
//         this.style.border = "1px solid #E3BC3F"; // Apply border to the selected option
  
//         // Clear previous result
//         resultMessage.textContent = "";
//       });
//     });
//   });
  



// const slides = document.querySelectorAll('.slide');
//     let currentSlide = 0;

//     // Show the first slide and hide the rest initially
//     slides[currentSlide].style.display = 'block';
//     for (let i = 1; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }

//     function showNextSlide() {
//         slides[currentSlide].style.display = 'none';
//         currentSlide = (currentSlide + 1) % slides.length;
//         slides[currentSlide].style.display = 'block';
//     }

//     setInterval(showNextSlide, 1500);





const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let animationInterval; 

function resetGame() {
    // Clear selected options and their styles
    

    // Reset image display
    a.style.display = 'none';
    b.style.display = 'none';

    // Clear image names
    document.getElementById('handNameA').textContent = "";
    document.getElementById('handNameB').textContent = "";
}



let slideData = [
    { image: 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1689054673/playerRock-removebg-preview_qfpjmt.png', name: 'rock' },
    { image: 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1689055425/playerPaper-removebg-preview_1_xdj0uy.png', name: 'paper' },
    { image: 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1689055582/playerScissors-removebg-preview_lzilqu.png', name: 'scissors' }
  ];// Variable to hold the interval reference

// Show the first slide and add the 'active' class
slides[currentSlide].classList.add('active');
for (let i = 1; i < slides.length; i++) {
    slides[i].classList.remove('active'); // Remove 'active' class from other slides
}

function showNextSlide() {
    slides[currentSlide].classList.remove('active'); // Remove 'active' class from the current slide
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active'); // Add 'active' class to the next slide
}

// Function to start the animation with a given interval
function startAnimation(interval) {
    animationInterval = setInterval(showNextSlide, interval);
}

function stopAnimation() {
    clearInterval(animationInterval); // Stop the animation
}

// Get your HTML elements
const rockOption = document.getElementById('rocks');
const paperOption = document.getElementById('papers');
const scissorsOption = document.getElementById('scissors');
const playButton = document.getElementById('button02');
const spinner = document.getElementById('spinner');
const a = document.getElementById("aa");
const b = document.getElementById("bb");
const c = document.getElementById("versus");
const res = document.getElementById("manu");

let selectedOption = null; // Track the currently selected option

function selectOption(optionElement) {
    if (selectedOption) {
        selectedOption.classList.remove('selected');
    }
    selectedOption = optionElement;
    selectedOption.classList.add('selected');
}

// Function to show the slideshow animation
function showSlideshow() {
    const slideshow = document.querySelector('.slideshow');
    slideshow.style.display = 'block';



 
    // Add your slideshow animation code here
    // ...
}

// Initial show of the slideshow when the page is loaded or refreshed
showSlideshow();

window.addEventListener('load', () => {
    showSlideshow();
    startAnimation(1000);
    c.style.display = "none";
});

// Click event handlers for the image options
rockOption.addEventListener('click', () => {
    selectOption(rockOption);
    a.style.display = "none";
    b.style.display = "none";
    document.getElementById('handNameA').textContent = "";
    document.getElementById('handNameB').textContent = "";
    c.style.display = "none";
    showSlideshow();
    resetGame();
     // Show the slideshow animation
    // ...
});

paperOption.addEventListener('click', () => {
    selectOption(paperOption);
    a.style.display = "none";
    b.style.display = "none";
    document.getElementById('handNameA').textContent = "";
    document.getElementById('handNameB').textContent = "";
    showSlideshow();
    resetGame();
    c.style.display = "none";// Show the slideshow animation
    // ...
});

scissorsOption.addEventListener('click', () => {
    selectOption(scissorsOption);
    showSlideshow(); 
    document.getElementById('handNameA').textContent = "";
    document.getElementById('handNameB').textContent = "";
    a.style.display = "none";
    b.style.display = "none";
    resetGame();
    c.style.display = "none";// Show the slideshow animation
    // ...
});



// Click event handler for the play button
playButton.addEventListener('click', () => {
    if (!selectedOption) {
        alert("Please Select any Option first");
    } else {
        // Add spinner animation classes
        playButton.classList.add('loading');
        playButton.textContent = 'Loading';
        spinner.style.display = 'block';
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        

        // Show the slideshow animation
        showSlideshow();

        startAnimation(1000); // Start initial animation with 1-second interval

        setTimeout(() => {
            stopAnimation(); // Stop initial animation after 5 seconds
            startAnimation(500); // Start animation with 0.5-second interval

            setTimeout(() => {
                // Stop increased speed animation after 5 seconds
                stopAnimation();
                // Display a random image
                const randomIndex = Math.floor(Math.random() * slides.length);
                slides[currentSlide].classList.remove('active');
                currentSlide = randomIndex;
                slides[currentSlide].classList.add('active');

                // Set the source of the random image
                a.src = slides[currentSlide].querySelector('img').src;
                const generatedImageName = slideData[currentSlide].name;
                const userSelectedImageName = selectedOption.querySelector('.handname').textContent;

                // Set the source of the user-selected image
                b.src = selectedOption.querySelector('img').src;

                // Show the images
                a.style.display = 'block';
                b.style.display = 'block';
                c.style.display = 'block';
                
                
               
                document.getElementById('handNameA').textContent = generatedImageName;
                document.getElementById('handNameB').textContent = userSelectedImageName;



                // Hide the slideshow
                const slideshow = document.querySelector('.slideshow');
                slideshow.style.display = 'none';


                if (a.style.display === 'block' && b.style.display === 'block') {
                    setTimeout(() => {
                        // Determine the winner
                        let resultText = "";
                        if (a.src === b.src) {
                            resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692662804/tie_mriytq.jpg";
                        } else if (
                            (a.src.includes("playerRock") && b.src.includes("playerScissors")) ||
                            (a.src.includes("playerPaper") && b.src.includes("playerRock")) ||
                            (a.src.includes("playerScissors") && b.src.includes("playerPaper"))
                        ) {
                            resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692662142/win_efqmy5.jpg";
                        } else {
                            resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692662100/lose01_x0smhu.jpg";
                        }

                        // Show the result in the popup
                    const resultDisplay = document.getElementById('resultDisplay');
                    const resultTextElement = document.getElementById('resultImage');
                    resultTextElement.src = resultText;
                    resultDisplay.style.display = 'block';

                    }, 2000); // Delayed execution of the result text
                }
                // Remove spinner animation classes
                playButton.classList.remove('loading');
                playButton.textContent = 'Play Now';
                spinner.style.display = 'none';

               

            }, 4500); 
            // Display random image after 5 seconds of increased speed
        }, 4500); // Run initial animation for 5 seconds
    }
});

document.getElementById('closeResult').addEventListener('click', () => {
    const resultPopup = document.getElementById('resultDisplay');
    resultPopup.style.display = 'none';
});








