class ViewBookings {
  constructor() {
    this.bookedSlots = null;
    this.staffInfo = null;
    this.dateScheduleObj = null;

    this.getSchedules();
  }

  getSchedules() {
    let schedules;
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/api/schedules');
    request.responseType = 'json';

    request.addEventListener('load', () => {
      schedules = request.response;
      this.bookedSlots = this.findBookedTimeslots(schedules);

      let staffDetailsRequest = new XMLHttpRequest();
      staffDetailsRequest.open('GET', 'http://localhost:3000/api/staff_members');
      staffDetailsRequest.responseType = 'json';

      staffDetailsRequest.addEventListener('load', () => {
        this.staffInfo = staffDetailsRequest.response;
        this.renderDateOptions();
      })

      staffDetailsRequest.send();
    });

    request.send();
  }

  findBookedTimeslots(allSchedules) {
    let bookedTimes = [];

    allSchedules.forEach(scheduleObj => {
      if (scheduleObj.student_email) {
        bookedTimes.push(scheduleObj);
      }
    })

    return bookedTimes;
  }

  renderDateOptions() {
    let listElement = document.querySelector('ul');

    this.bookedSlots.forEach(scheduleObj => {
      let listItem = document.createElement('li');
      listItem.setAttribute('id', scheduleObj.id);
      listItem.textContent = scheduleObj.date;
      listElement.appendChild(listItem);
    })
  }

  displaySchedule(target) {
    let clickedDate = target;
    let scheduleId = target.id;

    let listElement = document.createElement('li');
    listElement.textContent = this.parseScheduleDetails(scheduleId);
    listElement.setAttribute('class', 'schedule-item');
    clickedDate.appendChild(listElement);
  }

  parseScheduleDetails(scheduleId) {
    let schedule = this.findScheduleDetails(scheduleId);
    let staff = this.findStaffName(schedule.staff_id);

    return `${staff} | ${schedule.student_email} | ${schedule.time}`;
  }

  findScheduleDetails(scheduleId) {
    for (let idx = 0; idx < this.bookedSlots.length; idx++) {
      if (this.bookedSlots[idx].id === Number(scheduleId)) {
        return this.bookedSlots[idx];
      }
    }
  }

  findStaffName(staffId) {
    for (let idx = 0; idx < this.staffInfo.length; idx++) {
      if (this.staffInfo[idx].id === staffId) {
        return this.staffInfo[idx].name;
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let bookings = new ViewBookings()

  let dateList = document.querySelector('.date-list');
  dateList.addEventListener('click', event => {
    bookings.displaySchedule(event.target);
  })
})
