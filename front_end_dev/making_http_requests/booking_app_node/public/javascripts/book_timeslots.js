class BookTimeslot {
  constructor() {
    this.availableSlots = null;
    this.staffInfo = null;

    this.getSchedules();
  }

  getSchedules() {
    let schedules;
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/api/schedules');
    request.responseType = 'json';

    request.addEventListener('load', event => {
      schedules = request.response;
      this.availableSlots = this.findAvailableTimeslots(schedules);

      let staffDetailsRequest = new XMLHttpRequest();
      staffDetailsRequest.open('GET', 'http://localhost:3000/api/staff_members');
      staffDetailsRequest.responseType = 'json';

      staffDetailsRequest.addEventListener('load', event => {
        this.staffInfo = staffDetailsRequest.response;
        this.renderTimeslotOptions();
      })

      staffDetailsRequest.send();
    });

    request.send();
  }

  findAvailableTimeslots(allSchedules) {
    let availbleTimes = [];

    allSchedules.forEach(scheduleObj => {
      if (!scheduleObj.student_email) {
        availbleTimes.push(scheduleObj);
      }
    })

    return availbleTimes;
  }

  renderTimeslotOptions() {
    let list = document.querySelector('select');

    this.availableSlots.forEach(scheduleObj => {
      let option = document.createElement('option');
      option.setAttribute('value', scheduleObj.id);
      option.textContent = this.parseTimeslot(scheduleObj);
      list.appendChild(option);
    })
  }

  parseTimeslot(timeslot) {
    let staffName = this.findStaffName(timeslot.staff_id);
    return `${staffName} | ${timeslot.date} | ${timeslot.time}`;
  }

  findStaffName(staffId) {
    for (let idx = 0; idx < this.staffInfo.length; idx++) {
      if (this.staffInfo[idx].id === staffId) {
        return this.staffInfo[idx].name;
      }
    }
  }

  getBookingFormData() {
    let bookingData = {};
    let form = document.querySelector('.create-booking');
    let formInputData = form.elements;

    bookingData["id"] = formInputData.timeslot.value;
    bookingData["student_email"] = formInputData.email.value;

    return bookingData;
  }

  getStudentFormData() {
    let studentData = {};
    let form = document.querySelector('.new-student');
    let formInputData = form.elements;

    studentData["email"] = formInputData.email.value;
    studentData["name"] = formInputData.name.value;
    studentData["booking_sequence"] = formInputData.sequence.value;

    return studentData;
  }

  submitBookingForm() {
    let form = document.querySelector('.create-booking');
    let data = this.getBookingFormData();
    let json = JSON.stringify(data);

    let bookingRequest = new XMLHttpRequest();
    bookingRequest.open('POST', 'http://localhost:3000/api/bookings');
    bookingRequest.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    bookingRequest.addEventListener('load', () => {
      switch (bookingRequest.status) {
        case 204:
          alert("Booked.");
          form.reset();
          break;
        case 404:
          let bookingSequence = this.getBookingSequence(bookingRequest.responseText);
          alert(`Student does not exist; booking_sequence: ${bookingSequence}`);
          this.renderAddStudentForm(data.student_email, bookingSequence);
          this.submitNewStudentForm();
      }
    })

    bookingRequest.send(json);
  }

  submitNewStudentForm() {
    let form = document.querySelector('.new-student');
    form.addEventListener('submit', event => {
      event.preventDefault();

      let data = this.getStudentFormData();
      let json = JSON.stringify(data);

      let studentRequest = new XMLHttpRequest();
      studentRequest.open('POST', 'http://localhost:3000/api/students');
      studentRequest.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      studentRequest.addEventListener('load', () => {
        switch (studentRequest.status) {
          case 201:
            alert('Student added.');
            this.submitBookingForm();
            form.remove();
            break;
          case 400:
            alert(studentRequest.responseText);
        }
      })

      studentRequest.send(json);
    })
  }

  getBookingSequence(response) {
    return response.split(':')[1].trim();
  }

  renderAddStudentForm(email, sequence) {
    let pageBreak = document.createElement('br');
    let form = document.createElement('form')
    form.setAttribute('class', 'new-student');
    let header = document.createElement('h1');
    header.textContent = "Please provide new student details";

    form.appendChild(header);

    let nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = "Name:"
    let nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(pageBreak);

    let emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = "Email:"
    let emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('value', email);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(pageBreak);

    let sequenceLabel = document.createElement('label');
    sequenceLabel.setAttribute('for', 'sequence');
    sequenceLabel.textContent = "Booking sequence:"
    let sequenceInput = document.createElement('input');
    sequenceInput.setAttribute('type', 'text');
    sequenceInput.setAttribute('name', 'sequence');
    sequenceInput.setAttribute('value', sequence);
    form.appendChild(sequenceLabel);
    form.appendChild(sequenceInput);
    form.appendChild(pageBreak);

    let submitBtn = document.createElement('input');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('id', 'submit-student');
    form.appendChild(submitBtn);

    document.body.appendChild(form);
  }


}

document.addEventListener('DOMContentLoaded', () => {
  booking = new BookTimeslot();

  let bookingForm = document.querySelector('.create-booking');
  bookingForm.addEventListener('submit', event => {
    event.preventDefault();

    booking.submitBookingForm();
  });
})
