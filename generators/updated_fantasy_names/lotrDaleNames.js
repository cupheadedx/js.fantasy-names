var br = "";

function nameGen(type){
	var nm1 = ["Adalag","Adam","Aevar","Agdi","Agnar","Alfr","Alrek","Alrekr","Alwis","Anlaf","Anskar","Ardgar","Armod","Arnaldr","Arnar","Arnis","Arnkel","Arnkell","Arnor","Arnridr","Arnstein","Arnvid","Arnvidar","Asabiarn","Asbiorn","Asbjorn","Asgrim","Askold","Asvard","Audr","Avaldr","Balder","Bard","Biarn","Bild","Biolan","Biolfr","Biorn","Bjarkmar","Bjolan","Bjorn","Bodmodr","Bodvar","Bodvarr","Bondi","Booth","Borgar","Brand","Brander","Broddr","Brondolf","Dag","Dagr","Delling","Dyri","Eddval","Egil","Egill","Eidr","Eilaf","Eilif","Einar","Einarr","Emund","Eric","Erland","Erling","Erlingr","Eyvind","Farman","Farulf","Fjalar","Fjolmod","Fjolnir","Fridgeir","Friggir","Galmr","Gardarr","Geirmund","Geirolf","Geirrod","Gellir","Gilling","Glammad","Godfred","Godfrid","Godmund","Godord","Gudbrand","Gudmund","Gudmundr","Gudrod","Gunnar","Gunnarr","Gunnor","Gus","Gustaw","Guthorm","Hadding","Hakon","Hallam","Halldor","Hallgrim","Hallvard","Halstein","Halward","Hamar","Hamund","Harald","Havarr","Heidrek","Heimdall","Heimir","Helgrim","Hemming","Hergrim","Hermund","Hermundr","Hervard","Hildir","Holgeir","Holmgeir","Hordr","Hrani","Hromund","Hromundr","Ingar","Ingemar","Ingimund","Ingimundr","Ingvar","Ingvarr","Iwar","Jorund","Jorundr","Kell","Kiaran","Knut","Kodran","Kormak","Leidorf","Lif","Lodmund","Lunt","Magnus","Malcolm","Mani","Moldan","Mord","Nikolas","Nikulas","Oddmar","Odell","Ogmund","Ogmundr","Olaf","Otkar","Ragnald","Ragnar","Ragnarr","Ranulf","Rennir","Ric","Roald","Runolf","Rutland","Saemund","Saemundr","Sigfred","Siggurd","Sigmund","Sigmundr","Sigurd","Solmund","Solmundr","Solvarr","Steinar","Steinarr","Stig","Storr","Stump","Sutherland","Sveinn","Swain","Tate","Thor","Thorald","Thorburn","Thordar","Thordr","Thorgil","Thorir","Thormod","Thormodr","Thrand","Thrandr","Tor","Tore","Torrad","Torwald","Ulf","Valagnar","Valbrandr","Valgard","Vamod","Vandill","Vandrad","Varin","Vemund","Vermund","Vermundr","Vermunds","Vilbradr","Volund"];
	var nm2 = ["Aegileif","Aesa","Agnes","Agnete","Aldis","Alfhild","Amalie","Andrea","Anette","Anna","Anne","Arnora","Asa","Ashildr","Asta","Astra","Astri","Astrid","Asvor","Bente","Bera","Bergdis","Berit","Birna","Brenda","Camilla","Caroline","Cathrine","Catrine","Christine","Dagmar","Dagna","Dalla","Danica","Dorte","Eir","Elina","Elisa","Elise","Ellen","Elsa","Emilie","Emma","Eona","Erica","Eydis","Eyja","Finna","Freya","Frida","Geirhildr","Geirny","Gerd","Gerda","Geror","Grima","Gudrun","Gunnhild","Gunnhildr","Guony","Haldis","Halla","Hallbera","Halldis","Halldora","Hanna","Hannah","Hanne","Hedda","Hege","Heidi","Heior","Helene","Helga","Herdis","Hilda","Hilde","Hildigunnr","Hlif","Hulda","Ida","Inga","Ingaberg","Ingaborg","Inge","Ingeborg","Inger","Ingibjorg","Ingileif","Ingri","Ingrid","Ingrior","Ingunn","Ingvil","Ingvild","Ingvill","Ingvoldr","Janne","Jenny","Jodis","Johanna","Jora","Josefina","Julie","Kaia","Kamilla","Kaolin","Karen","Kari","Karolina","Karoline","Katie","Katla","Katrine","Kelda","Kirsten","Kolfinna","Kolgrima","Kristin","Kristina","Kristine","Lene","Lisbet","Liw","Malena","Malin","Maren","Margit","Margrete","Mari","Maria","Marie","Marit","Marta","Marte","Marthe","Marthine","Martine","Mary","Matilda","Myrun","Nina","Niobjorg","Nora","Oda","Oddleif","Olava","Olina","Pernilla","Petra","Raforta","Raghild","Ronalda","Run","Signy","Sigrid","Sigrun","Solweig","Svana","Thora","Thorberta","Thordis","Vedis","Vilborg","Walda","Yngvildr"];
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(type === 1){
			rnd = Math.random() * nm2.length | 0;
			names = nm2[rnd];
			nm2.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm1.length  | 0;
			names = nm1[rnd];
			nm1.splice(rnd, 1);
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