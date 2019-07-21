/* TASK 28 */
var letters = prompt().split("");
var empty = " ";
for (var i = 0; i < letters.length; i++){
    letters[0] = letters[0].toUpperCase(); 
    if (letters[i] === empty){
        letters[i+1] = letters[i+1].toUpperCase();
    }
}
letters = letters.join("");
console.log(letters);