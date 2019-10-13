 module.exports = function multiply(first, second) {
    var firstarr = (first+"").split("").reverse();
    var secondarr = (second+"").split("").reverse();
    var mult = [];
    var tmp;
    for (var i = 0; i < firstarr.length; i++) {
        for (var j = 0; j < secondarr.length; j++) {
            var tmp = firstarr[i] * secondarr[j];
            let tmpFloor=Math.floor(tmp/10);
            let tmpNum=tmp%10;
            mult[i+j]=(mult[i+j])? mult[i+j]+tmpNum: tmpNum;
            //mult[i+j]+=tmpNum;
            mult[i+j+1]=(mult[i+j+1])? mult[i+j+1]+tmpFloor : tmpFloor;
        }
    }
    let length=mult.length;
    for (var i = 0; i < length; i++) {
        var floor = Math.floor(mult[i] / 10);
        var num = mult[i] % 10;
        mult[i] = num;
        mult[i+1]=(mult[i+1])? mult[i+1] + floor: floor;
    }
    i=mult.length-1;
    while(mult[i]==0){
      mult.pop(i);
      i--;
    }
    return mult.reverse().join('');
}

//console.log(multiply('439265893465876578346584325', '5837942653434596'));