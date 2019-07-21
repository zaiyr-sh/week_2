/* TASK 25 */
var num = prompt();
num = num.toString().split("");
var reverseNum = "";

for(var i = 0; i < num.length; i++){
    reverseNum = num[i] + reverseNum;
}

console.log(reverseNum);

