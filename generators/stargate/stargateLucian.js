if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","c","d","g","j","k","m","n","r","s","sl","t","v","w","z"];
var nm2 = ["a","e","i","o","u"];
var nm3 = ["d","dv","ffl","fl","l","ll","lr","lv","m","ml","mr","n","nd","nr","nl","nn","r","rl","rr","rv","s","sh","t","v","vr"];
var nm4 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","eo","ia","io"];
var nm5 = ["l","n","r","t","v","z"];
var nm6 = ["","","","c","g","k","l","ld","m","n","ns","p","s","sh","t","z"];

var nm7 = ["d","g","h","j","k","l","n","m","r","s","t","v","z"];
var nm8 = ["a","e","i","o","a","i","a","i","a","e","i","o","a","i","a","i"];
var nm9 = ["d","f","l","m","n","r","s","t","v","z"];
var nm10 = ["a","e","i","o","a","i","a","i","a","e","i","o","a","i","a","i","ea","ia"];
var nm11 = ["h","l","ll","n","nn","s","sh","th"];

function generator$stargate$stargateLucian(type){
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
		if(nTp < 4){
			while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm6[rnd3]){
				rnd4 = Math.random() * nm3.length | 0;
			}
			if(nTp === 2){
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
			}else{
				nMs = nm1[rnd] + nm4[rnd5] + nm3[rnd4] + nm2[rnd2] + nm6[rnd3];
			}
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm4.length | 0;
			while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm5[rnd6]){
				rnd4 = Math.random() * nm3.length | 0;
			}
			if(nTp === 4){
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm4[rnd7] + nm6[rnd3];
			}else{
				nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd6] + nm4[rnd7] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
			}
		}
	}
	testSwear(nMs);
}

function nameFem(){
	nTp = Math.random() * 3 | 0;
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	if(nTp < 2){
		rnd3 = Math.random() * nm9.length | 0;
		rnd4 = Math.random() * nm10.length | 0;
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4];
	}else{
		rnd3 = Math.random() * nm11.length | 0;
		nMs = nm7[rnd] + nm8[rnd2] + nm11[rnd3];
	}
	testSwear(nMs);
}