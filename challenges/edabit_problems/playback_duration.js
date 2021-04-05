/* YouTube offers different playback speed options for users. This allows users to increase or decrease the speed of the video content. Given the actual duration and playback speed of the video, calculate the playback duration of the video.

Examples
playbackDuration("00:30:00", 2) ➞ "00:15:00"

playbackDuration("01:20:00", 1.5) ➞ "00:53:20"

playbackDuration("51:20:09", 0.5) ➞ "102:40:18"
Notes
Both durations will be in hh:mm:ss format.
Playback speed will be up to one decimal place only.
Time units are expected to be truncated/floored. */

// PEDAC
// INPUT 
// time represented in a string plus a number
// number can be to one decimal place
//
// OUTPUT 
// time as a string
//
// PROBLEM
// given the duration of a video and the playback speed
// return the actual playback duration of the video
//
// EXAMPLES
//
// DATA STRUCTURE
// split the input string into an array
// use variables to store converted hours, minutes and seconds
//
// ALGORITHM
// split the input string into an array using ':' as the delimiter (inputTime)
// declare a variable, totalMinutes
// access the first element of inputTime, convert into a number and multiply by 60
// this converts the number of hours from the input time into minutes
// assign to totalMinutes
// access the second element of the array, convert to a number and add to totalMinutes
// access the third element of the array, convert to a number and divide by 60
// this converts the number of seconds in the input time to minutes
// add value to totalMinutes
//
// divide totalMinutes by the playback speed

function playbackDuration(str, playbackSpeed) {
  const MINUTES_PER_HOUR = 60;
  const SECONDS_PER_MINUTE = 60;

  let inputTime = str.split(':');
  let totalMinutes = Number(inputTime[0]) * MINUTES_PER_HOUR;
  totalMinutes += Number(inputTime[1]);
  totalMinutes += Number(inputTime[2]) / SECONDS_PER_MINUTE;

  totalMinutes = totalMinutes / playbackSpeed;

  let playbackHours = Math.floor(totalMinutes / MINUTES_PER_HOUR);
  let playbackMins = Math.floor(totalMinutes % MINUTES_PER_HOUR)
  let playbackSecs = Math.floor((totalMinutes - (playbackHours * 60) - playbackMins) * SECONDS_PER_MINUTE);

  let playbackTime = playbackHours.toString().padStart(2, '0') + ':' + playbackMins.toString().padStart(2, '0') + ':' + playbackSecs.toString().padStart(2, '0');

  console.log(playbackTime);
}

playbackDuration("00:30:00", 2) //➞ "00:15:00"

playbackDuration("01:20:00", 1.5) // ➞ "00:53:20"

playbackDuration("51:20:09", 0.5) //➞ "102:40:18"
