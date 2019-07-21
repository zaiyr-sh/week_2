/* TASK 26 */
var str = prompt();
var reverseStr = "";

for (var i = 1; i < str.length + 1; i++){
    reverseStr = reverseStr + str[(str.length - i)];
}

if (str === reverseStr){
    console.log(true);
} else if (str !== reverseStr){
    console.log(false);
}


