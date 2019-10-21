/*function tboxes() {
	document.getElementById("ac").value=" 0---------4"
	document.getElementById("ad").value=" 4---------7"
	document.getElementById("ae").value=" 7---------8"
	document.getElementById("af").value=" 8---------10"
	document.getElementById("ag").value="10--------15"
}*/

/*function complete(){
	document.getElementById("ct1").value="       4"
	document.getElementById("ct2").value="       7"
	document.getElementById("ct3").value="       8"
	document.getElementById("ct4").value="       10"
	document.getElementById("ct5").value="       15"
	
	
	document.getElementById("tat1").value="       4"
	document.getElementById("tat2").value="       6"
	document.getElementById("tat3").value="       6"
	document.getElementById("tat4").value="       7"
	document.getElementById("tat5").value="       11"
	
	
	document.getElementById("wt1").value="       0"
	document.getElementById("wt2").value="       3"
	document.getElementById("wt3").value="       5"
	document.getElementById("wt4").value="       5"
	document.getElementById("wt5").value="       6"
		
}
*/
function avg(){

	var v1=parseInt(document.getElementById("wt1").value);
	var v2=parseInt(document.getElementById("wt2").value);
	var v3=parseInt(document.getElementById("wt3").value);
	var v4=parseInt(document.getElementById("wt4").value);
	var v5=parseInt(document.getElementById("wt5").value);
	var result20=(v1+v2+v3+v4+v5)/5;
	document.getElementById("avg1").value=result20;
	

}

function tboxe1(){
	
	var num1=parseInt(document.getElementById("at1").value);
	var brt1=parseInt(document.getElementById("bt1").value);
	var result1=brt1+num1;
	document.getElementById("ac").value=result1;
	
	var num2=parseInt(document.getElementById("ac").value);
	var brt2=parseInt(document.getElementById("bt2").value);
	var result2=num2+brt2;
	document.getElementById("ad").value=result2;
	
	var num3=parseInt(document.getElementById("ad").value);
	var brt3=parseInt(document.getElementById("bt3").value);
	var result3=num3+brt3;
	document.getElementById("ae").value=result3;
	
	var num4=parseInt(document.getElementById("ae").value);
	var brt4=parseInt(document.getElementById("bt4").value);
	var result4=num4+brt4;
	document.getElementById("af").value=result4;
	
	var num5=parseInt(document.getElementById("af").value);
	var brt5=parseInt(document.getElementById("bt5").value);
	var result5=num5+brt5;
	document.getElementById("ag").value=result5;
	
}







function complete(){

	var txt1=document.getElementById("ac").value;
	document.getElementById("ct1").value=txt1;
	
	var txt2=document.getElementById("ad").value;
	document.getElementById("ct2").value=txt2;
	
	var txt3=document.getElementById("ae").value;
	document.getElementById("ct3").value=txt3;
	
	var txt4=document.getElementById("af").value;
	document.getElementById("ct4").value=txt4;
	
	var txt5=document.getElementById("ag").value;
	document.getElementById("ct5").value=txt5;
	
	
	var num6=parseInt(document.getElementById("ac").value);
	var brt6=parseInt(document.getElementById("at1").value);
	var result6=num6-brt6;
	document.getElementById("tat1").value=result6;
	
	var num7=parseInt(document.getElementById("ad").value);
	var brt7=parseInt(document.getElementById("at2").value);
	var result7=num7-brt7;
	document.getElementById("tat2").value=result7;
	
	var num8=parseInt(document.getElementById("ae").value);
	var brt8=parseInt(document.getElementById("at3").value);
	var result8=num8-brt8;
	document.getElementById("tat3").value=result8;
	
	var num9=parseInt(document.getElementById("af").value);
	var brt9=parseInt(document.getElementById("at4").value);
	var result9=num9-brt9;
	document.getElementById("tat4").value=result9;
	
	var num10=parseInt(document.getElementById("ag").value);
	var brt10=parseInt(document.getElementById("at5").value);
	var result10=num10-brt10;
	document.getElementById("tat5").value=result10;
	
	var n1=parseInt(document.getElementById("tat1").value);
	var bat1=parseInt(document.getElementById("bt1").value);
	var result11=n1-bat1;
	document.getElementById("wt1").value=result11;
	
	var n2=parseInt(document.getElementById("tat2").value);
	var bat2=parseInt(document.getElementById("bt2").value);
	var result12=n2-bat2;
	document.getElementById("wt2").value=result12;
	
	var n3=parseInt(document.getElementById("tat3").value);
	var bat3=parseInt(document.getElementById("bt3").value);
	var result13=n3-bat3;
	document.getElementById("wt3").value=result13;
	
	var n4=parseInt(document.getElementById("tat4").value);
	var bat4=parseInt(document.getElementById("bt4").value);
	var result14=n4-bat4;
	document.getElementById("wt4").value=result14;
	
	var n5=parseInt(document.getElementById("tat5").value);
	var bat5=parseInt(document.getElementById("bt5").value);
	var result15=n5-bat5;
	document.getElementById("wt5").value=result15;


}



	