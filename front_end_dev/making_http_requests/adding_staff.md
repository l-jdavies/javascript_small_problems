Implement a form for adding new staff, and then use the booking app API to add the staff to the database. Your implementation should handle the different possible responses of the server and inform the user of the outcome.

* Need to implement form HTML
  * implement css
  * - form has a border
  * - text is bold and pink
  * - button is pink

* If user tries to submit form without both name and email fields complete then alert an error
* If form is completed correctly, alert the staff id number

* New staff members are created using route `/api/staff_members`
* Will need to send a POST request
* If successful, response will be { id: xx }
* If failed, response will be `'Staff can not be created. Check your inputs.'`
* This means I need to alert the response
