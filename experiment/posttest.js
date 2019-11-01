function validate3(){
    var radio31=document.getElementById("rb31").checked;
    var radio32=document.getElementById("rb32").checked;
    var radio33=document.getElementById("rb33").checked;
    var radio34=document.getElementById("rb34").checked;
    if((radio31=="") && (radio32=="") && (radio33=="") && (radio34==""))
    {
        alert("please select atleast one!!");
        return false;
    }
    else if(radio32!="")
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
    var radio41=document.getElementById("rb41").checked;
    var radio42=document.getElementById("rb42").checked;
    var radio43=document.getElementById("rb43").checked;
    var radio44=document.getElementById("rb44").checked;
    if((radio41=="") && (radio42=="") && (radio43=="") && (radio44==""))
    {
        alert("please select atleast one!!");
        return false;
    }
    else if(radio44!="")
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
    var radio51=document.getElementById("rb51").checked;
    var radio52=document.getElementById("rb52").checked;
    var radio53=document.getElementById("rb53").checked;
    var radio54=document.getElementById("rb54").checked;
    if((radio51=="") && (radio52=="") && (radio53=="") && (radio54==""))
    {
        alert("please select atleast one!!");
        return false;
    }
    else if(radio53!="")
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
