var nm1 = [["lin","qilin"],["lin","qilin"],["lin","qilin"],["shou","beast"],["shou","beast"]];
var nm3 = [["an","quiet"],["an","shore"],["bai","white"],["bo","thin"],["cao","grass"],["chang","long"],["cheng","orange"],["da","big"],["dao","island"],["di","Earth"],["duan","short"],["fei","flying"],["fen","pink"],["guo","foreign"],["guo","orchard"],["hai","ocean"],["hai","sea"],["han","cold"],["hao","good"],["he","river"],["hei","black"],["hei","dark"],["hong","red"],["hou","thick"],["hu","lake"],["hua","flower"],["huan","slow"],["huang","yellow"],["hui","gray"],["jin","gold"],["ju","hurricane"],["kuan","wide"],["lan","blue"],["lao","old"],["li","maroon"],["lu","green"],["nian","young"],["pan","coiled"],["peng","friend"],["pu","waterfall"],["qian","light blue"],["qiang","powerful"],["qing","light"],["qiu","curling"],["re","hot"],["ruan","soft"],["ruo","weak"],["sen","forest"],["sha","desert"],["shan","mountain"],["shen","spirit"],["shu","tree"],["tai","sun"],["teng","soaring"],["tian","heavenly"],["tian","sky"],["wu","fog"],["xing","star"],["xuan","cliff"],["xue","snow"],["yao","herb"],["yin","silver"],["ying","hard"],["ying","responsive"],["yu","rain"],["yuan","garden"],["yun","cloud"],["zhai","narrow"],["zhang","husband"],["zhi","plant"],["zhong","heavy"],["zi","purple"]];
var nm4 = [["bei","back"],["fu","belly"],["geng","neck"],["huo","throat"],["jing","mind"],["lian","cheeks"],["lian","face"],["lujiao","antlers"],["she","tongue"],["tou","head"],["jiao","horn"],["wei","stomach"],["xin","heart"],["xiong","chest"],["ya","teeth"],["yan","eye"],["yan","throat"],["zui","mouth"]];
var br = "";

function nameGen(){
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		if(i < 5){
			rnd = Math.random() * nm3.length | 0;
			rnd2 = Math.random() * nm1.length | 0;
			names = nm3[rnd][0] + nm1[rnd2][0] + " (" + nm3[rnd][1] + " + " + nm1[rnd2][1] + ")";
		}else{
			rnd = Math.random() * nm3.length | 0;
			rnd2 = Math.random() * nm4.length | 0;
			names = nm3[rnd][0] + nm4[rnd2][0] + " (" + nm3[rnd][1] + " + " + nm4[rnd2][1] + ")";
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