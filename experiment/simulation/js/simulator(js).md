function tbox(){<br>
	var wt1=parseInt(document.getElementById("wt1").value);<br>
	var pt1=parseInt(document.getElementById("pt1").value);<br>
	var result1=pt1/wt1;<br>
	document.getElementById("rt1").value=result1;<br>
	var wt2=parseInt(document.getElementById("wt2").value);<br>
	var pt2=parseInt(document.getElementById("pt2").value);<br>
	var result2=pt2/wt2;<br>
	document.getElementById("rt2").value=result2;<br>
	var wt3=parseInt(document.getElementById("wt3").value);<br>
	var pt3=parseInt(document.getElementById("pt3").value);<br>
	var result3=pt3/wt3;<br>
	document.getElementById("rt3").value=result3;<br>
	var wt4=parseInt(document.getElementById("wt4").value);<br>
	var pt4=parseInt(document.getElementById("pt4").value);<br>
	var result4=pt4/wt4;<br>
	document.getElementById("rt4").value=result4;<br>
	var wt5=parseInt(document.getElementById("wt5").value);<br>
	var pt5=parseInt(document.getElementById("pt5").value);<br>
	var result5=pt5/wt5;<br>
	document.getElementById("rt5").value=result5;<br>

}<br>

function tboxes(){<br>
	var bag=parseInt(document.getElementById("bmw").value);<br>
	var weight1=parseFloat(document.getElementById("wt1").value);<br>
	var weight2=parseFloat(document.getElementById("wt2").value);<br>
	var weight3=parseFloat(document.getElementById("wt3").value);<br>
	var weight4=parseFloat(document.getElementById("wt4").value);<br>
	var weight5=parseFloat(document.getElementById("wt5").value);<br>
	var ratio1=parseFloat(document.getElementById("rt1").value);<br>
	var ratio2=parseFloat(document.getElementById("rt2").value);<br>
	var ratio3=parseFloat(document.getElementById("rt3").value);<br>
	var ratio4=parseFloat(document.getElementById("rt4").value);<br>
	var ratio5=parseFloat(document.getElementById("rt5").value);<br>
	var profit1=parseFloat(document.getElementById("pt1").value);<br>
	var profit2=parseFloat(document.getElementById("pt2").value);<br>
	var profit3=parseFloat(document.getElementById("pt3").value);<br>
	var profit4=parseFloat(document.getElementById("pt4").value);<br>
	var profit5=parseFloat(document.getElementById("pt5").value);<br>
	var ratio=[ratio1,ratio2,ratio3,ratio4,ratio5];<br>
	var weight=[weight1,weight2,weight3,weight4,weight5];<br>
	var profit=[profit1,profit2,profit3,profit4,profit5];<br>
	var i;<br>
	var max1;<br>
	var location1;<br>
	max1=ratio[0];<br>
	for(i=0;i<5;i++){<br>
		if(ratio[i]>=max1){<br>
			max1=ratio[i];<br>
			location1=i;<br>
		}<br>
	}<br>
	ratio[location1]=0;<br>
	var j;<br>
	var max2;<br>
	var location2;<br>
	max2=ratio[location1];<br>
	for(j=0;j<5;j++){<br>
		if(ratio[j]>=max2){<br>
			max2=ratio[j];<br>
			location2=j;<br>
		}<br>
	}<br>
	ratio[location2]=0;<br>
	var k;<br>
	var max3;<br>
	var location3;<br>
	max3=ratio[location2];<br>
	for(k=0;k<5;k++){<br>
		if(ratio[k]>=max3){<br>
			max3=ratio[k];<br>
			location3=k;<br>
		}<br>
	}<br>
	ratio[location3]=0;<br>
	var l;<br>
	var max4;<br>
	var location4;<br>
	max4=ratio[location3];<br>
	for(l=0;l<5;l++){<br>
		if(ratio[l]>=max4){<br>
			max4=ratio[l];<br>
			location4=l;<br>
		}<br>
	}<br>
	ratio[location4]=0;<br>
	var m;<br>
	var max5;<br>
	var location5;<br>
	max5=ratio[location4];<br>
	for(m=0;m<5;m++){<br>
		if(ratio[m]>=max5){<br>
			max5=ratio[m];<br>
			location5=m;<br>
		}<br>
	}<br>
	ratio[location5]=0;<br>
	var w1=weight[location1];<br>
	var w2=weight[location2];<br>
	var w3=weight[location3];<br>
	var w4=weight[location4];<br>
	var w5=weight[location5];<br>
	var w=[w1,w2,w3,w4,w5];<br>
	var p1=profit[location1];<br>
	var p2=profit[location2];<br>
	var p3=profit[location3];<br>
	var p4=profit[location4];<br>
	var p5=profit[location5];<br>
	var p=[p1,p2,p3,p4,p5];<br>
	var sum=0;<br>
	var n;<br>
	var pr=0;<br>
	var diff=(bag-sum);<br>
	var flag1=0;var flag2=0;var flag3=0;var flag4=0;var flag5=0;<br>
	for(n=0;n<5;n++){<br>
		if(w[n]<=diff && sum<=bag && n<=4&&flag1==0){<br>
			sum=sum+w[n];<br>
			diff=bag-sum;<br>
			flag1++;<br>
			pr=pr+p[n];<br>
			document.getElementById("bg1").value=w[n];<br>
		}<br>
		else if(w[n]<=diff && sum<=bag&& n<=4&&flag2==0){<br>
			sum=sum+w[n];<br>
			diff=bag-sum;<br>
			flag2++;<br>
			pr=pr+p[n];<br>
			document.getElementById("bg2").value=w[n];<br>
		}<br>
		else if(w[n]<=diff && sum<=bag&& n<=4&&flag3==0){<br>
			sum=sum+w[n];<br>
			diff=bag-sum;<br>
			flag3++;<br>
			pr=pr+p[n];<br>
			document.getElementById("bg3").value=w[n];<br>
		}<br>
		else if(w[n]<=diff && sum<=bag&& n<=4&&flag4==0){<br>
			sum=sum+w[n];<br>
			diff=bag-sum;<br>
			flag4++;<br>
			pr=pr+p[n];<br>
			document.getElementById("bg4").value=w[n];<br>
		}<br>
		else if(w[n]<=diff && sum<=bag && n<=4 && flag5==0){<br>
			sum=sum+w[n];<br>
			diff=bag-sum;<br>
			flag5++;<br>
			pr=pr+p[n];<br>
			document.getElementById("bg5").value=w[n];<br>
		}<br>
		else{<br>
		}<br>
	}<br>
	document.getElementById("ab").value=pr;<br>
}<br>
