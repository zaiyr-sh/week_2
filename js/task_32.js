function sortNumber(a, b){
    return a - b;
}

var unsorted = [31415926535897932384626433832795,1,3,10,3,5];
unsorted.sort(sortNumber);

console.log(unsorted);