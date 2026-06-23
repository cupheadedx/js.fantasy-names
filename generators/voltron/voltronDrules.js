if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","b","br","d","dr","fl","g","h","k","m","n","q","r","thr","y","z"];
var nm2 = ["ee","ua","ie","aa","au","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm3 = ["b","d","dr","g","gg","gt","k","kk","kt","ld","lr","lt","nk","nd","nt","pp","r","rr","rg","rk","z","zr","zd","zk"];
var nm4 = ["a","e","i","o","u","a","o"];
var nm5 = ["","d","g","k","n","r","rk","s","x"];

var nm6 = ["b","d","g","l","m","n","tw","v","z"];
var nm7 = ["a","e","o","y","a","e","o","i","u"];
var nm8 = ["br","dr","g","gg","gr","gl","gn","l","ll","lr","lm","ln","ldr","ld","m","mm","mn","mr","md","n","nn","nd","ng","ngr","nl","nm","ndr","r","rr","rd","rb","rv","rl","rm","sr","sl","sn","vr","v","vl","vn","z","zz","zr","zl","zn"];

function generator$voltron$voltronDrules(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
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
		return nMs;
}

function nameMas(){
	nTp = Math.random() * 2 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm5.length | 0;
	if(nTp === 0){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm5[rnd3] === "" || nm5[rnd3] === nm1[rnd]){
			rnd3 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd3];
	}else{
		rnd4 = Math.random() * nm4.length | 0;
		rnd5 = Math.random() * nm3.length | 0;
		while(nm3[rnd5] === nm1[rnd] || nm3[rnd5] === nm5[rnd3]){
			rnd5 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd5] + nm4[rnd4] + nm5[rnd3];
	}
	testSwear(nMs);
}


function nameFem(){
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm8.length | 0;
	while(nm6[rnd] === nm8[rnd3]){
		rnd = Math.random() * nm6.length | 0;
	}
	nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + "a";
	testSwear(nMs);
}
