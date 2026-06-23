if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","b","bj","br","c","d","f","fj","g","ghr","gj","gl","h","hj","hr","j","k","m","r","s","sk","sl","st","sv","t","th","v","y"];
var nm2 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y","aa","oe","ei","ey","uy","ae"];
var nm3 = ["c","d","dh","dr","f","fr","g","gn","gnh","gnv","k","kk","kt","l","lb","lbr","ld","ldg","lg","lj","llsk","lm","lr","lsk","lst","m","md","n","nd","ngv","nn","nnl","nnv","nv","r","rb","rbr","rd","rdgr","rdr","rg","rgl","rh","rj","rk","rl","rn","rns","rv","s","sgr","sk","sv","t","th","thn","v"];
var nm4 = ["a","e","i","o","u"];
var nm5 = ["d","f","g","h","k","kk","l","ll","m","n","nn","r","rh","t","th","v","z"];
var nm6 = ["","","","","d","g","gg","k","l","ll","ld","lf","lfr","m","n","nd","ng","nt","r","rk","rr","rd","rdr","rn","rs","s","w"];

var nm7 = ["","","","","br","c","f","fl","fr","gr","h","k","kr","l","m","pr","r","s","sh","t","v"];
var nm8 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y","y","y","ei","ia","ae","ai"];
var nm9 = ["g","gd","gr","jl","l","lb","ll","ld","lg","n","nn","ng","ngv","ngf","ngr","nt","r","rl","rth","s","sj","sg","sh","st","ss","t","tj","tt","vr"];
var nm10 = ["a","e","i","o","a","e","i","o","y"];
var nm11 = ["d","f","g","l","n","nn","r","s","sh","ss","t","tt","v"];
var nm12 = ["","","","","","","","","","","","","","l","ll","ld","n","nn","nd","r","s"];

function generator$world_of_warcraft$wowVrykul(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
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
		return nMs;
}


function nameMas(){
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	if(nTp < 2){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm5[rnd5] === nm1[rnd] || nm6[rnd5] === ""){
			rnd5 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd5];
	}else{
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm4.length | 0;
		if(nTp < 4){
			while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm6[rnd5]){
				rnd3 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm4.length | 0;
			while(nm5[rnd6] === nm3[rnd3] || nm5[rnd6] === nm6[rnd5]){
				rnd6 = Math.random() * nm5.length | 0;
			}
			if(nTp === 4){
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd6] + nm4[rnd7] + nm6[rnd5];
			}else{
				nMs = nm1[rnd] + nm4[rnd7] + nm5[rnd6] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
			}
		}
	}
	testSwear(nMs);
}

function nameFem(){
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm9.length | 0;
	rnd4 = Math.random() * nm10.length | 0;
	rnd5 = Math.random() * nm12.length | 0;
	if(nTp < 2){
		while(nm9[rnd3] === nm7[rnd] || nm9[rnd3] === nm12[rnd5]){
			rnd3 = Math.random() * nm9.length | 0;
		}
		if(nTp === 0){
			nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4] + nm12[rnd5];
		}else{
			nMs = nm7[rnd] + nm10[rnd4] + nm9[rnd3] + nm8[rnd2] + nm12[rnd5];
		}
	}else{
		rnd6 = Math.random() * nm11.length | 0;
		rnd7 = Math.random() * nm10.length | 0;
		while(nm11[rnd6] === nm9[rnd3] || nm11[rnd6] === nm12[rnd5]){
			rnd6 = Math.random() * nm12.length | 0;
		}
		if(nTp === 2){
			nMs = nm7[rnd] + nm10[rnd4] + nm9[rnd3] + nm8[rnd2] + nm11[rnd6] + nm10[rnd7] + nm12[rnd5];
		}else{
			nMs = nm7[rnd] + nm10[rnd4] + nm11[rnd6] + nm10[rnd7] + nm9[rnd3] + nm8[rnd2] + nm12[rnd5];
		}
	}
	testSwear(nMs);
}