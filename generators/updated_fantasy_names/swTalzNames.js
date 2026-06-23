var nm1 = ["","","","","b","br","c","ch","d","dr","f","g","gr","k","l","m","t","th","tw"];
var nm2 = ["a","e","i","u","a","e","i","u","a","e","i","u","ou","oo"];
var nm3 = ["ch","d","dz","dch","ft","l","ld","lz","ld","m","mz","n","nv","nch","nm","rd","rm","rv","rz","rs","s","ss","sh","sz","t","th","tz","z","zr","zd"];
var nm4 = ["a","e","i","o","u"];
var nm5 = ["d","g","l","lm","ln","ll","m","mn","n","r","rn","rm","rl","s","sl","v","z","zr","zl"];
var nm6 = ["","","","","j","k","l","n","p","r","rk","th"];

var nm7 = ["","","c","ch","f","h","l","m","n","r","s","v","z"];
var nm8 = ["a","e","i","o","u","i"];
var nm9 = ["d","dn","g","gt","l","lt","ln","lm","mt","md","ml","mv","nt","nd","rl","rn","rt","rd","st","t","th","tr"];
var nm10 = ["a","e","i","o","u","u"];
var nm11 = ["","","","c","d","k","n","p","t"];

var nm12 = ["b","d","g","k","m","n","r","s","v","w","z"];
var nm13 = ["a","e","i","u","a","e","i","u","a","e","i","u","oe","ou"];
var nm14 = ["ch","d","dh","g","gh","k","kt","kh","l","lt","ld","m","mt","n","nt","p","pt","r","rd","rv","rn","t","th"];
var nm15 = ["a","e","i","o"];
var nm16 = ["d","l","m","n","r","s","v","z"];
var nm17 = ["","","","","","c","d","k","n","m","s","t"];

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
		while(nm6[rnd3] === nm1[rnd] || nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
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
			while(nm5[rnd6] === nm6[rnd3] || nm3[rnd4] === nm5[rnd6]){
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
	sTp = Math.random() * 5 | 0;
	rnd = Math.random() * nm12.length | 0;
	rnd2 = Math.random() * nm13.length | 0;
	rnd3 = Math.random() * nm17.length | 0;
	if(sTp < 2){
		while(nm12[rnd] === nm17[rnd3] || nm17[rnd3] === ""){
			rnd3 = Math.random() * nm17.length | 0;
		}
		nSr = nm12[rnd] + nm13[rnd2] + nm17[rnd3];
	}else{
		rnd4 = Math.random() * nm14.length | 0;
		rnd5 = Math.random() * nm15.length | 0;
		while(nm12[rnd] === nm14[rnd4] || nm14[rnd4] === nm17[rnd5]){
			rnd4 = Math.random() * nm14.length | 0;
		}
		if(sTp < 4){
			nSr = nm12[rnd] + nm13[rnd2] + nm14[rnd4] + nm15[rnd5] + nm17[rnd3];
		}else{
			rnd6 = Math.random() * nm12.length | 0;
			rnd7 = Math.random() * nm13.length | 0;
			nSr = nm12[rnd6] + nm13[rnd7] + " " + nm12[rnd] + nm13[rnd2] + nm14[rnd4] + nm15[rnd5] + nm17[rnd3];
		}
	}
	testSwear(nSr);
}