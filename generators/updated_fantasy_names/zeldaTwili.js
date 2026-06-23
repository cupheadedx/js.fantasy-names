var nm1 = ["c","d","g","k","n","r","t","v","z"];
var nm2 = ["au","aa","a","a","a","o","u","e","a","a","a","o","u","e"];
var nm3 = ["dt","gt","ld","lg","lk","lt","lc","nt","nd","ng","nk","rd","rk","rg","rc","rt","rn","rm"];

var nm4 = ["","","c","h","g","l","m","n","r","s","v","y","z"];
var nm5 = ["i","i","e","e","a","a","o"];
var nm6 = ["dn","dh","dm","gn","gz","gz","gr","kn","kr","kl","km","ln","lm","lg","lv","lz","lr","nd","ng","nr","nv","nz","mn","mr","mz","rn","rv","rl","rz","rd","rg","vr","vn","vl","vz","zr","zl","zn","zm","zg"];
var nm7 = ["a","a","a","a","a","i","u","e"];

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
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3];
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm4.length | 0;
	rnd2 = Math.random() * nm5.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	rnd4 = Math.random() * nm7.length | 0;
	nMs = nm4[rnd] + nm5[rnd2] + nm6[rnd3] + nm7[rnd4];
	testSwear(nMs);
}