if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","","b","br","d","dr","fr","g","gr","j","k","m","n","r","t","tr","v","vr","z"];
var nm2 = ["a","e","o","a","e","o","a","e","o","a","e","o","a","e","o","a","e","o","a","e","o","a","e","o","a","e","o","a","e","o","a","e","o","a","e","o","a","e","o","a","e","o","i","i","i","i","u","u","ie","io","ia","yo","ya"];
var nm3 = ["b","d","dt","g","gd","k","kd","l","lt","ld","lm","m","mm","n","nn","nm","r","rd","rt","v","y","z"];
var nm4 = ["a","i","e","o","u","a","i","e","o","u","a","i","e","o","u","a","i","e","o","u","a","i","e","o","u","a","i","e","o","u","a","i","e","o","u","a","i","e","o","u","a","i","e","o","u","io","ia","ea"];
var nm5 = ["d","f","g","k","n","r","t","v","z"];
var nm6 = ["","","","d","h","l","lth","r","rd","s","st","t","th"];

var nm7 = ["d","f","h","l","m","n","r","s","t","v","z"];
var nm8 = ["a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","ai","ei"];
var nm9 = ["d","f","g","l","m","n","r","s","v","w","z"];
var nm10 = ["a","e","u","a","e","u","a","e","u","a","e","u","i","i","o","y"];
var nm11 = ["dr","dn","dl","fl","fr","fn","gn","gr","gz","kn","kr","kl","kz","lr","lz","lv","ln","nv","nr","nz","nd","rv","rn","rl","rm","sr","sz","sn","sv","tr","tv","tz","vr","vl","vn","vz"];
var nm12 = ["","","","","","","","","","","","","","","","","","","","h","l","n","s","sh","t","th"];

function generator$fairy_tail$fairyTailDemons(type){
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
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	if(i < 3){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm6[rnd3] === nm1[rnd] || nm6[rnd3] === ""){
			rnd3 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		if(i < 7){
			while(nm1[rnd] === nm3[rnd4] || nm3[rnd4] === nm6[rnd3]){
				rnd4 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm4.length | 0;
			while(nm5[rnd6] === nm3[rnd4] || nm5[rnd6] === nm6[rnd3]){
				rnd6 = Math.random() * nm5.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm4[rnd7] + nm6[rnd3];
		}
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm12.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	if(i < 5){
		while(nm7[rnd] === nm9[rnd4] || nm9[rnd4] === nm12[rnd3]){
			rnd4 = Math.random() * nm9.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm12[rnd3];
	}else{
		rnd6 = Math.random() * nm11.length | 0;
		rnd7 = Math.random() * nm10.length | 0;
		while(nm11[rnd6] === nm9[rnd4] || nm11[rnd6] === nm12[rnd3]){
			rnd6 = Math.random() * nm11.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm11[rnd6] + nm10[rnd7] + nm12[rnd3];
	}
	testSwear(nMs);
}