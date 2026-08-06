const contestants = document.querySelectorAll('.contestant'/*INSERTCODE*/)

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose/*INSERTCODE*/))

function checkForRose(click){
	if(click.target.classList.contains('rose'/*INSERTCODE*/)){
		document.querySelector('#nikki').classList.toggle('hidden'/*INSERTCODE*/)
	}else{
		alert("Wrong!");
	}
}
