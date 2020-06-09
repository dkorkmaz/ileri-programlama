function parens(left,right,str,result) {
    if(left===0 && right===0) {
	  result.push(str);
	}
	if(left>0) {
	  parens(left-1,right+1,str+"(",result);
	}
	if(right>0) {
	 parens(left,right-1,str+")",result);
	}
  }
  var generateParenthesis = function(n) {
     var result=[];
     var str="";
	 parens(n,0,"",result);
	 return result; 
   };