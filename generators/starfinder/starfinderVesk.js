if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","","","b","br","dm","dr","g","gn","j","k","kn","kr","n","m","r","s","sr","sv","st","t","tr","tv","v","vr","z","zr"];
var nm2 = ["a","e","o","u","a","e","o","u","y"];
var nm3 = ["b","b","b","br","bd","d","d","d","dr","dv","g","g","g","gd","gn","gv","l","l","l","m","m","m","n","n","n","ng","nv","r","r","r","rt","rd","s","s","s","sl","sk","sn","sv","t","t","t","tr","tv","v","v","v","vn","vd","z","z","z","zd","zn"];
var nm4 = ["a","e","i","o"];
var nm5 = ["b","d","g","k","l","m","n","ng","r","y","v","z"];
var nm6 = ["","","","","","","","d","d","g","g","k","k","n","n","nd","s","s","sh","t","t","z","z"];

function generator$starfinder$starfinderVesk(){
	i = Math.floor(Math.random() * 10);

	nameMas();
		while(nMs === ""){
			nameMas();
		}
		names = nMs;
		return names;
}

function nameMas(){
	var nTp = Math.random() * 7 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	rnd4 = Math.random() * nm3.length | 0;
	rnd5 = Math.random() * nm4.length | 0;
	while(nm1[rnd] === nm3[rnd4] || nm3[rnd4] === nm6[rnd3]){
		rnd4 = Math.random() * nm3.length | 0;
	}
	while(nm1[rnd] === "" && nm6[rnd3] === ""){
		rnd = Math.random() * nm1.length | 0;
	}
	if(nTp < 5){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
	}else{
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm4.length | 0;
		while(nm5[rnd6] === nm6[rnd3] || nm5[rnd6] === nm3[rnd4]){
			rnd6 = Math.random() * nm5.length | 0;
		}
		if(nTp === 5){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm4[rnd7] + nm6[rnd3];
		}else{
			nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd6] + nm4[rnd7] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
		}
	}
	testSwear(nMs);
}