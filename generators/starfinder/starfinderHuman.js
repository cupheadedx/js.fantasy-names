if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","b","d","g","h","j","k","l","m","n","p","r","s","v","y","z"];
var nm2 = ["ao","io","ea","ia","ei","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o"];
var nm3 = ["b","bh","d","dh","dz","g","gh","gz","gn","h","hb","hd","hv","k","l","ln","lm","lk","lr","m","mn","n","nv","nr","ph","r","rl","rn","rv","s","sh","sr","sn","v","vh","z","zh"];
var nm4 = ["ea","ia","iu","oa","a","i","e","o","a","i","e","o","a","i","e","o","a","i","e","o","a","i","e","o","a","i","e","o","a","i","e","o"];
var nm5 = ["c","h","k","l","n","r","s","v","y","z"];
var nm6 = ["","","","","","","","","f","g","l","n","r","s"];

function generator$starfinder$starfinderHuman(){
	i = Math.floor(Math.random() * 10);

	nameMas();
		while(nMs === ""){
			nameMas();
		}
		return nMs;
}

function nameMas(){
	var nTp = Math.random() * 7 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	if(nTp === 0){
		while(nm1[rnd] === nm6[rnd3]){
			rnd3 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		while(rnd2 < 5 && rnd5 < 4){
			rnd5 = Math.random() * nm4.length | 0;
		}
		if(nTp < 5){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm4.length | 0;
			while(rnd7 < 4 && rnd5 < 4){
				rnd5 = Math.random() * nm4.length | 0;
			}
			if(nTp === 5){
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm4[rnd7] + nm6[rnd3];
			}else{
				nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd6] + nm4[rnd7] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
			}
		}
	}
	testSwear(nMs);
}