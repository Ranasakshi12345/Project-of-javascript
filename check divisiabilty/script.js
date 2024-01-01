
function findNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
      const number = arr[i];
      
      // Check if the number is divisible by 2
      if (number % 2  === 0) {
        continue; // Skip even numbers
      }
  
      // Check if the number is divisible by 3
      if (number % 3 === 0) {
        console.log(number);
      }
    }
  }
  
  // Example usage with an array of numbers
  const numbers = [1, 2, 3, 4, 6, 9, 12, 13];
  findNumbers(numbers);
  