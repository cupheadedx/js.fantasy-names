if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["b","d","dr","g","k","m","s","t","th","w","y","z"];
var nm2 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","io","oi","ee","oo"];
var nm3 = ["gr","k","kk","n","ntr","nr","r","rb","rl","rk","sc","tt","v","vl","z"];
var nm4 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ie","ee","ia","ea","ai"];
var nm5 = ["","","","","","ch","k","l","m","n","r","rl","rn","tt","v","x"];

var nm6 = ["","","","","cl","d","g","gl","k","kl","r","s","v","w","z"];
var nm7 = ["o","u","o","u","o","u","a","e","i"];
var nm8 = ["cl","cn","dm","dn","dr","dl","gm","gr","gn","gl","km","kn","kl","lm","ln","lk","ls","lv","ls","ml","mc","mk","mg","nk","nl","nc","rs","rl","rm","rn","sm","sn","sk","tm","tn","tl","tr"];
var nm9 = ["e","i","o","e","i","o","a"];
var nm10 = ["","","","","","","","cl","dl","k","k","kl","l","l","ll","m","m","n","n","r","r","rt","t","t","tl","ttl","v","v"];
var nm11 = ["e","i","e","i","a"];

var nm12 = ["c","d","g","gn","h","k","kn","m","n","r","s","sn","t","z"];
var nm13 = ["a","i","o","u"];
var nm14 = ["d","dd","dr","g","gg","gr","gn","gp","k","kk","kr","kp","kl","kn","lp","lb","mk","nk","ng","nd","r","rp","rk","rn","rv","rz","sk","sr","tr","tk","vk","vr","zk","zr","zn"];
var nm15 = ["c","g","gg","k","kk","l","ll","m","n","r","rr","t","tt"];

function generator$star_wars$swUgnaughtNames(type){
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
		}
		names = nMs + " " + nSr;
		return names;
}

function nameMas(){
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm5.length | 0;
	if(i < 4){
		while(nm1[rnd] === nm5[rnd3] || nm5[rnd3] === ""){
			rnd3 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		while(nm1[rnd] === nm3[rnd4] || nm5[rnd3] === nm3[rnd4]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd3];
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm8.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	if(i < 4){
		while(nm6[rnd] === nm8[rnd3] || nm8[rnd3] === nm10[rnd5]){
			rnd3 = Math.random() * nm8.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd5];
	}else{
		rnd6 = Math.random() * nm7.length | 0;
		while(nm10[rnd5] === ""){
			rnd5 = Math.random() * nm10.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd5] + nm7[rnd6];
	}
	testSwear(nMs);
}

function nameSur(){
	sTp = Math.random() * 2 | 0;
	rnd = Math.random() * nm12.length | 0;
	rnd2 = Math.random() * nm13.length | 0;
	if(sTp === 0){
		rnd3 = Math.random() * nm15.length | 0;
		while(nm15[rnd3] === nm12[rnd]){
			rnd = Math.random() * nm12.length | 0;
		}
		nSr = nm12[rnd] + nm13[rnd2] + nm15[rnd3];
	}else{
		rnd3 = Math.random() * nm14.length | 0;
		rnd4 = Math.random() * nm13.length | 0;
		while(nm12[rnd] === nm14[rnd3]){
			rnd3 = Math.random() * nm14.length | 0;
		}
		nSr = nm12[rnd] + nm13[rnd2] + nm14[rnd3] + nm13[rnd4];
	}
	testSwear(nSr);
}