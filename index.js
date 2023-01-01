var audio = document.querySelectorAll(".drum").forEach(el => el.addEventListener("keydown", (event) => {
    

    console.log(event.key);
    var buttonPressed = event.key;
    // event.style.color = "white";

    switch(event.key){
    case "w" :
        audio = new Audio('sounds/crash.mp3');
        console.log("W");
        audio.play();
        break;
    
    case "a":
        audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
        
    case "s":
        audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
    
    case "d":
        audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;

    case "j":
        audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;

    case "k":
        audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;

    case "l":
        audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;

    default:(console.log(this.innerHTML));
}
}));


// document.querySelector("div").addEventListener("click", function(){
//     alert("I got clicked");
// })


