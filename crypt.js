var str ="run*46t$7 rabbit&547";
var trimStr = str.replace(/[^a-zA-Z]/g, "");

var strArr = [...trimStr];
alert(strArr);

var result = [];
var copyStr = strArr;

var size = Math.floor(Math.sqrt(strArr.length));


if( copyStr.length % size == 0 ){
    var recLength = size;
    } else {
    var recLength = size + 1;
    };

console.log(recLength);

while(copyStr.length > 0) {
    result.push(copyStr.splice(0, recLength));
};

console.log(result)




