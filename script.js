
let levels = document.querySelector(".levelChoose");
let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
let cards;
let hide = '.hide';
let button = document.querySelector('.buttonClick');
let levelsWrapper = document.querySelector('.levelsWrapper');
let gameWrapper = document.querySelector('.gameWrapper');
const flipCard=document.querySelector('.flipCard');
let insertCard = ()=> flipCard.outerHTML;



levels.addEventListener('click', (event) => {
	if( event.target == easy) {
		easy.classList.add("active", "visited");
		medium.classList.remove("active", "visited");
		hard.classList.remove("active", "visited");
		cards=[easy, 3];
	} else if (event.target == medium) {
		easy.classList.remove("active", "visited");
		medium.classList.add("active", "visited");
		hard.classList.remove("active", "visited");
		cards=[medium, 6];
	} else if (event.target == hard) {
		easy.classList.remove("active", "visited");
		medium.classList.remove("active", "visited");
		hard.classList.add("active", "visited");
		cards=[hard, 10];
		gameWrapper.style.width = '100%'
	}
} )

button.addEventListener('click', () =>{
	if (cards[0].classList.contains("active")) {
		levelsWrapper.classList.add("hide");
		gameWrapper.classList.remove("hide");
		gameWrapper.classList.add("visible");
		for (let i=0 ; i < cards[1]-1;  i++) {
			gameWrapper.insertAdjacentHTML('afterbegin', insertCard());
			console.log(i)
		}
		const random = (num) => Math.floor(Math.random() * num);
		let bug = random(cards[1]);
		let flipCardBack = document.querySelectorAll('.flipCardBack');
		console.log(`Bug card is : ${bug + 1}`);
		let bugCard = flipCardBack[bug];
		bugCard.classList.add("bugCard");
	}
	})


// cardGameWrapper.addEventListener('click' , (e) => {
//   e = e.target;
//   if(e.classList.contains(cardsFront)){
//     curentCard = e.parentElement;  
//     curentCard.parentElement.classList.add('play__card_active');
//     cardGameWrapper.addEventListener('click' , () => {
//       location.reload() 
//     })
//   }
// })

gameWrapper.addEventListener('click', (e)=>{
	// let flipCardFront = document.querySelectorAll('.flipCardFront');
	// let flipCardInner = document.querySelectorAll('.flipCardInner');
	if (e.target.classList.contains("flipCardFront")) { 
		currentCard = e.target.parentElement; 
		currentCard.classList.add("rotate");
		currentCard.parentElement.classList.remove("hover");
		console.log(currentCard)

} else {
	console.log(currentCard)
}
	gameWrapper.addEventListener('click', (e)=> {
	 location.reload();
	})
})
;

