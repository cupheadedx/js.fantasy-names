if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","c","d","dr","g","h","kh","l","m","ph","ps","r","s","v","z"];

var nm2 = ["y","a","a","a","e","e","i","i","o","u","y","a","a","a","e","e","i","i","o","u"];

var nm3 = ["dr","f","g","gb","gm","gt","gr","j","k","kk","kt","l","lg","lk","ltr","m","n","nt","nr","r","rg","rk","sk","st","tl","tr"];

var nm4 = ["ui","io","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o"];

var nm5 = ["k","l","m","n","r","t","v","z"];

var nm6 = ["","","","g","k","n","r","rs","s","sh","t","th","x"];



var nm7 = ["","","","c","d","h","l","m","n","p","ph","s","t","z"];

var nm8 = ["au","ai","ea","ae","y","a","e","i","u","a","e","i","u","a","e","i","u","y","a","e","i","u"];

var nm9 = ["b","c","ch","h","kp","l","ln","lm","ls","lt","m","n","nn","nt","nr","r","rr","rn","rs","rz","s","ss","sn","st","z"];

var nm10 = ["a","e","i","a","e","i","o"];

var nm11 = ["h","l","ll","ln","lh","lr","n","nn","nr","r","rt","s","t","th","x"];

var nm12 = ["","","","","","","","","","","","","","h","n","s","x"];



function generator$pop_culture$marvelEternals(type){
	i = Math.floor(Math.random() * 10);


	var tp = type;

	if(tp === 1){

			genFem();

			while(nMs === ""){

				genFem();

			}

		}else{

			genMas();

			while(nMs === ""){

				genMas();

			}

		}

		return nMs;

}



function genMas(){

	nTp = Math.random() * 6 | 0;

	rnd = Math.random() * nm1.length | 0;

	rnd2 = Math.random() * nm2.length | 0;

	rnd3 = Math.random() * nm3.length | 0;

	rnd4 = Math.random() * nm4.length | 0;

	rnd5 = Math.random() * nm6.length | 0;

	while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm6[rnd5]){

		rnd3 = Math.random() * nm3.length | 0;

	}

	if(nTp < 4){

		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];

	}else{

		rnd6 = Math.random() * nm2.length | 0;

		rnd7 = Math.random() * nm5.length | 0;

		while(nm5[rnd7] === nm3[rnd3] || nm5[rnd7] === nm6[rnd5]){

			rnd7 = Math.random() * nm5.length | 0;

		}

		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd6] + nm5[rnd7] + nm4[rnd4] + nm6[rnd5];

	}

	testSwear(nMs);

}



function genFem(){

	nTp = Math.random() * 6 | 0;

	rnd = Math.random() * nm7.length | 0;

	rnd2 = Math.random() * nm8.length | 0;

	rnd3 = Math.random() * nm9.length | 0;

	rnd4 = Math.random() * nm10.length | 0;

	rnd5 = Math.random() * nm12.length | 0;

	while(nm9[rnd3] === nm7[rnd] || nm9[rnd3] === nm12[rnd5]){

		rnd3 = Math.random() * nm9.length | 0;

	}

	if(nTp < 4){

		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4] + nm12[rnd5];

	}else{

		rnd6 = Math.random() * nm10.length | 0;

		rnd7 = Math.random() * nm11.length | 0;

		while(nm11[rnd7] === nm9[rnd3] || nm11[rnd7] === nm12[rnd5]){

			rnd7 = Math.random() * nm11.length | 0;

		}

		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4] + nm11[rnd7] + nm10[rnd6] + nm12[rnd5];

	}

	testSwear(nMs);

}