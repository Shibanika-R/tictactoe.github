p1=[0,0,0,0,0,0,0,0,0]
p2=[0,0,0,0,0,0,0,0,0]
c=0;
var arr=[];
var user1='X';
var user2= 'O';
window.onload = function(){ 
    user1 = prompt("Enter Player1 name:");
    user2 = prompt("Enter Player2 name:");
    var u1 = document.getElementById("user1");
    var u2 = document.getElementById("user2");
    u1.innerHTML = user1;
    u2.innerHTML = user2;
}
function changeText(id,cla) {
    if(arr.includes(cla)){
        alert("invalid");
        return;
    }
    arr.push(cla);
    if(c%2==0){
    
    if(cla==='s1')
    {
        p1[0]=1;
    }
    else if(cla==='s2')
    {
        p1[1]=1;
    }
    else if(cla==='s3')
    {
        p1[2]=1;
    }
    else if(cla==='s4')
    {
        p1[3]=1;
    }
    else if(cla==='s5')
    {
        p1[4]=1;
    }
    else if(cla==='s6')
    {
        p1[5]=1;
    }
    else if(cla==='s7')
    {
        p1[6]=1;
    }
    else if(cla==='s8')
    {
        p1[7]=1;
    }
    else if(cla==='s9')
    {
        p1[8]=1;
    }
    }
    else{
        
        if(cla==='s1')
    {
        p2[0]=1;
    }
    else if(cla==='s2')
    {
        p2[1]=1;
    }
    else if(cla==='s3')
    {
        p2[2]=1;
    }
    else if(cla==='s4')
    {
        p2[3]=1;
    }
    else if(cla==='s5')
    {
        p2[4]=1;
    }
    else if(cla==='s6')
    {
        p2[5]=1;
    }
    else if(cla==='s7')
    {
        p2[6]=1;
    }
    else if(cla==='s8')
    {
        p2[7]=1;
    }
    else if(cla==='s9')
    {
        p2[8]=1;
    }
        
    }
    
    if((p1[0]==1 && p1[1]==1 && p1[2]==1)||(p1[3]==1 && p1[4]==1 && p1[5]==1)||(p1[6]==1 && p1[7]==1 && p1[8]==1)||(p1[0]==1 && p1[3]==1 && p1[6]==1)||(p1[1]==1 && p1[4]==1 && p1[7]==1)||(p1[2]==1 && p1[5]==1 && p1[8]==1)||(p1[0]==1 && p1[4]==1 && p1[8]==1)||(p1[2]==1 && p1[4]==1 && p1[6]==1)){
        alert(user1+" wins!!!");
        window.location.reload(true);
    }
    else if((p2[0]==1 && p2[1]==1 && p2[2]==1)||(p2[3]==1 && p2[4]==1 && p2[5]==1)||(p2[6]==1 && p2[7]==1 && p2[8]==1)||(p2[0]==1 && p2[3]==1 && p2[6]==1)||(p2[1]==1 && p2[4]==1 && p2[7]==1)||(p2[2]==1 && p2[5]==1 && p2[8]==1)||(p2[0]==1 && p2[4]==1 && p2[8]==1)||(p2[2]==1 && p2[4]==1 && p2[6]==1)){
        alert(user2+" wins!!!");
        window.location.reload(true);
    }
    else if(c==8){
        alert("Game Draw!!!");
        window.location.reload(true);
    }
    if(c%2==0){
        id.innerHTML="X";

        }
        else{
            id.innerHTML="O";
        }
    c+=1
}