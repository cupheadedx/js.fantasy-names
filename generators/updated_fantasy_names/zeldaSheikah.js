var nm1 = ["","","","","c","d","g","gr","k","kr","p","r","s","sh","st","v","z"];
var nm2 = ["ee","ei","a","i","o","y","a","i","o","a","i","o","e","a","i","o","y","a","i","o","a","i","o","e"];
var nm3 = ["d","dd","dr","g","gh","hg","k","kk","kt","lk","ll","m","nt","r"];
var nm4 = ["ee","ia","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o"];
var nm5 = ["d","g","gg","lb","ld","m","mb","md","n","nd","ng"];
var nm6 = ["","","","d","k","kh","l","lk","n"];

var nm7 = ["","","","c","cl","d","h","j","k","l","m","n","p","r","t","tr"];
var nm8 = ["a","e","i","o","u"];
var nm9 = ["cp","dl","dr","gl","k","kl","l","ll","lp","lr","ld","m","mm","mp","r","rr","sl","ss","ttl","y"];
var nm10 = ["ee","ie","a","i","o","a","i","o","e","a","i","o","a","i","o","e"];
var nm11 = ["","","","","","","","","","","h","l","n","s","z"];

var br = "";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		if(tp === 1){
			nameFem();
			while(nMs === ""){
				nameFem();
			}
		}else{
			nameMas();
			while(nMs === ""){
				nameMas();
			}
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
	nTp = Math.random() * 8 | 0
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	while(rnd2 < 4 && rnd5 < 4){
		rnd5 = Math.random() * nm4.length | 0;
	}
	if(nTp < 2){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm1[rnd] === nm6[rnd3] || nm6[rnd3] === ""){
			rnd3 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm6[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		if(nTp < 6){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
		}else{
			rnd6 = Math.random() * nm2.length | 0;
			rnd7 = Math.random() * nm5.length | 0;
			while(nm5[rnd7] === nm3[rnd4] || nm5[rnd7] === nm6[rnd3]){
				rnd7 = Math.random() * nm5.length | 0;
			}
			if(nTp === 6){
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm2[rnd6] + nm5[rnd7] + nm4[rnd5] + nm6[rnd3];
			}else{
				nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd7] + nm2[rnd6] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
			}
		}
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm11.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	while(nm9[rnd4] === nm7[rnd] || nm9[rnd4] === nm11[rnd3]){
		rnd4 = Math.random() * nm9.length | 0;
	}
	nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm11[rnd3];
	testSwear(nMs);
}