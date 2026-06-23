if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","ch","d","dv","f","h","j","k","n","sh","t","v"];

var nm2 = ["io","a","e","e","i","o","o","u","a","e","e","i","o","o","u","a","e","e","i","o","o","u"];

var nm3 = ["l","lm","ln","lr","m","mn","n","ns","r","rr","s","ts","v","z"];

var nm4 = ["a","e","o"];

var nm5 = ["d","l","n"];

var nm6 = ["a","e","i"];

var nm7 = ["","","d","n","nd","r","rn","sh","y"];



var nm8 = ["","","","ch","j","k","l","r","s","sh","t","th","v"];

var nm9 = ["ee","ie","a","a","e","e","i","i","o","a","a","e","e","i","i","o"];

var nm10 = ["j","l","n","nl","nz","r","rr","sm","ss","y","z","zz"];

var nm11 = ["a","i","o","e","a","i","o"];

var nm12 = ["l","m","n","r"];

var nm13 = ["ia","ie","ai","a","i","o","a","i","o","a","i","o","a","i","o","a","i","o","a","i","o","a","i","o"];

var nm14 = ["","","","","","","","","","","","","","","","","n","n","s","s","x"];



var nm15 = ["","","ch","h","k","m","n","p","r","rh","s","sh","t","v"];

var nm16 = ["oo","ee","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];

var nm17 = ["ch","k","l","m","nr","p","r","rn","t","v"];

var nm18 = ["a","i","o"];

var nm19 = ["l","ll","n","r","rr","v"];

var nm20 = ["a","a","e","i","i","o"];

var nm21 = ["","","","k","l","n"];



function generator$star_wars$swPantorans(type){
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

	nTp = Math.random() * 7 | 0;

	rnd = Math.random() * nm1.length | 0;

	rnd2 = Math.random() * nm2.length | 0;

	rnd3 = Math.random() * nm7.length | 0;

	if(nTp < 2){

		while(nm1[rnd] === nm7[rnd3]){

			rnd3 = Math.random() * nm7.length | 0;

		}

		nMs = nm1[rnd] + nm2[rnd2] + nm7[rnd3];

	}else{

		rnd4 = Math.random() * nm3.length | 0;

		rnd5 = Math.random() * nm4.length | 0;

		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm7[rnd3]){

			rnd4 = Math.random() * nm3.length | 0;

		}

		if(nTp < 6){

			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm7[rnd3];

		}else{

			rnd6 = Math.random() * nm5.length | 0;

			rnd7 = Math.random() * nm6.length | 0;

			while(nm3[rnd4] === nm5[rnd6] || nm5[rnd6] === nm7[rnd3]){

				rnd6 = Math.random() * nm5.length | 0;

			}

			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm6[rnd7] + nm7[rnd3];

		}

	}

	testSwear(nMs);

}



function nameFem(){

	nTp = Math.random() * 7 | 0;

	rnd = Math.random() * nm8.length | 0;

	rnd2 = Math.random() * nm9.length | 0;

	rnd5 = Math.random() * nm14.length | 0;

	if(nTp < 2){

		while(nm8[rnd] === nm14[rnd5]){

			rnd5 = Math.random() * nm14.length | 0;

		}

		nMs = nm8[rnd] + nm9[rnd2] + nm14[rnd5];

	}else{

		rnd3 = Math.random() * nm10.length | 0;

		rnd4 = Math.random() * nm11.length | 0;

		while(nm10[rnd3] === nm8[rnd] || nm10[rnd3] === nm14[rnd5]){

			rnd3 = Math.random() * nm10.length | 0;

		}

		if(nTp < 6){

			nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4] + nm14[rnd5];

		}else{

			rnd6 = Math.random() * nm13.length | 0;

			rnd7 = Math.random() * nm12.length | 0;

			while(nm10[rnd3] === nm12[rnd7] || nm12[rnd7] === nm14[rnd5]){

				rnd7 = Math.random() * nm12.length | 0;

			}

			nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4] + nm12[rnd7] + nm13[rnd6] + nm14[rnd5];

		}

	}

	testSwear(nMs);

}



function nameSur(){

	nTp = Math.random() * 6 | 0;

	rnd = Math.random() * nm15.length | 0;

	rnd2 = Math.random() * nm16.length | 0;

	rnd3 = Math.random() * nm21.length | 0;

	if(nTp === 0){

		while(nm15[rnd] === nm21[rnd3]){

			rnd3 = Math.random() * nm21.length | 0;

		}

		nSr = nm15[rnd] + nm16[rnd2] + nm21[rnd3];

	}else{

		rnd4 = Math.random() * nm17.length | 0;

		rnd5 = Math.random() * nm18.length | 0;

		while(nm17[rnd4] === nm15[rnd] || nm17[rnd4] === nm21[rnd3]){

			rnd4 = Math.random() * nm17.length | 0;

		}

		if(nTp < 5){

			nSr = nm15[rnd] + nm16[rnd2] + nm17[rnd4] + nm18[rnd5] + nm21[rnd3];

		}else{

			rnd6 = Math.random() * nm19.length | 0;

			rnd7 = Math.random() * nm20.length | 0;

			while(nm17[rnd4] === nm19[rnd6] || nm19[rnd6] === nm21[rnd3]){

				rnd6 = Math.random() * nm19.length | 0;

			}

			nSr = nm15[rnd] + nm16[rnd2] + nm17[rnd4] + nm18[rnd5] + nm19[rnd6] + nm20[rnd7] + nm21[rnd3];

		}

	}

	testSwear(nSr);

}