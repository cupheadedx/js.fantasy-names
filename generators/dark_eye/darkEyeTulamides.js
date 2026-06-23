if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","b","bh","br","ch","d","f","h","j","k","kh","m","n","r","s","sh","t","y","z"];
var nm2 = ["aa","ai","a","a","a","e","i","o","u","u"];
var nm3 = ["b","bd","chm","cht","d","dl","f","h","j","k","kh","khb","l","lh","lm","m","mm","n","nd","r","rh","rk","rkh","sh","sl","sn","sr","ss","st","wl","z"];
var nm4 = ["ai","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u"];
var nm5 = ["b","d","dd","f","m","mm","r","sh","y","z"];
var nm6 = ["a","a","e","i","o","u","u"];
var nm7 = ["","b","d","f","h","k","kh","l","m","n","r","z"];

var nm8 = ["","","","","d","f","h","j","m","n","r","rh","s","sh","t","y","z","zh"];
var nm9 = ["ai","a","a","e","e","i","o","u","a","a","e","e","i","o","u","a","a","e","e","i","o","u"];
var nm10 = ["b","d","f","fr","h","l","lh","ll","llh","lm","m","n","r","sh","sm","y","yr","z","zh","zm"];
var nm11 = ["ei","a","a","e","i","i","o","u","a","a","e","i","i","o","u","a","a","e","i","i","o","u","a","a","e","i","i","o","u"];
var nm12 = ["b","d","dr","l","m","n","ndr","nn","r","s","sh","y"];
var nm13 = ["a","a","e","e","i"];
var nm14 = ["","","","","","","","","","","","","","","","","","h","l","n","t","th"];

function generator$dark_eye$darkEyeTulamides(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	nameMas();
		while(nMs === ""){
			nameMas();
		}
		names = nMs.charAt(0).toUpperCase() + nMs.slice(1);
		if(tp === 1){
			nameFem();
			while(nMs === ""){
				nameFem();
			}
			names = nMs.charAt(0).toUpperCase() + nMs.slice(1) + " saba " + names;
		}else{
			nameMas();
			while(nMs === ""){
				nameMas();
			}
			names = nMs.charAt(0).toUpperCase() + nMs.slice(1) + " ibn " + names;
		}
		return names;
}

function nameFem(){
	nTp = Math.random() * 3 | 0;
	rnd = Math.random() * nm8.length | 0;
	rnd2 = Math.random() * nm9.length | 0;
	rnd3 = Math.random() * nm10.length | 0;
	rnd4 = Math.random() * nm13.length | 0;
	rnd7 = Math.random() * nm14.length | 0;
	if(nTp < 2){
		while(nm10[rnd3] === nm8[rnd]){
			rnd3 = Math.random() * nm10.length | 0;
		}
		nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm13[rnd4] + nm14[rnd7];
	}else{
		rnd5 = Math.random() * nm11.length | 0;
		rnd6 = Math.random() * nm12.length | 0;
		while(nm12[rnd6] === nm10[rnd3] || nm10[rnd3] === nm8[rnd]){
			rnd3 = Math.random() * nm10.length | 0;
		}
		nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd5] + nm12[rnd6] + nm13[rnd4] + nm14[rnd7];
	}
	testSwear(nMs);
}

function nameMas(){
	nTp = Math.random() * 5 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm7.length | 0;
	rnd4 = Math.random() * nm3.length | 0;
	rnd5 = Math.random() * nm4.length | 0;
	if(nTp < 3){
		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm7[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm7[rnd3];
	}else{
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm6.length | 0;
		while(nm3[rnd4] === nm5[rnd6] || nm5[rnd6] === nm7[rnd3]){
			rnd6 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm6[rnd7] + nm7[rnd3];
	}
	testSwear(nMs);
}