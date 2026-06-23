var nm1 = ["","","","Ãj","Ãr","b","f","g","h","hr","l","m","n","s","v"];
var nm2 = ["a","e","i","o","u","y","Ã¡","Ã­","Ã¶","Ã½","a","e","i","o","u","y","a","e","i","o","u","y","Ã¡","Ã­","Ã¶","Ã½","ei","au","Ã¦"];
var nm3 = ["Ã°","Ã°g","Ã¾r","fÃ¾","fÃ¾r","gÃ¾","gÃ¾r","g","ggth","gl","glf","gn","gth","k","kkm","km","lÃ¾","l","lbl","ll","lv","m","mgr","mn","ng","ngn","nj","r","rb","rf","rg","rn","rnj","rr","s","sv","t","tt","v","z"];
var nm4 = ["Ã°m","Ã°n","ld","lm","mÃ°n","m","mn","n","nÃ°","nÃ°m","nd","r","rr","s","t"];
var nm5 = ["","","","","d","dr","lgr","gr","m","mr","ng","ngr","r","rn","rtr","str","t","tr"];

var nm6 = ["","","","","","","b","bl","d","dr","g","gj","gr","h","hr","j","k","l","m","n","r","s","sk"];
var nm7 = ["a","e","i","o","u","y","Ã¡","Ã³","Ã¶","Ãº","Ã½","ey","ei","au"];
var nm8 = ["Ã°g","Ã°gr","Ã°r","f","fr","g","gj","grb","l","lf","lfr","lg","lgj","m","ng","ngl","ngr","ngrb","nl","nnl","ns","rÃ°","rÃ°g","rÃ°gr","r","rb","rns","rr","st","stl","tl","vr"];
var nm9 = ["Ã°","d","dd","f","ff","gl","j","k","kk","ng","ngl","v","vl","x"];
var nm10 = ["","","","","","","","","","","","","Ã°","Ã°r","dr","fn","kn","lp","md","n","ndr","ng","nn","p","pr","t","tt"];

var br = "";

function nameGen(type){
	$('#placeholder').css('textTransform', 'capitalize');
	var tp = type;
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
	rnd5 = Math.random() * nm5.length | 0;
	if(i < 3){
		while(rnd5 < 4){
			rnd5 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd5];
	}else{
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm2.length | 0;
		while(nm3[rnd3] === nm1[rnd] || nm5[rnd5] === nm3[rnd3]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		if(i < 7){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm5[rnd5];
		}else{
			rnd6 = Math.random() * nm4.length | 0;
			rnd7 = Math.random() * nm2.length | 0;
			while(nm4[rnd6] === nm3[rnd3] || nm4[rnd6] === nm5[rnd5]){
				rnd6 = Math.random() * nm4.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd6] + nm2[rnd7] + nm5[rnd5];
		}
	}
	testSwear(nMs);
}
function nameFem(){
	rnd = Math.random() * nm6.length | 0;
	rnd2 = Math.random() * nm7.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	if(i < 3){
		while(rnd < 6){
			rnd = Math.random() * nm6.length | 0;
		}
		nMs = nm6[rnd] + nm7[rnd2] + nm10[rnd5];
	}else{
		rnd3 = Math.random() * nm8.length | 0;
		rnd4 = Math.random() * nm7.length | 0;
		while(nm8[rnd3] === nm6[rnd] || nm10[rnd5] === nm8[rnd3]){
			rnd3 = Math.random() * nm8.length | 0;
		}
		if(i < 7){
			nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm10[rnd5];
		}else{
			rnd6 = Math.random() * nm9.length | 0;
			rnd7 = Math.random() * nm7.length | 0;
			while(nm9[rnd6] === nm8[rnd3] || nm9[rnd6] === nm10[rnd5]){
				rnd6 = Math.random() * nm9.length | 0;
			}
			nMs = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm9[rnd6] + nm7[rnd7] + nm10[rnd5];
		}
	}
	testSwear(nMs);
}