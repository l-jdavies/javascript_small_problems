class Booking {
  constructor() {
    this.listUI = null;
    this.schedules = null;

    this.createUI();
    this.retrieve_schedules();
  }

  createUI() {
    let div = document.querySelector('.display-schedules');
    let listUI = document.createElement('ul');
    listUI.classList.add('schedule-ui');
    div.appendChild(listUI);
    this.listUI = listUI;
  }

  retrieve_schedules() {
    let request = new XMLHttpRequest();

    request.open('GET', 'http://localhost:3000/api/schedules');
    request.timeout = 6000;
    request.responseType = 'json';

    request.addEventListener('load', event => {
      let schedules = request.response;
      let staffCount = {};

      schedules.forEach(json => {
        if (!staffCount[json.staff_id] && json.student_email === null) {
          staffCount[json.staff_id] = 1;
        } else if (staffCount[json.staff_id] && json.student_email === null) {
          staffCount[json.staff_id] = staffCount[json.staff_id] + 1;
        } else if (!staffCount[json.staff_id] && (!json.student_email === null)) {
          staffCount[json.staff_id] = 0;
        }
      });

      Object.keys(staffCount).forEach(staff => {
        if (staffCount[staff] === 0) {
          this.display_schedules(`Staff member ${staff} has no bookings available.`);
        } else {
          this.display_schedules(`Staff member ${staff} has ${staffCount[staff]} bookings available.`);
        }
      })

      this.schedules = schedules;
    });

    request.addEventListener('timeout', event => {
      alert('The request is taking longer than usual. Please try again later.')
    });

    request.addEventListener('loadend', event => {
      alert('The request has completed successfully.');
    })

    request.send();
  }

  display_schedules(text) {
    let list = document.querySelector('.schedule-ui');
    let listItem = document.createElement('li');

    listItem.textContent = text;
    list.appendChild(listItem);
  }
}



document.addEventListener('DOMContentLoaded', () => {
  let booking = new Booking();
})
