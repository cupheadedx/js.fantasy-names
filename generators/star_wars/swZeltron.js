if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","b","d","h","j","kl","m","n","r","v","w","z","zh"];

var nm2 = ["ia","ei","aa","a","a","e","e","o","a","a","e","e","o","i","u","a","a","e","e","o","a","a","e","e","o","i","u","a","a","e","e","o","a","a","e","e","o","i","u"];

var nm3 = ["d","dr","gr","h","l","ll","ln","n","nn","nt","r","rd","rl","rn","rr","rt","vn","vr","z","zl","zr","zz"];

var nm4 = ["a","e","o","u","a","e","o","u","i"];

var nm5 = ["","","","","","c","d","g","c","d","g","hb","hd","hl","hn","hs","n","rc","r","s","n","rc","r","s"];



var nm8 = ["","","","d","f","h","l","m","n","r","s","t","v","z"];

var nm9 = ["ai","ee","eo","ia","ie","y","y","y","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];

var nm10 = ["bj","f","ff","l","n","nn","r","s","sh","z","zh","ffl","fn","fr","ml","nl","nm","nr","rf","rl","rm","rn","rz","thr","thl","zr"];

var nm11 = ["y","a","e","i","a","e","i","o"];

var nm12 = ["c","l","n","r","s","t","z"];

var nm13 = ["aa","ee","y","a","i","a","i","e","o","u","y","a","i","a","i","e","o","u","y","a","i","a","i","e","o","u","y","a","i","a","i","e","o","u","y","a","i","a","i","e","o","u","y","a","i","a","i","e","o","u"];

var nm14 = ["","","","","","","","","","","","","","","","","","","","","","h","l","n","r","s"];



var nm15 = ["","b","c","d","m","p","r","t","v","w","z"];

var nm16 = ["ua","aa","ei","y","a","e","o","y","a","e","o","y","a","e","o","y","a","e","o","y","a","e","o","y","a","e","o","y","a","e","o"];

var nm17 = ["c","d","dr","fr","l","lt","lv","lz","m","n","nd","nt","nz","r","rl","rv","s","ss","t","tr","z","zl","zr"];

var nm18 = ["a","a","e","o"];

var nm19 = ["d","l","n","r","rs","v","z"];

var nm20 = ["e","i","o","e","i","o","e","i","o","a"];

var nm21 = ["","","","c","ck","d","l","ll","n","nn","r","s"];



function generator$star_wars$swZeltron(type){
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

	nTp = Math.random() * 4 | 0;

	rnd = Math.random() * nm1.length | 0;

	rnd2 = Math.random() * nm2.length | 0;

	rnd3 = Math.random() * nm5.length | 0;

	if(nTp < 1){

		while(nm1[rnd] === ""){

			rnd = Math.random() * nm1.length | 0;

		}

		while(nm1[rnd] === nm5[rnd3] || nm5[rnd3] === ""){

			rnd3 = Math.random() * nm5.length | 0;

		}

		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd3];

	}else{

		rnd4 = Math.random() * nm3.length | 0;

		rnd5 = Math.random() * nm4.length | 0;

		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm5[rnd3]){

			rnd4 = Math.random() * nm3.length | 0;

		}

		while(rnd2 === 0 && rnd5 === 0){

			rnd5 = Math.random() * nm4.length | 0;

		}

		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd3];

	}

	testSwear(nMs);

}



function nameFem(){

	nTp = Math.random() * 5 | 0;

	rnd = Math.random() * nm8.length | 0;

	rnd2 = Math.random() * nm9.length | 0;

	rnd5 = Math.random() * nm14.length | 0;

	rnd3 = Math.random() * nm10.length | 0;

	rnd4 = Math.random() * nm13.length | 0;

	while(nm10[rnd3] === nm8[rnd] || nm10[rnd3] === nm14[rnd5]){

		rnd3 = Math.random() * nm10.length | 0;

	}

	if(nTp < 4){

		nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm13[rnd4] + nm14[rnd5];

	}else{

		rnd6 = Math.random() * nm11.length | 0;

		rnd7 = Math.random() * nm12.length | 0;

		while(nm10[rnd3] === nm12[rnd7] || nm12[rnd7] === nm14[rnd5]){

			rnd7 = Math.random() * nm12.length | 0;

		}

		nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd6] + nm12[rnd7] + nm13[rnd4] + nm14[rnd5];

	}

	testSwear(nMs);

}



function nameSur(){

	nTp = Math.random() * 6 | 0;

	rnd = Math.random() * nm15.length | 0;

	rnd2 = Math.random() * nm16.length | 0;

	rnd3 = Math.random() * nm21.length | 0;

	rnd4 = Math.random() * nm17.length | 0;

	rnd5 = Math.random() * nm18.length | 0;

	while(nm17[rnd4] === nm15[rnd] || nm17[rnd4] === nm21[rnd3]){

		rnd4 = Math.random() * nm17.length | 0;

	}

	if(nTp < 4){

		nSr = nm15[rnd] + nm16[rnd2] + nm17[rnd4] + nm18[rnd5] + nm21[rnd3];

	}else{

		rnd6 = Math.random() * nm19.length | 0;

		rnd7 = Math.random() * nm20.length | 0;

		while(nm17[rnd4] === nm19[rnd6] || nm19[rnd6] === nm21[rnd3]){

			rnd6 = Math.random() * nm19.length | 0;

		}

		nSr = nm15[rnd] + nm16[rnd2] + nm17[rnd4] + nm18[rnd5] + nm19[rnd6] + nm20[rnd7] + nm21[rnd3];

	}

	testSwear(nSr);

}