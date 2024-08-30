let questionCount = 0;

function addQuestion() {
    questionCount++;
    const questionContainer = document.getElementById('questionContainer');

    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    questionDiv.id = question-${questionCount};

    const questionLabel = document.createElement('label');
    questionLabel.innerText = Question ${questionCount}:;
    questionDiv.appendChild(questionLabel);

    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.placeholder = 'Enter your question';
    questionInput.className = 'question-input';
    questionDiv.appendChild(questionInput);

    const optionInput1 = document.createElement('input');
    optionInput1.type = 'text';
    optionInput1.placeholder = 'Option 1';
    optionInput1.className = 'option-input';
    questionDiv.appendChild(optionInput1);

    const optionInput2 = document.createElement('input');
    optionInput2.type = 'text';
    optionInput2.placeholder = 'Option 2';
    optionInput2.className = 'option-input';
    questionDiv.appendChild(optionInput2);

    const optionInput3 = document.createElement('input');
    optionInput3.type = 'text';
    optionInput3.placeholder = 'Option 3';
    optionInput3.className = 'option-input';
    questionDiv.appendChild(optionInput3);

    const optionInput4 = document.createElement('input');
    optionInput4.type = 'text';
    optionInput4.placeholder = 'Option 4';
    optionInput4.className = 'option-input';
    questionDiv.appendChild(optionInput4);

    questionContainer.appendChild(questionDiv);
}
function generateQuiz() {
  const quizContainer = document.getElementById('quizContainer');
  quizContainer.innerHTML = '';
  
  for (let i = 1; i <= questionCount; i++) {
    const question = document.getElementById(`question-${i}`);
    const quizQuestion = document.createElement('div');
    quizQuestion.className = 'quiz-question';
    
    const quizQuestionLabel = document.createElement('label');
    quizQuestionLabel.innerText = `Question ${i}:`;
    quizQuestion.appendChild(quizQuestionLabel);
    
    const quizQuestionInput = document.createElement('p');
    quizQuestionInput.innerText = question.querySelector('.question-input').value;
    quizQuestion.appendChild(quizQuestionInput);
    
    const options = question.querySelectorAll('.option-input');
    const quizOptions = document.createElement('ul');
    options.forEach((option, index) => {
      const quizOption = document.createElement('li');
      quizOption.innerText = `Option ${index + 1}: ${option.value}`;
      quizOptions.appendChild(quizOption);
    });
    quizQuestion.appendChild(quizOptions);
    
    quizContainer.appendChild(quizQuestion);
  }
}


