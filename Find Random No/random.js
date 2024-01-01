// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  
  // Delay function with progress indication and output update
  function delayWithProgressAndOutput(delay) {
    let timeLeft = delay;
    let countdown = setInterval(function() {
      if (timeLeft > 0) {
        let outputElement = document.getElementById("output");
        outputElement.innerHTML = "Time remaining: " + timeLeft + " seconds";
        timeLeft--;
      } else {
        clearInterval(countdown);
        let randomNumber = generateRandomNumber();
        let outputElement = document.getElementById("output");
        outputElement.innerHTML = "Random number generated: " + randomNumber;
      }
    }, 1000);
  }
  
  // Set the delay (in seconds)
  let delay = 3;
  
  console.log("Delaying for " + delay + " seconds...");
  delayWithProgressAndOutput(delay);
  