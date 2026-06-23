var nm1 = ["b","c","fr","h","hr","g","j","l","nj","r","s","sn","t","th","thr","v"];
var nm2 = ["a","e","i","o"];
var nm3 = ["d","fgr","fn","g","gn","gnv","gv","k","kk","ld","ljr","ljrr","ll","llv","lv","lvd","m","ndv","nfj","ngv","nl","r","rm","rn","rngr","rnv","rr","rs"];
var nm4 = ["a","o","u"];
var nm5 = ["bj","d","h","n","nd","rl","rg","v"];
var nm6 = ["a","e","i","o","u"];
var nm7 = ["f","ff","g","ld","m","n","nd","r","rn"];

var br = "";

function nameGen(){
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		nameMas();
		while(nMs === ""){
			nameMas();
		}
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}

function nameMas(){
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm7.length | 0;
	if(nTp < 4){
		while(nm1[rnd] === nm3[rnd3] || nm3[rnd3] === nm7[rnd5]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm7[rnd5];
	}else{
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm6.length | 0;
		while(nm5[rnd6] === nm3[rnd3] || nm5[rnd6] === nm7[rnd5]){
			rnd6 = Math.random() * nm5.length | 0;
			while(rnd6 > 6 && rnd3 > 7){
				rnd6 = Math.random() * nm5.length | 0;
			}
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd6] + nm6[rnd7] + nm7[rnd5];
	}
	testSwear(nMs);
}