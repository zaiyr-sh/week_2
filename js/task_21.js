/* TASK 21 */
var arr =  ["Sam", "Joe", "sam", "Jim", "Jane"];
var empty = " ";

for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i].toLowerCase();
}

arr = new Set(arr);
arr = Array.from(arr.values());

arr = arr.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1));
console.log(arr);


