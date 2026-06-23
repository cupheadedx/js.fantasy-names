function nameGen(type){
	var nm1 = ["Abdulah","Adem","Adnan","Ado","Ahmed","Ahmo","Ajdin","Aldin","Alem","Alija","Almir","Amar","Amel","Bahir","Bahrija","Bahrudin","Bakir","Bekir","Began","Beriz","Benjamin","Besim","Besir","Bilal","Äamil","Äerim","Demir","Dilaver","DÅ¾afer","DÅ¾anan","DÅ¾enan","DÅ¾emal","Edib","Edin","Ejub","Ekrem","Elmedin","Elvedin","Emir","Enis","Ensar","Esad","Ezib","Fadil","Fahrudin","Fahret","Faruk","Faris","Ferid","Fikret","Fuad","Galib","Halid","Halil","Hamza","Haris","Hasan","Hazim","Hurem","Husein","Ibrahim","Irfan","Idris","Ismail","Ismet","Izet","Izudin","Jasmin","JaÅ¡ar","Jusuf","Kadir","Kadrija","Kasim","Kemal","Kenan","Kerim","Mahir","Maid","Mehmed","Muhamed","Mensur","MerdÅ¾an","Mersudin","Mesud","Mevludin","Mirza","Miralem","Mirsad","Muamer","Munir","Musa","Mustafa","Nadir","Nedim","NedÅ¾ad","Nermin","Nihad","Nijaz","Nurija","Nusret","Omer","Osman","Rahim","Ramiz","RedÅ¾ep","Resul","Rijad","RuÅ¾dija","Sabahudin","Sadik","Safet","Said","Sakib","Samed","Samir","Sead","Sejfudin","Selim","Semir","Senad","Sinan","Suad","Å aban","Å acir","Å efik","Teufik","Tarik","Uzejir","Vedad","Vehbija","Vildan","Zafer","Zahid","Zahir","Zejnil","Zijad","Zikret"];
	var nm2 = ["Abasa","Adila","Advija","Aida","AiÅ¡a","Ajla","AjÅ¡a","Almasa","Almedina","Amela","Amila","Amina","Amira","Amra","Anesa","Anida","Asija","Azra","Bahra","Begzada","Behija","Belma","Berina","Delila","Devleta","Dina","Disa","DÅ¾ana","DÅ¾emila","DÅ¾enana","Ediba","Edina","Elma","Elmedina","Emina","Emira","Enesa","Enisa","Esma","Fadila","Fahira","Fahreta","Fatima","Fazila","Fikreta","Fuada","Habiba","Hafiza","HatidÅ¾a","Hajrija","Hasiba","Hasna","Hasija","Ifeta","Ismeta","Izeta","Jasmina","Jemina","Kadira","Lamija","Latifa","Lejla","Mahira","Maida","Majda","Medina","Mejrema","Meliha","Mensura","Mersija","Mevlida","Muniba","Nadira","Naida","Naza","Nazifa","Nazmija","Nevzeta","Nihada","Rabija","Ramiza","Rasima","Refija","Rukija","Sabaheta","Sabiha","Sabira","Sadeta","Sadija","Sadika","Safeta","Safija","Sahiba","Saida","Saima","Sakiba","Saliha","Salima","Samira","Samra","Seada","Selma","Senada","Suada","Subhija","Å efika","Å ehzada","Å eherzada","Å ejla","Tima","Vahida","Vehbija","Vildana","Zaida","Zehra","Zineta","Zuhra","Zumreta"];
	var nm3 = ["ÄosiÄ","ÄauÅ¡eviÄ","Äejvan","ÄengiÄ","ÄoliÄ","ÄorbadÅ¾iÄ","Å ariÄ","AbadÅ¾iÄ","AdiloviÄ","Aganovic","Agic","Ahmetovic","Ajanovic","Alagic","AleÄkoviÄ","AleksiÄ","Alic","Alihodzic","AlomeroviÄ","ArnautoviÄ","Arnautovic","Avdagic","Avdic","BaÅ¡iÄ","BabiÄ","BajiÄ","BajraktareviÄ","BajramoviÄ","Bajramovic","Bajric","BalaÅ¡eviÄ","BaljiÄ","Basic","BeÄiroviÄ","BeÅ¡iÄ","BeÅ¡lagiÄ","Becirovic","BeganoviÄ","Beganovic","Begic","BegoviÄ","Begovic","BeroviÄ","Besic","BiÄakÄiÄ","Bijedic","Bilic","BlagojeviÄ","BoÅ¾iÄ","BogdanoviÄ","BojiÄ","BoliÄ","Bosnjak","Brkic","BrunÄeviÄ","Buljubasic","BuriÄ","Catic","Causevic","Cehajic","Cengic","Coric","DÅ¾eko","DamjanoviÄ","Dedic","DeliÄ","Delic","DemiroviÄ","Demirovic","Dervisevic","Divjak","Dizdarevic","Djukic","Djuric","Dodik","DugaliÄ","Durakovic","Dzafic","EkmeÄiÄ","Fazlic","Fejzic","FerhatoviÄ","FilipoviÄ","GajiÄ","Galic","Gavric","GrbiÄ","Gudelj","HadÅ¾iÄ","HadÅ¾ihaliloviÄ","Hadzic","Hajdarevic","Halilovic","Hamzic","HandanoviÄ","Hasanbegovic","Hasanovic","Hasic","HodÅ¾iÄ","Hodzic","Husic","Huskic","Ibrahimovic","IliÄ","Imamovic","IvankoviÄ","IvanoviÄ","IzetbegoviÄ","JaÅ¡iÄ","Jahic","JanjiÄ","JankoviÄ","Jasarevic","JeliÄ","JokiÄ","JovanoviÄ","JoviÄ","JoviÄiÄ","Jukic","Juric","Jusic","Jusufovic","Kadic","Kadric","Kapetanovic","KapiÄ","Karic","KneÅ¾eviÄ","KolaÅ¡inac","Kopanja","Koroman","KovaÄ","KovaÄeviÄ","Kovac","Kulenovic","Kurjak","KurtÄehajiÄ","Kurtovic","Kusturica","Lakic","LaziÄ","Lucic","LukiÄ","Mahmutovic","MajstoroviÄ","MaksimoviÄ","MandiÄ","Maric","MarjanoviÄ","MarkoviÄ","MartinoviÄ","Masic","MatiÄ","MatkoviÄ","MeÅ¡iÄ","Mehic","MehmedbaÅ¡iÄ","Mehmedovic","Memic","Memisevic","Mesic","MiÄiÄ","MiÅ¡iÄ","MihajloviÄ","MijatoviÄ","MilanoviÄ","MiliÄ","MiliÄeviÄ","MiloÅ¡eviÄ","MilovanoviÄ","MitroviÄ","Muharemovic","Muhic","Mujagic","Mujanovic","Mujezinovic","Mujic","Mujkanovic","Mujkic","Mulic","Muminovic","MuratoviÄ","Muratovic","Mustafic","MutapÄiÄ","NadareviÄ","NiÅ¡iÄ","NikiÄ","NikoliÄ","NovakoviÄ","Nuhanovic","ObradoviÄ","Okanovic","Omanovic","Omeragic","Omerovic","Osmanovic","OstojiÄ","PaÄariz","PajiÄ","Pasalic","Pasic","PavloviÄ","Pejic","PeriÄ","PetkoviÄ","PetroviÄ","PopoviÄ","PredojeviÄ","PreldÅ¾iÄ","RadiÄ","RadovanoviÄ","RadoviÄ","RakiÄ","Ramic","Redzic","RistiÄ","Sabanovic","Sabic","Sakic","SalatiÄ","SalihoviÄ","Salihovic","Salkic","Samardzic","SarajliÄ","Sarajlic","Saric","SaviÄ","Sehic","Sehovic","Selimovic","Sidran","SijerÄiÄ","SimiÄ","Sinanovic","Sisic","Smajic","Smajlovic","Softic","SokoloviÄ","Spahic","StaniÄ","StankoviÄ","StevanoviÄ","Stjepanovic","StojanoviÄ","Stupar","SuÅ¡iÄ","Subasic","SubotiÄ","Suljic","Susic","Tabakovic","TadiÄ","TahiroviÄ","Tahirovic","Tanovic","TerziÄ","TodoroviÄ","TomiÄ","TopÄagiÄ","TopaloviÄ","Topic","ToskiÄ","TurkoviÄ","VasiÄ","Velic","Vidovic","VukoviÄ","ZahiroviÄ","Zahirovic","Zovko","Zukic"];
	var br = "";

	$('#placeholder').css('textTransform', 'capitalize');
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd2 = Math.floor(Math.random() * nm3.length);
		if(tp === 1){
			rnd = Math.floor(Math.random() * nm2.length);
			names = nm2[rnd] + " " + nm3[rnd2];
			nm2.splice(rnd, 1);
		}else{
			rnd = Math.floor(Math.random() * nm1.length);
			names = nm1[rnd] + " " + nm3[rnd2];
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