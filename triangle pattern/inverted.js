function printInvertedRightAngledTriangle(i) {
    for (let row = i; row >= 1; row--) {
      let pattern = '';
      for (let j = 1; j <= i - row; j++) {
        // pattern += ' '; // Add spaces for indentation
      }
      for (let k = 1; k <= row; k++) {
        pattern += '*'; // Add asterisks
      }
      console.log(pattern); // Print the current row
    }
  }
  
  // Example usage with input i=6
  const i = 6;
  printInvertedRightAngledTriangle(i);
  
  