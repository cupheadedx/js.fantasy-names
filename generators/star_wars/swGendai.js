if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","d","g","h","m","n","r","v","z"];

var nm2 = ["a","a","e","e","o","u","u"];

var nm3 = ["gh","gl","gr","ld","ldr","lgr","lm","ln","lr","lv","lz","md","mdr","nd","ndr","nr","sh","sht","st","str","z","zr"];

var nm4 = ["a","e","o","u"];

var nm5 = ["l","m","n","r","z"];

var nm6 = ["a","a","e","o","o","u"];

var nm7 = ["","","","","n","r","s","ss","tt","z"];



function generator$star_wars$swGendai(type){
	i = Math.floor(Math.random() * 10);


	var tp = type;

	nameMas();

		while(nMs === ""){

			nameMas();

		}

		return nMs;

}



function nameMas(){

	nTp = Math.random() * 7 | 0;

	rnd = Math.random() * nm1.length | 0;

	rnd2 = Math.random() * nm2.length | 0;

	rnd3 = Math.random() * nm7.length | 0;

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

	testSwear(nMs);

}