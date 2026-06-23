if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","d","g","h","l","m","n","r","s","t","th","z"];

var nm2 = ["a","e","o","u","a","e","o","u","y"];

var nm3 = ["d","dr","g","gr","gn","gd","gdr","k","kd","kdr","l","ll","ld","ldr","lg","ln","n","nr","nd","ndr","pr","r","rc","rg","rk","rm","rn","rt","sdr","t","tr","thr"];

var nm4 = ["a","i","o","a","i","o","e"];

var nm5 = ["b","d","l","m","n","r","s","v"];

var nm6 = ["ia","ea","aa","a","e","i","o","a","i","o","a","e","i","o","a","i","o","a","e","i","o","a","i","o"];

var nm7 = ["","","","","c","d","h","j","k","k","l","m","m","n","n","s","s","t"];



var nm8 = ["","","","b","cr","d","g","gr","h","k","kr","m","n","s","sh","y","z"];

var nm9 = ["a","e","u","a","e","u","i","o"];

var nm10 = ["d","d","d","l","l","l","ll","ll","lm","lr","lv","m","m","m","n","n","n","nn","nn","nr","nv","nd","nl","r","r","r","rr","rr","rm","rv","t","t","t","th","th","v","v","vr","vl","z","z"];

var nm11 = ["a","i","u","a","i","u","e","o"];

var nm12 = ["d","f","l","ll","n","nn","r","rr","s","ss","w","z"];

var nm13 = ["ai","ea","ie","ee","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i"];

var nm14 = ["","","","","","","","","","","","","","","","","","","l","n","s","ss","th"];



var nm15 = ["","","","","b","d","f","g","m","n","r","s","v","z"];

var nm16 = ["a","a","e","i","o","u"];

var nm17 = ["b","br","c","d","dr","g","gn","gr","l","ld","ll","ldr","lm","lb","lt","n","nn","nd","nr","ndr","r","rr","rd","rq","rz","sh","ss","t","th","v"];

var nm18 = ["a","a","e","i","o","o","u"];

var nm19 = ["c","d","dr","gn","gdr","gt","kt","kdr","kd","l","lt","ld","ldr","m","n","nd","ndr","ng","ntr","s","sh","ss","st","sc","tr","th","z"];

var nm20 = ["a","e","a","e","a","e","i","y"];

var nm21 = ["","","","","","c","d","l","ln","ld","n","nd","ng","s","sh","r","rr","t","th"];



function generator$star_wars$swArkanians(type){
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

	rnd3 = Math.random() * nm3.length | 0;

	rnd4 = Math.random() * nm4.length | 0;

	rnd5 = Math.random() * nm7.length | 0;

	while(nm1[rnd] === nm3[rnd3] || nm3[rnd3] === nm7[rnd5]){

		rnd3 = Math.random() * nm3.length | 0;

	}

	if(nTp < 2){

		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm7[rnd5];

	}else{

		rnd6 = Math.random() * nm5.length | 0;

		rnd7 = Math.random() * nm6.length | 0;

		while(nm3[rnd4] === nm5[rnd6] || nm5[rnd6] === nm7[rnd5]){

			rnd6 = Math.random() * nm5.length | 0;

		}

		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd6] + nm6[rnd7] + nm7[rnd5];

	}

	testSwear(nMs);

}





function nameFem(){

	nTp = Math.random() * 3 | 0;

	rnd = Math.random() * nm8.length | 0;

	rnd2 = Math.random() * nm9.length | 0;

	rnd3 = Math.random() * nm10.length | 0;

	rnd4 = Math.random() * nm11.length | 0;

	rnd5 = Math.random() * nm14.length | 0;

	while(nm8[rnd] === nm10[rnd3] || nm10[rnd3] === nm14[rnd5]){

		rnd3 = Math.random() * nm10.length | 0;

	}

	if(nTp < 2){

		nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4] + nm14[rnd5];

	}else{

		rnd6 = Math.random() * nm12.length | 0;

		rnd7 = Math.random() * nm13.length | 0;

		while(nm10[rnd4] === nm12[rnd6] || nm12[rnd6] === nm14[rnd5]){

			rnd6 = Math.random() * nm12.length | 0;

		}

		nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4] + nm12[rnd6] + nm13[rnd7] + nm14[rnd5];

	}

	testSwear(nMs);

}





function nameSur(){

	nTp = Math.random() * 4 | 0;

	rnd = Math.random() * nm15.length | 0;

	rnd2 = Math.random() * nm16.length | 0;

	rnd5 = Math.random() * nm21.length | 0;

	if(nTp < 2){

		while(nm15[rnd] === ""){

			rnd = Math.random() * nm15.length | 0;

		}

		while(nm15[rnd] === nm21[rnd5] || nm21[rnd5] === ""){

			rnd5 = Math.random() * nm21.length | 0;

		}

		nSr = nm15[rnd] + nm16[rnd2] + nm21[rnd5];

	}else{

		rnd3 = Math.random() * nm17.length | 0;

		rnd4 = Math.random() * nm18.length | 0;

		while(nm15[rnd] === nm17[rnd3] || nm17[rnd3] === nm21[rnd5]){

			rnd3 = Math.random() * nm17.length | 0;

		}

		if(nTp < 3){

			nSr = nm15[rnd] + nm16[rnd2] + nm17[rnd3] + nm18[rnd4] + nm21[rnd5];

		}else{

			rnd6 = Math.random() * nm19.length | 0;

			rnd7 = Math.random() * nm20.length | 0;

			while(nm19[rnd6] === nm17[rnd3] || nm19[rnd6] === nm21[rnd5]){

				rnd6 = Math.random() * nm19.length | 0;

			}

			nSr = nm15[rnd] + nm16[rnd2] + nm17[rnd3] + nm18[rnd4] + nm19[rnd6] + nm20[rnd7] + nm21[rnd5];

		}

	}

	testSwear(nSr);

}