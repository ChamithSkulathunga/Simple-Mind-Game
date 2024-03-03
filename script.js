const imageArray = [
    
{
    name:'bird',
    url:'images/bird.png',
},
{
    name:'bunny',
    url:'images/bunny.png',
},
{
    name:'fox',
    url:'images/fox.png',
},
{
    name:'lion',
    url:'images/lion.png',
},
{
    name:'mouse',
    url:'images/mouse.png',
},
{
    name:'owl',
    url:'images/owl.png',
},
{
    name:'bird',
    url:'images/bird.png',
},
{
    name:'bunny',
    url:'images/bunny.png',
},
{
    name:'fox',
    url:'images/fox.png',
},
{
    name:'lion',
    url:'images/lion.png',
},
{
    name:'mouse',
    url:'images/mouse.png',
},
{
    name:'owl',
    url:'images/owl.png',
}

];

// console.log(imageArray);

// let numberofCardsSelecter = 0;
let cardsChoosen = [];

let marks = 0;

imageArray.sort(() => 0.5 - Math.random());

// select the grid

const gridDisplay = document.querySelector('#grid');

// console.log(gridDisplay);

function createBoard(){
    imageArray.forEach((img, index) => {
        // console.log(img, index);
        //create image elements
        const card = document.createElement('img');
        card.setAttribute('src','images/question.jpeg');
        card.setAttribute('data-id', index);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    });
}

createBoard();

function flipCard() {
        // console.log("first");
        const cardId = this.getAttribute('data-id');
        // console.log(cardId);
        // console.log(imageArray,[cardId]);
        this.setAttribute('src', imageArray[cardId].url);
        cardsChoosen.push({ ...imageArray[cardId], id: cardId });
        // numberofCardsSelecter = numberofCardsSelecter +1 ;
        // console.log(numberofCardsSelecter);
       

    if(cardsChoosen.length === 2){
        setTimeout(checkMatch, 500);
    }

    // console.log(cardsChoosen);

}

console.log(imageArray);
 
function checkMatch(){
    // console.log(cardsChoosen);
    const optionOne = cardsChoosen[0]; 
    const optionTwo = cardsChoosen[1]; 

    const allCards = document.querySelectorAll('img');

    if(optionOne.id === optionTwo.id){
        //same card selected
        alert('You have selected the same card');
        cardFlipBack(allCards[optionOne.id]);

    }else if(optionOne.name === optionTwo.name){
        //if match
        allCards[optionOne.id].src = 'images/tick.png';
        allCards[optionTwo.id].src = 'images/tick.png';

        allCards[optionOne.id].removeEventListener('click',flipCard);
        allCards[optionTwo.id].removeEventListener('click',flipCard);
        marks = marks + 100 / 6; 
    }else{
        //if not match
        cardFlipBack(allCards[optionOne.id]);
        cardFlipBack(allCards[optionTwo.id]);
    }
    
    // after matching reset the array
    cardsChoosen = [];
    displayMarks();
}

function cardFlipBack(selectedCard){
    selectedCard.src = 'images/question.jpeg';
}


function displayMarks (){
    const finalMarks = Math.round(marks) + '%';
    const marksH3 = document.getElementById('marks');
    marksH3.innerText = finalMarks;
    console.log(finalMarks);
}

