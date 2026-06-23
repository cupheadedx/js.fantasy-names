if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","b","br","c","g","gr","j","k","l","m","n","q","s","sh","t","th","v","x"];
var nm2 = ["a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","aa","ei","oa","ae"];
var nm3 = ["ck","d","gg","kk","kr","l","lr","m","mt","n","nk","nt","r","rr","ss","t"];
var nm4 = ["a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","y","ae","aa","ai"];
var nm5 = ["h","l","m","n","r","s"];
var nm6 = ["","","gh","k","l","m","n","r","rg","rgh","rrgh","s","sh","ssh","st","x"];

var nm7 = ["b","d","h","l","m","n","r","t","y","z"];
var nm8 = ["a","e","i","o","u","e","o","u","a","e","i","o","u","e","o","u"];
var nm9 = ["d","dd","g","gn","gl","gd","l","lm","ln","ld","lg","lk","m","mn","mm","md","mg","mk","nd","ng","nk","nl","nd","s","sl","sn","sm","v","vn","z"];
var nm10 = ["d","l","m","n","r","s"];

var nm11 = ["b","gr","j","k","q","r","rr","s","sh","sk","t"];
var nm12 = ["a","e","o","u","y","a","e","o","u","y","a","e","o","u","y","ee","ae","ua"];
var nm13 = ["d","dd","g","gg","k","kk","l","ll","m","mm","n","nn","r","rr","z","zz"];
var nm14 = ["a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","ei","ie","ii"];
var nm15 = ["","","","","l","m","n","r","s","sh","ssh","th"];
var nm16 = ["","","","","","","","","","","","","","","jal ","lij ","san "];

function generator$star_wars$swKaleeshNames(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	nameSur();
		while(nSr === ""){
			nameSur();
		}
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
		names = nMs + " " + nSr;
		return names;
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
		while(nm1[rnd] === nm3[rnd4] || nm3[rnd4] === nm6[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		if(i < 7){
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
	rnd3 = Math.random() * nm9.length | 0;
	rnd4 = Math.random() * nm8.length | 0;
	while(nm9[rnd3] === nm7[rnd]){
		rnd3 = Math.random() * nm9.length | 0;
	}
	if(i < 5){
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm8[rnd4];
	}else{
		rnd5 = Math.random() * nm10.length | 0;
		rnd6 = Math.random() * nm8.length | 0;
		while(nm7[rnd] === nm10[rnd5] || nm9[rnd3] === nm10[rnd5]){
			rnd5 = Math.random() * nm10.length | 0;
		}
		nMs = nm9[rnd] + nm8[rnd2] + nm9[rnd3] + nm8[rnd4] + nm10[rnd5] + nm8[rnd6];
	}
	testSwear(nMs);
}
function nameSur(){
	sTp = Math.random() * 2 | 0;
	rnd0 = Math.random() * nm16.length | 0;
	rnd = Math.random() * nm11.length | 0;
	rnd2 = Math.random() * nm12.length | 0;
	rnd3 = Math.random() * nm15.length | 0;
	if(sTp === 0){
		while(nm15[rnd3] === nm11[rnd] || nm15[rnd3] === ""){
			rnd3 = Math.random() * nm15.length | 0;
		}
		nSr = nm16[rnd0] + nm11[rnd] + nm12[rnd2] + nm15[rnd3];
	}else{
		rnd4 = Math.random() * nm13.length | 0;
		rnd5 = Math.random() * nm14.length | 0;
		while(nm11[rnd] === nm13[rnd4] || nm13[rnd4] === nm15[rnd3]){
			rnd4 = Math.random() * nm13.length | 0;
		}
		nSr = nm16[rnd0] + nm11[rnd] + nm12[rnd2] + nm13[rnd4] + nm14[rnd5] + nm15[rnd3];
	}
	testSwear(nSr);
}