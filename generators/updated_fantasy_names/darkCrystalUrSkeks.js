var nm1 = ["","","","","d","g","h","l","m","n","s","t","v","y","z"];
var nm2 = ["a","e","i","o","u","a","e","i","o","u","a","e","o","ii","ei"];
var nm3 = ["h","l","m","n","r","y"];
var nm4 = ["a","e","i","o","a"];
var nm5 = ["","","","","c","d","h","j","l","lm","ln","m","n","nm","t","tt"];
var nm1b = ["","","","d","g","gr","h","l","m","n","sh","t","th","v","vr","y","z","zh"];
var nm2b = ["a","e","i","o","u","a","e","i","o","u","ee","ie"];
var nm3b = ["h","l","n","r","y","z"];
var nm4b = ["a","e","i","o","u","u"];
var nm5b = ["","","","","","","ch","d","k","kt","l","n","ng","nt","r","rt","t","th"];
var br = "";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		nameMas();
		while(nMs === "" || nMsb === ""){
			nameMas();
		}
		nMs = nMs.charAt(0).toUpperCase() + nMs.slice(1);
		nMsb = nMsb.charAt(0).toUpperCase() + nMsb.slice(1);
		names = nMsb + nMs;
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}

function nameMas(){
	nTp = Math.random() * 4 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm5.length | 0;
	rndb = Math.random() * nm1b.length | 0;
	rnd2b = Math.random() * nm2b.length | 0;
	rnd3b = Math.random() * nm5b.length | 0;
	if(nTp < 3){
		while(nm1[rnd] === "" && nm5[rnd3] === ""){
			rnd = Math.random() * nm1.length | 0;
			while(nm1[rnd] === nm5[rnd3]){
				rnd = Math.random() * nm1.length | 0;
			}
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd3];
		while(nm1b[rndb] === "" && nm5b[rnd3b] === ""){
			rndb = Math.random() * nm1b.length | 0;
			while(nm1b[rndb] === nm5b[rnd3b]){
				rndb = Math.random() * nm1b.length | 0;
			}
		}
		nMsb = nm1b[rndb] + nm2b[rnd2b] + nm5b[rnd3b];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		while(nm3[rnd4] === nm5[rnd3] || rnd3[rnd4] === nm1[rnd]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd3];
		rnd4b = Math.random() * nm3b.length | 0;
		rnd5b = Math.random() * nm4b.length | 0;
		while(nm3b[rnd4b] === nm5b[rnd3b] || rnd3b[rnd4b] === nm1b[rndb]){
			rnd4b = Math.random() * nm3b.length | 0;
		}
		nMsb = nm1b[rndb] + nm2b[rnd2b] + nm3b[rnd4b] + nm4b[rnd5b] + nm5b[rnd3b];
	}
	testSwear(nMs);
	testSwear(nMsb)
}