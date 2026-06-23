var nm1 = ["","","","","","b","c","ch","d","g","gr","h","k","m","p","r","st","t","v","w"];
var nm2 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ea","aa","ia","ai"];
var nm3 = ["b","bb","by","dn","gr","k","lk","mm","mp","n","nd","nt","p","r","rd","rg","rr","st","t","th","v"];
var nm4 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ao","ua","aa","au"];
var nm5 = ["b","c","d","k","l","r","s","z"];
var nm6 = ["","","","","ck","d","k","kk","l","lf","n","r","s","t"];

var nm7 = ["","","","","c","d","g","k","l","m","n","r","v","z"];
var nm8 = ["a","e","o","a","e","o","a","e","o","a","e","o","i","u","a","e","o","a","e","o","a","e","o","a","e","o","i","u","i","u","oo","aa","oa","ao","au","ua"];
var nm9 = ["b","d","g","h","l","m","n","s","sh","th","z"];
var nm10 = ["a","i","u","a","i","u","e","o"];
var nm11 = ["d","dr","dn","g","gn","gr","k","kn","kr","m","md","ml","n","ng","nl","nr","nd","r","rr","rd","rg","rl","s","sn","sg"];
var nm12 = ["a","a","a","e","i","o"];
var nm13 = ["","","","","","","","","","cs","h","s","t","x","z"];

var nm14 = ["","","","","b","br","b'd","c","ch","d","d'r","f","g","gr","j","k","k'l","l","m","m'b","n","n'd","s","sl","t","tr","z","z'l"];
var nm15 = ["a","e","o","i","u","a","e","o","i","u","a","e","o","i","u","a","e","o","i","u","ee","ie","ei"];
var nm16 = ["b","bt","d","dr","dt","g","gt","gr","k","kr","kl","l","lv","pt","pd","pr","r","rr","rv","v","z","zr"];
var nm17 = ["a","i","a","i","a","i","a","i","a","i","e","o","u","a","i","a","i","e","o","u","ai","ea","ei","ia","ie"];
var nm18 = ["","","","","c","ck","g","k","l","ll","m","n","r"];
var nm19 = ["i","i","a","e","","",""];

var br = "";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		nameSur();
		while(nSr === ""){
			nameSur();
		}
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
		names = nMs + " " + nSr;
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}

function nameMas(){
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	if(i < 4){
		while(nm3[rnd3] === nm6[rnd5] || nm3[rnd3] === nm1[rnd]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
	}else{
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm4.length | 0;
		while(nm6[rnd5] === nm5[rnd6] || nm5[rnd6] === nm3[rnd3]){
			rnd6 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd6] + nm4[rnd7] + nm6[rnd5];
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm13.length | 0;
	if(i < 3){
		while(nm7[rnd] === ""){
			rnd = Math.random() * nm7.length | 0;
		}
		while(nm7[rnd] === nm13[rnd3] || nm13[rnd3] === ""){
			rnd3 = Math.random() * nm13.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm13[rnd3];
	}else{
		rnd4 = Math.random() * nm9.length | 0;
		rnd5 = Math.random() * nm10.length | 0;
		if(i < 7){
			while(nm7[rnd] === nm9[rnd4] || nm9[rnd4] === nm13[rnd3]){
				rnd4 = Math.random() * nm9.length | 0;
			}
			nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm13[rnd3];
		}else{
			rnd6 = Math.random() * nm11.length | 0;
			rnd7 = Math.random() * nm12.length | 0;
			while(nm11[rnd6] === nm9[rnd4] || nm11[rnd6] === nm13[rnd3]){
				rnd6 = Math.random() * nm11.length | 0;
			}
			nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm11[rnd6] + nm12[rnd7] + nm13[rnd3];
		}
	}
	testSwear(nMs);
}

function nameSur(){
	sTp = Math.random() * 3 | 0;
	rnd = Math.random() * nm14.length | 0;
	rnd2 = Math.random() * nm15.length | 0;
	rnd3 = Math.random() * nm18.length | 0;
	if(sTp === 0){
		while(nm14[rnd] === ""){
			rnd = Math.random() * nm14.length | 0;
		}
		while(nm18[rnd3] === nm14[rnd] || nm18[rnd3] === ""){
			rnd3 = Math.random() * nm18.length | 0;
		}
		nSr = nm14[rnd] + nm15[rnd2] + nm18[rnd3];
	}else{
		rnd4 = Math.random() * nm16.length | 0;
		rnd5 = Math.random() * nm17.length | 0;
		while(nm16[rnd4] === nm18[rnd3] || nm16[rnd4] === nm14[rnd]){
			rnd4 = Math.random() * nm16.length | 0;
		}
		if(sTp === 1){
			nSr = nm14[rnd] + nm15[rnd2] + nm16[rnd4] + nm17[rnd5] + nm18[rnd3];
		}else{
			rnd6 = Math.random() * nm19.length | 0;
			nSr = nm14[rnd] + nm15[rnd2] + nm16[rnd4] + nm17[rnd5] + nm18[rnd3] + nm19[rnd6];
		}
	}
	testSwear(nSr);
}