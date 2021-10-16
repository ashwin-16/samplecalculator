function btnclick(val)
{
    document.getElementById("screen").value+=val;
}
function btnclear(){
    document.getElementById("screen").value=""
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}
function nice(){
    
    document.getElementById("screen").value=""
}
