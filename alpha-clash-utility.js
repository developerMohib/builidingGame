
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

// function alphabetBGColorRemove(element){
//     let alphabetBgColor = document.getElementById(element);
//     alphabetBgColor.classList.remove('bg-orange-400');
// }


/* ------ Keyboard Press Funtion ------ */

function handleKeyboardPress(event){
    let playerPress = event.key;
    console.log('Player Press : ', playerPress);

    // expected alphabet 
    let currentAlphabet = document.getElementById('current-alphabet');
    let currentAlphabetText = currentAlphabet.innerText;
    currentAlphabetText =currentAlphabetText.toLocaleLowerCase();

    console.log(currentAlphabetText , '=', playerPress );

    // match or not , get point or lose life

    if(currentAlphabetText === playerPress){
        console.log('you win');
    }
    else{
        console.log('you lose life');
    }
}

document.addEventListener('keyup', handleKeyboardPress);


/* ------ Keyboard Selection ------ */

function getRandomAlphabet(){

    // generate array
    let myAlphabetString = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
    let myAlphabet = myAlphabetString.split(' ');
    console.log(myAlphabet);

    // get a random number 
    let myRandom = Math.random() * 25 ;
    let randomIndex = Math.round(myRandom);

    let alphabet = myAlphabet[randomIndex];
    return alphabet;
}