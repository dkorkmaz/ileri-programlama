function convertToRoman(num) {
  var arrConv=[{0:' '},{1:'I'},{2:'II'},{3:'III'},{4:'IV'},{5:'V'},{6:'VI'},{7:'VII'},{8:'VIII'},{9:'IX'},{10:'X'},{20:'XX'},{30:'XXX'},{40:'XL'},{50:'L'},{60:'LX'},{70:'LXX'},{80:'LXXX'},{90:'XC'},{100:'C'},{200:'CC'},{300:'CCC'},{400:'CD'},{500:'D'},{600:'DC'},{700:'DCC'},{800:'DCCC'},{900:'CM'},{1000:'M'},{2000:'MM'},{3000:'MMM'},{4000:'MMMM'},{5000:'MMMMM'},{6000:'MMMMMM'},{7000:'MMMMMMM'},{8000:'MMMMMMMM'},{9000:'MMMMMMMMM'}];

  var arr=[num.length];
  arr=num.toString().split("").reverse();
  var i=1;
  for (var k=0;k<arr.length;k++){
    arr.splice(k,1,arr[k]*i);
    i*=10;
  }

 var romansArray=[];
  for (i=0;i<arr.length;i++){
    var val=arrConv.filter(function(obj){
       return obj[arr[i]];
     })[0];
    romansArray.push(val);
  }

  var result=romansArray.filter(function(val){
    return (val!=null);
  });

  return result.map(function(value,key){
    return result[key][arr[key]];
  }).reverse().join("").trim();

}

console.log(convertToRoman(35))