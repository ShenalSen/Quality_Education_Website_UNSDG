document.addEventListener("DOMContentLoaded", function () {
    const questionGroups = document.querySelectorAll('.question-group');
    const totalQuestionGroups = questionGroups.length;
    let currentQuestion = 0;

    const outputContainer = document.getElementById("output-container");
    const outputElement = document.getElementById("output");

    function showNextQuestionGroup() {
        const currentGroup = questionGroups[currentQuestion];
        const currentQuestions = currentGroup.querySelectorAll('.question');
        const currentAnswers = currentGroup.querySelectorAll('.answer');

        let allAnswersFilled = true;

        // Check if any answer is empty
        currentAnswers.forEach((answer, index) => {
            if (answer.value.trim() === '') {
                allAnswersFilled = false;
                // Optionally, you can display a message to indicate that all questions must be answered
                // Example: alert('Please answer all questions.');
                // Or you can customize the validation message based on your UI/UX design
                return; // Exit loop early if an empty answer is found
            }
        });

        if (allAnswersFilled) {
            // Proceed to the next question group only if all answers are filled
            // Display output for the current set of questions
            currentQuestions.forEach((question, index) => {
                const answer = currentAnswers[index].value;
                outputElement.innerHTML += `<p>${question.textContent}: ${answer}</p>`;
            });

            currentGroup.style.display = 'none';
            currentQuestion++;

            if (currentQuestion === totalQuestionGroups) {
                outputContainer.style.display = 'block';
            } else {
                questionGroups[currentQuestion].style.display = 'flex';
            }
        } else {
            // Optionally, you can display a message to indicate that all questions must be answered
            alert('Please answer all questions.');
            // Or you can customize the validation message based on your UI/UX design
        }
    }

    document.getElementById("next-btn").addEventListener("click", function () {
        if (currentQuestion === 0) {
            outputElement.innerHTML = ""; // Clear previous output
        }
        showNextQuestionGroup();
    });

    document.getElementById("next-btn1").addEventListener("click", function () {
        if (currentQuestion === 4 || currentQuestion === 8 || currentQuestion === 12) {
            outputElement.innerHTML = ""; // Clear previous output
        }
        // Show next set of questions
        const nextQuestionGroup = questionGroups[currentQuestion];
        nextQuestionGroup.style.display = 'none';
        currentQuestion++;
        if (currentQuestion === 4 || currentQuestion === 8 || currentQuestion === 12) {
            const nextQuestions = document.getElementById(`next-questions${currentQuestion / 4}`);
            nextQuestions.style.display = 'flex';
        } else if (currentQuestion === totalQuestionGroups) {
            outputContainer.style.display = 'block';
        } else {
            questionGroups[currentQuestion].style.display = 'flex';
        }
    });

    document.getElementById("next-btn2").addEventListener("click", function () {
        if (currentQuestion === 4 || currentQuestion === 8 || currentQuestion === 12) {
            outputElement.innerHTML = ""; // Clear previous output
        }
        // Show next set of questions
        const nextQuestionGroup = questionGroups[currentQuestion];
        nextQuestionGroup.style.display = 'none';
        currentQuestion++;
        if (currentQuestion === 4 || currentQuestion === 8 || currentQuestion === 12) {
            const nextQuestions = document.getElementById(`next-questions${currentQuestion / 4}`);
            nextQuestions.style.display = 'flex';
        } else if (currentQuestion === totalQuestionGroups) {
            outputContainer.style.display = 'block';
        } else {
            questionGroups[currentQuestion].style.display = 'flex';
        }
    });

    document.getElementById("finish-btn").addEventListener("click", function () {
        outputElement.innerHTML = ""; // Clear previous output
        // Gather answers and display them in the output
        questionGroups.forEach(questionGroup => {
            const questions = questionGroup.querySelectorAll('.question');
            const answers = questionGroup.querySelectorAll('.answer');
            questions.forEach((question, index) => {
                const answer = answers[index].value;
                outputElement.innerHTML += `<p>${question.textContent}: ${answer}</p>`;
            });
        });
        document.getElementById("question-container").style.display = 'none';
        outputContainer.style.display = 'block';
    });
});

function confirmSaveChanges() {
    
      alert("All responses are saved.");
      
  }
