var nm1 = ["","","c","d","dj","f","g","h","l","m","n","q","r","t","tj","v"];
var nm2 = ["ey","uu","ua","y","a","e","i","o","u","a","e","i","o","u","y","a","e","i","o","u","a","e","i","o","u"];
var nm3 = ["d","g","l","m","n","r","s","d","dh","g","gh","l","m","mh","md","n","nd","nh","nr","ng","r","rd","rg","rh","s","sn","ss","sd","st"];
var nm4 = ["au","uu","ia","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm5 = ["d","g","l","m","r","d","g","l","m","r","d","dd","dh","g","gg","l","lm","ld","m","nd","r","rd","rdh","rg","rh","rr","sc","sd","st","sh","tt","th"];
var nm6 = ["","","l","m","n","nd","nt","r","s"];
var nm5b = ["d","g","l","m","n","r","s"];

var nm7 = ["","","","c","d","h","l","m","n","p","s","v","w"];
var nm8 = ["y","a","e","i","o","u"];
var nm9 = ["h","l","ll","m","mm","n","nn","r","rr","v","z"];
var nm10 = ["aa","ie","ya","ia","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm11 = ["d","dh","l","ln","ld","lw","ls","lr","m","mm","mn","n","nh","nn","nm","nd","nl","nw","r","rl","rn","rs","rr","s","sh","ss"];
var nm12 = ["","","","","","","","","l","n","s","sh","th"];
var nm13 = ["d","h","l","m","n","r","s","v"];

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
		names = nMs;
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
	nTp = Math.random() * 7 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	if(nTp === 0){
		while(nm6[rnd5] === nm1[rnd] || nm6[rnd5] === ""){
			rnd5 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd5];
	}else{
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm4.length | 0;
		if(rnd2 < 3){
			while(rnd4 < 3){
				rnd4 = Math.random() * nm4.length | 0;
			}
		}
		if(nTp < 4){
			while(nm3[rnd3] === nm6[rnd5] || nm3[rnd3] === nm1[rnd]){
				rnd3 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm8.length | 0;
			while(nm6[rnd5] === nm5[rnd6] || nm5[rnd6] === nm3[rnd3]){
				rnd6 = Math.random() * nm5.length | 0;
			}
			if(nTp === 4){
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm8[rnd7] + nm5[rnd6] + nm4[rnd4] + nm6[rnd5];
			}else{
				rnd8 = Math.random() * nm5b.length | 0;
				rnd9 = Math.random() * nm8.length | 0;
				while(nm5b[rnd8] === nm5[rnd6] || nm5b[rnd8] === nm6[rnd5]){
					rnd8 = Math.random() * nm5b.length | 0;
				}
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd7] + nm5[rnd6] + nm4[rnd4] + nm5b[rnd8] + nm8[rnd9] + nm6[rnd5];
			}
		}
	}
	testSwear(nMs);
}

function nameFem(){
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm9.length | 0;
	rnd4 = Math.random() * nm10.length | 0;
	rnd5 = Math.random() * nm12.length | 0;
	if(nTp < 3){
		while(nm9[rnd3] === nm12[rnd5] || nm9[rnd3] === nm7[rnd]){
			rnd3 = Math.random() * nm9.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4] + nm12[rnd5];
	}else{
		rnd6 = Math.random() * nm11.length | 0;
		rnd7 = Math.random() * nm8.length | 0;
		while(nm12[rnd5] === nm11[rnd6] || nm11[rnd6] === nm9[rnd3]){
			rnd6 = Math.random() * nm11.length | 0;
		}
		if(nTp < 5){
			nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm8[rnd7] + nm11[rnd6] + nm10[rnd4] + nm12[rnd5];
		}else{
			rnd8 = Math.random() * nm13.length | 0;
			rnd9 = Math.random() * nm8.length | 0;
			while(nm12[rnd5] === nm13[rnd8] || nm13[rnd8] === nm11[rnd6]){
				rnd6 = Math.random() * nm13.length | 0;
			}
			nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm8[rnd7] + nm11[rnd6] + nm8[rnd9] + nm13[rnd8] + nm10[rnd4] + nm12[rnd5];
		}
	}
	testSwear(nMs);
}