Implement the markup and JavaScript to add one or more schedules. You should handle and inform the user of the different possible responses of the server.

## Requirements
* Need to create a form that has a black outline, with `Schedule 1` at the top
* Form needs the inputs `Staff Name`, `Date` and `Time`
* Each input should create a drop down list of the available members of staff and an input text box for the date and time
* Webpage needs a button to submit the form and a button to add another schedule
* Need the ability to render another schedule form and handle data from one or more forms.

## Plan
* To add a new schedule a POST request needs to be sent to the route `/api/schedules`
* According to the api docs, the request body should look like this:
```JavaScript
{
    "schedules": [
        {
            "staff_id": 1,
            "date": "10-10-10",
            "time": "12:12"
        }
    ]
}
```
This is a JSON with `'schedules'` as the key and the value is an array containing objects.
* I will need to parse the form data into an object, then convert the object into a JSON with `JSON.stringify(obj)` 
* I will also need to set the request header to JSON: `request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');` 
