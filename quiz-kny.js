// quiz-kny.js

document.addEventListener("DOMContentLoaded", function () {
    var allBoxes = document.querySelectorAll(".box");
    var isAnswered = false;
    var correctAnswers = 0;
    var currentQuestion = 0;
    var totalQuestions = 10;
    var nextButton = document.getElementById("nextButton");
  
    var questions = [
        { question: "Pergunta 1?", answers: ["Respiração do Sol", "Respiração da Água", "Qual é o estilo de Respiração que o Tanjiro usa no Castelo Infinito?", "Respiração do Trovão", "Respiração da Besta"], correctAnswer: 0 },
        { question: "Pergunta 2?", answers: ["Ele não usa um estilo de respiração", "Respiração do Sol", "Inosuke usa qual estilo de respiração?", "Respiração da Besta", "Respiração do Vento"], correctAnswer: 0 },
        { question: "Pergunta 3?", answers: ["2", "3", "Zenistu sabe usar quantos estilos da respiração do trovão?", "4", "0"], correctAnswer: 0 },
        { question: "Pergunta 4?", answers: ["Tengen Uzui", "Shinobu Kocho", "Quem é o Hashira mais rápido?", "Sanemi Shinazugawa", "Giyu Tomioka"], correctAnswer: 0 },
        { question: "Pergunta 5?", answers: ["Gyomei Himejima", "Tengen Uzui", "Quem é o Hasira mais forte?", "Sanemi Shinazugawa", "Giyu Tomioka"], correctAnswer: 0 },
        { question: "Pergunta 6?", answers: ["14", "13", "Com quantos anos Tokito se tornou um Hashira?", "12", "15"], correctAnswer: 0 },
        { question: "Pergunta 7?", answers: ["Muichiro Tokito", "Mitsuri Kanroji", "Quem foi o primeiro caçador a despertar a marca do caçador?(desconsiderando o tanjiro)", "Giyu Tomioka", "Sanemi Shinazugawa"], correctAnswer: 0 },
        { question: "Pergunta 8?", answers: ["Respiração da Água", "Respiração do Vento", "A respiração da serpende é derivada de qual respiração?", "Respiração das Chamas", "Respiração da Pedra"], correctAnswer: 0 },
        { question: "Pergunta 9?", answers: ["Tanjiro Demon King", "Yoriichi Tsugikuni", "Quem é o personagem mais forte de Demon Slayer?", "Kokushibo", "Muzan Kibutsuji"], correctAnswer: 0 },
        { question: "Pergunta 10?", answers: ["5", "7", "Quantos Hasiras sobreviveram ao Castelo Infinito?", "9", "0"], correctAnswer: 0 },
    ];
  
    function loadQuestion() {
      var currentQuestionData = questions[currentQuestion];
      allBoxes.forEach(function (box, index) {
        box.innerHTML = "<p>" + currentQuestionData.answers[index] + "</p>";
      });
    }
  
    function clickHandler() {
      if (!isAnswered) {
        var currentQuestionData = questions[currentQuestion];
        if (this.id === "caixa1" && currentQuestionData.correctAnswer === 0) {
          correctAnswers++;
          changeColor(this, "green");
        } else if (this.id === "caixa2" && currentQuestionData.correctAnswer === 1) {
          correctAnswers++;
          changeColor(this, "green");
        } else {
          changeColor(this, "red");
        }
  
        isAnswered = true;
        showNextButton();
      }
    }
  
    function handleKeyPress(event) {
      if (event.key === "Enter") {
        nextQuestion();
      }
    }
  
    function showNextButton() {
      nextButton.style.display = "block";
      nextButton.addEventListener("click", nextQuestion);
    }
  
    function nextQuestion() {
      if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        resetBoxes();
        hideNextButton();
        loadQuestion();
      } else {
        showResults();
      }
    }
  
    function hideNextButton() {
      nextButton.style.display = "none";
      nextButton.removeEventListener("click", nextQuestion);
    }
  
    function resetBoxes() {
      isAnswered = false;
      allBoxes.forEach(function (box) {
        box.classList.remove("green", "red");
        box.addEventListener("click", clickHandler);
      });
    }
  
    function showResults() {
      window.location.href = "resultados.html?acertos=" + correctAnswers;
    }
  
    function changeColor(clickedBox, color) {
      clickedBox.classList.add(color);
    }
  
    function lockBoxes() {
      allBoxes.forEach(function (box) {
        box.removeEventListener("click", clickHandler);
      });
    }
  
    document.addEventListener("keydown", handleKeyPress);
  
    loadQuestion();
    resetBoxes();
  });
  
