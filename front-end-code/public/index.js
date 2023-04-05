const surveyQuestion = [
  {
    question:"Which of this games would you play?",
    answer: ["Dead Space", "Start Wars", "Resident evil", "The Legend of Zelda"],
    answer: ""
  }, {
    question:"What is your favorite game?",
    // answer: ["Dead Space", "Start Wars", "Resident evil", "The Legend of Zelda"],
    answer: ""
  }, {
    question:"How often do you play games?",
    answer: ["Every day", "Every Week", "Every two week", "Every month"],
    answer: ""
  }, {
    question:"What is your favorite type of game genre ?",
    answer: ["Action games", "Fighting games", "Battle royale games", "Racing games"],
    answer: ""
  }, {
    question:"What is your Favorite gaming accessory ?",
    answer: ["A gaming headset", "An Ergonomic Chair", "A set of Stereo Speakers", "A High-Resolution Monitor"],
    answer: ""
  }, {
    question:"Have you ever played a game for more that 24 hours straight?",
    answer: ["Yes", "No"],
    answer: ""
  }, {
    question:"What was the first game you ever played ?",
    // answer: ["Dead Space", "Start Wars", "Resident evil", "The Legend of Zelda"],
    answer: ""
  }, {
    question:"Do you Prefer to play in a console or in a PC gaming ?",
    answer: ["Console", "PC Gaming"],
    answer: ""
  }, {
    question:"Have you ever played a game for more that 24 hours straight ?",
    answer: ["Yes", "No"],
    answer: ""
  }, {
    question:"Have you ever conpleted a game 100% ?",
    answer: ["Yes", "No"],
    answer: ""
  },
];


let currentSurQuestion = 0;

function Question() {
    const  currentQuestion= surveyQuestion[currentQuestion]
    const answerBtn = currentQuestion.answer.map(answer => `<label><imput type='checkbox' name='answer' value='${answer}'>${answer}</label>`).join('')
    const element = document.getElementById('questions__container')
    // const  question = document.getElementById('question')
    element.innerHTML = `
    <h2>${currentQuestion.question}<h2>
    <form>
      ${answerBtn}
      <button type="submit">Next</button>`;

      document.body.appendChild(element);
      const transitionqs = document.getElementById('questions__container');
      transitionqs.style.transition = "opacity 0.5s";
      transitionqs.style.opacity = 0;
      transitionqs.style.position = "absolute";
      transitionqs.style.top= "50%";
      transitionqs.style.left= "50%"
      transitionqs.style.transform= "translate(-50%, -50%)";
      transitionqs.style.innerHTML= `<h2>${surveyQuestion[currentQuestion +1].question}<h2>
      <form>
      ${surveyQuestion[currentQuestion +1].answer.map( answer => `<label><input type='checkbox' name='answer' value ='${answer}'>${answer}</label>`).join("")}
      <button type= "submit">Next</button>
      </form>`;

      element.appendChild(transitionqs);
      element.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();

        const selectedAnswer = document.querySelector("input[name='answer']: checked");
        if(selectedAnswer) {
            currentQuestion.answer = selectedAnswer.value;
            element.style.opacity = 0;
            setTimeout( () => {
                element.remove();
                currentQuestion++;
                if(currentQuestion < surveyQuestion.length) {
                    document.body.appendChild(transitionqs);
                    setTimeout( () => {
                        transitionqs.style.opacity = 1;
                        setTimeout( () => {
                            Question();
                        }, 500);
                    },500);
                } else{ 
                    console.log("Thanks to complete the survey!");
                    console.log(surveyQuestion);
                }
            }, 500);
        } else{
            alert("Please answer the question");
    }
      });
}


Question()