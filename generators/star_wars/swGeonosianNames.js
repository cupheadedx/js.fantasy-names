if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","b","br","d","g","h","k","n","p","s","t"];
var nm2 = ["a","e","i","o","u","a","e","i","o","u","y"];
var nm3 = ["cht","ckl","d","dd","ggl","kr","kv","l","mm","n","pt","rg","sh","v","z"];
var nm4 = ["","","","ck","gg","k","l","n","r","ss","x","y","zz"];

var nm5 = ["c","d","k","l","n","m","r","s","t","y","z"];
var nm6 = ["a","e","i","o","u","a","a","i","i","e","e"];
var nm7 = ["d","h","l","m","n","r","t","v","z"];
var nm8 = ["d","l","ll","m","mm","n","nn","r","s","sh","ss","w","y"];

var nm9 = ["ch","d","f","h","l","m","n","r","s","z"];
var nm10 = ["a","e","o","a","e","o","i","u","i","a","e","o"];
var nm11 = ["d","dr","dd","g","gg","gl","k","kk","lk","lls","ls","mm","mp","mn","n","nn","nk","ng","nd","np","pp","pr","pl","rl","rp","rs","sl","sn","ss","sk","sm"];
var nm12 = ["","","","c","d","k","l","r","s","t"];

function generator$star_wars$swGeonosianNames(type){
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
	rnd3 = Math.random() * nm4.length | 0;
	if(i < 5){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm4[rnd3] === nm1[rnd] || nm4[rnd3] === ""){
			rnd3 = Math.random() * nm4.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm4[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm2.length | 0;
		while(nm1[rnd] === nm3[rnd4] || nm3[rnd4] === nm4[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm2[rnd5] + nm4[rnd3];
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm5.length | 0;
	rnd2 = Math.random() * nm6.length | 0;
	rnd3 = Math.random() * nm7.length | 0;
	rnd4 = Math.random() * nm6.length | 0;
	while(nm7[rnd3] === nm5[rnd]){
		rnd3 = Math.random() * nm7.length | 0;
	}
	if(i < 5){
		nMs = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4];
	}else{
		rnd5 = Math.random() * nm8.length | 0;
		rnd6 = Math.random() * nm6.length | 0;
		while(nm5[rnd] === nm8[rnd5] || nm7[rnd3] === nm8[rnd5]){
			rnd5 = Math.random() * nm8.length | 0;
		}
		nMs = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5] + nm6[rnd6];
	}
	testSwear(nMs);
}
function nameSur(){
	sTp = Math.random() * 2 | 0;
	rnd = Math.random() * nm9.length | 0;
	rnd2 = Math.random() * nm10.length | 0;
	rnd3 = Math.random() * nm12.length | 0;
	if(sTp === 0){
		while(nm12[rnd3] === nm9[rnd] || nm12[rnd3] === ""){
			rnd3 = Math.random() * nm12.length | 0;
		}
		nSr = nm9[rnd] + nm10[rnd2] + nm12[rnd3];
	}else{
		rnd4 = Math.random() * nm11.length | 0;
		rnd5 = Math.random() * nm10.length | 0;
		while(nm9[rnd] === nm11[rnd4] || nm11[rnd4] === nm12[rnd3]){
			rnd4 = Math.random() * nm11.length | 0;
		}
		nSr = nm9[rnd] + nm10[rnd2] + nm11[rnd4] + nm10[rnd5] + nm12[rnd3];
	}
	testSwear(nSr);
}