"use strict";

startGame();

function startGame() {
    const secretNumber = getSecretNumber();
    while (true) {
        let answerNumber = prompt(`Enter your answer please`);
        let comparingResult = getCowsAndBullsCount();

        if (result.bullsCount === 4) {
            alert(`You won, the correct number is ${secretNumber}`);
            break;
        } else { `Your answer = ${answerNumber}, bulls: ${result.bullsCount}, cows: ${result.cowsCount}` };
    }
}
