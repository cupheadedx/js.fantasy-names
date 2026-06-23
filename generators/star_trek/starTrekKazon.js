if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["c","h","j","k","l","m","r","s","t","v"];
var nm2 = ["ie","ee","aa","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm3 = ["b","br","d","dr","l","ll","ld","lr","lz","m","mm","mr","n","nd","nn","nk","r","rd","rr","rs","rn","rd","tt","tr","z","zz"];
var nm4 = ["a","e","i","o","u"];
var nm5 = ["","","","","h","k","ll","m","n","r","s","t","z"];

function generator$star_trek$starTrekKazon(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	nameMas();
		while(nMs === ""){
			nameMas();
		}
		return nMs;
}

function nameMas(){
	rnd = Math.random() * nm1.length | 0;
	rnd5 = Math.random() * nm5.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm5[rnd5]){
		rnd3 = Math.random() * nm3.length | 0;
	}
	nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
	testSwear(nMs);
}