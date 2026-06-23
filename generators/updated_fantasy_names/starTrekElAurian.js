var nm1 = ["d","g","h","m","n","p","t","v","z"];
var nm2 = ["a","e","o","a","e","o","a","e","o","i","u"];
var nm3 = ["br","dr","dt","g","gt","gr","k","kt","kl","kr","l","ll","lr","lk","ln","lt","r","rc","rk","rt","st","t","tr","tt","ts","v","vr","z","zr","zk"];
var nm4 = ["ia","ie","iu","ea","ei","i","i","u","u","a","o","i","i","u","u","a","o","i","i","u","u","a","o","i","i","u","u","a","o","i","i","u","u","a","o","i","i","u","u","a","o","i","i","u","u","a","o","i","i","u","u","a","o"];
var nm5 = ["d","l","m","n","s","t","n","m","s","l"];

var nm6 = ["c","d","f","g","l","m","n","r","v","t"];
var nm7 = ["ui","ea","ei","ia","ie","oa","eo","io","a","e","i","o","u"];
var nm8 = ["d","dr","dn","l","ldr","lm","lr","ll","m","mr","mn","n","nd","ndr","r","rl","rm","tn","tr","th"];
var nm9 = ["a","a","a","e","o","i"];
var nm10 = ["","","","","","","","d","l","m","n","s","t","th"];

var nm11 = ["","","d","g","h","l","m","n","s","v","z"];
var nm12 = ["a","e","i","o","u","a","o","u","a","o","u"];
var nm13 = ["d","h","l","m","n","r","s","v","z"];
var nm14 = ["d","h","l","m","n","r","t"];

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
		nameLast();
		while(nLs === ""){
			nameLast();
		}
		nMs = nMs + " " + nLs;
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
	rnd5 = Math.random() * nm5.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm5[rnd5]){
		rnd3 = Math.random() * nm3.length | 0;
	}
	nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm6.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm8.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	while(nm8[rnd3] === nm6[rnd] || nm8[rnd3] === nm10[rnd5]){
		rnd3 = Math.random() * nm8.length | 0;
	}
	nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd5];
	testSwear(nMs);
}

function nameLast(){
	rnd = Math.random() * nm11.length | 0;
	rnd2 = Math.random() * nm12.length | 0;
	rnd3 = Math.random() * nm13.length | 0;
	rnd4 = Math.random() * nm12.length | 0;
	rnd5 = Math.random() * nm14.length | 0;
	while(nm13[rnd3] === nm11[rnd] || nm13[rnd3] === nm14[rnd5]){
		rnd3 = Math.random() * nm13.length | 0;
	}
	nLs = nm11[rnd] + nm12[rnd2] + nm13[rnd3] + nm12[rnd4] + nm14[rnd5];
	testSwear(nMs);
}
