if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","ch","f","h","l","m","n","s","sh","v","z","zh"];

var nm2 = ["a","i","a","i","e","o"];

var nm3 = ["c","dr","fn","fr","l","ll","ld","lv","lr","ln","m","mn","n","nd","nv","nr","nz","pr","rn","rl","r","rr","rv","v","vr","vl","z","zn","zz","zr"];

var nm4 = ["a","i","o","a","i","o","e"];

var nm5 = ["ct","g","gn","hn","hl","l","lm","m","mm","n","nn","nd","ng","p","r","rl","rv","s","sl","sh","v","z"];

var nm6 = ["a","o","a","o","i","e"];

var nm7 = ["","","h","l","n","s","t"];



var nm8 = ["","","","b","d","g","h","k","l","m","n","r","v","y","z"];

var nm9 = ["a","a","a","e","o","u"];

var nm10 = ["b","bl","br","d","dr","g","gn","gr","gl","l","ln","lm","lr","lv","m","mr","n","nd","nn","ng","v","z"];

var nm11 = ["e","i","u","e","i","u","a","o"];

var nm12 = ["b","br","g","gr","kn","kr","lk","lb","ld","nc","nd","nk","nv","rd","rg","rn","rl","rv","sh","sc","sn","st"];

var nm13 = ["ia","aa","ea","a","u","a","u","e","i","a","u","a","u","e","i","a","u","a","u","e","i"];

var nm14 = ["d","l","m","n","s"];



function generator$runescape$rsIlujanka(type){
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

	nTp = Math.random () * 3 | 0;

	rnd = Math.random() * nm8.length | 0;

	rnd2 = Math.random() * nm9.length | 0;

	rnd3 = Math.random() * nm10.length | 0;

	rnd4 = Math.random() * nm13.length | 0;

	rnd5 = Math.random() * nm14.length | 0;

	rnd6 = Math.random() * nm11.length | 0;

	rnd7 = Math.random() * nm12.length | 0;

	while(nm10[rnd3] === nm8[rnd] || nm10[rnd3] === nm14[rnd5]){

		rnd3 = Math.random() * nm10.length | 0;

	}

	while(nm10[rnd3] === nm12[rnd7] || nm12[rnd7] === nm14[rnd5]){

		rnd7 = Math.random() * nm12.length | 0;

	}

	nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd6] + nm12[rnd7] + nm13[rnd4] + nm14[rnd5];

	testSwear(nMs);

}



function nameFem(){

	nTp = Math.random () * 3 | 0;

	rnd = Math.random() * nm1.length | 0;

	rnd2 = Math.random() * nm2.length | 0;

	rnd3 = Math.random() * nm3.length | 0;

	rnd4 = Math.random() * nm6.length | 0;

	rnd5 = Math.random() * nm7.length | 0;

	rnd6 = Math.random() * nm4.length | 0;

	rnd7 = Math.random() * nm5.length | 0;

	while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm7[rnd5]){

		rnd3 = Math.random() * nm3.length | 0;

	}

	while(nm3[rnd3] === nm5[rnd7] || nm5[rnd7] === nm7[rnd5]){

		rnd7 = Math.random() * nm5.length | 0;

	}

	nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd6] + nm5[rnd7] + nm6[rnd4] + nm7[rnd5];

	testSwear(nMs);

}