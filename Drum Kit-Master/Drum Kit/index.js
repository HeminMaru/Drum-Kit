var button = document.querySelectorAll("button");


for (var i=0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        playsound(this.innerHTML);
    });
}
document.addEventListener("keydown", function(event) {
    playsound(event.key);
});
function playsound(letter) {
    switch(letter) {
        case "W":
            var sound = "sounds/1.mp3";
            break;
        case "A":
            var sound = "sounds/2.mp3";
            break;
        case "S":
            var sound = "sounds/3.mp3";
            break;
        case "D":
            var sound = "sounds/4.mp3";
            break;
        case "J":
            var sound = "sounds/5.mp3";
            break;
        case "K":
            var sound = "sounds/6.mp3";
            break;
        case "L":
            var sound = "sounds/7.mp3";
            break;
    }
    var audio = new Audio(sound);
    audio.play();
}