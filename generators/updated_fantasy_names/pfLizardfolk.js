var nm1 = ["","","","b","d","g","h","k","n","r","sh","t","z"];
var nm2 = ["a","e","i","u"];
var nm3 = ["gz","l","l","lr","lz","lk","n","n","nk","nz","nsh","r","r","rr","rsh","rsk","rzk","s","sh","shk","ss","ss","t","t","z","z","zk"];
var nm4 = ["g","k","n","r","sh","t","z"];
var nm5 = ["","","g","m","k","r","sh","shk"];

var br = "";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		nameMas();
		while(nMs === ""){
			nameMas();
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
	nTp = Math.random() * 3 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm2.length | 0;
	rnd7 = Math.random() * nm5.length | 0;
	if(nTp < 2){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm5[rnd7];
	}else{
		rnd5 = Math.random() * nm4.length | 0;
		rnd6 = Math.random() * nm2.length | 0;
		while(nm4[rnd5] === nm3[rnd3]){
			rnd5 = Math.random() * nm4.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + nm2[rnd6] + nm5[rnd7];
	}
	testSwear(nMs);
}