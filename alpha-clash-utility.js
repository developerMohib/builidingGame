
function hidelEmentById(elementId){
    let element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showlEmentById(elementId){
    let element = document.getElementById(elementId);
    element.classList.remove('hidden');
}