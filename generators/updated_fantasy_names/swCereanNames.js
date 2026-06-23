var nm1 = ["","","","","","b","bl","c","ch","d","f","g","h","j","k","kr","l","m","n","p","r","s","sh","sk","t","tch","v","w","z"];
var nm2 = ["a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u","y","ee","au","ii","ia","ay","oo"];
var nm3 = ["b","c","d","fl","gg","l","m","n","nd","nm","nt","r","rd","rdr","rf","rfl","rr","rv","st","t","v","w"];
var nm4 = ["","","","","","","","","c","ck","d","dd","ff","h","j","k","l","m","n","nn","nz","r","rr","rs","s","th"];

var nm5 = ["","","","","b","br","dr","h","j","k","m","n","r","rh","s","sh","t","th","tw","z"];
var nm6 = ["a","e","i","y","a","e","i","y","a","e","i","y","a","e","i","y","a","e","i","y","a","e","i","y","o","o","ia","ea","oe","oa"];
var nm7 = ["ch","d","dh","f","fv","h","l","lr","ln","lv","m","n","r","s","sh","sch","v","w","z"];
var nm8 = ["","","","","d","h","lm","ln","lvn","m","mn","n","s","sh","th"];

var nm9 = ["","","","","","b","c","chr","cr","f","g","k","l","m","n","r","s","t","z"];
var nm10 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ei","ie","yu","yi","yy"];
var nm11 = ["d","l","ll","ltr","m","mk","mm","n","nc","nd","nn","r","rr","rs","s","thv"];
var nm12 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","au","ao","ua","iu"];
var nm13 = ["","","","d","ft","hn","k","l","m","n","r","rr","s","t","x"];

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
	nTp = Math.random() * 3 | 0;
	nLt = Math.random() * 2 | 0;
	if(nTp === 0){
		if(nLt === 0){
			nameMasShrt();
			while(nMt === ""){
				nameMasShrt();
			}
			nMs = nMt;
		}else{
			nameMasLong();
			while(nMt === ""){
				nameMasLong();
			}
			nMs = nMt;
		}
	}else if(nTp === 1){
		nLtt = Math.random() * 2 | 0;
		if(nLt === 0){
			nameMasShrt();
			while(nMt === ""){
				nameMasShrt();
			}
		}else{
			nameMasLong();
			while(nMt === ""){
				nameMasLong();
			}
		}
		nMs = nMt;
		if(nLtt === 0){
			nameMasShrt();
			while(nMt === ""){
				nameMasShrt();
			}
		}else{
			nameMasLong();
			while(nMt === ""){
				nameMasLong();
			}
		}
		nMt = nMt.substring(0,1).toUpperCase() + nMt.substring(1);
		nMs = nMs + "-" + nMt;
	}else{
		nLtt = Math.random() * 2 | 0;
		nLttt = Math.random() * 2 | 0;
		if(nLt === 0){
			nameMasShrt();
			while(nMt === ""){
				nameMasShrt();
			}
		}else{
			nameMasLong();
			while(nMt === ""){
				nameMasLong();
			}
		}
		nMs = nMt;
		if(nLtt === 0){
			nameMasShrt();
			while(nMt === ""){
				nameMasShrt();
			}
		}else{
			nameMasLong();
			while(nMt === ""){
				nameMasLong();
			}
		}
		nMt = nMt.substring(0,1).toUpperCase() + nMt.substring(1);
		nMs = nMs + "-" + nMt;
		if(nLttt === 0){
			nameMasShrt();
			while(nMt === ""){
				nameMasShrt();
			}
		}else{
			nameMasLong();
			while(nMt === ""){
				nameMasLong();
			}
		}
		nMt = nMt.substring(0,1).toUpperCase() + nMt.substring(1);
		nMs = nMs + "-" + nMt;
	}
}
function nameMasShrt(){
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm4.length | 0;
	while(nm1[rnd] === ""){
		rnd = Math.random() * nm1.length | 0;
	}
	while(nm4[rnd3] === nm1[rnd]){
		rnd3 = Math.random() * nm4.length | 0;
	}
	nMt = nm1[rnd] + nm2[rnd2] + nm4[rnd3];
	testSwear(nMt);
}
function nameMasLong(){
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm4.length | 0;
	rnd4 = Math.random() * nm2.length | 0;
	rnd5 = Math.random() * nm3.length | 0;
	while(nm4[rnd3] === nm3[rnd5] || nm1[rnd] === nm3[rnd5]){
		rnd5 = Math.random() * nm3.length | 0;
	}
	nMt = nm1[rnd] + nm2[rnd2] + nm3[rnd5] + nm2[rnd4] + nm4[rnd3];
	testSwear(nMt);
}

function nameFem(){
	rnd = Math.random() * nm5.length | 0;
	rnd2 = Math.random() * nm6.length | 0;
	rnd3 = Math.random() * nm8.length | 0;
	if(i < 4){
		while(nm5[rnd] === ""){
			rnd = Math.random() * nm5.length | 0;
		}
		while(nm5[rnd] === nm8[rnd3]){
			rnd3 = Math.random() * nm8.length | 0;
		}
		nMs = nm5[rnd] + nm6[rnd2] + nm8[rnd3];
	}else{
		rnd5 = Math.random() * nm6.length | 0;
		if(i < 7){
			rnd4 = Math.random() * nm7.length | 0;
			while(nm5[rnd] === nm7[rnd4] || nm7[rnd4] === nm8[rnd3]){
				rnd4 = Math.random() * nm7.length | 0;
			}
			nMs = nm5[rnd] + nm6[rnd2] + nm7[rnd4] + nm6[rnd5] + nm8[rnd3];
		}else{
			rnd3 = Math.random() * nm7.length | 0;
			rnd6 = Math.random() * nm6.length | 0;
			while(nm5[rnd] === nm7[rnd4] || nm7[rnd4] === nm7[rnd3]){
				rnd3 = Math.random() * nm7.length | 0;
			}
			nMs = nm5[rnd] + nm6[rnd2] + nm7[rnd4] + nm6[rnd5] + nm7[rnd3] + nm6[rnd6];
		}
	}
	testSwear(nMs);
}

function nameSur(){
	sTp = Math.random() * 5 | 0;
	rnd = Math.random() * nm9.length | 0;
	rnd2 = Math.random() * nm10.length | 0;
	rnd3 = Math.random() * nm13.length | 0;
	if(sTp < 2){
		while(nm13[rnd3] === nm9[rnd] || nm9[rnd] === ""){
			rnd = Math.random() * nm9.length | 0;
		}
		nSr = nm9[rnd] + nm10[rnd2] + nm13[rnd3];
	}else{
		rnd4 = Math.random() * nm11.length | 0;
		rnd5 = Math.random() * nm10.length | 0;
		while(nm9[rnd] === nm11[rnd4] || nm11[rnd4] === nm13[rnd3]){
			rnd4 = Math.random() * nm11.length | 0;
		}
		if(sTp < 4){
			nSr = nm9[rnd] + nm10[rnd2] + nm11[rnd4] + nm10[rnd5] + nm13[rnd3];
		}else{
			rnd6 = Math.random() * nm11.length | 0;
			rnd7 = Math.random() * nm10.length | 0;
			while(nm11[rnd6] === nm11[rnd4] || nm11[rnd6] === nm13[rnd3]){
				rnd6 = Math.random() * nm11.length | 0;
			}
			nSr = nm9[rnd] + nm10[rnd2] + nm11[rnd4] + nm10[rnd5] + nm11[rnd6] + nm10[rnd7] + nm13[rnd3];
		}
	}
	testSwear(nSr);
}