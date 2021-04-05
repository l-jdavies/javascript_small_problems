/* Mubashir needs your help to find out a wrong number in a 2D array.

Imagine a 2D array of numbers given below:

 var arr =  [
  [1, 2, 3, 6 ],
  [4, 5, 6, 15],
  [7, 8, 9, 24],
  [12,15,18,45]]
You can notice that :

End number of each row is sum of each row's previous numbers
End number of each column is sum of each column's previous numbers
See below examples for a better understanding:

arr1=[
[2, 2, 3, 6 ],
[4, 5, 6, 15],
[7, 8, 9, 24],
[12,15,18,45]]
// 2 is incorrect in first row and first column
// Replace it with 1

arr2=[
[1, 2, 3, 7 ],
[4, 5, 6, 15],
[7, 8, 9, 24],
[12,15,18,45]]
// 7 is incorrect in first row and fourth column
// Replace it with 6

arr3=[
[1, 2, 3, 6 ],
[4, 5, 6, 15],
[7, 8, 9, 24],
[12,15,18,46]]
// 46 is incorrect in fourth row and fourth column
// Replace it with 45
Examples
wrongNumber(arr1) ➞ 1

wrongNumber(arr2) ➞ 6

wrongNumber(arr3) ➞ 45
*/
