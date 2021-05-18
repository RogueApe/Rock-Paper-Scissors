'use strict';

// Game ON / OFF switch
let playGame;

// Buttons elements
const btnArcherEL = document.getElementById('archer');
const btnKnightEL = document.getElementById('knight');
const btnRogueEL = document.getElementById('rogue');
const btnReset = document.querySelector('.restart_btn');
// Scores elements
const scorePlayerEL = document.querySelector('.player_scores');
const scoreComputerEL = document.querySelector('.computer_scores');
scorePlayerEL.textContent = 0;
scoreComputerEL.textContent = 0;
// CSS elements
const valkDisplay = document.querySelector('.valk_hidden');
const declareMsgEL = document.querySelector('.result_msg');
declareMsgEL.textContent = '';


// scores
let scorePlayer;
let scoreComputer;

const init = function () {
    // Game switch ON
    playGame = true;
    // scores
    scorePlayer = 0;
    scoreComputer = 0;
    scorePlayerEL.textContent = 0;
    scoreComputerEL.textContent = 0;

    declareMsgEL.textContent = '';

    valkDisplay.classList.add('valk_hidden');
    btnArcherEL.classList.remove('hidden');
    btnKnightEL.classList.remove('hidden');
    btnRogueEL.classList.remove('hidden');
};
init();

// computer random rolls
const computerPlay = function () {
    const weaponChoices = ['Archer', 'Knight', 'Rogue'];
    const diceRoll = Math.trunc(Math.random() * weaponChoices.length);
    return weaponChoices[diceRoll];
};

// main game function
const game = function (playerSelection) {
    if (playGame) {

        const computerSelection = computerPlay();

        if ((playerSelection === 'Archer' && computerSelection === 'Knight') ||
            (playerSelection === 'Knight' && computerSelection === 'Rogue') ||
            (playerSelection === 'Rogue' && computerSelection === 'Archer')) {
            declareMsgEL.textContent = `You win! ` + playerSelection + ' beat ' + computerSelection;

            scorePlayer += 1;
            scorePlayerEL.textContent = scorePlayer;
            if (scorePlayer >= 5) {
                playGame = false;
                valkDisplay.classList.remove('valk_hidden');
                declareMsgEL.textContent = `You've won the game! 🏆`
            }

        } else if (playerSelection === computerSelection) {
            console.log('Its a Tie!');
            declareMsgEL.textContent = `It's a Tie! ⚔`;
        } else {
            scoreComputer += 1;
            scoreComputerEL.textContent = scoreComputer;
            declareMsgEL.textContent = `You've lose! ☠`;

            if (scoreComputer >= 5) {
                playGame = false;
                valkDisplay.classList.remove('valk_hidden');
                btnArcherEL.classList.add('hidden');
                btnKnightEL.classList.add('hidden');
                btnRogueEL.classList.add('hidden');
                declareMsgEL.textContent = `You lose the game! ☠ Try again! `
            }
            console.log('You lose!');
        }
    };
};


// player buttons
const main = function () {

    btnArcherEL.addEventListener('click', function () {
        game('Archer');
    });

    btnKnightEL.addEventListener('click', function () {
        game('Knight');
    });

    btnRogueEL.addEventListener('click', function () {
        game('Rogue');
    });
};
main();

// reset button
btnReset.addEventListener('click', init);