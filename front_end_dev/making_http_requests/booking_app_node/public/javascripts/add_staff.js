class NewStaff {
  constructor() {
    this.submit_form();
  }

  submit_form() {
    let form = document.querySelector('form');

    form.addEventListener('submit', event => {
      event.preventDefault();

      // sends form data as multipart - my solution doesn't convert it into json
      let staff = new FormData(form);

      let request = new XMLHttpRequest();
      request.open('POST', "http://localhost:3000/api/staff_members");

      request.addEventListener('load', () => {
        if (request.status === 201) {
          let data = JSON.parse(request.response);
          alert(`A new member of staff was added with an id of ${data["id"]}.`)
        } else {
          alert(request.response);
        }

        form.reset();
      })

      request.send(staff);
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let newStaff = new NewStaff();
})
