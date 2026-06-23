var nm1 = ["c","g","h","k","l","m","n","r","s","v","z"];
var nm2 = ["a","e","i","o","u","y"];
var nm3 = ["ch","ct","d","dc","dk","dr","gt","gr","j","kb","kt","kr","ktr","ld","ldr","lg","lm","ln","l","ll","lb","m","mm","mn","md","mg","mt","nm","nr","ndr","nt","ntr","r","rt","rd","rdr","rtr","rn","rm","sd","s","ss","sr","sl","sm","sdr","t","tr","v","vr"];
var nm4 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ie","ei","ua","ue","ee","ea"];
var nm5 = ["b","d","g","k","l","m","n","r","s","sh","y"];
var nm6 = ["","","","h","l","m","n","r","rl","y"];

var nm7 = ["b","br","d","dr","f","fr","g","gr","l","m","n","r","s","sh","t","th","w"];
var nm8 = ["a","e","o","u"];
var nm9 = ["d","dd","f","ff","g","gg","h","l","ll","m","mm","n","nn","r","rr","s","ss","t","v"];
var nm10 = ["a","e","o","a","e","o","a","e","o","i","u"];
var nm11 = ["c","g","gt","h","k","l","lm","ln","ll","m","mn","mt","n","nn","nd","nt","r","t","tt","v","z"];
var nm12 = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","ch","d","h","l","ll","n","s","sch","sh","t","th"];

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
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	if(i < 3){
		while(nm6[rnd3] === nm1[rnd] || nm6[rnd3] === ""){
			rnd3 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		if(i < 7){
			while(nm1[rnd] === nm3[rnd4] || nm3[rnd4] === nm6[rnd3]){
				rnd4 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm4.length | 0;
			while(nm5[rnd6] === nm3[rnd4] || nm5[rnd6] === nm6[rnd3]){
				rnd6 = Math.random() * nm5.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm4[rnd7] + nm6[rnd3];
		}
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm12.length | 0;
	if(i < 3){
		while(nm12[rnd3] === ""){
			rnd3 = Math.random() * nm12.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm12[rnd3];
	}else{
		rnd4 = Math.random() * nm9.length | 0;
		rnd5 = Math.random() * nm10.length | 0;
		if(i < 5){
			while(nm7[rnd] === nm9[rnd4] || nm9[rnd4] === nm12[rnd3]){
				rnd4 = Math.random() * nm9.length | 0;
			}
			nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm12[rnd3];
		}else{
			rnd6 = Math.random() * nm11.length | 0;
			rnd7 = Math.random() * nm10.length | 0;
			while(nm11[rnd6] === nm9[rnd4] || nm11[rnd6] === nm12[rnd3]){
				rnd6 = Math.random() * nm11.length | 0;
			}
			nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm11[rnd6] + nm10[rnd7] + nm12[rnd3];
		}
	}
	testSwear(nMs);
}