var nm1 = ["","","","","","b","br","ch","cr","d","g","gl","gr","h","k","jr","l","m","n","r","rh","sk","t","th","thr","v","w","z"];
var nm2 = ["a","e","i","o","u","a","a","o","u","u"];
var nm3 = ["'g","'gr","'m","'r","bn","d'm","g","g'","g'd","g'g","g'l","g'r","g't","g'th","gbr","gg","gg'","gg'm","gg'n","gg'th","gkn","gl","gm","gn","gr","gth","hk'z","j","k'","k'l","k'm","k's","k'w","kd","kr","kt","l","l'br","l'd","l'gr","l'k","l't","lbr","lg","lgr","ll","lm","m","mcr","md","mg","mm","mn","ng","nn'm","nt","p'k","r","r'","r'g","r'k","r'l","r'm","r't","r'v","rc'v","rd","rg","rggr","rk","rl","rmm","rr'th","rsk","rth","sht","t","ttr","v","z","zr"];
var nm4 = ["c","k","l","n","r","th"];
var nm5 = ["","","","","","ch","d","g","gg","gh","h","k","kk","l","ll","lt","m","mp","n","nd","nk","r","rg","rk","rn","rr","rt","rth","s","sh","t"];

var nm6 = ["b","d","g","gr","h","k","l","m","n","r","rh","t","th","w","v","z"];
var nm7 = ["a","o","a","o","a","o","a","o","e","i","u"];
var nm8 = ["'g","'m","'r","g","g'","gg'","g'r","g'l","g'g","g't","g'th","gbr","gn","gl","gr","k'","k'l","k'n","k's","k'w","kr","ks","l","l'b","l'd","l'g","l'h","l'k","l'r","lg","lgr","lb","ll","lm","ln","ls","m","mg","md","ml","mm","mn","n","ng","nn","n'm","r","r'","rr'","r'g","r'l","r't","r'v","rd","rl","r'n","r'm","s","sh","v","x","z","zz"];
var nm9 = ["c","g","h","l","m","n","r","t","th","v","z"];
var nm10 = ["h","l","ll","n","r","s","sh","t","th"];

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
	nTp = Math.random() * 7 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd5 = Math.random() * nm5.length | 0;
	if(nTp < 4){
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm2.length | 0;
		if(nTp < 2){
			while(nm3[rnd3] === nm1[rnd] && nm3[rnd3] === nm5[rnd5]){
				rnd3 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm5[rnd5];
		}else{
			rnd6 = Math.random() * nm4.length | 0;
			rnd7 = Math.random() * nm2.length | 0;
			if(nTp === 3){
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd6] + nm2[rnd7] + nm5[rnd5];
			}else{
				nMs = nm1[rnd] + nm2[rnd2] + nm4[rnd6] + nm2[rnd7] + nm3[rnd3] + nm2[rnd4] + nm5[rnd5];
			}
		}
	}else{
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm5[rnd5] === nm1[rnd] || nm5[rnd5] === ""){
			rnd5 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd5];
	}
	testSwear(nMs);
}


function nameFem(){
	nTp = Math.random() * 2 | 0;
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm8.length | 0;
	rnd4 = Math.random() * nm7.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	while(nm8[rnd3] === nm6[rnd] && nm8[rnd3] === nm10[rnd5]){
		rnd3 = Math.random() * nm8.length | 0;
	}
	if(nTp === 0){
		nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm10[rnd5];
	}else{
		rnd6 = Math.random() * nm9.length | 0;
		rnd7 = Math.random() * nm7.length | 0;
		if(nTp === 3){
			nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm9[rnd6] + nm7[rnd7] + nm10[rnd5];
		}else{
			nMs = nm6[rnd] + nm7[rnd2] + nm9[rnd6] + nm7[rnd7] + nm8[rnd3] + nm7[rnd4] + nm10[rnd5];
		}
	}
	testSwear(nMs);
}