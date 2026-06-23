var nm1 = ["","","","","","b","bl","d","f","g","gr","h","j","k","l","m","mw","n","nh","p","ph","q","r","s","t","th","v","w"];
var nm2 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","oo","ia","ai","ua","ue"];
var nm3 = ["b","bw","d","g","gg","h","j","ks","l","ll","llp","m","mb","md","mk","n","nd","ng","nl","nt","p","r","rb","rd","rg","rl","rt","rv","rz","shgr","v","z"];
var nm4 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","oo","ee","aa"];
var nm5 = ["g","l","ll","nt","p","r","th","v"];
var nm6 = ["a","e","i","o","u"];
var nm7 = ["","","","","","","","b","c","d","ghr","hr","k","l","n","ng","nch","nk","nz","p","r","rk","rr","rm","rst","sk","t","x"];

var nm8 = ["","","","","","b","c","d","g","k","m","n","p","r","s","z"];
var nm9 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ya","yi","ye","ia","ie","ai"];
var nm10 = ["d","dr","dk","ft","fr","fk","lf","lk","lr","ld","lft","m","md","mk","n","nd","nk","nr","r","rn","rk","rs","rsh","rd","sk","shr","sd","st"];
var nm11 = ["a","i","a","i","a","i","a","i","a","i","e","o","u","e"];
var nm12 = ["","","","","","","","","","","","","","","","","","","","","","","","","dt","dh","gt","gth","md","mdt","mt","nd","nt","ndt","r","s","st","sh"];

var nm13 = ["","","","","","","b","c","d","f","g","h","j","k","kr","l","m","n","p","pr","r","s","sc","sk","spl","t","v","w","y","z"];
var nm14 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","au","ee","io","oo","oi"];
var nm15 = ["b","d","db","g","gg","gn","gz","j","l","ll","lm","lth","m","n","nch","ng","nt","p","r","rb","rp","rr","t","tk","z"];
var nm16 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ai","ou","au","ia","oa"];
var nm17 = ["b","d","g","gb","k","kd","kr","m","mb","n","nb","nm","r","rr","rd","rg","y"];
var nm18 = ["a","e","i","o","u","a","i","u"];
var nm19 = ["","","","","","","d","g","gg","h","l","m","n","nd","nn","nth","r","rr","rm","sh","t","vvl","vl","wwn","wn","x","y"];

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
	rnd3 = Math.random() * nm7.length | 0;
	if(i < 3){
		while(nm7[rnd3] === nm1[rnd]){
			rnd = Math.random() * nm1.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm7[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		if(i < 7){
			while(nm1[rnd] === nm3[rnd4] || nm3[rnd4] === nm7[rnd3]){
				rnd4 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm7[rnd3];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm6.length | 0;
			while(nm5[rnd6] === nm3[rnd4] || nm5[rnd6] === nm7[rnd3]){
				rnd6 = Math.random() * nm5.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm6[rnd7] + nm7[rnd3];
		}
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm8.length | 0;
	rnd2 = Math.random() * nm9.length | 0;
	rnd3 = Math.random() * nm10.length | 0;
	rnd4 = Math.random() * nm11.length | 0;
	rnd5 = Math.random() * nm12.length | 0;
	if(i < 5){
		while(nm10[rnd3] === nm8[rnd] || nm10[rnd3] === nm12[rnd5]){
			rnd3 = Math.random() * nm10.length | 0;
		}
		nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4] + nm12[rnd5];
	}else{
		rnd6 = Math.random() * nm10.length | 0;
		rnd7 = Math.random() * nm11.length | 0;
		while(nm10[rnd3] === nm10[rnd6] || nm10[rnd6] === nm12[rnd5]){
			rnd6 = Math.random() * nm10.length | 0;
		}
		nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4] + nm10[rnd6] + nm11[rnd7] + nm12[rnd5];
	}
	testSwear(nMs);
}

function nameSur(){
	sTp = Math.random() * 5 | 0;
	rnd = Math.random() * nm13.length | 0;
	rnd2 = Math.random() * nm14.length | 0;
	rnd3 = Math.random() * nm19.length | 0;
	if(sTp === 0){
		while(nm19[rnd3] === nm13[rnd]){
			rnd3 = Math.random() * nm19.length | 0;
		}
		nSr = nm13[rnd] + nm14[rnd2] + nm19[rnd3];
	}else{
		rnd4 = Math.random() * nm15.length | 0;
		rnd5 = Math.random() * nm16.length | 0;
		while(nm13[rnd] === nm15[rnd4] || nm15[rnd4] === nm19[rnd3]){
			rnd4 = Math.random() * nm15.length | 0;
		}
		if(sTp < 3){
			nSr = nm13[rnd] + nm14[rnd2] + nm15[rnd4] + nm16[rnd5] + nm19[rnd3];
		}else{
			rnd6 = Math.random() * nm17.length | 0;
			rnd7 = Math.random() * nm18.length | 0;
			while(nm17[rnd6] === nm15[rnd4] || nm17[rnd6] === nm19[rnd3]){
				rnd6 = Math.random() * nm17.length | 0;
			}
			if(sTp === 3){
				nSr = nm13[rnd] + nm14[rnd2] + nm15[rnd4] + nm16[rnd5] + nm17[rnd6] + nm18[rnd7] + nm19[rnd3];
			}else{
				rnd8 = Math.random() * nm18.length | 0;
				while(nm19[rnd3] === ""){
					rnd3 = Math.random() * nm19.length | 0;
				}
				nSr = nm13[rnd] + nm14[rnd2] + nm15[rnd4] + nm16[rnd5] + nm17[rnd6] + nm18[rnd7] + nm19[rnd3] + nm18[rnd8];
			}
		}
	}
	testSwear(nSr);
}