if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","b","br","d","fl","g","gr","k","m","n","str","v","z"];

var nm2 = ["eu","oa","aa","ao","au","a","a","i","e","o","u","a","a","i","e","o","u","a","a","i","e","o","u","a","a","i","e","o","u","a","a","i","e","o","u"];

var nm3 = ["ch","d","g","gh","k","lgh","m","r","rdr","rg","rgh","rk","rkr","sh","sk","sp","t","v","x","zr"];

var nm4 = ["ou","eu","ia","a","a","e","e","i","o","u","a","a","e","e","i","o","u","a","a","e","e","i","o","u","a","a","e","e","i","o","u"];

var nm5 = ["l","m","n","r"];

var nm6 = ["a","a","e","e","i","o","u"];

var nm7 = ["","","","","","f","g","gg","gl","l","n","ps","r","rn","s","sk","st","ts","x"];



function generator$the_witcher$witcherMonsters(){
	i = Math.floor(Math.random() * 10);


	nameMas();

		while(nMs === ""){

			nameMas();

		}

		return nMs;

}



function nameMas(){

	nTp = Math.random() * 6 | 0;

	rnd = Math.random() * nm1.length | 0;

	rnd2 = Math.random() * nm2.length | 0;

	rnd3 = Math.random() * nm7.length | 0;

	if(nTp === 0){

		while(nm1[rnd] === ""){

			rnd = Math.random() * nm1.length | 0;

		}

		while(nm1[rnd] === nm7[rnd3] || nm7[rnd3] === ""){

			rnd3 = Math.random() * nm7.length | 0;

		}

		nMs = nm1[rnd] + nm2[rnd2] + nm7[rnd3];

	}else{

		rnd4 = Math.random() * nm3.length | 0;

		rnd5 = Math.random() * nm4.length | 0;

		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm7[rnd3]){

			rnd4 = Math.random() * nm3.length | 0;

		}

		if(nTp < 4){

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

		while(rnd6 === 0 && rnd4 < 4){

			rnd6 = Math.random() * nm11.length | 0;

		}

		nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd6] + nm12[rnd7] + nm13[rnd4] + nm14[rnd5];

	}

	testSwear(nMs);

}







function nameSur(){

	nTp = Math.random() * 6 | 0;

	rnd = Math.random() * nm16.length | 0;

	rnd2 = Math.random() * nm17.length | 0;

	rnd3 = Math.random() * nm20.length | 0;

	if(nTp === 0){

		while(nm16[rnd] === ""){

			rnd = Math.random() * nm16.length | 0;

		}

		while(nm16[rnd] === nm20[rnd3] || nm20[rnd3] === ""){

			rnd3 = Math.random() * nm20.length | 0;

		}

		nSr = nm16[rnd] + nm17[rnd2] + nm20[rnd3];

	}else{

		rnd4 = Math.random() * nm18.length | 0;

		rnd5 = Math.random() * nm19.length | 0;

		while(nm18[rnd4] === nm16[rnd] || nm18[rnd4] === nm20[rnd3]){

			rnd4 = Math.random() * nm18.length | 0;

		}

		nSr = nm16[rnd] + nm17[rnd2] + nm18[rnd4] + nm19[rnd5] + nm20[rnd3];

	}

	testSwear(nSr);

}