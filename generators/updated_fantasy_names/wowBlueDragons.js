var nm1 = ["","","","","","b","c","j","k","l","m","n","r","s","t","v","z"];
var nm2 = ["a","e","i","u","a","e","i","u","a","a","a","y"];
var nm3 = ["d","dc","dr","g","gr","gd","l","lg","ld","lgr","ln","lm","ldr","lr","lv","n","nd","ng","nr","nv","r","rb","rg","rv","rz","rc","rr","sc","v","z","zc","zg"];
var nm4 = ["a","e","i","u","y"];
var nm5 = ["cg","cg","dg","g","g","g","g","g","g","g","g","g","g","g","lg","ng","r","rg"];
var nm6 = ["os","os","os","os","os","os","os","os","os","os","os","os","on"];

var nm7 = ["","","","","c","h","k","kh","l","m","p","r","s","t","v"];
var nm8 = ["a","e","i","u","a","e","i","u","a","e","i","u","y","y","ya"];
var nm9 = ["d","dr","g","gn","gl","l","ll","lm","ln","lr","lv","lz","ld","lb","lbr","ldr","n","nd","ng","ngr","ndr","nv","nm","nz","r","rl","rn","rd","rdr","rg","rgr","rv","rz","rm","sl","sn","sm","vl","vn","vr","zl","zn"];
var nm10 = ["a","e","i","a","e","i","a","e","i","a","e","i","y","ee","ie","ei"];
var nm11 = ["cg","g","g","g","g","g","g","g","g","g","lg","ng","r","sg"];
var nm12 = ["a","osa","osa","osa","osa","osa","osa","osa","osa","osa"];

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