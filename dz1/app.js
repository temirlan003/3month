const idInput= document.querySelector(".idInput");
const spanResult = document.querySelector(".spanResult");
const btnClick = document.querySelector(".btnClick");

const idReg = /^1\d{13}|0\d{13}$/;

btnClick.addEventListener("click", () => {
    if(idReg.test(idInput.value)) {
    alert("ok");
    }  
    else {
      alert("not ok");
    }
  });

  //Второе Задание

  const moving = document.querySelector(".move")

let num = 0;

const move = function() {
    num += 40
    moving.style.left = `${num}px`;
    if (num <50) {
        move();
    } else {
        num = 0;
    }
}
moving.addEventListener("click", move)