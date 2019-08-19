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

var codeArr = [];
for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < result.length; j++) {
        //console.log(result[i][j]);
        //console.log(result[i][j].slice(0));
        //if (codeArr.length<result.length) {
            codeArr += result[j][i];
            //alert(codeArr);         
        };
    }
//};

console.log(codeArr);
// this joins each sub array to make it a string 
ans = "<p>";
result.forEach(value => {
    ans +="<span>" + "\"" + value.join("") + "\"" + "</span>";
    ans += "</p>"
    document.getElementById("test").innerHTML = ans;
})

console.log(result[0][1] + result[1][1] + result[2][1] + 
    result[3][1] + result[4][1] + result[5][1] + result[6][1] );

document.getElementById("run").innerHTML= "<p>" + codeArr + "</p>";
