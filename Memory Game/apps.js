document.addEventListener('DOMContentLoaded',()=>{

const cardArray = [
    {
        name:'USA',
        img:'USA.png'
    },
    {
        name:'USA',
        img:'USA.png'
    },
    {
        name:'UK',
        img:'UK.png'
    },
    {
        name:'UK',
        img:'UK.png'
    },
    {
        name:'Japan',
        img:'Japan.png'
    },
    {
        name:'Japan',
        img:'Japan.png'
    },
    {
        name:'France',
        img:'France.png'
    },
    {
        name:'France',
        img:'France.png'
    },
    {
        name:'Germany',
        img:'Germany.png'
    },
    {
        name:'Germany',
        img:'Germany.png'
    },
    {
        name:'Brazil',
        img:'Brazil.png'
    },
    {
        name:'Brazil',
        img:'Brazil.png'
    },
    {
        name:'Spain',
        img:'Spain.png'
    },
    {
        name:'Spain',
        img:'Spain.png'
    },
    {
        name:'Korea',
        img:'Korea.png'
    },
    {
        name:'Korea',
        img:'Korea.png'
    }
]

cardArray.sort(()=> 0.5 - Math.random())
const grid =document.querySelector('.game')
var cardChosen =[]
var cardChosenID= []
var cardsWon= []


function createBoard() {
    for (let i=0; i<cardArray.length; i++) {
        var card =document.createElement('img')
        card.setAttribute('src', 'Blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch(){
    var cards =document.querySelectorAll('img')
    const firstChoice = cardChosenID[0]
    const secondChoice = cardChosenID[1]
    if (cardChosen[0]===cardChosen[1]){
        cards[firstChoice].setAttribute('src','check.png')
        cards[secondChoice].setAttribute('src','check.png')
        cardsWon.push(cardChosen)
    } 
    else{
        cards[firstChoice].setAttribute('src','Blank.png')
        cards[secondChoice].setAttribute('src','Blank.png')
    }
    cardChosen= []
    cardChosenID=[] 
}


function flipCard(){
    var cardID= this.getAttribute('data-id')
    cardChosen.push(cardArray[cardID].name)
    cardChosenID.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardChosen.length=== 2){
        setTimeout(checkForMatch, 250)
    }
}





createBoard()











})