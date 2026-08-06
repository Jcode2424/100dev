console.log("main.js loaded")
document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value
  if (day === "Tuesday" || day === "tuesday" || day === "Tues" || day === "tues" || day === "Thursday" || day === "thursday" || day === "Thurs" || day === "thurs") {
    alert('CLASS DAY! You have class!')
    console.log('CLASS DAY! You have class!')
  }
  else if (day === "Saturday" || day === "saturday" || day === "Sat" || day === "sat" || day === "Sunday" || day === "sunday" || day === "Sun" || day === "sun") {
    alert('WEEKEND!')
    console.log('WEEKEND!')
  }
  else {
    alert('BORRRRRRRING!')
    console.log('BORRRRRRRING!')
  }    
  //Conditionals go here


}
