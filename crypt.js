var str ="run*46t$7 rabbit&547";
var trimStr = str.replace(/[^a-zA-Z]/g, ""); //normalizes the string input

var strArr = [...trimStr];. // spreads the string into an array. //
alert(strArr);

var result = [];
var copyStr = strArr;

var size = Math.floor(Math.sqrt(strArr.length));// hmmm


if( copyStr.length % size == 0 ){
    var recLength = size;
    } else {
    var recLength = size + 1;
    }; // the length of the rectangle

console.log(recLength);

while(copyStr.length > 0) {
    result.push(copyStr.splice(0, recLength));
}; // this creates sub arrays in the main array. Their number is the breadth

console.log(result)




