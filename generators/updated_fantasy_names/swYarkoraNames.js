var nm1 = ["b","br","ch","d","dr","g","gr","h","s","sh","sch","t","th","v","vr","vh","w","wh"];
var nm2 = ["a","u","y","a","u","y","a","u","y","i","i","e","e","ei","ee","ae"];
var nm3 = ["b","d","g","l","ll","m","n","r","s","v","z"];
var nm4 = ["a","e","a","e","a","e","a","e","a","e","a","e","i","i","i","ie","ae","ee"];
var nm5 = ["","","","","","d","l","lk","ll","ld","m","n","nd","r","rd","rk"];

var nm6 = ["c","ch","f","h","l","m","n","rh","s","sh","t","th","z","zh"];
var nm7 = ["e","e","e","e","i","i","a","a"];
var nm8 = ["d","f","g","l","m","n","r","s","v","z"];
var nm9 = ["a","i","e","a","i","e","y"];
var nm10 = ["","","","c","d","l","m","n","s","t","th"];

var nm11 = ["c","ch","d","dh","f","h","l","m","n","s","t","th","v","z","zh"];
var nm12 = ["e","i","e","i","a"];
var nm13 = ["c","d","g","k","l","ll","m","n","r","s","v","z"];
var nm14 = ["a","a","e","i"];
var nm15 = ["","","","","","ch","d","l","m","n","s","sh","t","th","tch"];

var br = "";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		nameSur();
		while(nSr === ""){
			nameSur();
		}
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
		names = nMs + " " + nSr;
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
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm5.length | 0;
	if(i < 3){
		while(nm5[rnd3] === nm1[rnd]){
			rnd3 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		if(i < 6){
			while(nm3[rnd4] === nm5[rnd3] || nm3[rnd4] === nm1[rnd]){
				rnd4 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd3];
		}else{
			rnd6 = Math.random() * nm1.length | 0;
			rnd7 = Math.random() * nm2.length | 0;
			rnd8 = Math.random() * nm3.length | 0;
			rnd9 = Math.random() * nm4.length | 0;
			rnd10 = Math.random() * nm5.length | 0;
			while(nm3[rnd8] === nm5[rnd10] || nm3[rnd8] === nm1[rnd6]){
				rnd8 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd3] + "-" + nm1[rnd6] + nm2[rnd7] + nm3[rnd8] + nm4[rnd9] + nm5[rnd10];
		}
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm8.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	while(nm6[rnd] === nm8[rnd3] || nm8[rnd3] === nm10[rnd5]){
		rnd3 = Math.random() * nm8.length | 0;
	}
	nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd5];
	testSwear(nMs);
}

function nameSur(){
	rnd = Math.random() * nm11.length | 0;
	rnd2 = Math.random() * nm12.length | 0;
	rnd3 = Math.random() * nm13.length | 0;
	rnd4 = Math.random() * nm14.length | 0;
	rnd5 = Math.random() * nm15.length | 0;
	while(nm11[rnd] === nm13[rnd3] || nm13[rnd3] === nm15[rnd5]){
		rnd3 = Math.random() * nm13.length | 0;
	}
	nSr = nm11[rnd] + nm12[rnd2] + nm13[rnd3] + nm14[rnd4] + nm15[rnd5];
	testSwear(nSr);
}