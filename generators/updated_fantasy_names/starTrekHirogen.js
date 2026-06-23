var nm1 = ["b","c","d","g","j","k","n","r","t","v","z"];
var nm2 = ["a","i","o","u","a","i","o","u","e"];
var nm3 = ["d","dr","g","gr","k","l","m","n","r","rd","rv","v","vr","z"];
var nm4 = ["a","i","a","i","e","o","u"];
var nm5 = ["c","d","g","j","k","n","nj","r","rr","z"];
var nm6 = ["dj","dd","hd","hk","nj","rr","rd","rk","rt","zd","zk"];

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
	nTp = Math.random() * 5 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	if(nTp < 2){
		rnd3 = Math.random() * nm6.length | 0;
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd3];
	}else{
		rnd5 = Math.random() * nm5.length | 0;
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm4.length | 0;
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
	}
	while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm5[rnd5]){
		rnd3 = Math.random() * nm3.length | 0;
	}
	nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
	testSwear(nMs);
}