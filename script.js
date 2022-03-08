const display = document.getElementById("result");
const input = document.getElementById("textbox");

function check()
{
    let flag=0;
    let x = input.value;
    for(let i=2;i<=x/2;i++)
    {
        if(x%i==0)
        {
            flag++;
            break;
        }    
    }
    if(x==1)
        display.innerHTML = `${x} is neither Prime nor Composite Number`;
    else if(flag!=0)
        display.innerHTML = `${x} is Composite Number`;
    else
        display.innerHTML = `${x} is Prime Number`;

    input.value = "";
}