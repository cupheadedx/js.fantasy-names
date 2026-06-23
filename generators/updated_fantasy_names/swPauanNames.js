var nm1 = ["c","d","k","l","m","n","r","s","t","v","z"];
var nm2 = ["a","e","i","o","a","e","i","o","y","a","e","i","o","a","e","i","o","y","a","e","i","o","a","e","i","o","y","io","eo","ia"];
var nm3 = ["d","l","m","n","r","v","z","d","l","m","n","r","v","z","d","l","m","n","r","v","z","d","dr","l","ll","lr","ld","lb","lm","m","mp","n","nd","r","rr","rm","rn","rp","v","vr","vl","z"];
var nm4 = ["a","i","o","u"];
var nm5 = ["d","l","l","m","m","n","n","n","r","r","y"];

var nm6 = ["c","h","j","l","m","n","r","s","t","y","z"];
var nm7 = ["a","e","i","a","e","i","a","e","i","o","a","e","i","a","e","i","a","e","i","o","a","e","i","a","e","i","a","e","i","o","ia","ea","ie","io","eo"];
var nm8 = ["d","f","h","l","m","n","r","s","v","z"];
var nm9 = ["h","l","m","n","s","y"];

var nm10 = ["b","bl","br","f","g","gl","j","k","kl","l","m","n","r","s","t","v","vl","z","zl"];
var nm11 = ["a","e","e","o","o","u"];
var nm12 = ["b","d","g","h","k","l","m","n","p","r","s","t","v","z"];
var nm13 = ["b","b","d","d","l","l","ll","ln","lm","m","m","n","n","ng","t","y"];

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
				nameFem();
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
	rnd2 = Math.random() * nm4.length | 0;
	rnd3 = Math.random() * nm5.length | 0;
	if(i < 4){
		while(nm1[rnd] === nm5[rnd3]){
			rnd3 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm4[rnd2] + nm5[rnd3];
	}else{
		rnd4 = Math.random() * nm2.length | 0;
		rnd5 = Math.random() * nm3.length | 0;
		while(nm1[rnd] === nm3[rnd5] || nm5[rnd3] === nm3[rnd5]){
			rnd5 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd4] + nm3[rnd5] + nm4[rnd2] + nm5[rnd3];
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm9.length | 0;
	if(i < 4){
		while(nm6[rnd] === nm9[rnd3]){
			rnd3 = Math.random() * nm9.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm9[rnd3];
	}else{
		rnd4 = Math.random() * nm7.length | 0;
		rnd5 = Math.random() * nm8.length | 0;
		while(nm6[rnd] === nm8[rnd5] || nm9[rnd3] === nm8[rnd5]){
			rnd5 = Math.random() * nm8.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd4] + nm8[rnd5] + nm7[rnd2] + nm9[rnd3];
	}
	testSwear(nMs);
}

function nameSur(){
	sTp = Math.random() * 2 | 0;
	rnd = Math.random() * nm10.length | 0;
	rnd2 = Math.random() * nm11.length | 0;
	rnd3 = Math.random() * nm13.length | 0;
	if(sTp === 0){
		while(nm13[rnd3] === nm10[rnd]){
			rnd = Math.random() * nm10.length | 0;
		}
		nSr = nm10[rnd] + nm11[rnd2] + nm13[rnd3];
	}else{
		rnd4 = Math.random() * nm12.length | 0;
		rnd5 = Math.random() * nm11.length | 0;
		while(nm10[rnd] === nm12[rnd4] || nm12[rnd4] === nm13[rnd3]){
			rnd4 = Math.random() * nm12.length | 0;
		}
		nSr = nm10[rnd] + nm11[rnd2] + nm12[rnd4] + nm11[rnd5] + nm13[rnd3];
	}
	testSwear(nSr);
}