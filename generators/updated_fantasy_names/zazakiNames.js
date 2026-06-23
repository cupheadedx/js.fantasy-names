var br = "";

function nameGen(type){
	var tp = type;
	var nm1 = ["Adar","AdÄ±l","AdÄ±r","Asanwar","AsÄ±n","Aslan","AsmÃªn","Aso","Awan","Awser","Awzen","Awzer","Awzim","Ayam","AydÄ±n","Azad","Azmin","BekÄ±r","Bengzo","Beran","Bertal","Berz","Berzo","BÄ±nali","BÄ±ra","BÄ±rusÄ±k","BÄ±Åar","Bozan","Cemroc","Cewer","Cewher","CÄ±nde","CÄ±tÃªr","Ciwan","Comerd","Corin","Cuma","Cuye","Ãeko","Dehar","Delil","Dewran","DewrÃªÅ","DÄ±laver","DÄ±lwaz","Diyar","Dodi","Duzali","DuzgÄ±n","EbÄ±l","Ehmed","Ãlbeg","Eli","Elida","EliÅÃªr","Espar","Estar","Esto","Eziz","Faruq","FayÄ±q","Feramus","Ferman","Feryad","Feti","FÄ±lit","FÄ±rat","Fuad","Furqan","Gandar","Gewer","Giyan","Gulabi","Hadar","Hajo","Ham","Hamo","Hemdem","Hemed","Hemze","Heqi","Hesen","Hewar","Husni","KamÄ±l","Kemal","Kendal","Kerem","Mehmud","Mem","Memed","Memo","Metin","MÄ±kail","Mir","Miro","Mitbeg","MomÄ±n","Munzur","Musa","Namdar","Nehar","Pawan","Polat","Qaji","Qajin","Qamer","Qehreman","Qoz","Rayber","Raydar","Rayzan","Rayzan","RÄ±Åad","RÄ±za","Rocakewt","Rocame","Rojawan","RoÅan","Rustem","Sefkan","SeranÄ±k","Serberz","Serdar","Serdek","Serdem","Serdest","SerfÄ±raz","Serko","Serok","Serwer","Setar","Seyd","Seydwan","SÄ±lÃªman","SÄ±lo","Simko","Siyamend","Smail","Soraz","Suredar","Suwar","Åahnan","ÅÃªr","Åerif","ÅÃªrko","Åewqi","ÅÃªxmus","Tahir","Teber","TemÄ±r","Temo","Umed","Umer","Us","Usar","UsÄ±v","Usman","Varan","Vengaw","Vereng","VergÃªr","Verroj","VewrÃªs","Ware","Waredar","Welat","Wes","Weysel","Xelil","XÄ±dÄ±r","XÄ±do","Xodest","Xort","Xoser","Zafer","Zanda","Zano","Zanyar","ZerdeÅt","Zerguz","ZerrgeÅ","ZerrveÅn","Zerrwaz","ZerrweÅ","Zeynel","ZÄ±lfi"]
	var nm2 = ["Agoziya","AsÃª","AÅme","AÅmÃªnida","AÅmera","AxÃ§ige","Aynure","BaÄÄ±re","Bedew","BÃªriwan","BesÃª","BeserÃª","BezÃª","Bire","Buyere","CÃ¼le","CÃ¼me","ÃÃªke","ÃÄ±la","ÃÄ±lkÃª","ÃÄ±moÅa","ÃiÃ§eg","Dalpa","Delal","Dermane","Desdina","Destan","DeyrÃª","DÄ±lfÄ±raze","DÄ±lÅa","Dina","Ejir","ElÃª","Elida","Elif","Ãmine","ÃmoÅÃª","Esma","Esta","EyÅa","Ezima","Fadima","Faima","FatÃª","Fatima","Fayla","Fecira","FedÃª","Fehima","FidÃª","GermÄ±nÃª","Geweze","GewrÃª","GozelÃª","GulanÃª","Gulazer","GulÃ§in","Guldar","GulÃª","Gulistan","Gulperi","GulpÃªtÃª","GulsÄ±m","Gulsor","GulÅa","GulÅan","GulÅen","GulÅin","Gulzer","Gulzerin","Äeyal","Äezal","Halin","Harse","HavÄ±l","Hediya","Hemra","HenÃª","Herdif","Heval","Hewa","Hewese","Hewlin","HÄ±lÃª","HÄ±tane","HÄ±tÃª","Hiro","HorÃª","HorsÃª","HurdiyÃª","Huriya","Husniya","JÃªle","KÃªfÃª","KejÃª","Kevnar","Keziba","KÄ±lame","KÄ±tane","KÄ±tawine","Leyla","Leylan","LÄ±le","Liza","Lizda","Lorin","Mara","Maraliye","Mekina","Melay","Meleke","MÄ±jdane","MÄ±rcane","Milzere","Moreke","Mura","NarÃª","Narin","Nazdar","Nazenin","Nefla","NermÄ±n","NurÃª","Pakiza","Pelda","Pelwe","Peri","Perixan","Piltan","Piya","PukelekÃª","Rabiya","Raifa","Rajiya","Rehima","RÄ±nde","Rojda","Rojgul","Rojin","RoÅna","RoÅtiya","Royale","Rukene","Ruwale","Sabe","Saima","SanÄ±ke","Saqe","Sare","SayÃª","Sebahate","Sekina","Seraw","ServÄ±le","SevÃª","Sewle","Seyran","SÄ±sÄ±kÃª","Simaw","Songul","Sorgul","SosÄ±ne","Sultan","Surhewze","Åare","ÅasenemÃª","Åayba","ÅekÄ±re","ÅÃªngul","ÅermÄ±nÃª","Åewin","Åewra","Åilan","Åirin","Tania","Tezgule","Tijda","Vewre","VÄ±ldan","VÄ±lÄ±ke","VÄ±newÅ","Vina","Viyale","XanÃª","XanÄ±m","XasÃª","Xasek","Xatun","XecÃª","XewÄÃª","Zana","Zayra","Zelal","Zelixa","Zerda","Zerdaw","Zerenca","ZergÃª","Zergul","Zerifa","ZeriÅa","ZerrÃª","Zeycan","Zeyneb","ZinÃª","Zora"];
	var nm3 = ["ÃÃªrmugÄ±j","Ãar","Ãelger","Ãem","ÃewligÄ±j","Ä°zolan","Åuwan","AÄacan","Abasan","Alan","AlduÅÄ±j","Alvoreki","Ardwan","AsÄ±nger","Asan","Aya","Azad","BÄ±lvank","BÄ±rusÄ±k","BaÄvangÄ±j","BabÄ±j","Bamasuran","Baxtiaran","Bedran","Berz","Bingol","Bukan","CÄ±nde","CÄ±tÃªr","Canpolat","Cemalan","DÃªrsimÄ±j","DarahÃªnij","Derzi","Dijle","Dik","ErganÄ±j","ErzinganÄ±j","Erzingan","Espar","Estare","Ferat","GÃªlÄ±j","GÄ±mgÄ±mÄ±j","GÄ±mgÄ±m","GamaxÄ±j","Gawan","GoÅdar","GoÅkar","Gulaban","HÃªnij","HÃ¼lÃ¼manÄ±j","HÄ±rhan","HadÄ±r","Hasanan","HayÄ±g","Haydar","Haydaran","Hopij","Huseyni","Hutan","JÃªle","Kalan","KaraÃ§oli","Karker","Kemer","KerdoÄ","KoÃ§er","KoÃ§gÄ±ri","Ko","Kulapi","KurÃªÅan","Kuzucani","Lejker","LertÄ±kan","Liceyij","LicokÄ±j","MÄ±rakan","MalmisanÄ±j","MamÄ±kan","Mansuran","MazgirtÄ±j","Mirazdar","Munzur","Munzuran","MuxÄ±ndÄ±j","NÄ±jar","PÄ±lemorij","PalÄ±j","Palewan","PasurÄ±j","PirajmanÄ±j","PiranÄ±j","Pulanugan","PulurÄ±j","Pulur","Qehreman","Rayber","ReÅtoÄ","RenÃ§ber","RoÅan","Ro","SÃªwazÄ±j","SeterÄ±j","SewregÄ±j","Sidar","Suwar","TercanÄ±j","Teres","TucÄ±kan","UsÄ±van","Varto","VatoÄ","VeÅte","WeranÄ±j","XÄ±nÄ±s","Xarput","XozatÄ±j","Xozat","Zana","ZiyaretÄ±j","ZoÄarÄ±j"];
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		rnd2 = Math.random() * nm3.length | 0;
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			nMs = nm2[rnd] + " " + nm3[rnd2];
			nm1.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			nMs = nm1[rnd] + " " + nm3[rnd2];
			nm1.splice(rnd, 1);
		}
		nm3.splice(rnd2, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}