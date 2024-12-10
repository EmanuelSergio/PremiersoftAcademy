const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gamerOver = document.querySelector(".dadGameOver ");
const songJump = new Audio("audio/jump.mp3");
const songDeath = new Audio("audio/death.mp3");

let life = true;

const recomecar = () => {
  window.location.reload(false);
};

const jump = () => {
  mario.classList.add("jump");
  if (life) {
    songJump.play();
  }
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  console.log(marioPosition);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 70) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "imagens/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";
    life = false;
    gamerOver.style.display = "block";

    songDeath.play();

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
