/* TASK 23 */
var array = [1,2,3,4];
var result = 0;

for (var i = 0; i < array.length; i++){
    result = result + Math.pow(array[i], 2);
}
console.log(result);