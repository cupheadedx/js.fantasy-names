if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","c","d","g","gl","k","kl","l","m","n","p","t","v"];
var nm2 = ["a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","oa","aa","ao","ea","ia"];
var nm3 = ["d","l","m","n","p","r","v","z"];
var nm4 = ["a","o","u","a","o","u","a","o","u","a","o","u","ie","ei","ii"];
var nm5 = ["","","c","k","l","m","n"];

var nm6 = ["","","c","g","h","k","l","m","n","s","t","y","z"];
var nm7 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ai","au","ay","ia","ea"];
var nm8 = ["d","h","l","ll","lm","ln","m","mn","n","r","rl","w","z"];
var nm9 = ["a","e","i","o"];
var nm10 = ["","","","","","","","h","l","m","n"];

var nm11 = ["b","br","d","dr","g","h","k","n","m","p","pr","s","t","w"];
var nm12 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ay","ia","ai","aa"];
var nm13 = ["dr","f","h","l","lr","lm","ln","m","mn","n","nr","nl","r","rr","rl","rd","rt","s","v"];
var nm14 = ["i","o","u","i","o","u","i","o","u","a","e"];
var nm15 = ["","","","","","","","","","","l","n","r","s"];

function generator$star_wars$swKaminoanNames(type){
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
	rnd3 = Math.random() * nm5.length | 0;
	if(i < 5){
		while(nm5[rnd3] === nm1[rnd] || nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		while(nm1[rnd] === nm3[rnd4] || nm3[rnd4] === nm5[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd3];
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm10.length | 0;
	if(i < 5){
		while(nm10[rnd3] === nm6[rnd] || nm6[rnd] === ""){
			rnd = Math.random() * nm6.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm10[rnd3];
	}else{
		rnd4 = Math.random() * nm8.length | 0;
		rnd5 = Math.random() * nm9.length | 0;
		while(nm6[rnd] === nm8[rnd4] || nm8[rnd4] === nm10[rnd3]){
			rnd4 = Math.random() * nm8.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd4] + nm9[rnd5] + nm10[rnd3];
	}
	testSwear(nMs);
}

function nameSur(){
	sTp = Math.random() * 3 | 0;
	rnd = Math.random() * nm11.length | 0;
	rnd2 = Math.random() * nm12.length | 0;
	rnd3 = Math.random() * nm15.length | 0;
	if(sTp === 0){
		while(nm15[rnd3] === nm11[rnd]){
			rnd3 = Math.random() * nm15.length | 0;
		}
		nSr = nm11[rnd] + nm12[rnd2] + nm15[rnd3];
	}else{
		rnd4 = Math.random() * nm13.length | 0;
		rnd5 = Math.random() * nm14.length | 0;
		while(nm11[rnd] === nm13[rnd4] || nm13[rnd4] === nm15[rnd3]){
			rnd4 = Math.random() * nm13.length | 0;
		}
		if(sTp === 1){
			nSr = nm11[rnd] + nm12[rnd2] + nm13[rnd4] + nm14[rnd5] + nm15[rnd3];
		}else{
			rnd6 = Math.random() * nm14.length | 0;
			nSr = nm11[rnd] + nm12[rnd2] + nm13[rnd4] + nm14[rnd5] + nm15[rnd3] + nm14[rnd6];
		}
	}
	testSwear(nSr);
}