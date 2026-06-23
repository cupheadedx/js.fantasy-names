var nm1 = ["b","br","ch","cr","d","fr","g","gr","h","j","k","l","m","n","p","r","sp","st","t","tr","w"];
var nm2 = ["ie","ai","ee","ui","uu","oa","au","a","e","i","o","u","a","e","i","o","u"];
var nm3 = ["'d","'l","'m","'r","'t","c","d","f","ff","g","hr","k","l","ll","lm","m","mb","n","np","ny","r","rd","rh","rn","rr","rs","rv","s","sr","t","th","tr","v","zg"];
var nm4 = ["a","e","i","o","u"];
var nm5 = ["c","h","hs","l","m","n","s"];
var nm6 = ["d","ff","g","h","hn","k","l","ln","lt","m","mn","n","nd","nt","r","rk","rm","rn","rv","s","sh","t"];

var nm7 = ["b","br","c","ch","f","g","gl","h","j","k","l","m","n","p","r","s","sh","t","th"];
var nm8 = ["au","oe","ou","ei","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm9 = ["'d","'g","'t","'th","c","ch","dd","f","gr","gz","hgr","l","lg","ll","lt","lth","mb","n","nl","nn","ns","p","r","rdr","rn","rr","s","ss","t","th","y","yl"];
var nm10 = ["ia","ua","ea","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm11 = ["h","l","ll","n","nn","r","rr","s","ss","sh","w"];
var nm12 = ["h","l","ls","n","r","rd"];

var nm13 = ["aged","agile","amber","blood","bold","brave","brown","burk","burned","calm","charge","clean","clear","canyon","cliff","cloud","dawn","day","dear","dual","eager","even","faint","fair","far","fire","flame","fond","free","front","frost","gale","gold","golden","gray","grey","grim","gust","hash","high","iron","keen","laughing","leaf","light","lone","low","mesa","night","oaken","old","plain","prep","proud","quick","quiet","riven","river","rough","rumble","sander","shale","sharp","shore","silent","silver","sky","smoke","split","spring","squall","stark","steel","stern","stone","storm","strong","swift","tender","twain","twin","vast","water","wild","wind","wing","wood"];
var nm14 = ["back","band","beak","bear","beast","breaker","breath","bridge","brush","bull","burst","chaser","chest","cloth","cloud","craft","cub","dance","dirt","dream","dreamer","drive","eye","face","fate","feather","feet","field","fire","flame","flight","flow","fog","foot","force","friend","fur","game","gift","guard","guide","hair","hand","health","heart","hide","hill","hold","hoof","horn","host","keep","kind","kite","knot","land","leaf","light","mane","mantle","mark","might","mist","mountain","paint","past","path","paw","plane","range","rest","run","runner","sense","sign","skin","sky","smile","song","spark","spell","spirit","stomp","stream","stride","strider","tail","tale","tamer","totem","trail","treader","view","walk","walker","watch","water","wind","wing","wise","wish"];

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
		rnd = Math.random() * nm13.length | 0;
		rnd2 = Math.random() * nm14.length | 0;
		while(nm13[rnd] === nm14[rnd2]){
			Math.random() * nm14.length | 0;
		}
		names = nMs + " " + nm13[rnd] + nm14[rnd2];
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