var nm1 = ["b","d","g","h","k","n","r","v","w","y","z"];
var nm2 = ["ee","e","o","e","o","i","e","o","e","o","i"];
var nm3 = ["d","dr","g","gn","gr","l","lg","ld","lr","lgr","ln","nd","ng","ndr","r","rg","rl","v","vr","vl","y","z"];
var nm4 = ["a","o","u","a","o","u","a","o","u","a","o","u","aa","oo","au","ou"];
var nm5 = ["d","n","s","t","th"];

var nm6 = ["c","g","h","k","l","m","n","r","t","v","z"];
var nm7 = ["aa","au","ou","o","e","i","e","i","e","i","a","o","e","i","e","i","e","i","a"];
var nm8 = ["d","h","l","m","n","r","v","w","z"];
var nm9 = ["a","i","a","i","e"];
var nm10 = ["h","l","n","r","v","z"];
var nm11 = ["h","n","s","th"];


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
	nTp = Math.random() * 6 | 0
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm8.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm11.length | 0;
	if(nTp < 4){
		while(nm8[rnd3] === nm6[rnd] || nm8[rnd3] === nm11[rnd5]){
			rnd3 = Math.random() * nm8.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm11[rnd5];
	}else{
		rnd6 = Math.random() * nm9.length | 0;
		rnd7 = Math.random() * nm10.length | 0;
		while(nm8[rnd3] === nm6[rnd] || nm8[rnd3] === nm11[rnd5]){
			rnd3 = Math.random() * nm8.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd7] + nm9[rnd6] + nm11[rnd5];
	}
	testSwear(nMs);
}
