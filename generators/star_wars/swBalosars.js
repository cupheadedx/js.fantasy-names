if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","b","bl","c","d","f","g","gr","h","l","n","q","v","z"];

var nm2 = ["ae","aa","a","e","i","a","e","i","o","a","e","i","o","a","e","i"];

var nm3 = ["d","dr","g","l","lr","m","n","nd","nn","nt","r","rb","rd","rg","rt","v","z","zz"];

var nm4 = ["a","e","i","o","a","e","i","o"];

var nm5 = ["","","","bbs","ggs","bs","d'","g'","gs","h","l'","l","ld","ls","ln","m","n","n","n","ns","r","r","r","r'","rm","rn","rs","s","s","z"];



var nm6 = ["b","bl","d","f","fr","h","m","n","r","s","t","v","vl","z"];

var nm7 = ["ee","e","i","a","e","i","a","e","i","a","e","i","a","e","i","o"];

var nm8 = ["d","l","ll","m","n","r","rr","s","ss","sh","t","v","z"];

var nm9 = ["ee","e","i","a","e","i","o","a","e","i","o","a","e","i","o","u","o"];

var nm10 = ["d","g","k","l","n","r","s","sh","th","z"];

var nm11 = ["a","e","a","e","i"];

var nm12 = ["","","","d","l","n","s","sh","th"];



var nm13 = ["","","","","","b","br","ch","d","dr","g","gr","l","m","n","p","r","s","tr","v","vr","z"];

var nm14 = ["a","e","o","a","e","o","i","u"];

var nm15 = ["'","d","g","g'd","g'l","gn","gr","l","l'b","ll","ld","lb","lm","ll","ln","l'm","l'r","m","md","mg","m'r","m'l","n","nd","ng","n'b","r'd","r","rr","r'l","s","ss","sq","sk","v","v'l","v'n","z"];

var nm16 = ["a","e","i","u","a","e","i","u"];

var nm17 = ["d","dd","dr","g","gd","gg","gn","gr","l","ll","ld","lg","n","nd","ng","r","rd","rn","rl","rr","v","vl"];

var nm18 = ["a","o","a","o","i","a","o"];

var nm19 = ["","","","","d","k","l","n","r","s","t"];



function generator$star_wars$swBalosars(type){
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

	nTp = Math.random() * 3 | 0;

	rnd = Math.random() * nm1.length | 0;

	rnd2 = Math.random() * nm2.length | 0;

	rnd3 = Math.random() * nm5.length | 0;

	if(nTp === 0){

		while(nm5[rnd3] === ""){

			rnd3 = Math.random() * nm5.length | 0;

		}

		while(nm1[rnd] === nm5[rnd3] || nm1[rnd] === ""){

			rnd = Math.random() * nm1.length | 0;

		}

		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd3];

	}else{

		rnd4 = Math.random() * nm3.length | 0;

		rnd5 = Math.random() * nm4.length | 0;

		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm5[rnd3]){

			rnd4 = Math.random() * nm3.length | 0;

		}

		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd3];

	}

	testSwear(nMs);

}





function nameFem(){

	nTp = Math.random() * 5 | 0;

	rnd = Math.random() * nm6.length | 0;

	rnd2 = Math.random() * nm7.length | 0;

	rnd3 = Math.random() * nm12.length | 0;

	if(nTp === 0){

		while(nm6[rnd] === nm12[rnd3] || nm12[rnd3] === ""){

			rnd3 = Math.random() * nm12.length | 0;

		}

		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd3];

	}else{

		rnd4 = Math.random() * nm8.length | 0;

		rnd5 = Math.random() * nm9.length | 0;

		while(nm8[rnd4] === nm6[rnd] || nm8[rnd4] === nm12[rnd3]){

			rnd4 = Math.random() * nm8.length | 0;

		}

		if(nTp < 4){

			nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd4] + nm9[rnd5] + nm12[rnd3];

		}else{

			rnd6 = Math.random() * nm10.length | 0;

			rnd7 = Math.random() * nm11.length | 0;

			while(nm8[rnd4] === nm10[rnd6] || nm10[rnd6] === nm12[rnd3]){

				rnd6 = Math.random() * nm10.length | 0;

			}

			nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd4] + nm9[rnd5] + nm10[rnd6] + nm11[rnd7] + nm12[rnd3];

		}

	}

	testSwear(nMs);

}





function nameSur(){

	nTp = Math.random() * 3 | 0;

	rnd = Math.random() * nm13.length | 0;

	rnd2 = Math.random() * nm14.length | 0;

	rnd3 = Math.random() * nm15.length | 0;

	rnd4 = Math.random() * nm16.length | 0;

	rnd5 = Math.random() * nm19.length | 0;

	while(nm13[rnd] === nm15[rnd3] || nm15[rnd3] === nm19[rnd5]){

		rnd3 = Math.random() * nm15.length | 0;

	}

	if(nTp < 2){

		nSr = nm13[rnd] + nm14[rnd2] + nm15[rnd3] + nm16[rnd4] + nm19[rnd5];

	}else{

		rnd6 = Math.random() * nm17.length | 0;

		rnd7 = Math.random() * nm18.length | 0;

		while(nm17[rnd6] === nm15[rnd3] || nm17[rnd6] === nm19[rnd5]){

			rnd6 = Math.random() * nm17.length | 0;

		}

		nSr = nm13[rnd] + nm14[rnd2] + nm15[rnd3] + nm16[rnd4] + nm17[rnd6] + nm18[rnd7] + nm19[rnd5];

	}

	testSwear(nSr);

}