var nm1 = ["","","","g","h","j","k","kr","m","n","s","sk","skr","v","z"];
var nm2 = ["au","aa","ou","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u"];
var nm3 = ["'g","gz","g'z","gr","'k","k","kr","k'm","k'z","k'kr","k'r","kk","kz","'l","l","lk","ln","m","mm","mn","m'k","m'r","r","r'k","rl","rm","r'sh","rt","rv","rz","s","sh","s't","s'z","'t","t","th","'z","zg","zk","zt"];
var nm4 = ["a","i","o","a","i","o","a","i","o"];
var nm5 = ["l","n","r","t","v","x","z"];
var nm6 = ["ae","aa","uu","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm7 = ["l","n","nn","s","sh","th","x","xx","z"];

var br = "";

function nameGen(){
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
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm7.length | 0;
	while(rnd2 < 4 && rnd4 < 4){
		rnd2 = Math.random() * nm2.length | 0;
	}
	if(nTp < 4){
		while(nm1[rnd] === nm3[rnd3] || nm3[rnd3] === nm7[rnd5]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm7[rnd5];
	}else{
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm6.length | 0;
		while(nm5[rnd6] === nm3[rnd3] || nm5[rnd6] === nm7[rnd5]){
			rnd6 = Math.random() * nm5.length | 0;
			while(rnd6 > 6 && rnd3 > 7){
				rnd6 = Math.random() * nm5.length | 0;
			}
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd6] + nm6[rnd7] + nm7[rnd5];
	}
	testSwear(nMs);
}