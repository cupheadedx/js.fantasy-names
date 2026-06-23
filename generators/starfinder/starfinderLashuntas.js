if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","d","h","k","l","m","n","r","s","sh","t","th","v","z","zh"];
var nm2 = ["aia","aeo","eia","ei","eie","ia","ea","eae","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o"];
var nm3 = ["f","h","l","m","n","r","s","v"];
var nm4 = ["ae","aeu","ua","ia","aue","ea","aea","y","u","a","e","i","o","a","e","i","o","y","u","a","e","i","o","a","e","i","o","y","u","a","e","i","o","a","e","i","o"];
var nm5 = ["d","k","l","m","n","r","v","z"];
var nm6 = ["a","e","i","o"];
var nm7 = ["","","","","",	"h","l","ll","n","s","sh","ss"];

function generator$starfinder$starfinderLashuntas(){
	i = Math.floor(Math.random() * 10);

	nameMas();
		while(nMs === ""){
			nameMas();
		}
		return nMs;
}

function nameMas(){
	var nTp = Math.random() * 7 | 0;
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
		while(rnd2 < 8 && rnd5 < 7){
			rnd5 = Math.random() * nm4.length | 0;
		}
		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm7[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		if(nTp < 5){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm7[rnd3];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm6.length | 0;
			if(nTp === 5){
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm6[rnd7] + nm7[rnd3];
			}else{
				nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd6] + nm6[rnd7] + nm3[rnd4] + nm4[rnd5] + nm7[rnd3];
			}
		}
	}
	testSwear(nMs);
}