var nm1 = ["ch","d","f","g","k","kr","m","n","p","q","r","v","z"];
var nm2 = ["a","e","o","u"];
var nm3 = ["d","dd","dh","h","hl","k","kh","kn","l","ld","lm","ln","m","n","nd","r","y","z","zz"];
var nm4 = ["d","g","k","n","r","v","yd","z"];

var nm5 = ["c","ch","d","dr","f","g","k","kl","l","m","n","q","s","sh","shr","w"];
var nm6 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ii","ia","ey","ui","oo"];
var nm7 = ["ch","cl","cm","cn","g","k","l","lc","m","n","ntr","r","rc","rk","rsk","rt","s","ss","sth","t","th","v","y"];
var nm8 = ["a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u","y","ei","ea","ae","ee","ii"];
var nm9 = ["","","","","k","l","m","n","r","s","ts"];

var nm10 = ["b","d","f","k","l","p","r","s","t","th"];
var nm11 = ["e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","ie","ia"];
var nm12 = ["h","h","l","l","ln","m","m","md","nd","ndr","nt","r","r","rr","rt","s","s","ss","sd","st","tt","v","v","w","w"];
var nm13 = ["e","o","u","e","o","u","e","o","u","e","o","u","ya","oo"];
var nm14 = ["","","","","","d","k","l","m","n","r","rr","s"];

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
	rnd3 = Math.random() * nm4.length | 0;
	while(nm4[rnd3] === nm1[rnd]){
		rnd3 = Math.random() * nm4.length | 0;
	}
	if(i < 5){
		nMs = nm1[rnd] + nm2[rnd2] + nm4[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm2.length | 0;
		while(nm1[rnd] === nm3[rnd4] || nm3[rnd4] === nm4[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm2[rnd5] + nm4[rnd3];
	}
	testSwear(nMs);
}
function nameFem(){
	rnd = Math.random() * nm5.length | 0;
	rnd2 = Math.random() * nm6.length | 0;
	rnd3 = Math.random() * nm9.length | 0;
	while(nm9[rnd3] === nm5[rnd]){
		rnd3 = Math.random() * nm9.length | 0;
	}
	if(i < 3){
		nMs = nm5[rnd] + nm6[rnd2] + nm9[rnd3];
	}else{
		rnd4 = Math.random() * nm7.length | 0;
		rnd5 = Math.random() * nm8.length | 0;
		while(nm5[rnd] === nm7[rnd4] || nm7[rnd4] === nm9[rnd3]){
			rnd4 = Math.random() * nm7.length | 0;
		}
		if(i < 7){
			nMs = nm5[rnd] + nm6[rnd2] + nm7[rnd4] + nm8[rnd5] + nm9[rnd3];
		}else{
			rnd6 = Math.random() * nm7.length | 0;
			rnd7 = Math.random() * nm8.length | 0;
			while(nm7[rnd6] === nm7[rnd4] || nm7[rnd6] === nm9[rnd3]){
				rnd6 = Math.random() * nm7.length | 0;
			}
			nMs = nm5[rnd] + nm6[rnd2] + nm7[rnd4] + nm8[rnd5] + nm7[rnd6] + nm8[rnd7] + nm9[rnd3];
		}
	}
	testSwear(nMs);
}
function nameSur(){
	sTp = Math.random() * 3 | 0;
	rnd = Math.random() * nm10.length | 0;
	rnd2 = Math.random() * nm11.length | 0;
	rnd3 = Math.random() * nm14.length | 0;
	while(nm14[rnd3] === nm10[rnd]){
		rnd3 = Math.random() * nm14.length | 0;
	}
	if(sTp === 0){
		nSr = nm10[rnd] + nm11[rnd2] + nm14[rnd3];
	}else{
		rnd4 = Math.random() * nm12.length | 0;
		rnd5 = Math.random() * nm13.length | 0;
		while(nm10[rnd] === nm12[rnd4] || nm12[rnd4] === nm14[rnd3]){
			rnd4 = Math.random() * nm12.length | 0;
		}
		if(sTp === 1){
			nSr = nm10[rnd] + nm11[rnd2] + nm12[rnd4] + nm13[rnd5] + nm14[rnd3];
		}else{
			rnd6 = Math.random() * nm12.length | 0;
			rnd7 = Math.random() * nm13.length | 0;
			while(nm12[rnd6] === nm12[rnd4] || nm12[rnd6] === nm14[rnd3]){
				rnd6 = Math.random() * nm12.length | 0;
			}
			nSr = nm10[rnd] + nm11[rnd2] + nm12[rnd4] + nm13[rnd5] + nm12[rnd6] + nm13[rnd7] + nm14[rnd3];
		}
	}
	testSwear(nSr);
}