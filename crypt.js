var str ="bIG rabbits are stupid and sometimes rUn*46$7 like small rabbits&547";
var trimStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase(); //normalizes the string input
//alert(trimStr);
var strArr = [...trimStr]; // spreads the string into an array. //
//alert(strArr);
console.log(strArr);

var result = [];
var copyStr = strArr;
var p = document.getElementById('tested')

var size = Math.floor(Math.sqrt(strArr.length));// hmmm
console.log(size);

if( copyStr.length % size == 0 ){
    var recLength = size;
    } else {
    var recLength = size + 1;
    }; // the length of the rectangle

console.log(recLength);

while(copyStr.length > 0) {
    result.push(copyStr.splice(0, recLength));
}; // this creates sub arrays in the main array. Their number is the breadth


// this joins each sub array to make it a string 
result.some(function(item, index, array){
    var ans = item.join("");
    var rectangle1 = document.getElementById('rectangle1');
rectangle1 = rectangle1.getContext("2d");
rectangle1.fillText(ans, 150, 100);
console.log(ans)
})





