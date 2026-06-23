var nm1 = ["","","","b","br","d","dr","g","gr","j","k","r","v","vr","z"];
var nm2 = ["a","i","o","a","i","o","u"];
var nm3 = ["c","cc","g","gg","k","kk","q","qq","r","rr","s","ss","t","tt","y","z","zz"];
var nm4 = ["","","","","c","d","k","l","ln","lm","n","m","r","rl","rd"];

var nm5 = ["c","f","h","l","m","n","r","s","t","y"];
var nm6 = ["a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","eo","ei","io","yo"];
var nm7 = ["d","dd","g","h","l","ll","n","nn","m","mm","r","s","ss","y"];
var nm8 = ["h","l","n","s","t","th","y"];

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
			rnd = Math.random() * 3 | 0;
			if(rnd !== 0){
				rnd = Math.random() * nm1.length | 0;
				rnd2 = Math.random() * nm2.length | 0;
				if(rnd === 1){
					nm1[rnd] + nm2[rnd2] + "-" + nMs;
				}else{
					nMs + "-" + nm1[rnd] + nm2[rnd2];
				}
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
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm4.length | 0;
	if(i < 3){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm4[rnd3] === nm1[rnd] || nm4[rnd3] === ""){
			rnd3 = Math.random() * nm4.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm4[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm2.length | 0;
		while(nm1[rnd] === nm3[rnd4] || nm3[rnd4] === nm4[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm2[rnd5] + nm4[rnd3];
	}
	testSwear(nMs);
}

function nameFem(){
	sTp = Math.random() * 2 | 0;
	rnd = Math.random() * nm5.length | 0;
	rnd2 = Math.random() * nm6.length | 0;
	if(sTp === 0){
		rnd3 = Math.random() * nm8.length | 0;
		while(nm8[rnd3] === nm5[rnd]){
			rnd3 = Math.random() * nm8.length | 0;
		}
		nMs = nm5[rnd] + nm6[rnd2] + nm8[rnd3];
	}else{
		rnd3 = Math.random() * nm7.length | 0;
		rnd4 = Math.random() * nm6.length | 0;
		while(nm5[rnd] === nm7[rnd3]){
			rnd3 = Math.random() * nm7.length | 0;
		}
		nMs = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4];
	}
	testSwear(nMs);
}