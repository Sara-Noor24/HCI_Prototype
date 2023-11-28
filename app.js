const startButton = document.getElementById('startTestButton');
const contentContainer = document.getElementById('content');
const questionPageOne = document.getElementById('questionPage1');
const pairwords1 = document.getElementById('pairwords1');
const pairwords2 = document.getElementById('pairwords2');
const nextq = document.getElementById('nextq');

pairwords1_testwords = ["lake", "dust", "house", "dog","mat", "book", "soup", "jeep", "bottle", "water"]
pairwords1_answers = ["plug", "flight", "table", "leaf","drink", "coffee", "straw", "pen", "clip", "tree"]
const randomNumber = Math.floor(Math.random() * 2) + 1;
// Add a click event listener to the button
startButton.addEventListener('click', function() {
    // Remove all content from the container
    contentContainer.innerHTML = '';

    // Display the first question
    questionPageOne.style.display = 'block';

    if (randomNumber == 1){
        pairwords1.style.display = "block";
        nextq.style.display = "block";
    }else{
        pairwords2.style.display = "block";
        nextq.style.display = "block";
    }

});

nextq.addEventListener('click', function() {
    questionPageOne.innerHTML = '';
    const randomWordNumber = Math.floor(Math.random()*10);
    const randomWord = pairwords1_testwords[randomWordNumber];
    console.log(randomWord, randomWordNumber);
    const questionText = document.createElement('p');
    questionText.textContent = randomWord;
    contentContainer.appendChild(questionText);

})