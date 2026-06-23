var nm1 = ["","","","","d","dr","g","gr","k","m","n","p","r","t","tr","z"];
var nm2 = ["a","e","i","o","y","a","e","i","o","y","a","e","i","o","y","a","e","i","o","a","e","i","o","ia","au","ai"];
var nm3 = ["d","d","dd","g","g","gg","k","k","kk","l","l","m","m","n","n","nn","r","r","rr","t","t","z","z","zz","d","d","dd","g","g","gg","k","k","kk","l","l","m","m","n","n","nn","r","r","rr","t","t","z","z","zz","dg","gd","ld","lg","lm","ln","lz","md","mn","nd","ng","nm","nz","rd","rg","rz","zd","zg"];
var nm4 = ["a","e","i","o","u"];
var nm5 = ["d","l","m","n","r","z"];
var nm6 = ["dormu","domu","dormu","domu","dormu","domu","dormu","domu","nos","rius","rion","zion"];

var nm7 = ["","","","c","chr","d","dr","g","gr","k","kr","m","n","s","t","v","z"];
var nm8 = ["a","i","o","u","a","i","o","u","a","i","o","u","a","i","o","u","a","i","o","u","a","i","o","u","a","i","o","u","ai","ia","au","aa"];
var nm9 = ["d","dr","g","gd","gn","l","lr","ln","ld","n","nd","nr","pr","r","rd","rm","sn","sl","z","zn"];
var nm10 = ["a","i","o"];
var nm11 = ["dormi","dormi","dormi","rmi","rmi","rmi","rimi","rmu"];

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
			rnd6 = Math.random() * nm11.length | 0;
			nMs = nMs + nm11[rnd6];
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
	if(i < 4){
		nMs = nm7[rnd] + nm8[rnd2];
	}else{
		rnd3 = Math.random() * nm9.length | 0;
		rnd4 = Math.random() * nm10.length | 0;
		while(nm9[rnd3] === nm7[rnd]){
			rnd3 = Math.random() * nm9.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4];
	}
	testSwear(nMs);
}