var nm1 = ["","","b","c","d","g","j","k","l","m","n","p","r","s","sh","t","th","v","x","x","x","x","x","x","z"];
var nm2 = ["a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","ae"];
var nm3 = ["br","bx","d","dr","l","l'vr","l'x","l'z","ll","lm","lsh","lth","lzz","m'r","mbr","mdr","mr","nd","ndr","r","r'x","rb","rd","rl","rph","rr","rx","sr","st","str","svr","th","th'","thr","v","vr","xx","z","zr","zz"];
var nm4 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","iu","ae","ei","ia"];
var nm5 = ["d","g","k","l","ll","n","r","rr","th","v","x","xx","z","zz"];
var nm6 = ["","","c","k","l","m","n","r","rr","s","sc","x","xx","l","m","n","r","s","x","s","x"];

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
	nTp = Math.random() * 4 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	while(nm1[rnd] === nm6[rnd5]){
		rnd = Math.random() * nm1.length | 0;
	}
	if(nTp < 2){
		while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm6[rnd5]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
	}else{
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm2.length | 0;
		while(nm5[rnd6] === nm3[rnd3] || nm5[rnd6] === nm6[rnd5]){
			rnd6 = Math.random() * nm5.length | 0;
		}
		if(nTp === 2){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd7] + nm5[rnd6] + nm4[rnd4] + nm6[rnd5];
		}else{
			nMs = nm1[rnd] + nm2[rnd7] + nm5[rnd6] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
		}
	}
	testSwear(nMs);
}