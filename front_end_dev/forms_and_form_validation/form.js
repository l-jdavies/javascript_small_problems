document.addEventListener('DOMContentLoaded', () => {
  let messageElement;
  let form = document.querySelector('form');
  let formMessage = form.querySelector('.form_message');
  let allInputElements = Array(...document.querySelectorAll('input'));
  let nameInputElements = Array(...document.querySelectorAll("[name*=_name]"));
  let allCreditCardInputElements = Array(...document.querySelectorAll("[name=credit_card]"));

  allInputElements.forEach(element => {
    element.addEventListener('focus', (event) => {
      let inputElement = event.currentTarget;

      removeErrorMessage(inputElement);
      inputElement.style.border = 'solid 1px black';
    });
  });

  allInputElements.forEach(element => {
    element.addEventListener('blur', (event) => {
      let inputElement = event.currentTarget;

      if (!inputElement.checkValidity()) {
        outputErrorMessage(inputElement);
      }
    });
  });

  allInputElements.forEach(element => {
    element.addEventListener('invalid', (event) => {
      let inputElement = event.currentTarget;

      inputElement.style.border = 'solid 1px red';
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();


    if (anyInvalidFormInputs()) {
      formMessage.textContent = 'Fix errors before submitting this form.';
    } else {
      formMessage.textContent = "";
      displayFormData();
    }

  });

  nameInputElements.forEach(element => {
    element.addEventListener('keypress', (event) => {
      if (!event.key.match(/[a-zA-Z]/g)) {
        event.preventDefault(); // prevent default behaviour of entering key value
      }
    })
  })

  allCreditCardInputElements.forEach(element => {
    element.addEventListener('keypress', (event) => {
      if (!event.key.match(/\d/g)) {
        event.preventDefault(); // prevent default behaviour of entering key value
      }
    })
  });

  allCreditCardInputElements.forEach(element => {
    element.addEventListener('keyup', (event) => {
      let currentInput = event.currentTarget;
      if (currentInput.id !== 'cd4' && currentInput.value.length === currentInput.maxLength) {
        moveToNextInput(currentInput);
      }
    })
  })

  function displayFormData() {
    let dataDiv = document.querySelector('.form_data');
    let data = getEncodedFormDataArr();
    data = joinCreditCardData(data);
    data = data.join('&');

    let dataHTML = document.createElement('p');
    dataHTML.textContent = data;

    dataDiv.appendChild(dataHTML);
  }

  function joinCreditCardData(dataArr) {
    let temp = [];

    dataArr.forEach(str => {
      if (str.match(/credit_card/g)) {
        temp.push(str.replace(/credit_card=/g, ''));
      }
    })

    let creditCardRemoved = dataArr.filter(str => !str.match(/credit_card/g));
    let creditStr = temp.join('');
    creditCardRemoved.push(`credit_card=${creditStr}`);

    return creditCardRemoved;
  }

  function getEncodedFormDataArr() {
    return Array(...document.querySelectorAll('input')).map(inputEle => {
      let uri = encodeURIComponent(inputEle.value);
      return `${inputEle.name}=${uri}`
    });
  }

  function moveToNextInput(input) {
    let nextCreditInput;
    let tempElement = input;

    while (nextCreditInput === undefined) {
      if (tempElement.nextElementSibling.id.match(/cd/g)) {
        nextCreditInput = tempElement.nextElementSibling;
      } else {
        tempElement = tempElement.nextElementSibling;
      }
    }

    nextCreditInput.focus();
  }

  function anyInvalidFormInputs() {
    for (let idx = 0; idx < allInputElements.length; idx++) {
      if (!allInputElements[0].checkValidity()) {
        return true;
      }
    }

    return false;
  }

  function inputRequiredMessage(input) {
    messageElement = input.parentElement.querySelector('.message');
    messageElement.textContent = `${input.labels[0].textContent} is required.`
  }

  function removeErrorMessage(input) {
    messageElement = input.parentElement.querySelector('.message');
    messageElement.textContent = ""
  }

  function invalidFormatMessage(input) {
    messageElement = input.parentElement.querySelector('.message');

    if (input.name === 'password') {
      messageElement.textContent = 'Password must have at least 10 characters.'
    } else if (input.name === 'email') {
      messageElement.textContent = 'Enter a valid email address.'
    }
  }

  function outputErrorMessage(input) {
    let invalidMessage = input.validationMessage; // property from constraint validation API

    switch (invalidMessage) {
      case 'Please fill in this field.':
        inputRequiredMessage(input);
        break;
      case 'Please match the format requested.':
        invalidFormatMessage(input);
    }
  }
})
