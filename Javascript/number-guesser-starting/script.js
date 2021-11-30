let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1; 

// Write your code below:
const compareGuesses = (userGuess,computerGuess,secretTarget)=>{
    const userDifference = Math.abs(userGuess - secretTarget);
    const computerDifference = Math.abs(computerGuess - secretTarget);
    return userDifference <= computerDifference;
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}
