/*
function playNow(){
    // step 1 :- click play Now button and hid the Home section

    let homeSection = document.getElementById('homeScreen');
    homeSection.classList.add('hidden');
    // console.log(homeSection);

    // step 2 :- while play Now button clicked visible the playGround section

    let playGround = document.getElementById('playGround');
    playGround.classList.remove('hidden');
}
*/
function continueGame(){
    let alphabet = getRandomAlphabet();
}

function playNow(){
    hidelEmentById('homeScreen');
    showlEmentById('playGround');
    continueGame();
}