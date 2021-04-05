class Quiz {
  constructor() {
    this.questions = null;
    this.answerKey = null;
    this.questionTemplate = null;

    this.setQuestionsAndAnswers();
    this.cacheQuestionTemplate();
    this.displayQuestions();
    this.bindEvents();
  }

  bindEvents() {
    let form = document.querySelector('form');

    this.submitHandler = (event) => this.answersSubmitted(event);
    this.resetHandler = (event) => this.resetAnswers(event);

    form.addEventListener('submit', this.submitHandler);
    form.addEventListener('reset', this.resetHandler);
  }

  resetAnswers(event) {
    event.preventDefault();
    document.querySelector('form').reset();

    let allQuestionDivs = Array(...document.querySelectorAll('.question'));
    allQuestionDivs = allQuestionDivs.map(div => div.querySelector('.result'));
    allQuestionDivs.forEach(resultElement => {
      resultElement.classList.remove('correct');
      resultElement.classList.remove('incorrect');
      resultElement.textContent = '';
    })
  }

  answersSubmitted(event) {
    event.preventDefault();

    Array(...document.querySelectorAll('.question')).forEach(question => {
      this.renderResult(question);
    })
  }

  renderResult(questionDiv) {
    let resultElement = questionDiv.querySelector('.result');
    let result = this.analyseInput(questionDiv);

    resultElement.textContent = result;
  }

  analyseInput(questionDiv) {
    let questionId = questionDiv.getAttribute('data-id');
    let userAnswer = questionDiv.querySelector('input:checked');
    let correctAnswer = this.answerKey[questionId];

    if (userAnswer === null) {
      this.renderIncorrectBorder(questionDiv)
      return this.noAnswerGiven(correctAnswer);
    } else if (userAnswer.value === correctAnswer) {
      this.renderCorrectBorder(questionDiv);
      return this.correctAnswerSelected();
    } else {
      this.renderIncorrectBorder(questionDiv);
      return this.incorrectAnswerSelected(correctAnswer);
    }
  }

  renderIncorrectBorder(div) {
    let resultElement = div.querySelector('.result');
    resultElement.classList.add('incorrect');
  }

  renderCorrectBorder(div) {
    let resultElement = div.querySelector('.result');
    resultElement.classList.add('correct');
  }

  correctAnswerSelected() {
    return "Correct Answer"
  }

  noAnswerGiven(answer) {
    return `You didn't answer this question. Correct answer is: "${answer}".`
  }

  incorrectAnswerSelected(answer) {
    return `Wrong answer. The correct answer is: "${answer}".`
  }

  setQuestionsAndAnswers() {
    this.questions = [
      {
        id: 1,
        description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
        options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
      },
      {
        id: 2,
        description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
        options: ['66', '13', '111', '42'],
      },
      {
        id: 3,
        description: 'What is Pan Galactic Gargle Blaster?',
        options: ['A drink', 'A machine', 'A creature', 'None of the above'],
      },
      {
        id: 4,
        description: 'Which star system does Ford Prefect belong to?',
        options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
      },
    ];

    this.answerKey = {'1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse'};
  }

  displayQuestions() {
    this.questions.forEach(question => {
      document.querySelector('fieldset').insertAdjacentHTML('beforeend', this.questionTemplate(question));
    })
  }

  cacheQuestionTemplate() {
    let template = Handlebars.compile(document.querySelector('#question_template').innerHTML);
    this.questionTemplate = template;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Quiz();
})
