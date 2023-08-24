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

/**
 Функция, которая генерирует случайные 4 цифры в виде массива
 * @returns массив из 4х случайных неповторяющихся цифр 
 */
function getSecretNumber() {
    const min = 0;
    const max = 9;
    let secretNumber = [];
    let count = 0;
    for (let i = 0; i < 5; i++) {
        let generatedNumber = getRandomInRange(min, max);
        if (!generatedNumber in secretNumber) {
            secretNumber = generatedNumber.push(secretNumber)
            count++;
        } else {
            i--;
        }
        if (count === 4) {
            return secretNumber;
        }
    }
}

/**
 * Функция для получения рандомного целого числа в заданном диапазоне включая обе границы
 * @param {number} min - минимальная граница для получения рандомного числа
 * @param {number} max - максимальная граница для получения рандомного числа
 * @returns рандомное целое число в заданном диапазоне включая обе границы
 */
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}