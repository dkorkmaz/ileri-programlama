function makeLinkedList(arr,i){
  i=i || 0;
  return i<arr.length?{val:arr[i], next:makeLinkedList(arr,i+1)}:null;
}

var addTwoNumbers = function(l1, l2) {
  var snt={next:null};
  var cur=snt;
  var carry=0;
  while(l1 || l2 || carry){
    cur.next={next:null};
    cur=cur.next;
    var sum=(l1?l1.val:0)+(l2?l2.val:0)+carry;
    if(sum<10){
      cur.val=sum;
      carry=0;
    } else {
      cur.val=sum-10;
      carry=1;
    }
    l1=l1?l1.next:null;
    l2=l2?l2.next:null;
  }
  return snt.next;
}

var a=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
var b=[5,6,4];
console.log(addTwoNumbers(makeLinkedList(a),makeLinkedList(b)));
a=[9,9];
b=[1,9];
console.log(addTwoNumbers(makeLinkedList(a),makeLinkedList(b)));