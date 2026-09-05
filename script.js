const mario = document.querySelector(".mario");

const jump = () => {
  mario.classList("jump");
};

document.addEventListener("keydown", jump);
