
var br = "";

function nameGen(type){
var nm1 = ["Ãbel","ÃdÃ¡m","Ãkos","Ãrmin","Ãron","ÃrpÃ¡d","AdriÃ¡n","Albert","Alex","Alexander","AndrÃ¡s","Antal","Arnold","Attila","BÃ¡lint","BÃ©la","BalÃ¡zs","Barna","BarnabÃ¡s","Bence","BendegÃºz","Benedek","BenjÃ¡min","Benjamin","Bertalan","BoldizsÃ¡r","Botond","Csaba","CsanÃ¡d","Csongor","DÃ¡niel","DÃ¡vid","DÃ©nes","DezsÅ","Dominik","Domonkos","DonÃ¡t","Endre","Erik","Ferenc","FlÃ³riÃ¡n","GÃ¡bor","GÃ©za","GergÅ","Gergely","GyÃ¶rgy","Gyula","Henrik","Imre","IstvÃ¡n","JÃ¡nos","JÃ³zsef","Jakab","KÃ¡lmÃ¡n","KÃ¡roly","Kevin","KornÃ©l","KristÃ³f","KrisztiÃ¡n","Krisztofer","LÃ¡szlÃ³","Lajos","Levente","MÃ¡riÃ³","MÃ¡rkÃ³","MÃ¡rk","MÃ¡rton","MÃ¡tÃ©","MÃ¡tyÃ¡s","Marcell","Martin","MihÃ¡ly","MiklÃ³s","MilÃ¡n","NÃ¡ndor","Noel","Norbert","OlivÃ©r","PÃ¡l","PÃ©ter","Patrik","RÃ³bert","Rajmund","RenÃ¡tÃ³","RichÃ¡rd","Roland","Rudolf","SÃ¡ndor","Soma","Szabolcs","SzilÃ¡rd","Szilveszter","TamÃ¡s","Tibor","Valentin","Viktor","Vilmos","Vince","ZalÃ¡n","ZoltÃ¡n","Zsolt","Zsombor"];
var nm2 = ["Ãgnes","Ãva","AdÃ©l","Adrienn","Alexandra","Andrea","Anett","AnikÃ³","Anita","Anna","AnnamÃ¡ria","Barbara","Beatrix","Bernadett","Bettina","Bianka","Blanka","BoglÃ¡rka","BorbÃ¡la","Brigitta","Cintia","Csenge","Csilla","DÃ³ra","Dalma","Daniella","DiÃ¡na","Dominika","Dorina","Dorina MÃ¡ria","Dorka","Dorottya","Dzsenifer","Edina","Elizabet","Emese","EnikÅ","Erika","ErzsÃ©bet","Eszter","Evelin","Fanni","FlÃ³ra","Fruzsina","Gabriella","Georgina","GrÃ©ta","Hajnalka","Hanna","Henrietta","IldikÃ³","Ivett","Izabella","JÃºlia","Judit","KÃ­ra","Kamilla","Kata","Katalin","Kinga","Kitti","Klaudia","Krisztina","Laura","LiliÃ¡na","Lili","Lilla","Luca","MÃ¡ria","MÃ³nika","Martina","Melinda","MercÃ©desz","NÃ³ra","NatÃ¡lia","Nikolett","Nikoletta","NoÃ©mi","Orsolya","Panna","PatrÃ­cia","Petra","RÃ©ka","RamÃ³na","Rebeka","Regina","RenÃ¡ta","SÃ¡ra","Szabina","Szilvia","Szimonetta","TÃ­mea","TÃ¼nde","Tamara","Vanda","Vanessza","Veronika","ViktÃ³ria","VirÃ¡g","Vivien","Zita","ZsÃ³fia","Zsanett","Zsuzsanna"];
var nm3 = ["Antal","BÃ¡lint","Bakos","Miksa","CsatÃ¡r","BÃ¡cs","BalÃ¡zs","AprÃ³d","Balla","Balog","Balogh","Barna","Barta","BirÃ³","BodnÃ¡r","BogdÃ¡n","BognÃ¡r","BorbÃ©ly","Boros","Budai","Egyed","Csonka","DeÃ¡k","Dobos","DudÃ¡s","FÃ¡biÃ¡n","FÃ¼lÃ¶p","FaragÃ³","Farkas","Fazekas","FehÃ©r","Fekete","Fodor","GÃ¡l","GÃ¡spÃ¡r","GulyÃ¡s","HajdÃº","HalÃ¡sz","HegedÃ¼s","HorvÃ¡th","IllÃ©s","JÃ³nÃ¡s","Jakab","JuhÃ¡sz","Katona","Kelemen","Kerekes","KirÃ¡ly","Kis","Kiss","Kocsis","KovÃ¡cs","Kozma","LÃ¡szlÃ³","Lakatos","Lengyel","LukÃ¡cs","MÃ¡rton","MÃ¡tÃ©","MÃ©szÃ¡ros","Magyar","Major","Mezei","MolnÃ¡r","NÃ©meth","Nagy","Nemes","NovÃ¡k","OlÃ¡h","OrbÃ¡n","Orosz","OrsÃ³s","PÃ¡l","PÃ¡sztor","PÃ©ter","Pap","Papp","VÃ¡szoly","Pataki","PintÃ©r","RÃ¡cz","SÃ¡ndor","Simon","SÃ­pos","SoÃ³s","Somogyi","SzÃ©kely","SurÃ¡ny","SzÃ¼cs","SzabÃ³","Kende","Szalai","Szekeres","SzilÃ¡gyi","SzÅke","SzÅ±ts","TÃ³th","TÃ¶rÃ¶k","TakÃ¡cs","TamÃ¡s","VÃ¡radi","Kapolcs","Zobor","VÃ¶rÃ¶s","Varga","Vass","Veres","Vincze","VirÃ¡g"];
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd2 = Math.floor(Math.random() * nm3.length);
		if(tp === 1){
			rnd = Math.floor(Math.random() * nm2.length);
			names = nm3[rnd2] + " " + nm2[rnd];
			nm2.splice(rnd, 1);
		}else{
			rnd = Math.floor(Math.random() * nm1.length);
			names = nm3[rnd2] + " " + nm1[rnd];
			nm1.splice(rnd, 1);
		}
		nm3.splice(rnd2, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}