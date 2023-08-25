"use strict";

startGame();

function startGame() {
    let secretNumber = getSecretNumber();
    while (true) {
        let answerNumber = prompt(`Enter your answer please`).split("");
        let comparingResult = getCowsAndBullsCount(secretNumber, answerNumber);

        if (secretNumber.toString() === answerNumber.toString()) {
            alert(`You won, the correct number is ${secretNumber}`);
            break;
        } else {
            alert(`Your answer = ${answerNumber}, bulls: ${comparingResult.bullsCount}, cows: ${comparingResult.cowsCount}`);
        };
    }
}

/**
 * Функция, возвращающая количество коров и быков
 */

function getCowsAndBullsCount(secretNumber, answerNumber) {
    let cowsCount = getCowsCount(secretNumber, answerNumber);
    let bullsCount = getBullsCount(secretNumber, answerNumber);
    return {
        "bullsCount": bullsCount,
        "cowsCount": cowsCount - bullsCount,
    }
}

function getCowsCount(secretNumber, answerNumber) {
    let cowsCount = 0;
    for (let value of secretNumber) {
        if (answerNumber.includes(value)) {
            cowsCount++;
        }
    }
    return cowsCount;
}

function getBullsCount(secretNumber, answerNumber) {
    let bullsCount = 0;
    for (let i = 0; i < secretNumber.length; i++) {
        if (secretNumber[i] == answerNumber[i]) {
            bullsCount++;
        }
    }
    return bullsCount;
}


/**
 * Функция, которая генерирует случайные 4 цифры в виде массива
 * @returns массив из 4х случайных неповторяющихся цифр
 */
function getSecretNumber() {
    let generated = String(Math.random() * 1000000000000000);
    let result = [];
    for (let value of generated) {
        if (!result.includes(value)) {
            result.push(value);
        }
        if (result.length == 4) {
            return result;
        }
    }
}

