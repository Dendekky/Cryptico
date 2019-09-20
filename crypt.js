var word ="bIG rabbits are stupid and sometimes rUn*46$7 like small rabbits&547";

var trimStr = word.replace(/[^a-zA-Z]/g, "").toLowerCase(); //normalizes the string input
var strArr = [...trimStr]; // spreads the string into an array. //
console.log(strArr);

var result = [];
var patapata = [];
var p = document.getElementById('tested')

const Resolved = foo =>Math.floor(Math.sqrt(foo.length));

function FooBaa(wordResult, size){
    if( wordResult.length % size == 0 ){
        var recLength = size;
        } else {
        var recLength = size + 1;
        }; // the length of the rectangle
        return recLength;
};

var strArrSize = Resolved(strArr);// hmmm
console.log(strArrSize);
var wordRecLength = FooBaa(strArr, strArrSize)

console.log(wordRecLength);

const SunDoo = (lalala, tababa, idahun) =>{
    while(lalala.length > 0) {
        idahun.push(lalala.splice(0, tababa));
    };
    return idahun;
} // this creates sub arrays in the main array. Their number is the breadth

SunDoo(strArr, wordRecLength, result);

// this joins each sub array to make it a string 
ans = "<p>";
result.forEach(value => {
    ans +="<span>" + "\"" + value.join("") + "\"" + "</span>";
    ans += "</p>"
    document.getElementById("test").innerHTML = ans;
})

var codeArr = [];
for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < result.length; j++) {
            codeArr += result[j][i];        
        };
    }

var arrCode = [...codeArr];
console.log(arrCode);

var codeArrSize = Resolved(codeArr);// hmmm
console.log(codeArrSize);
var resRecLength = FooBaa(codeArr, codeArrSize);
console.log(resRecLength);
SunDoo(arrCode, resRecLength, patapata);

vns = "<p>";
patapata.forEach(value => {
    vns +="<span>" + "\"" + value.join("") + "\"" + "</span>";
    vns += "</p>"
    document.getElementById("run").innerHTML = vns;
})

