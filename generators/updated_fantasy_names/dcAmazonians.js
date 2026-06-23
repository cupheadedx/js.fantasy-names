var nm1 = ["Ak","Al","Alk","An","Ar","At","Bash","Bat","Bel","Brak","Call","Cast","Char","Cil","Cym","Dalm","Dam","Danth","Did","Dim","Drus","Eger","Eub","Eud","Ev","Fal","Far","Genn","Gis","Hess","Im","Ism","Jasm","Joc","Kad","Kah","Kal","Karn","Kas","Latt","Lyd","Mac","Mag","Magd","Mar","Maz","Men","Mil","Myr","Myrr","Myrt","Nark","Niob","Nub","Nusc","Nyr","Nys","Phin","Procn","Rat","Ren","Sad","Shal","Sitr","Tekl","Thekl","Tim","Trig","Tyr","Ven","Vest","Wak","Xandr","Zuh","Zum"];
var nm2 = ["adra","aka","ala","ali","ana","andra","ani","antha","ara","arha","aria","arra","asia","asta","eeza","eka","ela","elia","eria","ese","esha","ias","iaza","idra","ila","imar","in","ina","ine","inna","ir","ira","irha","iri","is","istis","ita","iva","iza","izar","izia","one","uka","umi","ure","us","ya","ybe"];
var nm3 = ["Aca","Ada","Ade","Ado","Aga","Agne","Ai","Ala","Aldo","Ale","Ali","Aly","Ana","Ane","Aphro","Apo","Are","Ari","Athe","Axe","Ba","Bella","Ca","Cala","Casca","Cassa","Cha","Che","Co","Cyna","Da","Dama","Deni","Dia","Dio","Dy","Ebo","Eire","Ele","Elea","Eli","Eu","Eudo","Euphe","Eva","Fae","Fe","Gela","Ha","Hele","Hya","Hypa","Ido","Io","Iri","Isa","Ja","Ka","Kare","Kari","Katha","Ko","Ky","La","Lari","Lea","Leo","Li","Liva","Mae","Mari","Me","Melai","Meli","Mine","Nai","Nare","Ne","Neo","No","Obe","Ode","Oly","Ophe","Ophi","Pene","Perse","Phe","Phy","Rai","Re","Sa","Sele","Sire","Ste","Ta","Tere","Tha","The","Tia","Tima","Tita","Tre","Vane","Xe","Yale","Yola","Za","Zani","Ze","Zera"];
var nm4 = ["cia","da","dia","dite","dora","la","lanie","lena","leta","lia","lina","lla","llia","lline","lona","mara","meda","mena","mia","misia","mona","mone","na","ndia","ndra","neta","nia","nie","nne","nor","nora","ntha","nthe","nthea","phelia","phine","phira","phne","phone","ra","rena","rene","resa","rine","rise","rissa","rria","sia","sima","sine","ssa","tasia","teia","tha","thea","thia","thy","tia","tine","tria","vana","xis"];
var br = "";

function nameGen(type){
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(i < 5){
			rnd = Math.random() * nm1.length | 0;
			rnd2 = Math.random() * nm2.length | 0;
			names = nm3[rnd] + nm4[rnd2];
		}else{
			rnd = Math.random() * nm3.length | 0;
			rnd2 = Math.random() * nm4.length | 0;
			names = nm3[rnd] + nm4[rnd2];
		}
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}