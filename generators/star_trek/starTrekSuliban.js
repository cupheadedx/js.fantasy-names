if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["b","d","g","l","m","n","r","s","v","z"];
var nm2 = ["aa","aa","a","a","e","i","i","a","a","e","i","i","a","a","e","i","i"];
var nm3 = ["b","d","j","g","l","m","n","r","v","z"];
var nm4 = ["e","i","e","i","a"];
var nm5 = ["d","g","k","m","n","r"];

var nm6 = ["d","h","l","m","n","r","s","z"];
var nm7 = ["a","a","a","e","a","a","a","e","a","a","a","e","a","a","a","e"];
var nm8 = ["d","l","ll","n","nn","r","rr","s","ss","v","z","zz"];
var nm9 = ["a","i","a","i","a","i","e","e"];
var nm10 = ["","","","","","","","","h","l","m","n","r","s"];

function generator$star_trek$starTrekSuliban(type){
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
	nTp = Math.random() * 8 | 0
	rnd = Math.random() * nm1.length | 0;
	rnd5 = Math.random() * nm5.length | 0;
	if(nTp === 0){
		nMs = nm1[rnd] + nm2[0] + nm5[rnd5];
	}else{
		rnd2 = Math.random() * nm2.length | 0;
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm4.length | 0;
		while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm5[rnd5]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm8.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	while(nm8[rnd3] === nm6[rnd] || nm8[rnd3] === nm10[rnd5]){
		rnd3 = Math.random() * nm8.length | 0;
	}
	nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd5];
	testSwear(nMs);
}
