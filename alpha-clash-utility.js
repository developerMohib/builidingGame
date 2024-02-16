
function hidelEmentById(elementId){
    let element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showlEmentById(elementId){
    let element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

/* ------- Set BackGround Color --------- */

function alphabetBGColorSet(element){
    let alphabetBgColor = document.getElementById(element);
    alphabetBgColor.classList.add('bg-orange-400');
}

function alphabetBGColorRemove(element){
    let alphabetBgColor = document.getElementById(element);
    alphabetBgColor.classList.remove('bg-orange-400');
}

/** ----------- Score and Life -------------- */

function getTextValueById(elementId){
    let element = document.getElementById(elementId);
    let elementText = element.innerText;
    let value = parseInt(elementText);
    console.log(value , 'value ');
    return value;
}

function setTextValueById(elementId, value){
    let element = document.getElementById(elementId);
    element.innerText = value;
}

/* ------ Keyboard Press Funtion ------ */

function handleKeyboardPress(event){
    let playerPress = event.key;
    console.log('Player Press : ', playerPress);

    // expected alphabet 
    let currentAlphabet = document.getElementById('current-alphabet');
    let currentAlphabetText = currentAlphabet.innerText;
    currentAlphabetText = currentAlphabetText.toLocaleLowerCase();
    console.log(currentAlphabetText, 'currentAlphabetText ')

    // console.log(currentAlphabetText , '=', playerPress );

    // match or not , get point or lose life

    if(currentAlphabetText === playerPress){
        console.log('you win & you press : ', currentAlphabetText);
        // since you press right, so you obviously get a point , it's your right

        let currentScore = getTextValueById('current-score');
        // console.log(currentScore , 'currentScore')
        let yourNewScore = currentScore + 1;
        setTextValueById( 'current-score', yourNewScore);

        // let currentScore = document.getElementById('current-score');
        // let currentScoreText = currentScore.innerText;
        // let displayedScore = parseInt(currentScoreText);
        
        // // increase score
        // let yourNewScore = displayedScore + 1;
        // currentScore.innerText = yourNewScore;
        
        continueGame();
        alphabetBGColorRemove(currentAlphabetText);

    }
    else{
        // console.log('you lose life');
        // since you type a wrong key, so you get fine
        // reduce your life line

        let currentLife = getTextValueById('current-life');
        let yourNewLife = currentLife - 1;
        setTextValueById('current-life', yourNewLife)
        /*
        let currentLife = document.getElementById('current-life');
        let currentLifeText = currentLife.innerText;
        let displayedLife = parseInt(currentLifeText);
        console.log('displayed life : ', displayedLife);

        // decrese life 
        let yourNewLife = displayedLife - 1;
        // console.log(yourNewLife, 'New life');
        currentLife.innerText = yourNewLife;
        */

        if(yourNewLife === 0){
            // hide play Ground
            let playGround = document.getElementById('playGround');
            playGround.classList.add('hidden');

            // show score ground 
            let displayedScore = document.getElementById('display-score');
            displayedScore.classList.remove('hidden');
        }

    }

}

document.addEventListener('keyup', handleKeyboardPress);


/* ------ Keyboard Selection ------ */

function getRandomAlphabet(){

    // generate array
    let myAlphabetString = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
    let myAlphabet = myAlphabetString.split(' ');
    // console.log(myAlphabet);

    // get a random number 
    let myRandom = Math.random() * 25 ;
    let randomIndex = Math.round(myRandom);

    let alphabet = myAlphabet[randomIndex];
    return alphabet;
}