Implement the markup and JavaScript for booking a schedule. Be sure to check out the documentation on the requirements for a booking.

In the event that the student who's booking the appointment isn't in the database, you must provide a way for the user to create the student, and then automatically proceed with the booking once the student is successfully created.

Assume that only one schedule at a time can be booked.

## Plan
* Need to retrieve the list of available schedules from `/api/schedules`, which returns the following json:
```JavaScript
[{"id":1,"staff_id":1,"student_email":null,"date":"07-01-18","time":"06:10"},{"id":2,"staff_id":1,"student_email":null,"date":"07-02-18","time":"06:20"},{"id":3,"staff_id":1,"student_email":"marquise@jacobi.info","date":"07-03-18","time":"06:30"},{"id":4,"staff_id":2,"student_email":null,"date":"08-01-18","time":"07:10"},{"id":5,"staff_id":2,"student_email":"keaton@morar.io","date":"08-02-18","time":"07:20"},{"id":6,"staff_id":3,"student_email":null,"date":"09-01-18","time":"08:10"},{"id":7,"staff_id":3,"student_email":"aniya@dachkuphal.biz","date":"09-02-18","time":"08:20"},{"id":8,"staff_id":3,"student_email":null,"date":"09-03-18","time":"08:30"},{"id":9,"staff_id":3,"student_email":null,"date":"09-04-18","time":"08:40"}]
```
* Note this is a collection of objects.
* Available schedules are the ones where the `student_email` has a value of `null`
* Need to parse the data so the available schedules are displayed as `staff_name | date | time` in a drop down list
* Need an email input for the student email
* Need to handle three potential scenarios when the form is submitted:
  * Form is successfully submitted (response status = `204`)
    * Alert that the booking has been created
  * Response contains the error response `'Schedule is either booked or does not exist.'`
    * Alert an error (shouldn't need to handle this one because I'll only display available schedules)
  * Response contains the error `'Student does not exist; booking_sequence: {sequence}'`
    * Need to render form for creating a new student
      * Need to use booking sequence from response
    * Handle any potential errors from this form
    * Once student is created, create the booking
* Need to reset the form once the booking has been successfully created
