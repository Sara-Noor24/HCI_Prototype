//grabbing items from index.html
const startButton = document.getElementById('startTestButton');
const contentContainer = document.getElementById('content');
const questionPageOne = document.getElementById('questionPage1');
const pairwords1 = document.getElementById('pairwords1');
const pairwords2 = document.getElementById('pairwords2');
const nextq = document.getElementById('nextq');
const allContent = document.getElementById('allContent');

//creating vaiables for question 1 - 3 (word/memory question)
pairwords1_testwords = ["lake", "dust", "house", "dog","mat", "book", "soup", "jeep", "bottle", "water"]
pairwords1_answers = ["plug", "flight", "table", "leaf","drink", "coffee", "straw", "pen", "clip", "tree"]
pairwords2_testwords = ["glass", "phone", "chair", "card","bird", "school ", "shoe", "sudan", "desk", "lemon"]
pairwords2_answers = ["napkin", "flight", "bag", "spoon","ring", "clip", "pen", "coat", "cracker", "tree"]
// random number to choose from list one or list 2
const randomNumber = Math.floor(Math.random() * 2) + 1;

//action button to start test and display list of word pairs
startButton.addEventListener('click', function() {
    // Remove all content from the container
    contentContainer.innerHTML = '';

    questionPageOne.style.display = 'block';

    if (randomNumber == 1){
        pairwords1.style.display = "block";
        nextq.style.display = "block";
    }else{
        pairwords2.style.display = "block";
        nextq.style.display = "block";
    }

});

// action button to move on from list of words to first question
nextq.addEventListener('click', function() {
    questionPageOne.innerHTML = '';
    let wordlist = []
    let anslist = []
    if (randomNumber == 1){
        wordlist = pairwords1_testwords
        anslist = pairwords1_answers
    }else{
        wordlist = pairwords2_testwords
        anslist = pairwords2_answers
    }
    generateWordPairQuestion(wordlist, anslist);
    generateWordPairQuestion(wordlist, anslist);
    generateWordPairQuestion(wordlist, anslist);

})


//fucntion to generate question (format of questions 1-3)
function generateWordPairQuestion(wordlist, answerList){
    const questionIndex = Math.floor(Math.random()*10);
    const randomWord = wordlist[questionIndex];
    console.log(randomWord, questionIndex);

    const prompt = document.createElement('p');
    prompt.textContent = "Given the word below choose its correct pair.";
    contentContainer.appendChild(prompt);

    //display the word being asked 
    const questionText = document.createElement('p');
    questionText.innerHTML = `<strong>${randomWord}</strong>`;
    contentContainer.appendChild(questionText);
    const correctAnswer = answerList[questionIndex];

    const line = document.createElement('hr');
    contentContainer.appendChild(line);
    const incorrectOptions = answerList
        .filter(word => word !== correctAnswer)
        .sort(() => Math.random() - 0.5)
        .slice(0,3);

    const options = [correctAnswer, ...incorrectOptions].sort(() => Math.random() - 0.5);

    for (let i = 0; i < options.length; i++){
        const space = document.createElement('p');
        space.textContent = '       ';
        const button = document.createElement('button');
        button.innerHTML = `${options[i]}`;
        button.classList.add('optionButton');
        button.addEventListener('click', () => checkAnswer(options[i], correctAnswer));
        contentContainer.appendChild(button);
        contentContainer.appendChild(space);
    }
}
let questionsCompleted = 0;
//check if answer clicked is correct
function checkAnswer(answer, correctAnswer) {
    if(answer == correctAnswer){
        console.log("correct");
    }else{
        console.log("incorrect");
    }
    questionsCompleted++;
    if (questionsCompleted == 3){
        allContent.innerHTML = '';
    }
}

function startQuestion2(){

}