var nm1 = ["","","","","b","d","g","h","m","n","r","s","sh","w","y","z"];
var nm2 = ["a","o","u","a","o","u","a","o","u","a","o","u","a","o","u","a","o","u","a","o","u","a","o","u","a","o","u","a","o","u","i","i","e","e","e","e","e","e","ae","aa","ao","au","oa","oo","ou","ua","uo","uu"];
var nm3 = ["b","bb","bd","bl","bn","g","gg","gn","gy","gt","h","hn","hl","l","ll","lm","lfr","ln","lb","m","mn","mm","ml","md","my","n","nn","nb","ng","nl","nt","nsh","nth","ny","st","ss","sl","sz","zl","zy","zn"];
var nm4 = ["a","o","u","a","o","u","a","o","u","a","o","u","a","o","u","i","i","e","e","e","e","e","e","ao","ie","ia","iu","ua","ue"];
var nm5 = ["b","bb","c","d","f","g","h","l","ld","ll","n","nd","ndr","ng","ns","nz","r","s","ss","v"];
var nm6 = ["","","","","d","h","l","m","n","r","s"];

var br = "";

function nameGen(){
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		nameMas();
		while(nMs === ""){
			nameMas();
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
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm6[rnd5]){
		rnd3 = Math.random() * nm3.length | 0;
	}
	if(i < 5){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
	}else{
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm2.length | 0;
		while(nm5[rnd6] === nm3[rnd3] || nm5[rnd6] === nm6[rnd5]){
			rnd6 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd6] + nm2[rnd7] + nm6[rnd5];
	}
	testSwear(nMs);
}