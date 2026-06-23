if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","b","c","d","g","h","k","m","n","r","s","t","v","z"];
var nm2 = ["a","e","o","a","e","o","a","e","o","u","y","ae"];
var nm3 = ["cr","d","dr","fr","l","lg","ln","m","ndr","q","r","rdr","rd","rg","rr","rsh","str","vr"];
var nm4 = ["a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","ia","io"];
var nm5 = ["d","k","n","r","s"];
var nm6 = ["","","a","i","o"];
var nm7 = ["strasz","strasz","strasz","strasz","strasz","strasz","sanz","rasz"];

var nm8 = ["","","","","","c","g","h","k","n","r","rh","s","t","th","v","x","z"];
var nm9 = ["a","e","o","y","a","e","o","y","ea","ie","au"];
var nm10 = ["h","l","m","n","r","tr","v"];
var nm11 = ["a","e","i"];
var nm12 = ["","","","c","k","l","n","x"];

function generator$world_of_warcraft$wowRedDragons(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	if(tp === 1){
			nameFem();
			while(nMs === ""){
				nameFem();
			}
			nMs = nMs + "strasza";
		}else{
			nameMas();
			while(nMs === ""){
				nameMas();
			}
			rnd6 = Math.random() * nm7.length | 0;
			nMs = nMs + nm7[rnd6];
		}
		return nMs;
}

function nameMas(){
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	if(i < 3){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2];
	}else{
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm4.length | 0;
		if(i < 7){
			while(nm3[rnd3] === nm1[rnd]){
				rnd3 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4];
		}else{
			rnd5 = Math.random() * nm5.length | 0;
			rnd6 = Math.random() * nm6.length | 0;
			while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm5[rnd5]){
				rnd3 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd6];
		}
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm8.length | 0;
	rnd2 = Math.random() * nm9.length | 0;
	rnd3 = Math.random() * nm10.length | 0;
	rnd4 = Math.random() * nm11.length | 0;
	rnd5 = Math.random() * nm12.length | 0;
	while(nm10[rnd3] === nm8[rnd] || nm10[rnd3] === nm12[rnd5]){
		rnd3 = Math.random() * nm10.length | 0;
	}
	nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4] + nm12[rnd5];
	testSwear(nMs);
}