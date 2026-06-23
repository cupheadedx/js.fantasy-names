if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","","b","c","ch","cr","d","g","gh","h","j","k","m","n","ph","s","t","z"];
var nm2 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y","ya","ae","ao","oe","ai"];
var nm3 = ["b","bh","d","h","k","kh","l","lh","m","md","mkh","mm","n","nb","nh","njt","nkh","nr","nt","r","rm","rs","rw","s","sh","t","th","v","z"];
var nm4 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","aa","uu"];
var nm5 = ["b","bh","d","g","h","k","l","lh","m","n","nh","q","r","s","sh","ss","t","th","v","z"];
var nm6 = ["","","","","","d","f","hn","l","m","n","p","ph","q","r","s","sh","t","th","x"];

function generator$world_of_warcraft$wowTolvir(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	nameMas();
		while(nMs === ""){
			nameMas();
		}
		return nMs;
}

function nameMas(){
	nTp = Math.random() * 2 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm6[rnd5]){
		rnd3 = Math.random() * nm3.length | 0;
	}
	if(nTp < 4){
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm4.length | 0;
		while(nm5[rnd6] === nm3[rnd3]){
			rnd6 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd6] + nm4[rnd7] + nm6[rnd5];
	}else{
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
	}
	testSwear(nMs);
}