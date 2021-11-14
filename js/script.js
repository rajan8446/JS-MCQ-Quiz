const quizDB = [
    {
        question: "Q1: what is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans:"ans4"
    },
    {
        question: "Q2: what is the full form of css?",
        a: "Cascading  Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        D: "Cascading Super Sheets",
        ans:"ans1"
    },
    {
        question: "Q3: what is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer protocol",
        d: "Hypertext Transfer Protocol",
        ans:"ans4"
    },
    {
        question: "Q4: what is the full form of js",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShopes",
        ans:"ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

   question.innerText = questionList.question;

   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;
} 
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

     deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML=`<h3> Your Scored: ${score}/${quizDB.length}✌️</h3> 
        <diV class="ctn"><button class="btn" onclick="location.reload()">Play Again </button></div>
        `;

        showScore.classList.remove('scoreArea');
    }
});