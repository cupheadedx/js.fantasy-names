var nm1 = ["","","","c","d","dr","f","g","gl","gr","j","k","l","m","n","ph","q","r","s","t","th","v"];
var nm2 = ["ae","ai","au","eo","ee","y","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y"];
var nm3 = ["c","d","dr","gr","l","ldr","lf","lgr","ll","lm","lth","lv","n","nd","ndr","nl","nth","r","rd","rdr","rl","rv","s","sh","st","th","thr","tr","v","vl"];
var nm4 = ["aeu","ie","io","ea","eu","au","ia","ui","y","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y"];
var nm5 = ["d","dr","g","l","ll","m","nd","ndr","nn","r","rr","sm","str","t","th","v"];
var nm6 = ["","","c","l","ll","n","nt","r","rn","re","s","th","x"];

var nm7 = ["","","","c","d","f","j","k","l","m","n","r","s","sc","t","th","thw","v"];
var nm8 = ["au","ie","ia","ue","ieu","ya","y","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y"];
var nm9 = ["c","ct","dr","g","l","ll","ls","lt","m","mbr","n","nd","nn","ph","r","rg","rj","rl","s","sd","sr","th","v","z"];
var nm10 = ["ia","ie","ae","eu","au","ai","eia","oi","y","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y"];
var nm11 = ["b","l","ll","m","mm","n","nd","ndr","nn","nss","r","ss","st","tt"];
var nm12 = ["","","","","","","","","","","","","","l","n","nn","s","th"];

var nm13 = ["","","d","f","g","k","l","m","n","r","s","t","th","v"];
var nm14 = ["a","e","i","o","u"];
var nm15 = ["b","c","d","dr","f","l","ll","ldr","ltr","ls","lt","m","mm","n","nd","nn","nt","nth","ph","r","rg","s","sh","str","t","th","tt"];
var nm16 = ["eu","ai","ae","ie","ei","y","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm17 = ["l","ll","n","nd","nt","r","rr","rq","s","ss","str","t","th","tt","v"];
var nm18 = ["","","l","ll","n","nn","r","s","th"];

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
		nameLas();
		while(nLs === ""){
			nameLas();
		}
		names = nMs + " " + nLs;
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
	nTp = Math.random() * 6 | 0
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	rnd4 = Math.random() * nm3.length | 0;
	rnd5 = Math.random() * nm4.length | 0;
	while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm6[rnd3]){
		rnd4 = Math.random() * nm3.length | 0;
	}
	while(rnd2 < 4 && rnd5 < 4){
		rnd5 = Math.random() * nm4.length | 0;
	}
	if(nTp < 4){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
	}else{
		rnd6 = Math.random() * nm2.length | 0;
		rnd7 = Math.random() * nm5.length | 0;
		while(nm5[rnd7] === nm3[rnd4] || nm5[rnd7] === nm6[rnd3]){
			rnd7 = Math.random() * nm5.length | 0;
		}
		while(rnd6 < 4 && rnd5 < 4 || rnd6 < 4 && rnd2 < 4){
			rnd6 = Math.random() * nm2.length | 0;
		}
		if(nTp === 4){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm2[rnd6] + nm5[rnd7] + nm4[rnd5] + nm6[rnd3];
		}else{
			nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd7] + nm2[rnd6] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
		}
	}
	testSwear(nMs);
}

function nameFem(){
	nTp = Math.random() * 6 | 0
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm12.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	while(nm9[rnd4] === nm7[rnd] || nm9[rnd4] === nm12[rnd3]){
		rnd4 = Math.random() * nm9.length | 0;
	}
	while(rnd2 < 2 && rnd5 < 3){
		rnd5 = Math.random() * nm10.length | 0;
	}
	if(nTp < 4){
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm12[rnd3];
	}else{
		rnd6 = Math.random() * nm8.length | 0;
		rnd7 = Math.random() * nm11.length | 0;
		while(nm11[rnd7] === nm9[rnd4] || nm11[rnd7] === nm12[rnd3]){
			rnd7 = Math.random() * nm11.length | 0;
		}
		while(rnd6 < 2 && rnd5 < 3 || rnd6 < 2 && rnd2 < 2){
			rnd6 = Math.random() * nm8.length | 0;
		}
		if(nTp === 4){
			nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm8[rnd6] + nm11[rnd7] + nm10[rnd5] + nm12[rnd3];
		}else{
			nMs = nm7[rnd] + nm8[rnd2] + nm11[rnd7] + nm8[rnd6] + nm9[rnd4] + nm10[rnd5] + nm12[rnd3];
		}
	}
	testSwear(nMs);
}

function nameLas(){
	nTp = Math.random() * 6 | 0
	rnd = Math.random() * nm13.length | 0;
	rnd2 = Math.random() * nm14.length | 0;
	rnd3 = Math.random() * nm18.length | 0;
	rnd4 = Math.random() * nm15.length | 0;
	rnd5 = Math.random() * nm16.length | 0;
	while(nm15[rnd4] === nm13[rnd] || nm15[rnd4] === nm18[rnd3]){
		rnd4 = Math.random() * nm15.length | 0;
	}
	while(rnd2 < 2 && rnd5 < 3){
		rnd5 = Math.random() * nm16.length | 0;
	}
	if(nTp < 4){
		nLs = nm13[rnd] + nm14[rnd2] + nm15[rnd4] + nm16[rnd5] + nm18[rnd3];
	}else{
		rnd6 = Math.random() * nm14.length | 0;
		rnd7 = Math.random() * nm17.length | 0;
		while(nm17[rnd7] === nm15[rnd4] || nm17[rnd7] === nm18[rnd3]){
			rnd7 = Math.random() * nm17.length | 0;
		}
		while(rnd6 < 2 && rnd5 < 3 || rnd6 < 2 && rnd2 < 2){
			rnd6 = Math.random() * nm14.length | 0;
		}
		if(nTp === 4){
			nLs = nm13[rnd] + nm14[rnd2] + nm15[rnd4] + nm14[rnd6] + nm17[rnd7] + nm16[rnd5] + nm18[rnd3];
		}else{
			nLs = nm13[rnd] + nm14[rnd2] + nm17[rnd7] + nm14[rnd6] + nm15[rnd4] + nm16[rnd5] + nm18[rnd3];
		}
	}
	testSwear(nLs);
}