Implement a function that retrieves all the schedules that are available. If one or more schedules are available, tally the count of schedules for each staff and alert the user of result as "key: value" pairs with the staff id as key (in the format of 'staff {id}'; e.g, 'staff 1') and the count of schedules as the value. If there are no schedules, alert the user that there are currently no schedules available for booking.

When implementing the function, keep in mind that server has been known to slow down when there are more than 7 schedules to retrieve. It doesn't always happen, but be sure to handle it accordingly. Once 5 seconds have passed, cancel the retrieval and inform the user to try again.

Finally, inform the user about the completion of the request regardless of the success or failure (timeout) of the request.

Note: Server slow down for when there are more than 7 schedules to retrieve is manufactured only. For reference, the manufactured time is 7 seconds.

When running the JavaScript code, be sure that you're not doing cross origin requests; the app is not set to handle it. The easiest way to avoid it is to create an HTML file in the public directory of the app, access that file (page) via the proper path, and run the JS code from the web page.

For example, if you've created a public/exercise1.html file you'll access it via: http://localhost/exercise1.html.

Plan of action:
* Route `/api/schedules` returns a collection of all schedules that are available. 
 * Need to access all of the staff member `id` numbers and then count how many schedules are available for each staff member
* If no schedules are available then that info needs to be displayed

* Need to insert the results into HTML
  * Add schedule results to a list item

* Need to handle displaying a timeout message
  * Set a timeout property on the request object
  * Add an event listener for both `loadend` (successful) and `timeout` (unsuccessful)

**The code for this question is `public/getting_schedules.html` and `public/getting_schedules.js`
