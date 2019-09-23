// var word ="bIG rabbits are stupid and sometimes rUn*46$7 like small rabbits&547";

var form = document.getElementById("cryptForm");
var send = (e) => {
    e.preventDefault();
    var word = document.forms.cryptForm.wordInput.value;

    var trimStr = word.replace(/[^a-zA-Z]/g, "").toLowerCase(); //normalizes the string input
    var strArr = [...trimStr]; // spreads the string into an array. //
    console.log(strArr);

    var result = [];
    var encryptResult = [];
    // var p = document.getElementById('tested')

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

    const SunDoo = (inputArr, arrRecLength, outputArr) =>{
        while(inputArr.length > 0) {
            outputArr.push(inputArr.splice(0, arrRecLength));
        };
        return outputArr;
    } // this creates sub arrays in the main array. Their number is the breadth
    
    SunDoo(strArr, wordRecLength, result);
    console.log(result);
    var rst = result;
    for(i = 0; i < rst[0].length - rst[rst.length - 1].length; i++) {
        if (rst[rst.length - 1].length < rst[0].length) {
            rst[rst.length - 1].push(' ')
        }
        
    }
    console.log(result);

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


    var runCode = [...codeArr];
    console.log(codeArr);

    var eatCode = runCode.join("").replace(/undefined/g, '');
    var arrCode = [...eatCode];
    console.log(arrCode);

    var codeArrSize = Resolved(arrCode);// hmmm
    console.log(codeArrSize);
    var resRecLength = FooBaa(codeArr, codeArrSize);
    console.log(resRecLength);
    SunDoo(arrCode, resRecLength, encryptResult);

    vns = "<p>";
    encryptResult.forEach(value => {
        vns +="<span>" + "\"" + value.join("") + "\"" + "</span>";
        vns += "</p>"
        document.getElementById("run").innerHTML = vns;
    })
}
window.onload = function(){
    form.addEventListener('submit', send)
}
