if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["c","c","c't","d","d","d'v","g","g","h","h","j","j","k","k","k's","k'z","n","n","n't","sch","th","th","t's","v","v","x","x","z","z","z't"];
var nm2 = ["a","e","i","o","a","e","i","o","y"];
var nm3 = ["c","cs","cr","d","dr","dl","g","gl","gs","l","lk","lc","ls","lsh","m","mr","mk","n","nc","nk","r","rs","rk","rc","rsk","s","sh","sc","sk","shk","v","vk","z","zc","zk"];
var nm4 = ["a","e","i","o"];
var nm5 = ["c","d","g","k","m","n","p","r","t","v","z"];
var nm6 = ["o","u","o","u","a","e","o","u","o","u","a","e","o","u","o","u","a","e","ei","ai","au"];
var nm7 = ["","","c","ct","g","gt","k","kt","l","n","sh","st","t"];

function generator$starfinder$starfinderShirren(){
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
		if(nTp < 5){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm7[rnd3];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm6.length | 0;
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm6[rnd7];
		}
	}
	testSwear(nMs);
}