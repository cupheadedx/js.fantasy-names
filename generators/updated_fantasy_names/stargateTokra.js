var nm1 = ["","","","","","c","d","g","j","k","kh","l","m","p","r","s","t","th","z"];
var nm2 = ["a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","ay","ai","ia","aa","ee"];
var nm3 = ["'d","'l","'r","'s","c","ck","d","g","g'r","gn","kn","k'n","k'r","l","ld","ldw","lg","ll","lm","lr","n","n'","n'g","ng","ns","nt","p","pr","ph","r","rd","rn","rr","r's","rsh","rt","s","ss","st","sl","sn"];
var nm4 = ["a","e","i","o","u"];
var nm5 = ["d","h","l","m","n","r","s","sh","st","t","v","z"];
var nm6 = ["","","","","","c","f","k","l","m","n","p","r","s","sh","w"];

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
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	rnd4 = Math.random() * nm3.length | 0;
	rnd5 = Math.random() * nm4.length | 0;
	if(nTp < 4){
		while(nm1[rnd] === "" && nm6[rnd3] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm6[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		if(nTp === 2){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
		}else{
			nMs = nm1[rnd] + nm4[rnd5] + nm3[rnd4] + nm2[rnd2] + nm6[rnd3];
		}
	}else{
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm4.length | 0;
		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm5[rnd6]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		if(nTp === 4){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm4[rnd7] + nm6[rnd3];
		}else{
			nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd6] + nm4[rnd7] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
		}
	}
	testSwear(nMs);
}