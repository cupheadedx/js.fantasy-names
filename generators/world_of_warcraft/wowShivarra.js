if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","c","d","g","h","k","l","n","r","s","sh","t","th","v","y","z"];
var nm2 = ["a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","ia","ou","ii","ei","io"];
var nm3 = ["c","h","hr","h'r","hn","hs","h's","hz","kk","kth","k't","l","ll","lq","l'q","lr","l'r","m","ndr","n'd","p","r","s","st","str","s'h","s'z","th","v","vr","z's","z'sh"];
var nm4 = ["a","i","e","a","a","a","i","y"];
var nm5 = ["b","c","d","l","n","r","s","ss","t","th","v","z"];
var nm6 = ["","","","","","","","","","","h","l","n","r","s","ss","v","x","z"];

function generator$world_of_warcraft$wowShivarra(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	nameMas();
		while(nMs === ""){
			nameMas();
		}
		return nMs;
}

function nameMas(){
	nTp = Math.random() * 4 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	rnd4 = Math.random() * nm3.length | 0;
	rnd5 = Math.random() * nm4.length | 0;
	while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm6[rnd3]){
		rnd4 = Math.random() * nm3.length | 0;
	}
	if(nTp < 2){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
	}else{
		rnd6 = Math.random() * nm4.length | 0;
		rnd7 = Math.random() * nm5.length | 0;
		while(nm5[rnd7] === nm3[rnd4] || nm5[rnd7] === nm6[rnd3]){
			rnd7 = Math.random() * nm5.length | 0;
		}
		if(nTp === 2){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd7] + nm4[rnd6] + nm6[rnd3];
		}else{
			nMs = nm1[rnd] + nm4[rnd5] + nm5[rnd7] + nm2[rnd2] + nm3[rnd4] + nm4[rnd6] + nm6[rnd3];
		}
	}
	testSwear(nMs);
}