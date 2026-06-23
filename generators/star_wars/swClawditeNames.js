if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["d","g","l","m","n","p","r","t","v","z"];
var nm2 = ["e","o","u","e","o","u","e","o","u","i","a"];
var nm3 = ["b","br","d","dd","dl","ls","l","ll","lm","lr","ln","m","mn","mr","mm","n","nn","nd","nr","nv","r","rm","rv","rl","v","vr","vl"];
var nm4 = ["a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","ei","ie","ai","ey"];
var nm5 = ["d","l","m","n","s","t"];

var nm6 = ["b","br","c","cr","g","k","kr","n","p","pr","r","s","z"];
var nm7 = ["a","i","o","a","i","o","a","i","o","e","u","u","u"];
var nm8 = ["d","dg","g","gn","gt","h","k","ks","n","ng","r","rr","rk","rg","s","sk","t","tt","ts","v","x"];
var nm9 = ["e","o","u","e","o","u","e","o","u","i","a"];
var nm10 = ["d","h","m","n","s","t","x"];

var nm11 = ["b","bl","d","g","k","l","m","n","p","r","s","sl","v","w"];
var nm12 = ["a","e","i","o","u","a","e","i","o","u","y"];
var nm13 = ["hz","hz","k","l","ll","m","n","nn","r","rr","rt","s","ss","v","z"];
var nm14 = ["a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","ie","ia","ee","ea","ei"];
var nm15 = ["c","d","k","l","ll","m","n","r"];

function generator$star_wars$swClawditeNames(type){
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
		}
		names = nMs + " " + nSr;
		return names;
}

function nameMas(){
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm4.length | 0;
	rnd3 = Math.random() * nm5.length | 0;
	if(i < 4){
		while(nm1[rnd] === nm5[rnd3]){
			rnd3 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm4[rnd2] + nm5[rnd3];
	}else{
		rnd4 = Math.random() * nm2.length | 0;
		rnd5 = Math.random() * nm3.length | 0;
		while(nm1[rnd] === nm3[rnd5] || nm5[rnd3] === nm3[rnd5]){
			rnd5 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd4] + nm3[rnd5] + nm4[rnd2] + nm5[rnd3];
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm10.length | 0;
	if(i < 4){
		while(nm6[rnd] === nm9[rnd3]){
			rnd3 = Math.random() * nm10.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm10[rnd3];
	}else{
		rnd4 = Math.random() * nm9.length | 0;
		rnd5 = Math.random() * nm8.length | 0;
		while(nm6[rnd] === nm10[rnd5] || nm10[rnd3] === nm8[rnd5]){
			rnd5 = Math.random() * nm8.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd5] + nm9[rnd4] + nm10[rnd3];
	}
	testSwear(nMs);
}

function nameSur(){
	sTp = Math.random() * 2 | 0;
	rnd = Math.random() * nm11.length | 0;
	rnd2 = Math.random() * nm12.length | 0;
	rnd3 = Math.random() * nm15.length | 0;
	if(sTp === 0){
		while(nm15[rnd3] === nm11[rnd]){
			rnd = Math.random() * nm11.length | 0;
		}
		nSr = nm11[rnd] + nm12[rnd2] + nm15[rnd3];
	}else{
		rnd4 = Math.random() * nm13.length | 0;
		rnd5 = Math.random() * nm12.length | 0;
		while(nm11[rnd] === nm13[rnd4] || nm13[rnd4] === nm15[rnd3]){
			rnd4 = Math.random() * nm12.length | 0;
		}
		nSr = nm11[rnd] + nm12[rnd2] + nm13[rnd4] + nm12[rnd5] + nm15[rnd3];
	}
	testSwear(nSr);
}