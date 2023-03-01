document.addEventListener('DOMContentLoaded', ()=> {

    const cardArray = [
         {
             name : 'Phoenix',
             img : 'Image/Phoenix.webp',
             
 
         },
         
         {
             name : 'Phoenix',
             img : 'Image/Phoenix.webp',
 
 
         },
 
         {
             name : 'Fade',
             img : 'Image/Fade.webp',
             
         },
         {
             name : 'Fade',
             img : 'Image/Fade.webp',
         },
             
         {
             name : 'Neon',
             img : 'Image/Neon.webp',
           
         },
         {
             name : 'Neon',
             img : 'Image/Neon.webp',
          
         },
         {
             name : 'Reyna',
             img : 'Image/Reyna.webp',
           
         },
         {
             name : 'Reyna',
             img : 'Image/Reyna.webp',
       
         },
         {
             name : 'Skye',
             img : 'Image/Skye.png',
           
         },
         {
             name : 'Skye',
             img : 'Image/Skye.png',
           
         },
         {
             name : 'Sova',
             img : 'Image/Sova.webp',
             
         },
         {
             name : 'Sova',
             img : '/Image/Sova.webp',
            
         },
     ]
 
 
 
 
 const gameBox = document.querySelector('.grid');
 const resultDisplay = document.getElementById('result');
 let cardsChosen = [];
 let cardsChosenId = [];
 let cardsWon = [];
 
 
 cardArray.sort(() => 0.3 - Math.random())
 
 
 
 function createBoard(){
     for(let i = 0; i< cardArray.length; i++){
         const card = document.createElement('img');
         card.setAttribute('src', 'Image/blank.png');
         card.setAttribute('data-id', i)
         card.addEventListener('click', flipCard);
         gameBox.appendChild(card)
 
     }
 
 
 }
 
 
 createBoard();
 
 
 
 function checkForMatch(){
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
     if(optionOneId == optionTwoId){
         cards[optionOneId].setAttribute('src', 'Image/blank.png')
         cards[optionOneId].setAttribute('src', 'Image/blank.png')
         alert('Sorry you clicked same image')
              }else if(cardsChosen[0] === cardsChosen[1]){
                 alert('You found a match');
                 cards[optionOneId].setAttribute('src', 'Image/white.png');
                 cards[optionTwoId].setAttribute('src', 'Image/white.png');
                 cards[optionOneId].removeEventListener('click', flipCard);
                 cards[optionTwoId].removeEventListener('click', flipCard);
                 cardsWon.push(cardsChosen)
                 }else{
                     cards[optionOneId].setAttribute('src', 'Image/blank.png')
                     cards[optionTwoId].setAttribute('src', 'Image/blank.png')
                     alert('Sorry you missed');
                  }
                         cardsChosen = [];
                         cardsChosenId = [];
                         resultDisplay.textContent = cardsWon.length;
                         if(cardsWon.length === cardArray.length/2){
                         resultDisplay.textContent = " Congrats you found them all";
    }
 }
 
 
 
 
 
 
 
 function flipCard(){
     let cardId = this.getAttribute('data-id');
     cardsChosen.push(cardArray[cardId].name);
     cardsChosenId.push(cardId);
     this.setAttribute('src', cardArray[cardId].img);
     if(cardsChosen.length == 2){
         setTimeout(checkForMatch, 500)
     }
 }
 
 
 
 
 
 });