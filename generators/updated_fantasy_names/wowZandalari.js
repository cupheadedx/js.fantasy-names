var nm1 = ["","","b","c","ch","d","dr","g","h","j","k","kh","m","n","p","r","s","t","tr","v","z"];
var nm2 = ["a","e","o","i","u","y","a"];
var nm3 = ["f","h","k","l","ln","ns","r","rk","rkh","z","'ch","'k","'l","'m","'sh","'w","c'","g'k","ht'l","k'w","kk'r","l'ch","l'm","r'ch","r'g","r'v","r'z","z'k"];
var nm4 = ["ua","aa","ae","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm5 = ["k","kl","l","m","n","ng","r","t","v","x","'j","'k","'m","'z","g'z","k'd","n'z"];
var nm6 = ["","","","c","h","k","l","n","s","sh","t"];

var nm7 = ["","","","","b","c","ch","d","h","j","k","kh","m","n","p","r","s","y"];
var nm8 = ["a","i","o","u","a","i"];
var nm9 = ["f","g","h","l","m","n","r","s","sg","v","'v","'w","'y","'s","h'r","h'k","h'","l'","n'","n'y","r'","r'l","r'v","r'w","v'h","v'r","w'"];
var nm10 = ["a","i","o","u","a","i","o","u","a","i","o","u","a","i","o","u","e","e","e","a","i","o","u","e","ee","ae","ue"];
var nm11 = ["d","k","l","m","n","r","v","w","d","k","l","m","n","r","v","w","n'z","n's","s'r","sh'r","y'r"];
var nm12 = ["","","","","","","","","","","","","","h","k","l","s","sh"];

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
	rnd4 = Math.random() * nm3.length | 0;
	rnd5 = Math.random() * nm4.length | 0;
	while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm6[rnd3]){
		rnd4 = Math.random() * nm3.length | 0;
	}
	if(nTp < 4){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
	}else{
		rnd6 = Math.random() * nm2.length | 0;
		rnd7 = Math.random() * nm5.length | 0;
		while(rnd4 > 9 && rnd7 > 9){
			rnd7 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm2[rnd6] + nm5[rnd7] + nm4[rnd5] + nm6[rnd3];
	}
	testSwear(nMs);
}

function nameFem(){
	nTp = Math.random() * 6 | 0
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm12.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	while(nm9[rnd4] === nm7[rnd] || nm9[rnd4] === nm12[rnd3]){
		rnd4 = Math.random() * nm9.length | 0;
	}
	if(nTp < 4){
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm12[rnd3];
	}else{
		rnd6 = Math.random() * nm8.length | 0;
		rnd7 = Math.random() * nm11.length | 0;
		while(rnd4 > 9 && rnd7 > 15){
			rnd7 = Math.random() * nm11.length | 0;
		}
		if(nTp === 4){
			nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm8[rnd6] + nm11[rnd7] + nm10[rnd5] + nm12[rnd3];
		}else{
			nMs = nm7[rnd] + nm8[rnd2] + nm11[rnd7] + nm8[rnd6] + nm9[rnd4] + nm10[rnd5] + nm12[rnd3];
		}
	}
	testSwear(nMs);
}