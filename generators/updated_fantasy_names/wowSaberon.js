var nm1 = ["","","","c","cr","g","gr","h","j","k","kr","l","n","p","r","s","v","z"];
var nm2 = ["a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","eo","ee"];
var nm3 = ["d","dr","g","gr","h","k","kr","krr","ld","lg","ll","lsh","lth","nd","nth","r","s","sr","sh","th","thr","z","zr"];
var nm4 = ["a","e","i","o","a","o"];
var nm5 = ["g","h","l","ll","r","rr","sh"];
var nm6 = ["","","","","","","jh","l","ll","r","rr","s","sh","l","ll","r","rr","s","sh"];

var nm7 = ["anger","bitter","blind","blood","bold","bone","broken","claw","cold","cruel","cut","danger","dead","death","drift","eye","false","fast","fierce","free","full","fury","gloom","gold","grand","grave","grim","hollow","keen","light","lone","long","mad","odd","pale","prime","quick","rapid","rash","razor","red","rip","shade","shadow","sharp","silent","smooth","smug","sorrow","soul","stark","sun","swift","talon","vex","vice","wicked","wild"];
var nm8 = ["bite","biter","breaker","bristle","carver","chew","claw","cleaver","cracker","crown","crunch","crusher","fang","fur","gasher","gnaw","hook","mane","munch","paw","piercer","ridge","shredder","slasher","slicer","smasher","splitter","talon","tearer","tooth"];

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
		rnd = Math.random() * nm7.length | 0;
		rnd2 = Math.random() * nm8.length | 0;
		while(nm7[rnd] === nm8[rnd2]){
			rnd = Math.random() * nm7.length | 0;
		}
		nMs = nMs + " " + nm7[rnd] + nm8[rnd2];
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
	rnd5 = Math.random() * nm6.length | 0;
	if(nTp < 2){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm1[rnd] === nm6[rnd5] || nm6[rnd5] === ""){
			rnd5 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd5];
	}else{
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm4.length | 0;
		while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm6[rnd5]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		if(nTp < 4){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm4.length | 0;
			if(nTp === 4){
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd6] + nm4[rnd7] + nm6[rnd5];
			}else{
				nMs = nm1[rnd] + nm4[rnd4] + nm5[rnd6] + nm4[rnd7] + nm3[rnd3] + nm2[rnd2] + nm6[rnd5];
			}
		}
	}
	testSwear(nMs);
}