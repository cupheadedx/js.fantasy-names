var nm1 = ["","","","c","g","gr","h","k","kr","m","n","p","r","rr","s","sh","sk","sr","sl","v","x","z","zs"];
var nm2 = ["a","a","a","a","e","i","o","u"];
var nm3 = ["'k","'l","g","j","j'","j'h","j't","kr","ks","l","l'","ll","lt'h","lz","n","n'j","pj","r'k","r'th","rg","rj","rk","rkk","rr","shj","ss","ss't","t","th","th'j","thr","z'j","zj","zr"];
var nm4 = ["a","a","e","e","i","u"];
var nm5 = ["g","j","k","l","n","nt","r","rr","s","sh","ss","t","z"];
var nm6 = ["","","","","k","n","ph","r","s","sh","ss","s","sh","ss","s","sh","ss","z"];

var nm7 = ["","","","","","","","","","","","c","gh","j","k","l","m","n","r","s","sc","sh","ss","sz","th","v","z","zh"];
var nm8 = ["a","a","a","e","e","e","i","o","u"];
var nm9 = ["'k","'kr","'r","'v","h","j","ll","lth","l't","n","ph","phr","r","rg","rs","r'j","r'k","sp","ssp","shj't","sh't","sh'j","sz'","sh","sl","ss","sthr","str","th","thr","v","v'r","z","zsh","z'j"];
var nm10 = ["d","h","k","l","ll","n","ph","r","sh","ss","th","y","z"];
var nm11 = ["a","e","i","o","u","a","a","e","e","e","i"];
var nm12 = ["","","","","","","","","","","","","j","h","l","r","s","ss","s","ss","sh","sh","shj","sz","th"];

var nmB = [" ","-"];

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
	nTp = Math.random() * 4 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	if(nTp === 0){
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
		while(nm1[rnd] === nm3[rnd4] || nm3[rnd4] === nm6[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		if(nTp < 3){
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
	nTp = Math.random() * 4 | 0;
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	rnd4 = Math.random() * nm3.length | 0;
	rnd5 = Math.random() * nm4.length | 0;
	while(nm1[rnd] === nm3[rnd4] || nm3[rnd4] === nm6[rnd3]){
		rnd4 = Math.random() * nm3.length | 0;
	}
	if(nTp < 3){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
	}else{
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm4.length | 0;
		while(nm3[rnd4] === nm5[rnd6] || nm5[rnd6] === nm6[rnd3]){
			rnd6 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm4[rnd7] + nm6[rnd3];
	}
	testSwear(nMs);
}