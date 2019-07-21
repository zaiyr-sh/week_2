/* TASK 29 */
var arr = [1,2,3,4,5];

var min = Infinity;
var secondMin = Infinity;

for(var i = 0; i < arr.length; i++){
    if (arr[i] < min){
        secondMin = min;
        min = arr[i];
    } else if (arr[i] < secondMin){
        secondMin = arr[i];
    }
}

var max = Math.max(...arr);
var maximum = arr.indexOf(max);
arr[maximum] = -Infinity;

var secondMax = Math.max(...arr);


console.log(secondMax + "," + secondMin);
