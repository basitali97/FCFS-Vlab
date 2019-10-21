function validate3(){
    var radio4=document.getElementById("rb11").checked;
    var radio5=document.getElementById("rb12").checked;
    var radio6=document.getElementById("rb13").checked;
    if((radio4=="") && (radio5=="") && (radio6==""))
    {
        alert("please select atleast one!!");
        return false;
    }
    else if(radio4!="")
    {
    {
        alert("correct answer");
    }    
        validate.location.href="simulation/simulator.html";
    }

    else{
        alert("wrong input");
    }

}

function validate1(){
    var radio7=document.getElementById("rb21").checked;
    var radio8=document.getElementById("rb22").checked;
    var radio9=document.getElementById("rb23").checked;
    if((radio7=="") && (radio8=="") && (radio9==""))
    {
        alert("please select atleast one!!");
        return false;
    }
    else if(radio7!="")
    {
    {
        alert("correct answer");
    }    
        validate.location.href="simulation/simulator.html";
    }

    else{
        alert("wrong input");
    }

}

function validate2(){
    var radio11=document.getElementById("rb31").checked;
    var radio12=document.getElementById("rb32").checked;
    var radio13=document.getElementById("rb33").checked;
    if((radio11=="") && (radio12=="") && (radio13==""))
    {
        alert("please select atleast one!!");
        return false;
    }
    else if(radio13!="")
    {
    {
        alert("correct answer");
    }    
        validate.location.href="simulation/simulator.html";
    }

    else{
        alert("wrong input");
    }

}
