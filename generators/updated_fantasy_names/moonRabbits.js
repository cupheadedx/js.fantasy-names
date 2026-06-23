function nameGen(){
	var nm1 = [["Än JÃ¬ng","Quiet"],["Ai","Friendly"],["An","Peaceful"],["An","Quiet"],["BÃ¡i","White"],["BÃ¨n","Stupid"],["BÃ¨nzhuÅ","Clumsy"],["BÃ³xuÃ©","Learned"],["Bao","Precious"],["CÃ¡o ZÃ¡","Noisy"],["CÅng MÃ­ng","Smart"],["ChÃ¡ng","Long"],["ChÃ©ng","Honest"],["ChÃ©ng","True"],["DÃ ","Big"],["DÃ dÇn","Bold"],["DÃ dÇn","Daring"],["DÃ ndÃ¬ng","Calm"],["DÃ¡","Clever"],["DÄnchÃºn","Innocent"],["DÄnchÃºn","Pure"],["DÇngshÃ¬","Sensible"],["Diandian","Spot"],["FÄngqÃ¹","Witty"],["Fang","Beautiful"],["Fang","Fragrant"],["GÄng ZhÃ­","Honest"],["GÇoxiÃ o","Funny"],["Gang","Strong"],["Gengi","Golden"],["Guiying","Brave"],["HÄi Ãn","Dark"],["HÄi","Black"],["HuÃ¡ng","Bright"],["HuÃ²dÃ¡","Optimistic"],["HuÄ«","Gray"],["HuÇn MÃ m","Slow"],["Hui","Wise"],["JÃ¹","Enormous"],["JÃºn","Handsome"],["JiÃ n","Healthy"],["JiÃ n","Strong"],["Jia","Beautiful"],["Jin","Gold"],["KÃ¨bÃ³","Mean"],["KÄng KÇi","Generous"],["KÄÃ i","Cute"],["KÄ Ãi","Cute"],["KuÃ i","Fast"],["LÇn DuÃ²","Lazy"],["LÇo","Old"],["LÇmÇng","Reckless"],["Lan","Elegant"],["MÃ­ngzhÃ¬","Wise"],["Mei","Beautiful"],["Min","Clever"],["NÃ ","Graceful"],["NÃ­ng","Serene"],["Nao Nao","Naughty"],["NiÃ¡n QÄ«ng","Young"],["Nuan","Warm"],["PÃ ng","Fat"],["PÃ xiÅ«","Shy"],["PÃ xiÅ«","Timid"],["PiÃ oliang","Beautiful"],["Ping","Peaceful"],["QÃ­guÃ i","Strange"],["QÄ«ng","Light"],["QiÃ¡ng DÃ ","Powerful"],["Qiang","Energetic"],["RÃ¨nxÃ¬ng","Headstrong"],["RuÇn","Soft"],["Sai Hu","Fast"],["Shu","Charming"],["TÄnlÃ¡n","Greedy"],["WÃ¡ngÃ¹","Stubborn"],["Wei","Robust"],["XiÇo","Short"],["Xiao Bai","Little White"],["Xinyi","Joyful"],["Xue","Snow"],["Xun","Fast"],["YÃ²uzhÃ¬","Childish"],["YÃ²uzhÃ¬","Naive"],["YÃº","Delightful"],["YÃºchÇn","Foolish"],["YÄ«ngmÃ­ng","Wise"],["YÅumÃ²","Funny"],["Yong","Brave"],["ZÅng","Brown"],["ZhÅng ChÃ©ng","Loyal"],["ZhÇng","Long"],["ZhÅng","Loyal"]];
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		nTp = Math.random() * 3 | 0;
		if(nTp === 0){
			rnd = Math.random() * nm1.length | 0;
			names = nm1[rnd][0] + " (" + nm1[rnd][1] + ")";
			nm1.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			rnd2 = Math.random() * nm1.length | 0;
			while(rnd === rnd2){
				rnd2 = Math.random() * nm1.length | 0;
			}
			names = nm1[rnd][0] + " " + nm1[rnd2][0] + " (" + nm1[rnd][1] + " " + nm1[rnd2][1] + ")";
			nm1.splice(rnd, 1);
			nm1.splice(rnd2, 1);
		}
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}