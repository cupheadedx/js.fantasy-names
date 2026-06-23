if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","b","d","f","h","j","l","m","n","p","r","s","t","v","w","y"];
var nm2 = ["a","i","o","u","a","i","o","u","a","i","o","u","a","i","o","u","ee","ie","ea","ae","ai","oo","ou"];
var nm3 = ["c","g","gs","k","ks","kt","m","n","rx","rt","rs","s","sk","t","ts","x","z"];

function generator$miscellaneous$dndChangelings(){
	i = Math.floor(Math.random() * 10);

	nameMas();
		while(nMs === ""){
			nameMas();
		}
		return nMs;
}

function nameMas(){
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	while(nm1[rnd] === nm3[rnd3]){
		rnd3 = Math.random() * nm3.length | 0;
	}
	nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3];
	testSwear(nMs);
}