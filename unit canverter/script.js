function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit using the formula
    let fahrenheit = (celsius * 9/5) + 32;
    // Return the temperature in Fahrenheit
    return fahrenheit;
}

// Example usage:
let celsiusTemperature = 35; // Replace this with the temperature in Celsius that you want to convert
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(`Temperature in Fahrenheit: ${fahrenheitTemperature}°F`);
