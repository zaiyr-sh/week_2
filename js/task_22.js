/* TASK 22 */
var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];

var arrayBigger;
var sum = 0;
if (array1 > array2){
    arrayBigger = array1;
}
if (array2 > array1){
    arrayBigger = array2;
}

for (var i = 0; i < arrayBigger.length; i++){
    if (isNaN(array1[i])){
        array1[i] = 0;
    }
    if (isNaN(array2[i])){
        array2[i] = 0;
    }
    sum = array1[i] + array2[i];
    console.log(sum);
}
