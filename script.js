let questionsArray = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
const createQuestions = function () {
  let questionConNode = document.getElementById("questions-container");

  for (i = 1; i <= questionsArray.length; i++) {
    let questionNode = document.createElement("div");
    questionNode.innerHTML = questionsArray[i - 1].question;
    questionNode.id = i;
    questionNode.classList.add("question");
    let breakLine = document.createElement("br")

    questionConNode.appendChild(questionNode);
    questionNode.appendChild(breakLine)

    let correctAnswerNode = document.createElement("div");
    correctAnswerNode.innerHTML = questionsArray[i - 1].correct_answer;
    correctAnswerNode.id = "correct-answer";
    correctAnswerNode.classList.add("answer");
    questionNode.appendChild(correctAnswerNode);
    correctAnswerNode.addEventListener("click", selectedAnswerFunc);

    let x = questionsArray[i - 1].incorrect_answers;

    for (j = 1; j <= x.length; j++) {
      let incorrectAnswerNode = document.createElement("div");
      incorrectAnswerNode.innerHTML = x[j - 1];
      incorrectAnswerNode.id = "incorrect-answer" + j;
      incorrectAnswerNode.classList.add("answer");
      questionNode.appendChild(incorrectAnswerNode);
      incorrectAnswerNode.addEventListener("click", selectedAnswerFunc);
    }
    let questionSumbitButton = document.createElement("button");
    questionSumbitButton.innerHTML = "Submit Answer";
    questionSumbitButton.classList.add("button");
    questionSumbitButton.id = "subBtn";
    questionNode.appendChild(questionSumbitButton);
    questionSumbitButton.addEventListener("click", myfunc);
  }
};
const getSelectedAnswer = function () {
  return document.querySelector(".selected");
};
const selectedAnswerFunc = function (eventData) {
  let currentlySelectedAnswer = getSelectedAnswer();
  if (currentlySelectedAnswer !== null) {
    currentlySelectedAnswer.classList.remove("selected");
  }

  let clickedAnswerNode = eventData.target;
  clickedAnswerNode.classList.add("selected");
  currentlySelectedAnswer = clickedAnswerNode;
};
const myfunc = function () {
  console.log("it works");
};

window.onload = function () {
  createQuestions();
  myfunc();
  // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
  // HINT: for each question, create a container with the "question"
  // create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
  // when EVERY question has an answer (google for how to get a value from a radio button with JS)
  // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
  // Display first question with a title + radio button
  // when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.
};

// HOW TO calculate the result
// You can do it in 2 ways:
// If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
// If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
