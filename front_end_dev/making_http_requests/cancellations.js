// Implement two functions: one for cancelling schedules and the other for cancelling of bookings. The functions take a scheduleId and a bookingId as arguments respectively.

function cancelSchedule(scheduleId) {
  let request = new XMLHttpRequest();
  let path = 'http://localhost:3000/api/schedules' + `/${scheduleId}`;
  request.open('DELETE', path);
  request.addEventListener('load', () => {
    switch (request.status) {
      case 204:
        alert('Schedule removed.');
        break;
      default:
        alert(request.responseText);
    }
  })

  request.send();
}

function cancelBooking(bookingId) {
  let request = new XMLHttpRequest();
  let path = 'http://localhost:3000/api/bookings' + `/${bookingId}`;
  request.open('PUT', path);
  request.addEventListener('load', () => {
    switch (request.status) {
      case 204:
        alert('Booking cancelled.');
        break;
      default:
        alert(request.responseText);
    }
  })

  request.send();
}
