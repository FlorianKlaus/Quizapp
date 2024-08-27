let questions = [
  {
    question: "In welchem Land ist die Lebenserwartung am höchsten?",
    answer_1: "Schweiz",
    answer_2: "Deutschland",
    answer_3: "Hongkong",
    answer_4: "Japan",
    right_answer: 3,
  },
  {
    question:
      "In welcher Stadt bist du, wenn du auf der Spanischen Treppe stehst?",
    answer_1: "Hamburg",
    answer_2: "Rom",
    answer_3: "Barcellona",
    answer_4: "Wien",
    right_answer: 2,
  },
  {
    question: "Welche Sprache hat die meisten Muttersprachler?",
    answer_1: "Englisch",
    answer_2: "Chinesisch",
    answer_3: "Deutsch",
    answer_4: "Spanisch",
    right_answer: 4,
  },
  {
    question: "Was ist der häufigste Familienname in den Vereinigten Staaten?",
    answer_1: "Johnson",
    answer_2: "Williams",
    answer_3: "Smith",
    answer_4: "Brown",
    right_answer: 3,
  },
  {
    question: "Welche Krankheit war auf Piratenschiffen weit verbreitet?",
    answer_1: "Skorbut",
    answer_2: "Tripper",
    answer_3: "Aids",
    answer_4: "Erkältung",
    right_answer: 1,
  },
  {
    question: "Wer war der antike griechische Sonnengott?",
    answer_1: "Zeus",
    answer_2: "Hercules",
    answer_3: "Afrodite",
    answer_4: "Apollon",
    right_answer: 4,
  },
  {
    question: "Wie hieß der Gangsterboss des gefürchteten Chicago Outfit?",
    answer_1: "Lucky Luciano",
    answer_2: "Al Capone",
    answer_3: "Albert Anastasia",
    answer_4: "Tony Accardo",
    right_answer: 2,
  },
];

let currentQuestion = 0;
let rightAnswers = 0;

function init() {
  document.getElementById("allquestions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    Finish();
    document.getElementById("allquestions").innerHTML = questions.length;
    document.getElementById("rightAnswers").innerHTML = rightAnswers;
    
  } else {
    let question = questions[currentQuestion];
    document.getElementById("currentquestion").innerHTML = currentQuestion + 1;
    document.getElementById("question").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idofRightAnswer = `answer_${question["right_answer"]}`;
  if (selectedQuestionNumber == question["right_answer"]) {
    console.log("Richtige Antwort!");
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightAnswers++;
  } else {
    console.log("Falsche Antwort");
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idofRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextPage() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetButtons();
  showQuestion();
}

function resetButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function Finish(){
    document.getElementById("container").innerHTML = `<img class="winner" src="./img/completed.png"><br><div>Du hast <b id="rightAnswers" >xxx</b> von <b id="allquestions">xxx</b> Fragen richtig beantwortet!  </div> `;
    document.getElementById("container").style = 'display: flex; justify-content: center; flex-direction: column;';
}