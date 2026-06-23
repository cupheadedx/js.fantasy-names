var nm1 = ["","","","","b","br","d","dr","g","j","k","m","r","s","t","th","tr","v","x","z"];
var nm2 = ["a","e","i","o","u","a","a","o","o"];
var nm3 = ["g","g'dr","g'th","gdr","gg","gl","gm","gr","gth","k","l'g","lg","lgr","llm","lm","lr","lv","n","ngr","nn","r","r'","r'g","rg","rgr","rk","rn","rr","rthr","rz","str","th't","z","z'g","zg","zr","zz"];
var nm4 = ["a","e","i","o","u","a","a","o","o","a","e","i","o","u","a","a","o","o","a","e","i","o","u","a","a","o","o","a","e","i","o","u","a","a","o","o","a","e","i","o","u","a","a","o","o","iu","uu","au","aa"];
var nm5 = ["d","k","l","ll","m","m","m","n","n","n","nn","r","r","r","th","x","z"];
var nm6 = ["ch","d","g","k","l","n","n","n","n","n","r","s","th","th","th","th","th","z"];

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
	rnd3 = Math.random() * nm6.length | 0;
	rnd4 = Math.random() * nm3.length | 0;
	rnd5 = Math.random() * nm4.length | 0;
	while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm6[rnd3]){
		rnd4 = Math.random() * nm3.length | 0;
	}
	if(nTp === 0){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
	}else{
		rnd6 = Math.random() * nm2.length | 0;
		rnd7 = Math.random() * nm5.length | 0;
		while(nm5[rnd7] === nm3[rnd4] || nm5[rnd7] === nm6[rnd3]){
			rnd7 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm2[rnd6] + nm5[rnd7] + nm4[rnd5] + nm6[rnd3];
	}
	testSwear(nMs);
}