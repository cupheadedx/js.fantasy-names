if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","b","br","d","dr","g","gl","gr","h","k","l","m","n","r","v","vr","z"];
var nm2 = ["a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","a","o","o","u","u","uo","au","ua","uu"];
var nm3 = ["f","fr","ff","gr","gm","gt","gth","kr","k'th","lm","ldr","lgr","lthr","r","rg","r'g","rgr","rgst","rg'th","r'l","rk","rk'l","rth","r'th","st","t","th","tr","thr","'th","zz","zg","zm","'zz"];
var nm4 = ["a","e","i","o","u","a","e","i","o","u","a","e","o","u","a","e","o","u"];
var nm5 = ["d","g","l","n","r","th","v","z"];
var nm6 = ["g","gg","k","kk","l","m","nn","r","rg","rm","rr","s","th","z","zz"];

function generator$world_of_warcraft$wowMoarg(type){
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