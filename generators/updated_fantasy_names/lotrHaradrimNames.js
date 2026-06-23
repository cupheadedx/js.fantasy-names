var nm1 = ["","","b","d","gh","h","j","kh","l","m","n","q","s","t","w","y"];
var nm2 = ["aa","a","a","i","u","u","a","a","i","u","u","a","a","i","u","u","a","a","i","u","u"];
var nm3 = ["b","br","dh","dn","f","kr","ld","'m","mr","'n","n","nn","q","qq","r","rw","s","s'","sh","tb","th","wf","z"];
var nm4 = ["aa","oo","ay","a","i","o","a","i","o","a","i","o","a","i","o","a","a","a","o","o"];
var nm5 = ["d","f","m","n","nn","r","z"];
var nm6 = ["","b","d","h","kr","l","m","n","r","s","th"];

var nm7 = ["","d","f","gh","h","kh","m","n","r","s","t","w","y"];
var nm8 = ["a","i","u"];
var nm9 = ["d","dh","f","h","l","ll","lr","ld","m","ml","n","nn","nh","r","rr","rl","rh","s","sh","sr","w","wd","wl","z","zh"];
var nm10 = ["ay","y","aa","a","a","a","a","a","i","i","i","i","i"];
var nm11 = ["b","dh","h","l","m","n","r","th","y"];
var nm12 = ["","d","h","h","h","l","n","nd","r"];

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
	nTp = Math.random * 3 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm4.length | 0;
	rnd4 = Math.random() * nm3.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm6[rnd5]){
		rnd4 = Math.random() * nm3.length | 0;
	}
	if(nTp === 0){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd3] + nm6[rnd5];
	}else{
		if(nTp = 1){
			nMs = "Al " + nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd3] + nm6[rnd5];
		}else{
			rnd6 = Math.random() * nm2.length | 0;
			rnd7 = Math.random() * nm5.length | 0;
			while(nm5[rnd7] === nm6[rnd5] || nm5[rnd7] === nm3[rnd4]){
				rnd7 = Math.random() * nm5.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm2[rnd6] + nm5[rnd7] + nm4[rnd3] + nm6[rnd5];
		}
	}
	testSwear(nMs);
}


function nameFem(){
	nTp = Math.random * 3 | 0;
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm10.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm12.length | 0;
	while(nm9[rnd4] === nm7[rnd] || nm9[rnd4] === nm12[rnd5]){
		rnd4 = Math.random() * nm9.length | 0;
	}
	if(nTp < 2){
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd3] + nm12[rnd5];
	}else{
		rnd6 = Math.random() * nm8.length | 0;
		rnd7 = Math.random() * nm11.length | 0;
		while(nm11[rnd7] === nm12[rnd5] || nm11[rnd7] === nm9[rnd4]){
			rnd7 = Math.random() * nm11.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm8[rnd6] + nm11[rnd7] + nm10[rnd3] + nm12[rnd5];
	}
	testSwear(nMs);
}
