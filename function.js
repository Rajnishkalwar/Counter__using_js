const innerValue=document.getElementById('counter');
function increment(){
    let value=parseInt(innerValue.innerText);
    value=value+1;
    innerValue.innerText=value;
};

function decrement(){
    let value=parseInt(innerValue.innerText);
    value=value-1;
    innerValue.innerText=value;
};