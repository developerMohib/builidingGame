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
    console.log('Your Random Alphabet : ', alphabet);

    // your random alphabet pass in display (show it)
    
    let myRandomAlphabetShow = document.getElementById('current-alphabet');
    myRandomAlphabetShow.innerText = alphabet ;

    // set alphabet BackGround Color

    alphabetBGColorSet(alphabet)

}

function playNow(){
    hidelEmentById('homeScreen');
    showlEmentById('playGround');
    continueGame();
}