var nm1 = ["","b","br","d","g","k","m","n","s","y"];
var nm2 = ["Ã³","Ã¶","o","e","i","a","u"];
var nm3 = ["b","c","dd","dg","kt","l","ld","lf","lt","lw","m","mr","r","rg","rl","rth","st","z"];
var nm4 = ["a","i","Ã®","Ã¶","o","u","Ã¼"];
var nm5 = ["","","Ã§","ch","d","g","k","l","n","nd","ng","r","rth","st","z"];

var nm6 = ["","","d","g","k","m","n","r","t","v","y","z"];
var nm7 = ["a","u","Ã®","i","a","u","Ã®","i","e","o"];
var nm8 = ["g","gk","l","lk","n","r","rk","t","z"];
var nm9 = ["a","e","i","u"];
var nm10 = ["","","l","n","g","ge","ke","le","n","ne","z"];

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

function nameMas(){;
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
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd3 = Math.random() * nm8.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	while(nm8[rnd3] === nm6[rnd] || nm8[rnd3] === nm10[rnd5]){
		rnd3 = Math.random() * nm8.length | 0;
	}
	nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd5];
	testSwear(nMs);
}
