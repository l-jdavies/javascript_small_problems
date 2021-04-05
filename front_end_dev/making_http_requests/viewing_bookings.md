Implement the markup and JavaScript to view bookings made by students. The view for bookings should have two levels of detail. The first level shows only a list of dates that have bookings. the second level becomes visible only when a date is clicked and shows a nested list of booking details for the data. Details include the staff name, student email address, and the time booked.

## Plan
* Retrieve all schedules from `/api/schedules` (reuse function from previous exercise)
* Find dates of scheduled bookings (i.e. schedule has a student email address)
* Webpage initially needs to display a list of dates
* If use moves mouse over list of dates, cursor needs to change into a pointer
* Use event delegation to handle above event (this can actually be achieved with css property `cursor: pointer`)
* Use event delegation to handle a date being clicked on - assign each date list item the schedule id number?
* When date is clicked needs to display another bullet point with `staff_name | student_email | time`
