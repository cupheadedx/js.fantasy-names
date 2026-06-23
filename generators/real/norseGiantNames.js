if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","Þj","Þr","b","f","g","h","hr","l","m","n","s","v"];
var nm2 = ["a","e","i","o","u","y","á","í","ö","ý","a","e","i","o","u","y","a","e","i","o","u","y","á","í","ö","ý","ei","au","æ"];
var nm3 = ["ð","ðg","þr","fþ","fþr","gþ","gþr","g","ggth","gl","glf","gn","gth","k","kkm","km","lþ","l","lbl","ll","lv","m","mgr","mn","ng","ngn","nj","r","rb","rf","rg","rn","rnj","rr","s","sv","t","tt","v","z"];
var nm4 = ["ðm","ðn","ld","lm","mðn","m","mn","n","nð","nðm","nd","r","rr","s","t"];
var nm5 = ["","","","","d","dr","lgr","gr","m","mr","ng","ngr","r","rn","rtr","str","t","tr"];

var nm6 = ["","","","","","","b","bl","d","dr","g","gj","gr","h","hr","j","k","l","m","n","r","s","sk"];
var nm7 = ["a","e","i","o","u","y","á","ó","ö","ú","ý","ey","ei","au"];
var nm8 = ["ðg","ðgr","ðr","f","fr","g","gj","grb","l","lf","lfr","lg","lgj","m","ng","ngl","ngr","ngrb","nl","nnl","ns","rð","rðg","rðgr","r","rb","rns","rr","st","stl","tl","vr"];
var nm9 = ["ð","d","dd","f","ff","gl","j","k","kk","ng","ngl","v","vl","x"];
var nm10 = ["","","","","","","","","","","","","ð","ðr","dr","fn","kn","lp","md","n","ndr","ng","nn","p","pr","t","tt"];

function generator$real$norseGiantNames(type){
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
	rnd5 = Math.random() * nm5.length | 0;
	if(i < 3){
		while(rnd5 < 4){
			rnd5 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd5];
	}else{
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm2.length | 0;
		while(nm3[rnd3] === nm1[rnd] || nm5[rnd5] === nm3[rnd3]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		if(i < 7){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm5[rnd5];
		}else{
			rnd6 = Math.random() * nm4.length | 0;
			rnd7 = Math.random() * nm2.length | 0;
			while(nm4[rnd6] === nm3[rnd3] || nm4[rnd6] === nm5[rnd5]){
				rnd6 = Math.random() * nm4.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd6] + nm2[rnd7] + nm5[rnd5];
		}
	}
	testSwear(nMs);
}
function nameFem(){
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	if(i < 3){
		while(rnd < 6){
			rnd = Math.random() * nm6.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm10[rnd5];
	}else{
		rnd3 = Math.random() * nm8.length | 0;
		rnd4 = Math.random() * nm7.length | 0;
		while(nm8[rnd3] === nm6[rnd] || nm10[rnd5] === nm8[rnd3]){
			rnd3 = Math.random() * nm8.length | 0;
		}
		if(i < 7){
			nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm10[rnd5];
		}else{
			rnd6 = Math.random() * nm9.length | 0;
			rnd7 = Math.random() * nm7.length | 0;
			while(nm9[rnd6] === nm8[rnd3] || nm9[rnd6] === nm10[rnd5]){
				rnd6 = Math.random() * nm9.length | 0;
			}
			nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm9[rnd6] + nm7[rnd7] + nm10[rnd5];
		}
	}
	testSwear(nMs);
}