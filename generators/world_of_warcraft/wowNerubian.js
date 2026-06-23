if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["c","cr","g","gr","h","k","kh","kr","m","n","s","t","tr","y","z"];
var nm2 = ["a","i","u","a","i","u","a","i","u","a","i","u","a","i","u","e","e","ae","ai"];
var nm3 = ["'","'z","d","d'r","j","k'","kh'","k'r","k't","k'th","l","l'r","l'th","lt","lj","lr","lv","l't","lm","lth","m","n","rt","rk","rz","rj","s't","shr","sr","sz","sh","sn","t'r","t'z","th'","v","z"];
var nm4 = ["a","i","o","a","i","o","u","e"];
var nm5 = ["l","m","n","r","s","sh","z"];
var nm6 = ["b","k","l","n","r","s","t","x"];

var nm7 = ["g","h","l","m","n","r","s","v","y","z"];
var nm8 = ["a","e","a","e","a","e","i","o","u"];
var nm9 = ["h","j","l","m","n","nr","r","rh","s","sh","sr","shr","v","vr","z","zh","zr"];
var nm10 = ["a","e","a","e","a","e","a","e","a","e","a","e","i","o","u","a","e","a","e","a","e","a","e","a","e","a","e","i","o","u","u","u","aa","au","uu"];
var nm11 = ["b","d","h","l","m","n","r","t"];

function generator$world_of_warcraft$wowNerubian(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	if(tp === 1){
			nameFem();
			while(nMs === ""){
				nameFem();
			}
			nTm = nMs;

			nameFem();
			while(nMs === ""){
				nameFem();
			}
			nMs = nMs + "'" + nTm;
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
		while(nm5[rnd7] === nm3[rnd4] || nm5[rnd7] === nm6[rnd3]){
			rnd7 = Math.random() * nm5.length | 0;
		}
		if(nTp === 4){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd7] + nm2[rnd6] + nm6[rnd3];
		}else{
			nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd7] + nm4[rnd5] + nm3[rnd4] + nm2[rnd6] + nm6[rnd3];
		}
	}
	testSwear(nMs);
}

function nameFem(){
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm11.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	while(nm9[rnd4] === nm7[rnd] || nm9[rnd4] === nm11[rnd3]){
		rnd4 = Math.random() * nm9.length | 0;
	}
	nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm11[rnd3];
	testSwear(nMs);
}