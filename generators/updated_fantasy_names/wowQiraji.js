var nm1 = ["dr","h","k","m","n","p","q","r","sk","t","v","x","y","z"];
var nm2 = ["e'a","a'a","oa","ee","uu","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","y"];
var nm3 = ["g'l","g'r","g'd","k'l","k'n","k'r","k'g","b","d","dh","g","gg","j","k","kh","kk","l","ll","q","r","rr","v","z","zz","b","d","dh","g","gg","j","k","kh","kk","l","ll","q","r","rr","v","z","zz"];
var nm4 = ["a","e","i","o","a","e","i","o","u"];
var nm5 = ["d","m","n","nn","r","rk","ss","sh","th","x","xx","z"];

var nm6 = ["d","h","k","l","m","n","q","r","s","t","y","z"];
var nm7 = ["a","a","e","i","o","u","a","u"];
var nm8 = ["c","cr","ct","d","g","gt","k","kr","kt","l","lt","ld","nt","nk","rd","rt","rk","rr","t","tr","tk","tt","tv","v","z","zk","zt"];
var nm9 = ["d","k","l","m","n","r","s","t","v","z"];

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
	nTp = Math.random() * 5 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm5.length | 0;
	if(nTp === 0){
		while(nm1[rnd] === nm5[rnd3]){
			rnd3 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm5[rnd3] || rnd2 < 2 && rnd4 < 7){
			rnd4 = Math.random() * nm3.length | 0;
		}
		if(nTp < 3){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd3];
		}else{
			rnd6 = Math.random() * nm4.length | 0;
			rnd7 = Math.random() * nm9.length | 0;
			while(nm9[rnd7] === nm3[rnd4] || nm9[rnd7] === nm5[rnd3]){
				rnd7 = Math.random() * nm9.length | 0;
			}
			if(nTp === 3){
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm9[rnd7] + nm4[rnd6] + nm5[rnd3];
			}else{
				nMs = nm1[rnd] + nm4[rnd5] + nm9[rnd7] + nm2[rnd2] + nm3[rnd4] + nm4[rnd6] + nm5[rnd3];
			}
		}
	}
	testSwear(nMs);
}

function nameFem(){
	nTp = Math.random() * 4 | 0;
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm8.length | 0;
	rnd4 = Math.random() * nm7.length | 0;
	if(nTp < 2){
		while(nm6[rnd] === nm8[rnd3]){
			rnd3 = Math.random() * nm8.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4];
	}else{
		rnd5 = Math.random() * nm9.length | 0;
		rnd6 = Math.random() * nm7.length | 0;
		while(nm9[rnd5] === nm6[rnd] || nm9[rnd5] === nm8[rnd3]){
			rnd5 = Math.random() * nm9.length | 0;
		}
		if(nTp === 2){
			nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm9[rnd5] + nm7[rnd6];
		}else{
			nMs = nm6[rnd] + nm7[rnd2] + nm9[rnd5] + nm7[rnd4] + nm8[rnd3] + nm7[rnd6];
		}
	}
	testSwear(nMs);
}