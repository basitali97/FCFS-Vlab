function tbox(){

	var wt1=parseInt(document.getElementById("wt1").value);
	var pt1=parseInt(document.getElementById("pt1").value);
	var result1=pt1/wt1;
	document.getElementById("rt1").value=result1;

	var wt2=parseInt(document.getElementById("wt2").value);
	var pt2=parseInt(document.getElementById("pt2").value);
	var result2=pt2/wt2;
	document.getElementById("rt2").value=result2;

	var wt3=parseInt(document.getElementById("wt3").value);
	var pt3=parseInt(document.getElementById("pt3").value);
	var result3=pt3/wt3;
	document.getElementById("rt3").value=result3;

	var wt4=parseInt(document.getElementById("wt4").value);
	var pt4=parseInt(document.getElementById("pt4").value);
	var result4=pt4/wt4;
	document.getElementById("rt4").value=result4;

	var wt5=parseInt(document.getElementById("wt5").value);
	var pt5=parseInt(document.getElementById("pt5").value);
	var result5=pt5/wt5;
	document.getElementById("rt5").value=result5;

}

function tboxes(){
	var bag=parseInt(document.getElementById("bmw").value);

	var weight1=parseFloat(document.getElementById("wt1").value);
	var weight2=parseFloat(document.getElementById("wt2").value);
	var weight3=parseFloat(document.getElementById("wt3").value);
	var weight4=parseFloat(document.getElementById("wt4").value);
	var weight5=parseFloat(document.getElementById("wt5").value);

	var ratio1=parseFloat(document.getElementById("rt1").value);
	var ratio2=parseFloat(document.getElementById("rt2").value);
	var ratio3=parseFloat(document.getElementById("rt3").value);
	var ratio4=parseFloat(document.getElementById("rt4").value);
	var ratio5=parseFloat(document.getElementById("rt5").value);

	var profit1=parseFloat(document.getElementById("pt1").value);
	var profit2=parseFloat(document.getElementById("pt2").value);
	var profit3=parseFloat(document.getElementById("pt3").value);
	var profit4=parseFloat(document.getElementById("pt4").value);
	var profit5=parseFloat(document.getElementById("pt5").value);

	var ratio=[ratio1,ratio2,ratio3,ratio4,ratio5];
	var weight=[weight1,weight2,weight3,weight4,weight5];
	var profit=[profit1,profit2,profit3,profit4,profit5];
	var i;
	var max1;
	var location1;
	max1=ratio[0];
	for(i=0;i<5;i++){
		if(ratio[i]>=max1){
			max1=ratio[i];
			location1=i;
		}
	}
	ratio[location1]=0;
	var j;
	var max2;
	var location2;
	max2=ratio[location1];
	for(j=0;j<5;j++){
		if(ratio[j]>=max2){
			max2=ratio[j];
			location2=j;
		}
	}
	ratio[location2]=0;
	var k;
	var max3;
	var location3;
	max3=ratio[location2];
	for(k=0;k<5;k++){
		if(ratio[k]>=max3){
			max3=ratio[k];
			location3=k;
		}
	}
	ratio[location3]=0;
	var l;
	var max4;
	var location4;
	max4=ratio[location3];
	for(l=0;l<5;l++){
		if(ratio[l]>=max4){
			max4=ratio[l];
			location4=l;
		}
	}
	ratio[location4]=0;
	var m;
	var max5;
	var location5;
	max5=ratio[location4];
	for(m=0;m<5;m++){
		if(ratio[m]>=max5){
			max5=ratio[m];
			location5=m;
		}
	}
	ratio[location5]=0;

	var w1=weight[location1];
	var w2=weight[location2];
	var w3=weight[location3];
	var w4=weight[location4];
	var w5=weight[location5];
	var w=[w1,w2,w3,w4,w5];
	var p1=profit[location1];
	var p2=profit[location2];
	var p3=profit[location3];
	var p4=profit[location4];
	var p5=profit[location5];
	var p=[p1,p2,p3,p4,p5];

	var sum=0;
	var n;
	var pr=0;
	var diff=(bag-sum);
	var flag1=0;var flag2=0;var flag3=0;var flag4=0;var flag5=0;
	for(n=0;n<5;n++){
		if(w[n]<=diff && sum<=bag && n<=4&&flag1==0){
			sum=sum+w[n];
			diff=bag-sum;
			flag1++;
			pr=pr+p[n];
			document.getElementById("bg1").value=w[n];
		}
		else if(w[n]<=diff && sum<=bag&& n<=4&&flag2==0){
			sum=sum+w[n];
			diff=bag-sum;
			flag2++;
			pr=pr+p[n];
			document.getElementById("bg2").value=w[n];
		}
		else if(w[n]<=diff && sum<=bag&& n<=4&&flag3==0){
			sum=sum+w[n];
			diff=bag-sum;
			flag3++;
			pr=pr+p[n];
			document.getElementById("bg3").value=w[n];
		}
		else if(w[n]<=diff && sum<=bag&& n<=4&&flag4==0){
			sum=sum+w[n];
			diff=bag-sum;
			flag4++;
			pr=pr+p[n];
			document.getElementById("bg4").value=w[n];
		}
		else if(w[n]<=diff && sum<=bag && n<=4 && flag5==0){
			sum=sum+w[n];
			diff=bag-sum;
			flag5++;
			pr=pr+p[n];
			document.getElementById("bg5").value=w[n];
		}
		else{

		}
	}
	document.getElementById("ab").value=pr;
}
