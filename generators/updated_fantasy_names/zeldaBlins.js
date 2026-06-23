var nm1 = ["b","d","g","h","l","m","n","r","v","z"];
var nm2 = ["a","o","u","a","o","u"];
var nm3 = ["b","d","g","l","m","n","r"];
var nm4 = ["d","h","l","m","n","r","v","z"];
var nm5 = ["d","l","n","r","v","y","z"];

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
		if(i < 5){
			nMs = nMs + "blin";
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
	if(i < 5){
		rnd3 = Math.random() * nm3.length | 0;
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3];
	}else{
		rnd3 = Math.random() * nm2.length | 0;
		rnd4 = Math.random() * nm4.length | 0;
		rnd5 = Math.random() * nm2.length | 0;
		rnd6 = Math.random() * nm5.length | 0;
		nMs = nm1[rnd] + nm2[rnd3] + nm4[rnd4] + nm2[rnd5] + nm5[rnd6] + nm2[rnd2];
	}
	testSwear(nMs);
}