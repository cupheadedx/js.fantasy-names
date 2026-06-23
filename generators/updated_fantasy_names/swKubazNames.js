var nm1 = ["","","","","","b","d","f","g","gl","j","k","l","nd","r","rb","sh","shn","schn","t","th","thw","z","zh"];
var nm2 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ie","ei","ee","oo","ea","eo","io"];
var nm3 = ["b","bl","d","dr","g","gg","gr","gl","k","kk","kr","kl","lb","lr","ld","ldr","lbr","lr","r","rg","rh","rb","rbr","rdr","t","tr","v","vv","vr","vl","z","zz","zr"];
var nm4 = ["a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","ee","ei","ie"];
var nm5 = ["b","d","g","l","ld","m","n","nd","nn","r","rr","rd","t"];
var nm6 = ["","","","","","f","k","l","m","n","nk","nn","r","rn","rd","rg","z","zz"];

var nm7 = ["","","c","d","f","h","l","m","n","r","s","sh","t","th","v","z","zh"];
var nm8 = ["a","e","i","o","u","a","a","e","e","i","i"];
var nm9 = ["b","bl","d","g","gl","l","ll","lr","lm","ln","m","ml","md","n","nr","nl","nd","nv","r","rl","rd","rb","rv","v","z","zr","zl"];
var nm10 = ["i","i","e","e","o","o","a","i"];
var nm11 = ["","","","","f","l","m","n","s","z"];

var nm12 = ["","","","","c","f","f'l","h","k","k'r","kh","l","m","n","r","r'l","v","v'r","vh","c","f","h","k","kh","l","m","n","r","v","vh"];
var nm13 = ["a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","ia","ea","ai"];
var nm14 = ["b","bs","bz","bs","d","ds","dz","dv","'d","g","gr","k","ks","l","lv","m","n","'n","p","r","rv","rl","'r","v","vl"];
var nm15 = ["a","o","u","a","o","u","a","o","u","i","e"];
var nm16 = ["","","","","c","k","m","n","r","s","z"];

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
	rnd3 = Math.random() * nm6.length | 0;
	if(i < 3){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm6[rnd3] === nm1[rnd] || nm6[rnd3] === ""){
			rnd3 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		if(i < 7){
			while(nm3[rnd4] === nm6[rnd3] || nm3[rnd4] === nm1[rnd]){
				rnd4 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm4.length | 0;
			while(nm3[rnd4] === nm5[rnd6] || nm5[rnd6] === nm6[rnd3]){
				rnd6 = Math.random() * nm5.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm4[rnd7] + nm6[rnd3];
		}
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm9.length | 0;
	rnd4 = Math.random() * nm10.length | 0;
	rnd5 = Math.random() * nm11.length | 0;
	while(nm7[rnd] === nm9[rnd3] || nm9[rnd3] === nm11[rnd5]){
		rnd3 = Math.random() * nm9.length | 0;
	}
	nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4] + nm11[rnd5];
	testSwear(nMs);
}

function nameSur(){
	sTp = Math.random() * 3 | 0;
	rnd = Math.random() * nm12.length | 0;
	rnd2 = Math.random() * nm13.length | 0;
	rnd3 = Math.random() * nm16.length | 0;
	if(sTp === 0){
		while(nm16[rnd3] === nm12[rnd]){
			rnd3 = Math.random() * nm16.length | 0;
		}
		nSr = nm12[rnd] + nm13[rnd2] + nm16[rnd3];
	}else{
		rnd4 = Math.random() * nm14.length | 0;
		rnd5 = Math.random() * nm15.length | 0;
		while(nm12[rnd] === nm14[rnd4] || nm16[rnd3] === nm14[rnd4]){
			rnd4 = Math.random() * nm14.length | 0;
		}
		nSr = nm12[rnd] + nm13[rnd2] + nm14[rnd4] + nm15[rnd5] + nm16[rnd3];
	}
	testSwear(nSr);
}