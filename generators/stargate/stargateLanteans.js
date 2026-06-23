if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","b","br","c","d","dr","fr","g","gl","h","j","l","ll","s","sm","tr","ts","v","w"];
var nm2 = ["a","e","i","o","u","a","e","i","o","u","y"];
var nm3 = ["d","dd","dr","dth","g","gg","ggn","gr","lk","ll","lm","ln","n","nd","nr","nrr","rt","st","t","tr","tn","tl","th","w","wl","wc"];
var nm4 = ["d","f","g","l","ld","lm","lr","m","n","nd","nk","ns","r","d","f","g","l","m","n","r"];
var nm5 = ["c","d","l","lph","n","nn","ph","s","x"];

var nm6 = ["","","","","","","","d","dr","f","h","l","m","n","ph","s","sr","t","tr","v","w"];
var nm7 = ["ea","ia","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o"];
var nm8 = ["b","d","h","l","m","n","ph","phr","r","s","t","th","v","w"];
var nm9 = ["","","","","","","","","","","","","","","","h","l","n","ph","s"];

function generator$stargate$stargateLanteans(type){
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
	nTp = Math.random() * 4 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm2.length | 0;
	rnd5 = Math.random() * nm5.length | 0;
	if(nTp < 2){
		while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm5[rnd5]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm5[rnd5];
	}else{
		rnd6 = Math.random() * nm2.length | 0;
		rnd7 = Math.random() * nm4.length | 0;
		while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm4[rnd7]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		if(nTp === 2){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd7] + nm2[rnd6] + nm5[rnd5];
		}else{
			nMs = nm1[rnd] + nm2[rnd2] + nm4[rnd7] + nm2[rnd6] + nm3[rnd3] + nm2[rnd4] + nm5[rnd5];
		}
	}
	testSwear(nMs);
}


function nameFem(){
	nTp = Math.random() * 4 | 0;
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm8.length | 0;
	rnd4 = Math.random() * nm7.length | 0;
	rnd5 = Math.random() * nm9.length | 0;
	if(nTp < 2){
		while(nm8[rnd3] === nm6[rnd] || nm8[rnd3] === nm9[rnd5]){
			rnd3 = Math.random() * nm8.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm9[rnd5];
	}else{
		rnd6 = Math.random() * nm7.length | 0;
		rnd7 = Math.random() * nm8.length | 0;
		while(nm8[rnd3] === nm6[rnd] || nm8[rnd3] === nm8[rnd7]){
			rnd3 = Math.random() * nm8.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm8[rnd7] + nm7[rnd6] + nm9[rnd5];
	}
	testSwear(nMs);
}