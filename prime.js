let num=11;
let flag=1;
if(num==1)
{
    console.log("Neither prime nor composite");
}
for(let i=2;i<=num/2;i++)
{
    if(num%i==0){
        flag=0;
    }
}
if(num!=1)
{
    if(flag==0){
        console.log("Not prime");
    }
    else
        console.log("Prime number");
}