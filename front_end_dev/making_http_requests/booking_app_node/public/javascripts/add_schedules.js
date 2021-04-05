class AddSchedules {
  constructor(staff) {
    this.staff = staff;
    this.scheduleNumber = 0;

    this.renderAddSchedule();
  }

  renderAddSchedule() {
    this.scheduleNumber += 1;
    let formDiv = document.querySelector('.schedules');

    let container = document.createElement('fieldset');
    let label = document.createElement('legend');
    label.textContent = `Schedule ${this.scheduleNumber}`;

    container.appendChild(label);
    formDiv.appendChild(container);

    let dl = document.createElement('dl');
    let dtStaff = document.createElement('dt');
    let dtStaffLabel = document.createElement('label');
    dtStaffLabel.setAttribute('for', 'staff-name');
    dtStaffLabel.textContent = 'Staff Name :';
    let ddStaff = document.createElement('dd');
    let ddStaffList = document.createElement('select');
    ddStaffList.setAttribute('id', `staff_${this.scheduleNumber}`);
    ddStaffList.setAttribute('name', `staff_${this.scheduleNumber}`);


    this.staff.forEach(staffObj => {
      let option = document.createElement('option');
      option.setAttribute('value', staffObj.id);
      option.textContent = staffObj.name;
      ddStaffList.appendChild(option);
    })

    container.appendChild(dl);
    dtStaff.appendChild(dtStaffLabel);
    dl.appendChild(dtStaff);
    ddStaff.appendChild(ddStaffList);
    dl.appendChild(ddStaff);

    let dtDate = document.createElement('dt');
    let dtDateLabel = document.createElement('label');
    dtDateLabel.setAttribute('for', 'date');
    dtDateLabel.textContent = 'Date :';
    let ddDate = document.createElement('dd');
    let ddDateInput = document.createElement('input');
    ddDateInput.setAttribute('type', 'text');
    ddDateInput.setAttribute('id', `date_${this.scheduleNumber}`);
    ddDateInput.setAttribute('name', `date_${this.scheduleNumber}`);
    ddDateInput.setAttribute('placeholder', 'mm-dd-yyyy');

    dtDate.appendChild(dtDateLabel);
    ddDate.appendChild(ddDateInput);
    dl.appendChild(dtDate);
    dl.appendChild(ddDate);

    let dtTime = document.createElement('dt');
    let dtTimeLabel = document.createElement('label');
    dtTimeLabel.setAttribute('for', 'time');
    dtTimeLabel.textContent = 'Time :';
    let ddTime = document.createElement('dd');
    let ddTimeInput = document.createElement('input');
    ddTimeInput.setAttribute('type', 'text');
    ddTimeInput.setAttribute('id', `time_${this.scheduleNumber}`);
    ddTimeInput.setAttribute('name', `time_${this.scheduleNumber}`);
    ddTimeInput.setAttribute('placeholder', 'hh:mm');

    dtTime.appendChild(dtTimeLabel);
    ddTime.appendChild(ddTimeInput);
    dl.appendChild(dtTime);
    dl.appendChild(ddTime);
  }

  getFormData() {
    let scheduleObj = {schedules: []};
    let form = document.querySelector('form');
    let formInputData = form.elements;

    for (let currentSchedule = 1; currentSchedule <= this.scheduleNumber; currentSchedule++) {
      let tempObj = {};
      tempObj['staff_id'] = formInputData[`staff_${currentSchedule}`].value;
      tempObj['date'] = formInputData[`date_${currentSchedule}`].value;
      tempObj['time'] = formInputData[`time_${currentSchedule}`].value;
      scheduleObj.schedules.push(tempObj);
    }
    return scheduleObj;
  }

  submitSchedules() {
    let data = this.getFormData();
    let json = JSON.stringify(data);

    let request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/api/schedules')
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    request.addEventListener('load', () => {
      if (request.status === 201) {
        alert('Schedules added');
      } else {
        alert('Check your inputs');
      }
    });

    request.send(json);
  }
}


/*
"schedules": [
  {
    "staff_id": 1,
    "date": "10-10-10",
    "time": "12:12"
  }
]
*/


// create an object where each key is a staff ID and the value is an object, with a name property and 
// available date property, which references an array of dates that the staff member is available   

document.addEventListener('DOMContentLoaded', () => {
  let staff;
  let form = document.querySelector('form');

  let requestStaff = new XMLHttpRequest();
  requestStaff.open('GET', 'http://localhost:3000/api/staff_members');
  requestStaff.responseType = 'json';
  requestStaff.addEventListener('load', event => {
    staff = requestStaff.response;
  });

  requestStaff.send();

  requestStaff.addEventListener('loadend', () => {
    let addSchedules = new AddSchedules(staff);

    let moreSchedules = document.querySelector('#btnAdd');
    moreSchedules.addEventListener('click', event => {
      event.preventDefault();
      addSchedules.renderAddSchedule();
    })

    form.addEventListener('submit', event => {
      event.preventDefault();
      addSchedules.submitSchedules();
    })

  })
})
