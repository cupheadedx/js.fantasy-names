if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["b","c","d","g","h","k","m","n","r","t","v","w","z"];

var nm2 = ["a","a","o","u","e","i","a","o","u"];

var nm3 = ["b","d","g","k","l","n","r","s","t","v","y","z"];

var nm4 = ["a","i","a","e","i","o","u"];

var nm5 = ["d","g","k","l","m","n","r","t","v","y","z"];

var nm6 = ["a","o","a","o","e","i","u","a","o"];

var nm7 = ["","","","","","","","h","l","m","n","r","t","z"];



var nm8 = ["c","f","h","l","m","n","p","q","t","v","y","z"];

var nm9 = ["a","a","e","i","o","u","a","a","a","e","i","o","u","a","au","ei","ua","oa","uo"];

var nm10 = ["d","h","k","l","m","n","p","q","r","s","t","y","z"];

var nm11 = ["a","o","e","i","o","o","u"];

var nm12 = ["","","","","","","","","","","","","","","","","","h","hn","hl","l","ln","n","nx","r","rt","rx","s","sh","x"];

var nm13 = ["hn","hl","l","ln","n","nx","r","rt","rx","s","sh","x"];

var nm14 = ["a","e","i","o","u","a","au","ei","ua","oa","uo"];



function generator$starfinder$starfinderSkittermanders(type){
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

	rnd3 = Math.random() * nm3.length | 0;

	rnd4 = Math.random() * nm4.length | 0;

	while(nm1[rnd] === nm3[rnd3]){

		rnd3 = Math.random() * nm3.length | 0;

	}

	if(nTp < 2){

		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4];

	}else{

		rnd5 = Math.random() * nm5.length | 0;

		rnd6 = Math.random() * nm6.length | 0;

		rnd7 = Math.random() * nm7.length | 0;

		while(nm5[rnd5] === nm3[rnd3] || nm5[rnd5] === nm7[rnd7]){

			rnd5 = Math.random() * nm5.length | 0;

		}

		if(nTp < 5){

			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd6] + nm7[rnd7];

		}else{

			rnd8 = Math.random() * nm5.length | 0;

			rnd9 = Math.random() * nm6.length | 0;

			while(nm5[rnd5] === nm5[rnd8] || nm5[rnd8] === nm7[rnd7]){

				rnd8 = Math.random() * nm5.length | 0;

			}

			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd6] + nm5[rnd8] + nm6[rnd9] + nm7[rnd7];

		}

	}

	testSwear(nMs);

}



function nameFem(){

	nTp = Math.random() * 6 | 0;

	rnd = Math.random() * nm8.length | 0;

	if(nTp < 2){

		rnd2 = Math.random() * nm13.length | 0;

		rnd3 = Math.random() * nm14.length | 0;

		nMs = nm8[rnd] + nm14[rnd3] + nm13[rnd2];

	}else{

		rnd2 = Math.random() * nm9.length | 0;

		rnd3 = Math.random() * nm10.length | 0;

		rnd4 = Math.random() * nm11.length | 0;

		rnd5 = Math.random() * nm12.length | 0;

		while(nm10[rnd3] === nm8[rnd] || nm10[rnd3] === nm12[rnd5]){

			rnd3 = Math.random() * nm10.length | 0;

		}

		if(nTp < 5){

			nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4] + nm12[rnd5];

		}else{

			rnd6 = Math.random() * nm10.length | 0;

			rnd7 = Math.random() * nm11.length | 0;

			while(nm10[rnd3] === nm10[rnd6] || nm10[rnd6] === nm12[rnd5]){

				rnd6 = Math.random() * nm10.length | 0;

			}

			nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4] + nm10[rnd6] + nm11[rnd7] + nm12[rnd5];

		}

	}

	testSwear(nMs);

}