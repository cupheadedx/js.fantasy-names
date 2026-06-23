if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","b","bj","br","fj","fr","g","h","hj","hr","j","kj","l","m","r","s","st","sw","t","th","w"];
var nm2 = ["aa","eo","oe","a","a","e","i","o","u","a","a","e","i","o","u","a","a","e","i","o","u","a","a","e","i","o","u","a","a","e","i","o","u","a","a","e","i","o","u","a","a","e","i","o","u"];
var nm3 = ["d","dl","fn","g","k","l","ldr","lf","lfg","lg","llg","lm","lv","ng","nvg","nj","nng","ns","nsg","nw","r","rb","rbj","rg","rk","rl","rn","rngr","rst","rsv","rw","sg","sgr","sk","sl","sw","v"];
var nm4 = ["ei","a","a","e","i","i","o","a","a","e","i","i","o","a","a","e","i","i","o","a","a","e","i","i","o","a","a","e","i","i","o","a","a","e","i","i","o"];
var nm5 = ["","","","d","f","l","ld","lf","ll","m","mm","n","r","rd","rn","s"];

var nm6 = ["","","","","","bj","br","c","d","f","fj","fr","g","gr","h","hj","j","k","l","m","r","s","sv","sw","th","w"];
var nm7 = ["ei","a","a","e","e","i","o","u","a","a","e","e","i","o","u","a","a","e","e","i","o","u","a","a","e","e","i","o","u","a","a","e","e","i","o","u","a","a","e","e","i","o","u","a","a","e","e","i","o","u"];
var nm8 = ["d","dg","f","fj","j","gh","gn","kj","l","lg","lgr","lj","lk","ll","llg","lm","ln","mm","n","nd","ndr","ng","nh","nj","nn","nnl","ny","r","rd","rg","rh","rj","rn","rnl","rv","sg","sgj","sgr","sk","skr","sl","thj","tl"];
var nm9 = ["a","e","i"];
var nm10 = ["j","l","ld","ll","n","nj","nn","r"];
var nm11 = ["a","e"];
var nm12 = ["","","","","","","","","","","","","","","","","","","","","","","d","f","ld","n","nd","r","rd","s"];

function generator$dark_eye$darkEyeThorwalian(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	if(tp === 1){
			nameFem();
			while(nMs === ""){
				nameFem();
			}
			names = nMs;
			nameFem();
			while(nMs === ""){
				nameFem();
			}
			nTp = Math.random() * 5 | 0;
			if(nTp === 0){
				var end = "dotter";
			}else{
				var end = "dottir";
			}
			if(names.slice(-1) === "s"){
				names = names + " " + nMs + end;
			}else{
				names = names + " " + nMs + "s" + end;
			}
		}else{
			nameMas();
			while(nMs === ""){
				nameMas();
			}
			names = nMs;
			nameMas();
			while(nMs === ""){
				nameMas();
			}
			names = names + " " + nMs + "son";
		}
		return names;
}

function nameFem(){
	nTp = Math.random() * 3 | 0;
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm8.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm12.length | 0;
	if(nTp < 2){
		while(nm8[rnd3] === nm6[rnd] || nm8[rnd3] === nm12[rnd5]){
			rnd3 = Math.random() * nm8.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm12[rnd5];
	}else{
		rnd6 = Math.random() * nm10.length | 0;
		rnd7 = Math.random() * nm11.length | 0;
		while(nm10[rnd6] === nm8[rnd3] || nm10[rnd6] === nm12[rnd5]){
			rnd6 = Math.random() * nm10.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd6] + nm11[rnd7] + nm12[rnd5];
	}
	testSwear(nMs);
}

function nameMas(){
	nTp = Math.random() * 5 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm5.length | 0;
	if(nTp === 0){
		while(nm1[rnd] === nm5[rnd3] || nm5[rnd3] === ""){
			rnd3 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm5[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd3];
	}
	testSwear(nMs);
}