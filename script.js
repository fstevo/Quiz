

const questions = [
    {
      question: "How many hours do we have in a day",
        answers: [
            { text: "A. 79", correct: false},
            {text: "B.  60", correct: false},
            {text: "C.  24", correct: true},
            {text: "D.  43", correct: false},
       ]
    },

    {

        question: "What is the name of bootcamp 13 instructor",
        answers:[
            {text: "A.  Drey", correct: true},
         {text: "B. Savy", correct: false},
          {text: "C.    Francis", correct: false},
            {text: "D.  Terra", correct: false},
        ]
     },

    {

      question: "How many weeks will the bootcamp last",
     answers:[
        {text: "A.  6weeks", correct: true},
         {text: "B. 7weeks", correct: false},
      {text: "C.    9weeks", correct: false},
   {text: "D.   12weeks", correct: false},
       ]
     },

     
    {
        question: "How many did codehub scored last week",
       answers:[
         {text: "A, 83", correct: true},
         {text: "B. 100", correct: false},
      {text: "C.    246", correct: false},
       {text: "D.   43", correct: false},
       ]
   }
 ];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");
 var qCount = document.getElementById("qcount");

 let currentQestionIndex = 0;
 let score = 0;

function startQuiz(){
   currentQestionIndex = 0;
     score = 0;
     nextButton.innerHTML = "Next";
     showQuestion();
     }

 function showQuestion(){
   resetState();
         let currentQestion = questions[currentQestionIndex];
        let questionNo = currentQestionIndex + 1;
        
     questionElement.innerHTML = questionNo + ". " + currentQestion.
    question;

     currentQestion.answers.forEach(answer => {
      const  button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
       answerButtons.appendChild(button);
         if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        button.addEventListener("click", selectAnswer); 
    });
   
}

 function resetState(){
    nextButton.style.display = "none";
     while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
   }
 }


   function selectAnswer(e){
     const selectedBtn = e.target;
     const isCorrect = selectedBtn.dataset.correct === "true";
     if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
         selectedBtn.classList.add("incorrect");
     }
    Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");

      }
      button.disabled = true;

    });
    nextButton.style.display = "block";
 }
 
function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}


 function handleNextButton(){
  currentQestionIndex++;
  if(currentQestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }

 };

nextButton.addEventListener("click", ()=>{
  if(currentQestionIndex < questions .length){
    handleNextButton();
  }else{
    startQuiz();
  }
})
 
 resetState();
startQuiz();
