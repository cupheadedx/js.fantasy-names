if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["c","h","j","m","r","sh","t","v","z"];

var nm2 = ["a","e","o","o","a","e","o","o","i"];

var nm3 = ["dd","dr","gr","l","ld","ll","lm","ln","lr","lv","n","nn","nr","r","rl","rn","rr","rv","rz","y","zl","zm","zn","zr"];

var nm4 = ["a","e","i","i","i","o"];

var nm5 = ["","","g","gg","l","ll","r","rr","s","ss","t","z"];



var nm6 = ["","","","","c","f","fr","g","k","l","m","n","s","sh","st","t","th","v"];

var nm7 = ["y","a","e","i","o"];

var nm8 = ["d","dd","l","lm","ln","lr","lv","m","n","nd","nn","nv","r","rn","rr","rv","s","sh","st","ss","t","ts","tt","v","vr"];

var nm9 = ["ee","oo","a","e","i","i","o","a","e","i","i","o","a","e","i","i","o","a","e","i","i","o","a","e","i","i","o","a","e","i","i","o"];

var nm10 = ["l","m","n","t","s","t","v","y"];

var nm11 = ["a","i","a","i","e","o"];

var nm12 = ["","","","","","","","l","ll","m","n","nn","s","ss","t","tt"];



var nm13 = ["","","","c","g","k","n","p","r","s","st","v","y"];

var nm14 = ["ia","a","a","i","e","o","o"];

var nm15 = ["cr","k","ld","ll","lm","lr","mrr","nd","nn","nr","rr","rn","rv","rz","v","vl","vr","z","zr","zz"];

var nm16 = ["ie","ia","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i"];

var nm17 = ["","","","ck","l","ll","n","nn","r","s","ss","t","tt"];



function generator$star_wars$swTholothians(type){
	i = Math.floor(Math.random() * 10);


	var tp = type;

	nameSur();

		while(nSr === ""){

			nameSur();

		}

		names = nSr;

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

		names = nMs + " " + names;

		return names;

}



function nameMas(){

	nTp = Math.random() * 3 | 0;

	rnd = Math.random() * nm1.length | 0;

	rnd2 = Math.random() * nm2.length | 0;

	rnd3 = Math.random() * nm5.length | 0;

	if(nTp === 0){

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

		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd3];

	}

	testSwear(nMs);

}





function nameFem(){

	nTp = Math.random() * 6 | 0;

	rnd = Math.random() * nm6.length | 0;

	rnd2 = Math.random() * nm7.length | 0;

	rnd3 = Math.random() * nm12.length | 0;

	if(nTp === 0){

		while(nm6[rnd] === nm12[rnd3]){

			rnd3 = Math.random() * nm12.length | 0;

		}

		nMs = nm6[rnd] + nm7[rnd2] + nm12[rnd3];

	}else{

		rnd4 = Math.random() * nm8.length | 0;

		rnd5 = Math.random() * nm9.length | 0;

		while(nm8[rnd4] === nm6[rnd] || nm8[rnd4] === nm12[rnd3]){

			rnd4 = Math.random() * nm8.length | 0;

		}

		while(rnd2 === 0 && rnd5 < 3){

			rnd5 = Math.random() * nm9.length | 0;

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

	nTp = Math.random() * 4 | 0;

	rnd = Math.random() * nm13.length | 0;

	rnd2 = Math.random() * nm14.length | 0;

	rnd3 = Math.random() * nm17.length | 0;

	if(nTp === 0){

		while(nm13[rnd] === nm17[rnd3] || nm13[rnd] === ""){

			rnd = Math.random() * nm13.length | 0;

		}

		nSr = nm13[rnd] + nm14[rnd2] + nm17[rnd3];

	}else{

		rnd4 = Math.random() * nm15.length | 0;

		rnd5 = Math.random() * nm16.length | 0;

		while(nm15[rnd4] === nm13[rnd] || nm15[rnd4] === nm17[rnd3]){

			rnd4 = Math.random() * nm15.length | 0;

		}

		nSr = nm13[rnd] + nm14[rnd2] + nm15[rnd4] + nm16[rnd5] + nm17[rnd3];

	}

	testSwear(nSr);

}