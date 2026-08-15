//Write your pseduo code first! 

//only on click
document.querySelector('#convert').addEventListener('click', convert);

function convert() {
    console.log('Hello Twitch');
    // Get the value of celsius. Get value out of input
    let cvalue= document.querySelector('#cel').value;
    // Convert it to Farenheit. convert the value
    // let fvalue= cvalue * 9/5 + 32;
    cvalue = cvalue * 9/5 + 32;
    // Show the converted Farenheit value. sohw the value to ther user
    // document.querySelector('#output').innerText = `The Farenheit value is ${fvalue}.`;
    document.querySelector('#output').innerText = `The Farenheit value is ${cvalue}.`;
}