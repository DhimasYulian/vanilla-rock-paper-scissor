const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const intoScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const score = document.querySelector('.score');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = "";
            });
        });


        playBtn.addEventListener('click', () => {
            intoScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            score.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.p-hand');
        const compHand = document.querySelector('.c-hand');

        const compOptions = ['rock', 'paper', 'scissor'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                //Computer Choices
                const compNumber = Math.floor(Math.random() * 3);
                const compChoice = compOptions[compNumber];

                setTimeout(() => {
                    compareHands(this.textContent, compChoice);
                    updateScore();


                    playerHand.src = `./img/${this.textContent}.png`;
                    compHand.src = `./img/${compChoice}.png`;
                }, 2000);

                playerHand.style.animation = 'shakePlayer 2s ease';
                compHand.style.animation = 'shakeComp 2s ease';

                console.log(this.textContent);
            })
        })
    }


    const updateScore = () => {
        const playerScore = document.querySelector('.p-score p');
        const compScore = document.querySelector('.c-score p');
        playerScore.textContent = pScore;
        compScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');

        if (playerChoice === computerChoice) {
            winner.textContent = "It's Tie";
            return;
        }

        if (playerChoice === 'rock') {
            if (computerChoice === 'scissor') {
                winner.textContent = "You Wins";
                pScore++;
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                return;
            }
        }

        if (playerChoice === 'paper') {
            if (computerChoice === 'scissor') {
                winner.textContent = "Computer Wins";
                cScore++;
                return;
            } else {
                winner.textContent = "You Wins";
                pScore++;
                return;
            }
        }

        if (playerChoice === 'scissor') {
            if (computerChoice === 'rock') {
                winner.textContent = "Computer Wins";
                cScore++;
                return;
            } else {
                winner.textContent = "You Wins";
                pScore++;
                return;
            }
        }

    }


    startGame();
    playMatch();
}

game();