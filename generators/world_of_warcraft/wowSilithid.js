if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","b","f","ff","h","k","kr","krk","l","m","n","q","qh","qr","s","sh","ss","t","th","v","x"];
var nm2 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y","ya","yi","ye","ie","ei","ia","aa","ou"];
var nm3 = ["c","cn","cs","csh","cr","ks","ksh","kshr","kr","khr","n","nk","nkh","nr","nkr","r","rk","rn","rkh","rkr","rks","rs","rsh","s","sh","shk","sk","skr","sr","shr"];
var nm4 = ["a","e","i","o","a","e"];
var nm5 = ["c","k","kk","n","nn","r","rr","s","sh","ss","x","z","zz"];
var nm6 = ["","","","","c","cx","d","j","k","kx","m","s","ss","x","xc","xk","xx"];

var nm7 = ["","","","b","d","f","g","h","l","m","n","q","r","s","y","z"];
var nm8 = ["a","u","a","u","a","u","a","u","e","i","o","a","u","a","u","a","u","a","u","e","i","o","a","u","a","u","a","u","a","u","e","i","o","ai","au","ao","ia","aa"];
var nm9 = ["d","g","h","l","m","n","r","s","v","t","z"];
var nm10 = ["a","i","u","a","i","u","e","o"];
var nm11 = ["","","","","","","","","","","","h","j","n","s","sh","ss","x","s","sh","ss","x"];

function generator$world_of_warcraft$wowSilithid(type){
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
	rnd3 = Math.random() * nm6.length | 0;
	if(nTp < 2){
		while(nm1[rnd] === nm6[rnd3]){
			rnd3 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm5[rnd3]){
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
	}
	testSwear(nMs);
}

function nameFem(){
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm11.length | 0;
	if(nTp < 2){
		while(nm7[rnd] === nm11[rnd3]){
			rnd3 = Math.random() * nm11.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm11[rnd3];
	}else{
		rnd4 = Math.random() * nm9.length | 0;
		rnd5 = Math.random() * nm10.length | 0;
		while(nm9[rnd4] === nm7[rnd] || nm9[rnd4] === nm11[rnd3]){
			rnd4 = Math.random() * nm9.length | 0;
		}
		if(nTp < 4){
			nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm11[rnd3];
		}else{
			rnd6 = Math.random() * nm10.length | 0;
			rnd7 = Math.random() * nm9.length | 0;
			while(nm9[rnd7] === nm9[rnd4] || nm9[rnd7] === nm11[rnd3]){
				rnd7 = Math.random() * nm9.length | 0;
			}
			nMs = nm7[rnd] + nm9[rnd7] + nm10[rnd6] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm11[rnd3];
		}
	}
	testSwear(nMs);
}