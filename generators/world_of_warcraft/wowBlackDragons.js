if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","h","l","m","n","s","v","z"];
var nm2 = ["a","e","i","y","a","e","i","y","o","u"];
var nm3 = ["b","d","dr","f","g","gt","h","ld","lv","lf","lt","m","ns","r","rt","tr","z"];
var nm4 = ["a","e","i","a","e","i","y"];
var nm5 = ["d","l","ll","m","n","r","rr","s","ss","v","z"];
var nm6 = ["es","ar","iar","ian","ion","ian","ion","ian","ion","ian","ion","ian","ion","ian","ion"];

var nm7 = ["","","","f","h","l","m","n","r","s","z"];
var nm8 = ["a","e","i","o","y"];
var nm9 = ["l","ld","lt","n","nth","r","rs","rt","sr","str","st","sh","th","thr","v","vr","vs","x","xr"];
var nm10 = ["a","e","i","o","a","e","i","o","y"];
var nm11 = ["c","cs","d","dr","gr","ks","kr","ltr","lr","nr","ntr","ndr","rs","rstr","r","rr","st","shr","sr","str","x"];
var nm12 = ["e","y","ya","a","a","a","a","ia","ia","ia","ia","ia"];

function generator$world_of_warcraft$wowBlackDragons(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	if(tp === 1){
			nameFem();
			while(nMs === ""){
				nameFem();
			}
			rnd6 = Math.random() * nm12.length | 0;
			nMs = nMs + nm12[rnd6];
		}else{
			nameMas();
			while(nMs === ""){
				nameMas();
			}
			rnd6 = Math.random() * nm6.length | 0;
			nMs = nMs + nm6[rnd6];
		}
		return nMs;
}

function nameMas(){
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm5.length | 0;
	while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm5[rnd5]){
		rnd3 = Math.random() * nm3.length | 0;
	}
	nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm9.length | 0;
	rnd4 = Math.random() * nm10.length | 0;
	rnd5 = Math.random() * nm11.length | 0;
	while(nm9[rnd3] === nm7[rnd] || nm9[rnd3] === nm11[rnd5]){
		rnd3 = Math.random() * nm9.length | 0;
	}
	nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4] + nm11[rnd5];
	testSwear(nMs);
}