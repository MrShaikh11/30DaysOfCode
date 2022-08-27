document.addEventListener('DOMContentLoaded', () => {
const cardArray=[
    {name:'fries',
    img: 'images/fries.png'},
    {name:'cheesburger',
    img: 'images/cheeseburger.png'},
    {name:'hotdog',
    img: 'images/hotdog.png'},
    {name:'ice-cream',
    img: 'images/ice-cream.png'},
    {name:'milkshake',
    img: 'images/milkshake.png'},
    {name:'pizza',
    img: 'images/pizza.png'},
    {name:'fries',
    img: 'images/fries.png'},
    {name:'cheesburger',
    img: 'images/cheeseburger.png'},
    {name:'hotdog',
    img: 'images/hotdog.png'},
    {name:'ice-cream',
    img: 'images/ice-cream.png'},
    {name:'milkshake',
    img: 'images/milkshake.png'},
    {name:'pizza',
    img: 'images/pizza.png'}
]

let cardsChosen=[]
let cardsChosenId=[]
let cardsWon=[]
cardArray.sort(()=>0.5-Math.random())

const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.getElementById('result')

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        gridDisplay.appendChild(card)
        console.log(card,i)
        card.addEventListener('click',flipCard)
    }
}

function flipCard(){
    let cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    console.log('card flipped')
    if(cardsChosen.length===2)
        setTimeout(checkForMatch,500)
}

createBoard()

function checkForMatch(){
    const card=document.querySelectorAll('img')
    firstId=cardsChosenId[0]
    secondId=cardsChosenId[1]
    
        if(firstId===secondId){
            card[firstId].setAttribute('src','images/blank.png')
            card[secondId].setAttribute('src','images/blank.png')
            alert('You clikced on the same Image!')
        }

       else if(cardsChosen[0]===cardsChosen[1]){
            // alert("Conratulations, You have found a Match")
            card[firstId].setAttribute('src','images/white.png')
            card[secondId].setAttribute('src','images/white.png')
            card[firstId].removeEventListener('click',flipCard)
            card[secondId].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
        }

        else{
            card[firstId].setAttribute('src','images/blank.png')
            card[secondId].setAttribute('src','images/blank.png')
        }
        resultDisplay.innerHTML=cardsWon.length
        cardsChosen=[]
        cardsChosenId=[]

        if(cardsWon.length==cardArray.length/2){
            resultDisplay.innerHTML='Congratulations You have found them all'
        }
    
}

})