const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext /*INSERTCODE*/)
document.querySelector('#claireNext').addEventListener('click', claireNext/*INSERTCODE*/)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext/*INSERTCODE*/)

function andiNext(){
	claire.classList.add('hidden'/*INSERTCODE*/)
	sharleen.classList.add('hidden'/*INSERTCODE*/)
	andi.classList.toggle('hidden'/*INSERTCODE*/)
}

function claireNext(){
	/*INSERTCODE*/sharleen.classList.add('hidden'/*INSERTCODE*/)
	/*INSERTCODE*/andi.classList.add('hidden'/*INSERTCODE*/)
	/*INSERTCODE*/claire.classList.toggle('hidden'/*INSERTCODE*/)
}

function sharleenNext(){
	/*INSERTCODE*/andi.classList.add('hidden'/*INSERTCODE*/)
	/*INSERTCODE*/claire.classList.add('hidden'/*INSERTCODE*/)
	/*INSERTCODE*/sharleen.classList.toggle('hidden'/*INSERTCODE*/)
}
