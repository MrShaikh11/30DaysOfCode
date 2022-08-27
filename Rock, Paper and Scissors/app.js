const compChoiceDisplay= document.getElementById('computer-choice')
const userChoiceDisplay= document.getElementById('user-choice')
const resultDisplay= document.getElementById('result')
const choice=document.querySelectorAll('button')
let userCh
let compCh
let result

choice.forEach(ch=>ch.addEventListener('click',(e)=>{
    userCh=e.target.id
    userChoiceDisplay.innerHTML=userCh
    generateComputerChoice()
    generateResult()
}))


function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3)+1

    if(randomNumber==1)
        compCh='Rock'
    if(randomNumber==2)
        compCh='Paper'
    if(randomNumber==3) 
        compCh='Scissors'
    
    compChoiceDisplay.innerHTML=compCh
}

function generateResult(){
    if(userCh===compCh)
    result='Its a draw'
    if(userCh==='Rock'&&compCh==='Scissors')
    result='You Win'
    if(userCh==='Scissors'&&compCh==='Paper')
    result='You Win'
    if(userCh==='Paper'&&compCh==='Rock')
    result='You Win'

    if(userCh==='Scissors'&&compCh==='Rock')
    result='You Lose'
    if(userCh==='Paper'&&compCh==='Scissors')
    result='You Lose'
    if(userCh==='Rock'&&compCh==='Paper')
    result='You Lose'

    resultDisplay.innerHTML=result
}