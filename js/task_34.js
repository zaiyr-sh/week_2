var s = "{{[[(())]]}}";
s = s.split("");



s = s.map(function(item) { return item == "{" ? "}" : item; });

s = s.map(function(item) { return item == "[" ? "]" : item; });

s = s.map(function(item) { return item == "(" ? ")" : item; });

for (var i = 0; i < s.length; i++){
    var len = s.length - 1;
    if (s[i] !== s[len - i]){
        console.log("NO");
        break;
    }
}

console.log("YES");





// var round = "(".charAt(s);
// var reverseRound = ")".charAt(s);
// round = reverseRound;

// var square = "[".charAt(s);
// var reverseSquare = "]".charAt(s);
// square = reverseSquare;

// var brackets = "[".charAt(s);
// var reverseBrackets = "]".charAt(s);
// brackets = reverseBrackets;


// for (var i = 0; i < s.length; i++){
//     var len = s.length - 1;
//     if ((brackets !== reverseBrackets) || (round !== reverseRound) || (square !== reverseSquare) ){
//         console.log("NO");
//         break;
//     }
// }

// console.log("YES");

// if (round == reverseRound){
//     console.log(true);
// }


// var s = "[[(())]]";
// var s = s.split("");
// var obj = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//     ')': '(',
//     ']': '[',
//     '}': '{'
// }    
// for (var i = 0; i < s.length; i++){
//     var len = s.length - 1;
//     if ((obj["}"] && obj["{"]) != (s[i] && s[len - i])){
//         console.log("NO");
//     } else{
//         console.log("YES");
//     }
// }



// switch (brackets){
//     case s.charAt("{"):
//     case s.charAt("}"):
//         console.log("YES");
//         break;
//     case s.charAt("("):
//     case s.charAt(")"):
//         console.log("YES");
//         break;
//     case s.charAt("["):
//     case s.charAt("]"):
//         console.log("YES");
//         break;
//     default:
//         console.log("NO");  
// }