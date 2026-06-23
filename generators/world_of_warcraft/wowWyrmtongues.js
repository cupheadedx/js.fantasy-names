if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","b","c","d","fl","g","gr","m","n","p","r","v","z"];

var nm2 = ["ae","a","a","e","i","o","u","u","a","a","e","i","o","u","u","a","a","e","i","o","u","u","a","a","e","i","o","u","u","a","a","e","i","o","u","u"];

var nm3 = ["bbl","bl","d","ddl","dl","k","kr","k'r","ks'r","l","lb","lf","lk","ldr","lc","m","mc","mk","mm","n","nc","nd","nk","r","r'k","r't","st","w'n","z","zz","z'r"];

var nm4 = ["ee","a","i","o","u","y","a","i","o","u","a","i","o","u","y","a","i","o","u","a","i","o","u","y"];

var nm5 = ["d","g","l","n","r","v","z","zz"];

var nm6 = ["a","e","i","o","u","a","e","i","o","u"];

var nm7 = ["","","d","g","k","r","rr","s","th","x","xx"];



function generator$world_of_warcraft$wowWyrmtongues(){
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

	rnd5 = Math.random() * nm7.length | 0;

	if(nTp === 0){

			while(nm1[rnd] === nm7[rnd5]){

				rnd5 = Math.random() * nm7.length | 0;

			}

			nMs = nm1[rnd] + nm2[rnd2] + nm7[rnd5];

	}else{

		rnd3 = Math.random() * nm3.length | 0;

		rnd4 = Math.random() * nm4.length | 0;

		while(nm1[rnd] === nm3[rnd3] || nm3[rnd3] === nm7[rnd5]){

			rnd3 = Math.random() * nm3.length | 0;

		}

		if(nTp < 5){

			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm7[rnd5];

		}else{

		rnd6 = Math.random() * nm5.length | 0;

		rnd7 = Math.random() * nm6.length | 0;

		while(nm5[rnd6] === nm3[rnd3] || nm5[rnd6] === nm7[rnd5]){

			rnd6 = Math.random() * nm5.length | 0;

			while(rnd6 > 6 && rnd3 > 7){

				rnd6 = Math.random() * nm5.length | 0;

			}

		}

		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd6] + nm6[rnd7] + nm7[rnd5];

		}

	}

	testSwear(nMs);

}