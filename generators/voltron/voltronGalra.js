if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","b","br","dr","dh","h","j","k","kh","kr","m","n","pr","r","s","sr","sn","th","trhr","v","vr","vh","z","zh"];
var nm2 = ["a","e","i","o","u","a","e","i","o","u","y"];
var nm3 = ["c","d","dd","gl","gd","g","gg","k","kk","kn","kl","kt","l","ll","ld","ln","lk","m","md","mk","nd","nk","nt","ng","nz","r","rg","rn","rk","x","z"];
var nm4 = ["a","e","o","u","a","e","o","u","i"];
var nm5 = ["","","g","ht","k","l","n","s","t","v","x","z"];

var nm6 = ["","","ch","cr","d","g","gr","gn","j","k","kr","l","m","n","r","tr","v","vr","z"];
var nm7 = ["a","e","o","u"];
var nm8 = ["cx","ch","d","dr","dh","dn","gt","gn","gl","hx","ht","kz","kt","l","ll","ln","lt","m","n","ng","nd","nt","rt","rk","rz","tz","tch","tr","thr","vr","vz","z","zr"];
var nm9 = ["ia","ee","ea","a","i","o","a","i","o","a","i","o","e","u"];
var nm10 = ["","","d","g","gg","k","m","n","r","v","z"];

function generator$voltron$voltronGalra(type){
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
	nTp = Math.random() * 2 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm5.length | 0;
	if(nTp === 0){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm5[rnd3] === "" || nm5[rnd3] === nm1[rnd]){
			rnd3 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd3];
	}else{
		rnd4 = Math.random() * nm4.length | 0;
		rnd5 = Math.random() * nm3.length | 0;
		while(nm3[rnd5] === nm1[rnd] || nm3[rnd5] === nm5[rnd3]){
			rnd5 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd5] + nm4[rnd4] + nm5[rnd3];
	}
	testSwear(nMs);
}


function nameFem(){
	nTp = Math.random() * 2 | 0;
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm10.length | 0;
	if(nTp === 0){
		while(nm6[rnd] === ""){
			rnd = Math.random() * nm6.length | 0;
		}
		while(nm10[rnd3] === "" || nm10[rnd3] === nm6[rnd]){
			rnd3 = Math.random() * nm10.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm10[rnd3];
	}else{
		rnd4 = Math.random() * nm9.length | 0;
		rnd5 = Math.random() * nm8.length | 0;
		while(nm8[rnd5] === nm6[rnd] || nm8[rnd5] === nm10[rnd3]){
			rnd5 = Math.random() * nm8.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd5] + nm9[rnd4] + nm10[rnd3];
	}
	testSwear(nMs);
}
