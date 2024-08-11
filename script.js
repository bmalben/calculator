function displayNumber(num){
    event.preventDefault();
    result.value+=num
}

function clearBox(){
    event.preventDefault();
    result.value=""
}
function plusMin(){
    event.preventDefault();
    result.value=-result.value;
}

function evaluateExp(){
    event.preventDefault();
    try {
        result.value=eval(result.value);
    } catch (error) {
        result.value="";
        result.value='ERROR';
    }
    console.log(result.value);
    
    
    // if(x!=0)
    // {
    //     result.value=x;
    // }
    // else
    // {
    //     result.value='ERROR';
    // }
}

function removelastitem(){
    event.preventDefault();
    result.value=result.value.slice(0,-1)
}