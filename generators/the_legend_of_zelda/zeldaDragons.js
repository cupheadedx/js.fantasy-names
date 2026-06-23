if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","","b","d","f","g","gl","l","m","n","s","st","v","z"];
var nm2 = ["ay","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o"];
var nm3 = ["d","dr","g","gn","gr","gg","l","ld","lg","ll","lm","ln","lv","m","mm","mr","n","nd","ng","nr","r","rb","rd","rg","rl","v","vr","z","zr"];
var nm4 = ["oo","ia","aa","ao","a","i","o","u","a","i","o","u","a","i","o","u","a","i","o","u","a","i","o","u"];
var nm5 = ["d","g","l","m","n","r","v","z"];
var nm6 = ["","","","","c","d","k","l","n","r","rd","s","sh"];

function generator$the_legend_of_zelda$zeldaDragons(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	nameMas();
		while(nMs === ""){
			nameMas();
		}
		return nMs;
}

function nameMas(){
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	while(nm1[rnd] === nm6[rnd5]){
		rnd5 = Math.random() * nm6.length | 0;
	}
	while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm6[rnd5]){
		rnd3 = Math.random() * nm3.length | 0;
	}
	if(nTp < 4){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
	}else{
		rnd6 = Math.random() * nm4.length | 0;
		rnd7 = Math.random() * nm5.length | 0;
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd7] + nm4[rnd6] + nm6[rnd5];
	}
	testSwear(nMs);
}