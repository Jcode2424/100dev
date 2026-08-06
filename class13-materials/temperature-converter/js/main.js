// Write your pseduo code first! 
// receive the temperature value from the input box. 
// extract the value
// put it through the calculation and assign the value to the converted temp variable
// output the converted temp

// Leon's Pseudo Code
// I need the value in Celsius
// Convert from Celsius to Farenheit
// Show it

// document.querySelector('#converter').addEventListener('click', convert)

// function convert () {
//     const cel = document.querySelector('#cvalue').value
//     const far = cel * 1.8 + 32

//     document.querySelector('#fvalue').innerText = `The Fahrenheit value is ${far}.`
// }

document.querySelector('#converter').addEventListener('click', convert)

function convert () {
    // I need the value in Celsius
    let cel = document.querySelector('#cvalue').value
    // Convert from Celsius to Farenheit
    cel = cel * 9/5 + 32
    // Show it
    document.querySelector('#fvalue').innerText = `${cel}`
}