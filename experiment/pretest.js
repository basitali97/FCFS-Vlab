function validate(x){
    var radio1=document.getElementById("rb1").checked;
    var radio2=document.getElementById("rb2").checked;
    var radio3=document.getElementById("rb3").checked;
    if((radio1=="") && (radio2=="") && (radio3==""))
    {
        alert("please select atleast one!!");
        return false;
    }
    else if(radio2!="")
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

