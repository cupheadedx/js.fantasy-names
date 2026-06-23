var nm1 = ["","","b","d","f","g","h","j","k","kh","l","m","n","p","r","rh","s","sh","t","v","w","z"];
var nm2 = ["y","a","a","a","e","i","i","o","u"];
var nm3 = ["b","d","g","h","hs","k","kh","l","m","mm","n","nd","r","rk","rz","s","sh","t","v","w"];
var nm4 = ["d","h","m","r","s","v"];
var nm5 = ["a","i","a","i","e"];
var nm6 = ["d","l","m","n","s","sh","v"];

var nm7 = ["","","c","d","f","g","h","j","k","m","n","r","t","v"];
var nm8 = ["ai","ae","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm9 = ["d","f","h","hn","hs","k","l","lh","ls","n","nt","r","s","sh","sn","ss"];
var nm10 = ["a","e","i"];
var nm11 = ["b","d","hn","l","n","r","s","sh","v"];
var nm12 = ["a","i"];
var nm13 = ["h","","","","","",""];


var br = "";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
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
	nTp = Math.random() * 6 | 0
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	if(nTp === 0){
		while("" === nm1[rnd]){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm6[rnd3] === nm1[rnd]){
			rnd3 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm5.length | 0;
		while(nm6[rnd3] === nm3[rnd4] || nm3[rnd4] === nm1[rnd]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		if(nTp < 4){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm5[rnd5] + nm6[rnd3];
		}else{
			rnd6 = Math.random() * nm4.length | 0;
			while(nm4[rnd6] === nm3[rnd4] || nm4[rnd6] === nm6[rnd3]){
				rnd6 = Math.random() * nm4.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + "a" + nm4[rnd6] + nm5[rnd5] + nm6[rnd3];
		}
	}
	testSwear(nMs);
}

function nameFem(){
	nTp = Math.random() * 6 | 0
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm9.length | 0;
	rnd4 = Math.random() * nm12.length | 0;
	rnd5 = Math.random() * nm13.length | 0;
	while(nm7[rnd] === nm9[rnd3] || nm9[rnd3] === nm13[rnd5]){
		rnd3 = Math.random() * nm9.length | 0;
	}
	if(nTp < 4){
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm12[rnd4] + nm13[rnd5];
	}else{
		rnd6 = Math.random() * nm10.length | 0;
		rnd7 = Math.random() * nm11.length | 0;
		while(nm11[rnd7] === nm9[rnd3] || nm11[rnd7] === nm13[rnd5]){
			rnd7 = Math.random() * nm11.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd6] + nm11[rnd7] + nm12[rnd4] + nm13[rnd5];
	}
	testSwear(nMs);
}