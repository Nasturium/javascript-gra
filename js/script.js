const playerChoiceDisplay = document.createElement('h2');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const playGrid = document.getElementById('play');
playGrid.append(playerChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ['kamień', 'papier', 'nożyce']
let playerChoice
let computerChoice

const generateComputerChoice = () => {
  const randomNumber = choices[Math.floor (Math.random() * choices.length)]
  computerChoice = randomNumber
  computerChoiceDisplay.innerHTML = 'Ruch komputera:' + randomNumber
}

const handleClick = (e) => {
playerChoice = e.target.id
playerChoiceDisplay.innerHTML = 'Twój ruch:' + playerChoice
generateComputerChoice()
getResult()
}


for (let i=0; i< choices.length; i++){
  const button = document.createElement('button')
  button.id = choices[i]
  button.innerHTML= choices[i]
  button.addEventListener ('click', handleClick)
  playGrid.appendChild(button)
}

const getResult = () => {
  switch (playerChoice + computerChoice) {
    case 'nożycepapier':
    case 'kamieńnożyce':
    case 'papierkamień':
      resultDisplay.innerHTML = "WYGRAŁEŚ!"
      break
    case 'papiernożyce':
    case 'nożycekamień':
    case 'kamieńpapier':
      resultDisplay.innerHTML = "PRZEGRAŁEŚ!"
        break
    case 'nożycenożyce':
    case 'kamieńkamień':
    case 'papierpapier':
      resultDisplay.innerHTML = "REMIS!"
      break
            
  }
}