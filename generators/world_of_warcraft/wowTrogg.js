if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","b","br","c","cr","d","dr","f","g","gr","k","kr","m","n","r","s","sg","sc","t","tr","v","w"];
var nm2 = ["a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u","ie","ee","ei"];
var nm3 = ["b","bb","bl","d","dd","dl","g","gd","gg","ggl","gl","lb","ld","lm","lv","lg","mg","md","ml","ng","nd","ngl","nv","r","rb","rd","rg","rgl","rl","rv","s","sh","v","vm","vl","wl","wm"];
var nm4 = ["a","i","o","u","y","a","i","o","u","a","a"];
var nm5 = ["b","d","g","l","m","n","r","s","v","w","z"];
var nm6 = ["","c","ch","g","gg","k","kk","r","s","sh"];

function generator$world_of_warcraft$wowTrogg(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	nameMas();
		while(nMs === ""){
			nameMas();
		}
		return nMs;
}

function nameMas(){
	nTp = Math.random() * 4 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	while(nm1[rnd] === nm3[rnd3] || nm3[rnd3] === nm6[rnd5]){
		rnd3 = Math.random() * nm3.length | 0;
	}
	if(nTp < 2){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
	}else{
		rnd6 = Math.random() * nm4.length | 0;
		rnd7 = Math.random() * nm5.length | 0;
		while(nm5[rnd7] === nm3[rnd3] || nm5[rnd7] === nm6[rnd5]){
			rnd7 = Math.random() * nm5.length | 0;
		}
		if(nTp === 2){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd7] + nm4[rnd6] + nm6[rnd5];
		}else{
			nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd7] + nm4[rnd6] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
		}
	}
	testSwear(nMs);
}