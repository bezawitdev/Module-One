const memoryCards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let CardOne, CardTwo;
let lockBoard;

function flipCard(){
    if(lockBoard) return;
    this.classList.add("flip");    
    if(!hasFlippedCard){
        hasFlippedCard = true;
        CardOne = this;
        
    }else{
        hasFlippedCard = false;
        CardTwo = this;
        checkForMatch()
    }
    
}
function checkForMatch(){

   if(CardOne.dataset.name === CardTwo.dataset.name){
    CardOne.removeEventListener('click', flipCard);
    CardTwo.removeEventListener('click', flipCard);
        
    } else {
        lockBoard = true
        setTimeout(()=> {
            CardOne.classList.remove('flip');
            CardTwo.classList.remove('flip');

            
            resetBoard()
        }, 1200)
            }
    }

function resetBoard(){
        [hasFlippedCard, lockBoard] = [false, false];
        [CardOne, CardTwo] = [null, null]
    }

(function shuffle(){
        memoryCards.forEach(card => {
            let resetCards = Math.floor(Math.random() * 12);
            card.style.order = resetCards;
        })
    })();

        

memoryCards.forEach(card => card.addEventListener("click", flipCard));

