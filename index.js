const questionsAndAnswers = [{
    question: "Where does the term bug originate from in coding?",
    answers: ["trees", "A Bugs Life", "problem", "a bug crawling into a computer and breaking it"],
    answerPosition: 3,
},
{
    question: "Which data structure uses key-value pairs?",
    answers: ["string", "object", "array", "locksmith"],
    answerPosition: 1,
},
{
    question:"What type of variable is a number",
    answers:["string","integer","array","object"],
    answerPosition: 1
},
{
    question:"Which form of javascript logic is inspired by fractals",
    answers:["iteration","for loops","map","recursion"],
    answerPosition:2
},
{
    question:"What method can be used to search text for patterns",
    answers:["RegEx","google","loops","filter"],
    answerPosition:0
}
]

let questionPosition = 0

const a1Getter = document.getElementById("a1")
const a2Getter = document.getElementById("a2")
const a3Getter = document.getElementById("a3")
const a4Getter = document.getElementById("a4")
const questionGetter = document.getElementById("question")

const progressListGetter = document.getElementById("progress-list")
console.dir(progressListGetter)

const nameSetter = document.getElementById("submit-name")
let name = document.getElementById("name")

function setAllProgressTextToWhite(){
    var progressItems = progressListGetter.children
    console.dir(progressItems)
    for (let i = 0; i < progressItems.length; i++){
        progressItems[i].style.color = 'white';
    }
}

setAllProgressTextToWhite()
setCurrentProgressToGold()


function fillInQuestionsAndAnswer(questionAndAnswersObject) {
    console.dir(questionAndAnswersObject.answers[0])
    a1Getter.textContent = questionAndAnswersObject.answers[0]
    a2Getter.textContent = questionAndAnswersObject.answers[1]
    a3Getter.textContent = questionAndAnswersObject.answers[2]
    a4Getter.textContent = questionAndAnswersObject.answers[3]
    questionGetter.textContent = questionAndAnswersObject.question

}

function setCurrentProgressToGold(){
    var progressItems = progressListGetter.children
    console.dir(questionPosition)
    progressItems[progressItems.length-questionPosition-1].style.color='gold'
}

fillInQuestionsAndAnswer(questionsAndAnswers[0])

function pickAnswer(theirAnswerIndex, answerBox) {
    if (theirAnswerIndex === questionsAndAnswers[questionPosition].answerPosition){
        console.dir("correct")
        setScore()
        if(questionPosition === questionsAndAnswers.length-1){
            console.dir("you win")
        }
        else{
            fillInQuestionsAndAnswer(questionsAndAnswers[++questionPosition])

        }
        answerBox.style.backgroundColor = 'Green'
        setAllProgressTextToWhite()
        setCurrentProgressToGold()
    }
    else{
        answerBox.style.backgroundColor = 'red'
    }
}

function feedback() {
    //add event listener here
}



function getName() {
    const documentName = document.getElementById("name")
    console.dir(documentName.value)
}

function setScore() {
    const scoreDocument = document.getElementById("score")
    scoreDocument.textContent = questionPosition + 1;
}

nameSetter.addEventListener("click", (mouseEvent) => {
    getName();
});

function changeAnswerTable(answerBox, color) {
    answerBox.style.backgroundColor = color
}

console.dir(a1Getter)


a1Getter.addEventListener("click", (mouseEvent) => {
    pickAnswer(0, a1Getter)
});
a2Getter.addEventListener("click", (mouseEvent) => {
    pickAnswer(1, a2Getter)
});
a3Getter.addEventListener("click", (mouseEvent) => {
    pickAnswer(2, a3Getter)
});
a4Getter.addEventListener("click", (mouseEvent) => {
    pickAnswer(3, a4Getter)
});
a1Getter.addEventListener("mouseover", (mouseEvent) => {
    changeAnswerTable(a1Getter,'gold')
});
a2Getter.addEventListener("mouseover", (mouseEvent) => {
    changeAnswerTable(a2Getter,'gold')
});
a3Getter.addEventListener("mouseover", (mouseEvent) => {
    changeAnswerTable(a3Getter,'gold')
});
a4Getter.addEventListener("mouseover", (mouseEvent) => {
    changeAnswerTable(a4Getter,'gold')
});
a1Getter.addEventListener("mouseleave", (mouseEvent) => {
    changeAnswerTable(a1Getter,'rgb(22, 19, 85)')
});
a2Getter.addEventListener("mouseleave", (mouseEvent) => {
    changeAnswerTable(a2Getter,'rgb(22, 19, 85)')
});
a3Getter.addEventListener("mouseleave", (mouseEvent) => {
    changeAnswerTable(a3Getter,'rgb(22, 19, 85)')
});
a4Getter.addEventListener("mouseleave", (mouseEvent) => {
    changeAnswerTable(a4Getter,'rgb(22, 19, 85)')
});