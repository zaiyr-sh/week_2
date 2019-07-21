var A = [4,3,2,1,5];
var B = [0,0,1,0,0];

var down = [];
    var upStrAlive = 0;
    var downCount=0;
    for(var i=0;i<A.length;i++){
        if(B[i] === 1){
            downCount++;
            down.push(A[i]);
        }
        else {
            while(downCount > 0){
                if(A[i] > down[downCount -1]) {
					down.pop(); 
					downCount--;
				}
                else break; 
            }
            if(downCount === 0) upStrAlive++; 
        }
    }
    
    console.log(upStrAlive + down.length);
// var zero = "0";
// var one = "1";
// var count = 0;
// var answer = A.length;
// var val = 0;


// for (var i = 0; i < A.length; i++){
//     if (B[i] == zero){
//         val = val + 1;
//     }else if (B[i] == one){
//         for (var j = B.indexOf(i); j < B.length; j++){
//             if (A[j] > A[j+1]){
//                 count = count + (A[j]);
//                 answer = answer - 1;
                
//             }else if (count > A[j]){
//                 count = count + A[j];
//                 answer = answer - 1;
//             }
//         } break;
//     } 
// }
// console.log(answer + val);