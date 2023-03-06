const video = document.getElementById("videoBackground");
const sound = document.getElementById("sound");
const link = document.querySelectorAll("ul a");
const audioClick = document.getElementById("audioClick");
const audioHover = document.getElementById("audioHover");


sound.addEventListener("click", () => {
  sound.classList.toggle("fa-volume-up");
  if (video.muted === false) {
    video.muted = true;
  } else {
    video.muted = false;
  }
  clickSound();
});

sound.addEventListener("mouseenter", hoverSound);

for(let i = 0; i < link.length; i++){
  link[i].addEventListener("click", clickSound);
  link[i].addEventListener("mouseenter", hoverSound)
}

function clickSound(){
  audioClick.play();
}

function hoverSound(){
  audioHover.play();
}

