if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","b","br","d","dr","g","gr","k","kr","m","n","r","th","v","x","z"];
var nm2 = ["a","e","o","i","u","a","a","a","e","e","o","a","e","o","i","u","a","a","a","e","e","o","a","e","o","i","u","a","a","a","e","e","o","aa","uu"];
var nm3 = ["'r","'z","g","k'd","k'th","k'v","k'z","kkr","kr","kz","l","l'dr","l'g","l'gr","l'r","l'th","l'thr","l'tr","l'z","ldr","ln","lth","lthr","lz","nd","r","r'k","r'th","r'thr","r'v","r'z","rb","rd","rg","rk","rl","rt","rth","rz","thk","v","x'r","z","z'g","z'r","z'v","zr","zz"];
var nm4 = ["a","e","o","i","u","a","a","a","e","e","o"];
var nm5 = ["l","n","r","th","v","z"];
var nm6 = ["c","k","l","n","r","s","sh","th","x","z","zz"];

function generator$world_of_warcraft$wowDoomguard(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	nameMas();
		while(nMs === ""){
			nameMas();
		}
		return nMs;
}

function nameMas(){
	nTp = Math.random() * 5 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	if(nTp === 0){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm5[rnd5] === nm1[rnd]){
			rnd5 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd5];
	}else{
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm4.length | 0;
		if(nTp < 3){
			while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm6[rnd5]){
				rnd3 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm4[rnd4] + nm3[rnd3] + nm2[rnd2] + nm6[rnd5];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm4.length | 0;
			while(nm5[rnd6] === nm3[rnd3] || nm5[rnd6] === nm6[rnd5]){
				rnd6 = Math.random() * nm5.length | 0;
			}
			if(nTp === 3){
				nMs = nm1[rnd] + nm4[rnd4] + nm3[rnd3] + nm4[rnd7] + nm5[rnd6] + nm2[rnd2] + nm6[rnd5];
			}else{
				nMs = nm1[rnd] + nm4[rnd7] + nm5[rnd6] + nm4[rnd4] + nm3[rnd3] + nm2[rnd2] + nm6[rnd5];
			}
		}
	}
	testSwear(nMs);
}