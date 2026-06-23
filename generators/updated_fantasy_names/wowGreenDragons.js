var nm1 = ["","","","c","h","l","m","n","r","s","t","th","v","y","z"];
var nm2 = ["a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","ae","ei","ea"];
var nm3 = ["d","n","r","s","ss","t","th","v","z"];
var nm4 = ["a","e","o"];
var nm5 = ["c","k","n","r","t","v","z"];
var nm6 = ["","us","us","ius","us","us","ius"];

var nm7 = ["f","h","l","m","n","ph","r","rh","th","v","w"];
var nm8 = ["a","e","i","y"];
var nm9 = ["l","ls","ld","lm","m","ms","n","ns","nd","r","rd","s","ss","sh","th","ths","v","z","zh"];
var nm10 = ["e","i","o","y"];
var nm11 = ["dr","l","ll","lr","ndr","r","r","r","r","r","rr","s","sr","thr"];
var nm12 = ["a","a","a","a","a","a","e","e","a","a","a","a","a","a","e","e","in","ys","is","iss","yn"];

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
			rnd6 = Math.random() * nm12.length | 0;
			nMs = nMs + nm12[rnd6];
		}else{
			nameMas();
			while(nMs === ""){
				nameMas();
			}
			rnd6 = Math.random() * nm6.length | 0;
			nMs = nMs + nm6[rnd6];
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
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm5.length | 0;
	while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm5[rnd5]){
		rnd3 = Math.random() * nm3.length | 0;
	}
	nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm9.length | 0;
	rnd4 = Math.random() * nm10.length | 0;
	rnd5 = Math.random() * nm11.length | 0;
	while(nm9[rnd3] === nm7[rnd] || nm9[rnd3] === nm11[rnd5]){
		rnd3 = Math.random() * nm9.length | 0;
	}
	nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4] + nm11[rnd5];
	testSwear(nMs);
}