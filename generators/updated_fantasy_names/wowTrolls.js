var nm1 = ["","","","dr","h","j","k","l","m","p","r","rh","s","sh","t","tr","tz","v","w","x","z"];
var nm2 = ["ai","aa","ae","a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u"];
var nm3 = ["'ch","'d","'g","'gh","'j","'k","'m","'n","'r","'s","'sh","'t","'th","'z","g'ch","g'd","g'm","g'n","g'r","g's","g'sh","g't","g'th","g'z","h'd","h'g","h'gh","h'j","h'k","h'm","h'n","h'r","h's","h'sh","h't","h'th","h'z","l'd","l'g","l'gh","l'j","l'm","l'n","l'r","l's","l't","l'z","m'g","m'gh","m'k","m'r","m't","n'ch","n'd","n'g","n'gh","n'j","n'k","n'r","n's","n't","n'z","r'd","r'j","r'm","r'n","r's","r't","r'z","s'g","s'n","s't","s'z","z'k","z'r","z's","b","d","g","gh","h","hj","j","k","kj","l","lj","lk","m","mb","n","ng","nj","ny","pt","r","rm","s","sh","th","v","w","x","y","z","zk","b","d","g","gh","h","j","k","l","m","n","ng","r","s","sh","th","v","w","x","y","z"];
var nm4 = ["ei","ai","ia","a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u"];
var nm5 = ["g","h","j","k","l","m","n","p","r","s","sh","x","z","g","h","j","k","l","m","n","p","r","s","sh","x","z","g","h","j","k","l","m","n","p","r","s","sh","x","z","nd","th","v","gn","hn","jn","ln","mn","nn","rn","sn","shn","xn","zn","gm","hm","lm","mm","nm","rm","sm","shm","xm","zm","hj","lj","nr","rj","gz","hz","kz","lz","mz","nz","pz","rz","sz","shz","xz","zz"];
var nm6 = ["","","","","","","","h","hn","k","l","n","n","n","n","n","n","r","sh","y","z"];

var nm7 = ["","","","","","b","d","f","g","h","j","k","kh","l","m","n","p","r","s","sh","t","v","x","y","z","zh"];
var nm8 = ["oo","ai","ie","ei","ae","ia","ea","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm9 = ["'d","'j","'k","'m","'ts","'z","h'd","l'd","n'd","z'd","h'j","l'j","n'j","z'j","h'k","l'k","n'k","z'k","h'm","j'm","l'm","n'm","z'm","l'ts","n'ts","l'z","n'z","h'z","h","j","l","n","z","d","j","m","r","s","z","hd","hl","hm","hr","hs","hz","ld","ll","lm","lr","lz","nj","nt","nw","nz","zd","zl","zm","zr","kr","mj","nd","nn","sh","t","th","w","x","y"];
var nm10 = ["ia","ie","ae","ea","ei","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm11 = ["c","h","j","k","l","m","n","r","s","sh","t","v","w","y","z","c","h","j","k","l","m","n","r","s","sh","t","v","w","y","z","c","h","j","k","l","m","n","r","s","sh","t","v","w","y","z","g","g","ll","cn","hn","jn","ln","nn","rn","sn","shn","vn","zn","lm","mm","rm","sm","shm","vm","zm","lj","nj","tj","hz","lz","mz","nz","rz","sz","shz","zz"];
var nm12 = ["","","","","","","","","","","","","h","n","nn","r","th"];

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
	nTp = Math.random() * 6 | 0
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	rnd4 = Math.random() * nm3.length | 0;
	rnd5 = Math.random() * nm4.length | 0;
	while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm6[rnd3]){
		rnd4 = Math.random() * nm3.length | 0;
	}
	if(nTp < 4){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
	}else{
		rnd6 = Math.random() * nm2.length | 0;
		rnd7 = Math.random() * nm5.length | 0;
		while(rnd4 > 9 && rnd7 > 9){
			rnd7 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm2[rnd6] + nm5[rnd7] + nm4[rnd5] + nm6[rnd3];
	}
	testSwear(nMs);
}

function nameFem(){
	nTp = Math.random() * 6 | 0
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm12.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	while(nm9[rnd4] === nm7[rnd] || nm9[rnd4] === nm12[rnd3]){
		rnd4 = Math.random() * nm9.length | 0;
	}
	if(nTp < 4){
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm12[rnd3];
	}else{
		rnd6 = Math.random() * nm8.length | 0;
		rnd7 = Math.random() * nm11.length | 0;
		while(rnd4 > 9 && rnd7 > 15){
			rnd7 = Math.random() * nm11.length | 0;
		}
		if(nTp === 4){
			nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm8[rnd6] + nm11[rnd7] + nm10[rnd5] + nm12[rnd3];
		}else{
			nMs = nm7[rnd] + nm8[rnd2] + nm11[rnd7] + nm8[rnd6] + nm9[rnd4] + nm10[rnd5] + nm12[rnd3];
		}
	}
	testSwear(nMs);
}