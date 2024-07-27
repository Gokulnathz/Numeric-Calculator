//1 display number in text box
function displayNum(num)
{
    
    result.value+=num;
}

//2 clear text box
function clearBox()
{
    result.value='';
}
//3 evaluate expression
function evaluateExp()
{
    // method - 1
    exp=result.value
    output = eval(exp)
    result.value=output

    // method 2
//     result.value=eval(result.value)
 }
 function removeLastItem()
 {
    result.value=result.value.slice(0,-1)
 }