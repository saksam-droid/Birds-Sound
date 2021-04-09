let numberOfButtons = document.querySelectorAll(".bird").length;

for (let i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll(".bird")[i].addEventListener("click", function () {

        let buttonInnerHTML = this.dataset.value;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}


document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "a":
            let sound1 = new Audio("sounds/canary.mp3");
            sound1.play();
            break;

        case "s":
            let sound2 = new Audio("sounds/crow.mp3");
            sound2.play();
            break;

        case "d":
            let sound3 = new Audio('sounds/nightingale.mp3');
            sound3.play();
            break;

        case "f":
            let sound4 = new Audio('sounds/owl.mp3');
            sound4.play();
            break;

        case "g":
            let sound5 = new Audio('sounds/parrot.mp3');
            sound5.play();
            break;

        case "h":
            let sound6 = new Audio('sounds/peacock.mp3');
            sound6.play();
            break;

        case "j":
            let sound7 = new Audio('sounds/roadster.mp3');
            sound7.play();
            break;

        case "k":
            let sound8 = new Audio('sounds/Falcon.mp3');
            sound8.play();
            break;

        case "l":
            let sound9 = new Audio('sounds/sparrow.mp3');
            sound9.play();
            break;
        default: console.log(key);

    }
}


function buttonAnimation(currentKey) {

    const activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");


    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}