var nm1 = ["f","h","j","l","m","n","ph","r","z"];
var nm2 = ["ai","a","a","e","i","o","a","a","e","i","o","a","a","e","i","o","a","a","e","i","o","y"];
var nm3 = ["'","g","l","ln","n","nt","r","rl","s","sh","v","z"];
var nm4 = ["a","i","a","i","e","o"];
var nm5 = ["d","l","n","r","s","sh","t","th","v","z"];
var nm6 = ["a","a","e","i","o"];
var nm7 = ["d","h","n","t","v"];
var nm8 = ["iu","ia","ie","ea","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o"];
var nm9 = ["l","n","r","s","th"];

var nm13 = ["beak","blue","bright","bronze","cloud","crown","dagger","dark","dawn","death","doom","dream","dusk","emerald","fey","fray","ghost","glade","gold","green","gray","grim","jade","ley","light","marsh","mist","moon","nether","night","rain","razor","red","shadow","sharp","silver","sky","snow","stag","steel","storm","sun","thorn","thunder","twilight","white","wind","wraith","wrath"];
var nm14 = ["beak","bill","buck","chase","chaser","claw","crest","dive","fall","feather","flight","head","plume","quill","storm","stormer","tail","talon","watcher","wing"];

var br = "";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		if(i < 5){
			nameMas();
			while(nMs === ""){
				nameMas();
			}
		}else{
			rnd = Math.random() * nm13.length | 0;
			rnd2 = Math.random() * nm14.length | 0;
			while(nm13[rnd] === nm14[rnd2]){
				rnd = Math.random() * nm13.length | 0;
			}
			nMs = nm13[rnd] + nm14[rnd2];
		}
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}

function nameMas(){
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm5.length | 0;
	rnd6 = Math.random() * nm8.length | 0;
	rnd7 = Math.random() * nm9.length | 0;
	while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm5[rnd5]){
		rnd3 = Math.random() * nm3.length | 0;
	}
	while(nm5[rnd5] === nm9[rnd7]){
		rnd7 = Math.random() * nm9.length | 0;
	}
	if(nTp < 4){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm8[rnd6] + nm9[rnd7];
	}else{
		rnd8 = Math.random() * nm6.length | 0;
		rnd9 = Math.random() * nm7.length | 0;
		while(nm7[rnd9] === nm9[rnd7] || nm7[rnd9] === nm5[rnd5]){
			rnd9 = Math.random() * nm7.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd8] + nm7[rnd9] + nm8[rnd6] + nm9[rnd7];
	}
	testSwear(nMs);
}