var listOfButton = document.querySelectorAll(".drum")




for (var i = 0; i < listOfButton.length; i++) {
  listOfButton[i].addEventListener("click",
  function () {
    play_sound(this.innerHTML);
    buttonAnnimation(this.innerHTML);
  }

  );
}

document.addEventListener("keydown",function (e) {
  play_sound(e.key);
  buttonAnnimation(e.key);

});


function play_sound(char)
 {
   switch (char) {
     case 'w':
       var audio = new Audio('sounds/crash.mp3');
       audio.play();
       break;
     case 'a':
       var kick = new Audio('sounds/kick-bass.mp3');
       kick.play();
       break;
     case 's':
       var snare = new Audio('sounds/snare.mp3');
       snare.play();
       break;
     case 'd':
       var tom1 = new Audio('sounds/tom-1.mp3');
       tom1.play();
       break;
     case 'j':
       var tom2 = new Audio('sounds/tom-2.mp3');
       tom2.play();
       break;
     case 'k':
       var tom3 = new Audio('sounds/tom-3.mp3');
       tom3.play();
       break;
     case 'l':
       var tom4 = new Audio('sounds/tom-4.mp3');
       tom4.play();
       break;
     default: console.log("button not in the list");

   }
 }

function buttonAnnimation (currentKey) {
  try{
    var activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed")
    setTimeout(function () {
      activeButton.classList.remove("pressed")
    }, 100);

  }
  catch (err) {
    console.log(err)
  }

}
