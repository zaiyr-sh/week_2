var character = 'abacddbec';
character = character.split("");
var notRepeated = "";
for (var i = 0; i < character.length; i++){
    var repeated = 0;
    for (var j = 0; j < character.length; j++){
        if (character[i] === character[j]){
            repeated = repeated + 1;
        } 
    }
    if (repeated < 2){
        notRepeated = character[i];
        break;    
    }   
}    
console.log(notRepeated);