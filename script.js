const questions=[
    {
        questions: "Do you like peer learning",
        answers :[
            {text: "It is used to structure document", correct:true},
            {text: "It is a modelling language", correct:false},
            {text: "It is a scripting language", correct:false},
            {text: "It is a partial programming language", correct:false},
            
        ]
    },
    {
        questions: "Which browser can supports the transition property?",
        answers:[
            {text: "Internet Explorer 10", correct:false},
            {text: "Firefox", correct:false},
            {text: "Chrome", correct:false},
            {text: "All of the above", correct:true},
        ]
    },
    {
        questions: "What do you add to a template in order to control where page content goes?",
        answers:[
            {text: "Text Frames", correct:false},
            {text: " HTML Controllers", correct:false},
            {text: "Page Content Controllers", correct:true},
            {text: "Editable Regions", correct:false},
            
        ]
    },
    {
        questions: "Which of the following is NOT a Style?",
        answers:[
            {text: "Linked", correct:false},
            {text: "Orthogonal", correct:true},
            {text: "Embedded", correct:false},
            {text: "Inline", correct:false},
            
        ]
    },
];

const questionElement=document.getElementById("questions");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-butn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
     score=0;
     nextButton.innerHTML="Next";
     showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.
    questions;

    currentQuestion.answers.forEach(answers => {
        const button=document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("butn");
        answerButton.appendChild(button);
        if(answers.correct){
            button.dataset.correct= answers.correct
        }
        button.addEventListener("click",selectAnswer);

        
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect=selectedBtn.dataset.correct==="true"
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play again";
    nextButton.style.display="block "
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz(); 
    }
});
startQuiz();
