
function hidelEmentById(elementId){
    let element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showlEmentById(elementId){
    let element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

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
    console.log(alphabet);
}