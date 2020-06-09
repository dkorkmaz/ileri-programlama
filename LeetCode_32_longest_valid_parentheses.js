var longestValidParentheses = function(s) {
    const stack=[-1];
    let max=0;
    
    for (let i=0;i<s.length;i++)
        {
            const top=stack[stack.length-1];
            
            if (s[top]==='(' && s[i]===')'){
                stack.pop();
                const newTop=stack[stack.length-1];
                max = Math.max(i-newTop,max);
                
            }
            else
                {
                    stack.push(i);
                }
        }
    return max;
};