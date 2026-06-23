var nm1 = ["z'","s'r","sh'r","r'","r'kh","hr'","gh","h","k","kh","r","rh","s","sh","v","y","z","zh","zr","","",""];
var nm2 = ["ou","aa","a","i","o","u","o","u","a","i","o","u","o","u","a","i","o","u","o","u","a","i","o","u","o","u"];
var nm3 = ["ph'l","r'","r's","th'r","th'","ck'th","k'z","k'sh","l'th","ct","ckt","cg","cgt","gk","gg","gt","gth","gsh","gs","ks","ksh","l","lth","lg","lgh","lgr","ph","phr","thg","thr","thk"];
var nm4 = ["h","j","g","r","t","v","y","z"];
var nm5 = ["c","hj","hrj","k","l","m","s","ss","th","zj","zz"];
var nm6 = ["Abandoned","Aberrant","Absent","Abysmal","All-Seeing","Annihilator","Berserker","Boundless","Concealed","Conniver","Consumer","Corrupter","Crawler","Debased","Debauched","Deceitful","Deceiver","Defiler","Degenerate","Demented","Depraved","Destroyer","Deviant","Devious","Devourer","Dissolute","Distorted","Enigmatic","Eternal","Everlasting","Executioner","Exploiter","Exterminator","Feeder","Foul","Frenzied","Glutton","Gorger","Guardian","Hidden","Indulgent","Infamous","Infinite","Insomnious","Keeper","Lost","Lurker","Lurking","Malicious","Miscreant","Monstrous","Nefarious","Obscure","Obscured","Occult","Overseer","Perennial","Perpetual","Prowler","Ravager","Savage","Secretive","Senseless","Sentinel","Shrouded","Slaughterer","Sleepless","Slippery","Slitherer","Sly","Sneak","Snide","Taint","Tainter","Undiminished","Undying","Unending","Unfading","Unfathomable","Unhinged","Unknowable","Unseen","Unsleeping","Veiled","Vicious","Vigilant","Wakeful","Wandering","Warden","Whisperer","Wicked","Wild","Wrathful","Wretched","Wriggler"];

var br = "";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		nameMas();
		while(nMs === ""){
			nameMas();
		}
		rnd = Math.random() * nm6.length | 0;
		nMs = nMs + " the " + nm6[rnd];
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
	rnd5 = Math.random() * nm5.length | 0;
	if(nTp < 2){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm1[rnd] === nm5[rnd5]){
			rnd5 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd5];
	}else{
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm2.length | 0;
		while(rnd2 < 2 && rnd4 < 2){
			rnd2 = Math.random() * nm2.length | 0;
		}
		while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm5[rnd5]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		if(nTp < 4){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm5[rnd5];
		}else{
			rnd6 = Math.random() * nm4.length | 0;
			rnd7 = Math.random() * nm2.length | 0;
			while(rnd < 2 && rnd4 < 2 && rnd2 < 2){
				rnd6 = Math.random() * nm2.length | 0;
			}
			if(nTp === 4){
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd6] + nm2[rnd7] + nm5[rnd5];
			}else{
				nMs = nm1[rnd] + nm2[rnd2] + nm4[rnd6] + nm2[rnd7] + nm3[rnd3] + nm2[rnd4] + nm5[rnd5];
			}
		}
	}
	testSwear(nMs);
}