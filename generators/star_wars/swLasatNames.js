if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["b","br","d","dr","g","gr","k","kr","p","r","v","vr","z"];
var nm2 = ["a","o","u","a","o","u","a","o","u","i"];
var nm3 = ["d","dd","g","gg","ggl","gl","k","kl","l","m","ml","md","n","ng","r","v","z"];
var nm4 = ["a","e","i","a","e","i","a","e","i","a","e","i","o","u"];
var nm5 = ["d","g","l","n","r","s","v","z"];
var nm6 = ["b","d","k","m","n","s","t"];

var nm7 = ["ch","d","g","h","j","k","n","m","r","s","z"];
var nm8 = ["a","a","a","e","i","o","u"];
var nm9 = ["d","f","h","l","m","n","s","t","v","z"];

var nm10 = ["","","","","d","dr","g","gr","k","kr","kl","n","r","tr","v"];
var nm11 = ["a","e","o","a","e","o","a","e","o","i","u"];
var nm12 = ["d","g","l","ll","m","n","nn","r","rr","v","z"];
var nm13 = ["a","e","o","a","e","o","a","e","o","a","e","o","a","e","o","a","e","o","io","ia","ie","eo","ea"];
var nm14 = ["c","d","dd","l","ll","m","mm","n","nn","v","z"];
var nm15 = ["b","d","dd","g","gg","n","s","t","tt"];

function generator$star_wars$swLasatNames(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	nameSur();
		while(nSr === ""){
			nameSur();
		}
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
		names = nMs + " " + nSr;
		return names;
}

function nameMas(){
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	if(i < 3){
		while(nm6[rnd3] === nm1[rnd]){
			rnd3 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		while(nm1[rnd] === nm3[rnd4] || nm3[rnd4] === nm6[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		if(i < 7){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm4.length | 0;
			while(nm5[rnd6] === nm3[rnd4] || nm5[rnd6] === nm6[rnd3]){
				rnd6 = Math.random() * nm5.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm4[rnd7] + nm6[rnd3];
		}
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm9.length | 0;
	rnd4 = Math.random() * nm8.length | 0;
	if(i < 5){
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm8[rnd4];
	}else{
		rnd5 = Math.random() * nm9.length | 0;
		rnd6 = Math.random() * nm8.length | 0;
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm8[rnd6] + nm9[rnd5] + nm8[rnd4];
	}
	testSwear(nMs);
}
function nameSur(){
	sTp = Math.random() * 3 | 0;
	rnd = Math.random() * nm10.length | 0;
	rnd2 = Math.random() * nm11.length | 0;
	rnd3 = Math.random() * nm15.length | 0;
	if(sTp === 0){
		while(nm15[rnd3] === nm10[rnd] || nm10[rnd] === ""){
			rnd = Math.random() * nm10.length | 0;
		}
		nSr = nm10[rnd] + nm11[rnd2] + nm15[rnd3];
	}else{
		rnd4 = Math.random() * nm12.length | 0;
		rnd5 = Math.random() * nm13.length | 0;
		while(nm10[rnd] === nm12[rnd4] || nm12[rnd4] === nm15[rnd3]){
			rnd4 = Math.random() * nm12.length | 0;
		}
		if(sTp === 1){
			nSr = nm10[rnd] + nm11[rnd2] + nm12[rnd4] + nm13[rnd5] + nm15[rnd3];
		}else{
			rnd6 = Math.random() * nm14.length | 0;
			rnd7 = Math.random() * nm13.length | 0;
			while(nm14[rnd6] === nm12[rnd4] || nm14[rnd6] === nm15[rnd3]){
				rnd6 = Math.random() * nm14.length | 0;
			}
			nSr = nm10[rnd] + nm11[rnd2] + nm12[rnd4] + nm13[rnd5] + nm14[rnd6] + nm13[rnd7] + nm15[rnd3];
		}
	}
	testSwear(nSr);
}