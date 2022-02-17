var Dec=document.getElementById("Dec");
var reset=document.getElementById("reset");
var Inc=document.getElementById("Inc");
var count1=document.getElementById("count");
var count=0;

Dec.addEventListener("click",Dec_counter);
reset.addEventListener("click",reset_counter);
Inc.addEventListener("click",Inc_counter);

function color_change()
{
    if(count==0)
    {
        count1.style.color="red";
    }
    else if(count>0)
    {
        count1.style.color="green";
    }
    else{
        count1.style.color="mediumturquoise";
    }
}
function Dec_counter()
{
    count--;
    color_change();
    count1.innerHTML=count;
}
function reset_counter()
{
    count=0;
    color_change();
    count1.innerHTML=count;
}
function Inc_counter()
{
    count++;
    color_change();
    count1.innerHTML=count;
}