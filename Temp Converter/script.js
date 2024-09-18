// Get the necessary elements from the DOM
const degreeInput = document.getElementById('degree');
const tempTypeSelect = document.getElementById('temp-type');
const resultDisplay = document.getElementById('celsius');
const convertBtn = document.getElementById('convert-btn');

// Function to convert temperature
function convertTemperature() {
    const degreeValue = parseFloat(degreeInput.value);
    const tempType = tempTypeSelect.value;

    if (isNaN(degreeValue)) {
        resultDisplay.textContent = "Please enter a valid number.";
        return;
    }

    let result;

    // Check the selected temperature type and perform the appropriate conversion
    if (tempType === 'fahrenheit') {
        // Convert Fahrenheit to Celsius
        result = (degreeValue - 32) * (5 / 9);
        resultDisplay.textContent = ` ${ result.toFixed(2)}°C`;
    } else if (tempType === 'celcius') {
        // Convert Celsius to Fahrenheit
        result = (degreeValue * (9 / 5)) + 32;
        resultDisplay.textContent = ` ${ result.toFixed(2)}°F`;
    }
}

// Add an event listener to the convert button
convertBtn.addEventListener('click', convertTemperature);