function generateTriangleNumber(n)
{
	
	return (n*(n+1))/2;
}

function findTriangleNumberWithOver500Divisors()
{
	var nextTriangleNum;
	var sqr;
	for (i=2;;i++)
	{
		var factors=[];
		factors[0]=1;
		nextTriangleNum=generateTriangleNumber(i);
		sqrt=Math.pow(nextTriangleNum,0.5);
		sqrt=Math.floor(sqrt);
		var j;
		for (var j=2;j<=sqrt;j++)
		{
			if (nextTriangleNum%j==0)
			{
				
				var quotient=nextTriangleNum/j;
				factors[factors.length]=j;
				factors[factors.length]=quotient;
			}
			
		}
		
	factors[factors.length]=nextTriangleNum;
	 if (factors.length>500)
	 {
		 break;
		 
	 }
		
	}
	
	$("output").text(nextTriangleNum);
	
}

findTriangleNumberWithOver500Divisors();