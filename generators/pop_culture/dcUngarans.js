if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","b","d","g","h","k","r","v","z"];

var nm2 = ["a","e","o","u","a","a"];

var nm3 = ["b","d","g","l","m","r","v","z"];

var nm4 = ["i","o","i","o","a","e","u"];

var nm5 = ["d","l","m","n","n","n","n"];



var nm6 = ["","","","","","","","c","f","h","l","m","n","v","t"];

var nm7 = ["a","i","a","i","e"];

var nm8 = ["l","m","n","r","s","th"];

var nm9 = ["e","i","e","i","a"];

var nm10 = ["l","ll","n","nn","s","th"];



var nm11 = ["d","h","l","n","r","s","v","z"];

var nm12 = ["o","u","o","u","a"];

var nm13 = ["d","k","l","n","r"];



function generator$pop_culture$dcUngarans(type){
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

		names = nMs;

		genSur();

		while(nMs === ""){

			genSur();

		}

		names = names + " " + nMs;

		return names;

}



function genMas(){

	rnd = Math.random() * nm1.length | 0;

	rnd2 = Math.random() * nm2.length | 0;

	rnd3 = Math.random() * nm3.length | 0;

	rnd4 = Math.random() * nm4.length | 0;

	rnd5 = Math.random() * nm5.length | 0;

	while(nm1[rnd] === nm3[rnd3] || nm3[rnd3] === nm5[rnd5]){

		rnd3 = Math.random() * nm3.length | 0;

	}

	nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];

	testSwear(nMs);

}



function genFem(){

	nTp = Math.random() * 3 | 0;

	rnd = Math.random() * nm6.length | 0;

	rnd2 = Math.random() * nm7.length | 0;

	rnd3 = Math.random() * nm8.length | 0;

	rnd4 = Math.random() * nm9.length | 0;

	rnd5 = Math.random() * nm10.length | 0;

	while(nm6[rnd] === nm8[rnd3] || nm8[rnd3] === nm10[rnd5]){

		rnd3 = Math.random() * nm8.length | 0;

	}

	nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd5];

	if(nTp === 0){

		nMs += "e";

	}

	testSwear(nMs);

}



function genSur(){

	rnd = Math.random() * nm11.length | 0;

	rnd2 = Math.random() * nm12.length | 0;

	rnd3 = Math.random() * nm13.length | 0;

	while(nm11[rnd] === nm13[rnd3]){

		rnd3 = Math.random() * nm13.length | 0;

	}

	nMs = nm11[rnd] + nm12[rnd2] + nm13[rnd3];

}