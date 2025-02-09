
var men =document.querySelectorAll("button");
men.forEach(men =>{
    men.addEventListener("click",mrclick) 
})


function mrclick () {
    
    var mainbutton =this.innerHTML;
    sound(mainbutton);
    animation(mainbutton);
    
};
// array.forEach(element => {
    
// });



document.addEventListener("keydown",function(event){
    console.log(event);
    sound(event.key);
    animation(event.key);
})


function sound(key) {
    switch (key) {
        case "w":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();

            break;

        case "a":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();

            break;

        case "s":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();

            break;

        case "d":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();

            break;

        case "j":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();


            break;

        case "k":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();


            break;


            case "l":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();


            break;
    
        default:
            console.log(mainbutton);
            break;
    }
}







function animation(buttonpressed) {
    // buttonpressed.classList.add
    document.querySelector("."+buttonpressed).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("."+buttonpressed).classList.remove("pressed")
    }, 100);
    
}  