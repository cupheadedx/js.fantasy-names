var nm1 = ["","","","","","","br","c","d","g","gl","h","jh","m","n","r","s","v","z"];
var nm2 = ["a","e","i","u","y","a","e","i","u","y","a","e","i","u","y","a","e","i","u","y","a","e","i","u","a","e","i","u","a","e","i","u","oo","ai","ya"];
var nm3 = ["b","br","d","dr","gn","gm","gr","hr","hrl","k","l","lr","lw","m","mr","n","nd","ng","ngr","ns","nstr","ph","r","str","st","tr","ttr","ttw","vh","zr","zzr"];
var nm4 = ["a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","a","i","i","ai","ia"];
var nm5 = ["c","d","f","l","n","r","s","ss","v"];
var nm6 = ["","","","","","","","","","h","l","n","s","th"];

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
	nTp = Math.random() * 2 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm6[rnd5]){
		rnd3 = Math.random() * nm3.length | 0;
	}
	if(nTp === 0){
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm4.length | 0;
		while(nm5[rnd6] === nm3[rnd3]){
			rnd6 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd6] + nm4[rnd7] + nm6[rnd5];
	}else{
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
	}
	testSwear(nMs);
}