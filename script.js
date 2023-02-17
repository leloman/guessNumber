"use strict";
/* Esta é a maneira de selecionar um elemento html pelo nome da sua classe através de JavaScript. A propriedade textContent faz a seleção do documento retornar apenas o seu conteúdo de texto. Podemos atribuir a esta expressão dentro do clog um novo valor. */

/* DOM é Documento Object Model e permite que acessemos um documento HTML através de código JavaScript. Ele interpreta um documento HTML como uma árvore de objetos que podem ser acessados através do JavaScript. O DOM não faz parte do JavaScript, mas sim das WEB API's, WEB Application Programming Interface.*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let guess = Number(document.querySelector(".guess").value);
// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});

document.querySelector(".check").addEventListener("click", function () {
  if (guess !== secretNumber && score > 0) {
    guess = Number(document.querySelector(".guess").value);

    if (!guess) {
      document.querySelector(".message").textContent = "No guess! 😥";
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct number! 😎";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
    } else if (guess < 1 || guess > 20) {
      document.querySelector(".message").textContent = "Invalid number 🤬";
    } else {
      if (score <= 0) {
        document.querySelector(".score").textContent = 0;
        document.querySelector(".message").textContent = "You lost 😭";
      } else {
        score--;
        document.querySelector(".score").textContent = score;
        if (guess > secretNumber) {
          document.querySelector(".message").textContent = "Too high ! 😮";
        } else {
          document.querySelector(".message").textContent = "Too low... 😐";
        }
      }
    }
  }
});
