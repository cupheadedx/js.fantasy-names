
function nameGen(type){
	var nm1 = ["Ä½uboÅ¡","Ä½ubomÃ­r","Å imon","Å tefan","Å½igmund","Adam","AleÅ¡","Alexander","Alojz","Andrej","AugustÃ­n","Aurel","Bartolomej","BenjamÃ­n ","BlaÅ¾ej","BohumÃ­r","Bohuslav","Branislav","Branko","Bronislav","Ctirad","Cyril","DÃ¡vid","Dalibor","Daniel","Denis","DionÃ½z","Dominik","Drahoslav","DuÅ¡an","Eduard","Erik","Eugen","Filip","Gabriel","Gregor","Henrich","Imrich","Ivan","JÃ¡n","JÃºlius","Jakub","Jaroslav","JonÃ¡Å¡","Jozef","Juraj","Kamil","Karol","KazimÃ­r","Klement","Koloman","KonrÃ¡d","Kornel","Ladislav","LukÃ¡Å¡","Marcel","Marek","MariÃ¡n","Martin","MatÃºÅ¡","Matej","MaximiliÃ¡n","Metod","Michal","MikulÃ¡Å¡","Milan","MiloÅ¡","Miloslav","Miroslav","Oliver","Ondrej","Patrik","Pavol","Peter","Radovan","RenÃ©","Richard","Robert","Roman","Samuel","Silvester","SlavomÃ­r","Stanislav","TadeÃ¡Å¡","Teodor","Tibor","Timotej","TomÃ¡Å¡","VÃ¡clav","VÃ­t","ValentÃ­n","Vavrinec","Viktor","Viliam","Vincent","VladimÃ­r","Vladislav","Vojtech","Vratislav","Zdenko","Zdeno"];
	var nm2 = ["Å tefÃ¡nia","Å½ofia","Adriana","AlÅ¾beta","AlbÃ­na","Alena","Alexandra","Alica","AmÃ¡lia","AnastÃ¡zia","Andrea","Angelika","Anna","AntÃ³nia","Barbora","BeÃ¡ta","Blanka","BoÅ¾ena","Branislava","Bronislava","CecÃ­lia","Dagmar","Danica","Daniela","Darina","Denisa","Dominika","Dorota","DuÅ¡ana","Edita","Elena","EmÃ­lia","Ema","Ester","Eva","Gabriela","GertrÃºda","Hana","Hedviga","Helena","Ivana","Ivanka","Iveta","Ivona","JÃºlia","Jana","Jarmila","Jaroslava","Jolana","JozefÃ­na","Judita","JustÃ­na","Kamila","KatarÃ­na","KlÃ¡ra","Klaudia","KristÃ­na","LÃ½dia","Ladislava","Lenka","Linda","Ä½ubica","Ä½ubomÃ­ra","Lucia","MÃ¡ria","Margita","Mariana","Marika","Marta","Martina","MelÃ¡nia","Michaela","Miroslava","Monika","NatÃ¡lia","Nela","Nikola","Nina","OlÃ­via","OÄ¾ga","PatrÃ­cia","PaulÃ­na","Petra","Petronela","RenÃ¡ta","Romana","SÃ¡ra","Silvia","Simona","SoÅa","Sofia","Stanislava","Svetlana","Tamara","Tatiana","TerÃ©zia","ValÃ©ria","ValentÃ­na","Vanda","Vanesa","Veronika","ViktÃ³ria","Vilma","VladimÃ­ra","Zita","Zlatica","Zora","Zuzana","Zuzka"];
	var nm3 = ["ÄÃ­Å¾ik","Äiernik","Äierny","Å Å¥astnÃ½","Å irokÃ½","BaÄa","BanÃ­k","BartoÅ¡","Biely","Biskup","Bosko","Chren","ChrobÃ¡k","CibuÄ¾ka","Äuda","DobrovodskÃ½","DoleÅ¾al","Dolina","Havel","HodÅ¾a","HoliÄ","Holub","HornickÃ½","HornÃ­k","Jahoda","JankoviÄ","JeleÅ","KÄ¾ÃºÄiar","KoÄiÅ¡","KocÃºr","KollÃ¡r","Koleno","KomÃ¡r","KoreÅ","Kostra","KovÃ¡Ä","KrÃ¡Ä¾","KrÃ­Å¾","KuchÃ¡r","LÃ¡ska","MÃ¤siar","MalÃ½","Maliar","Malina","MeÄiar","MedvedÃ­k","MedveÄ","MlynÃ¡r","MokrÃ½","MrÃ¡z","Nedved","NovÃ¡k","OtÄenÃ¡Å¡","PekÃ¡r","PokornÃ½","RybÃ¡r","SkalickÃ½","SklenÃ¡r","SlanÃ½","Slavik","SmutnÃ½","StrnÃ¡d","SuchÃ½","SurovÃ½","TesÃ¡r","Tesarik","TichÃ½","Zima"];
	var nm4 = ["Äierna","ÄiliakovÃ¡","Å afÃ¡rikovÃ¡","BartkovÃ¡","BellovÃ¡","BlahovÃ¡","BotoÅ¡ovÃ¡","BottovÃ¡","BratislavskÃ¡","ChlebovskÃ¡","ChlebovcovÃ¡","ÄudovÃ¡","EÅ¡tokovÃ¡","GrgasovÃ¡","HodÅ¾ovÃ¡","HodosyovÃ¡","HrljacovÃ¡","JÃ¡noÅ¡Ã­kovÃ¡","JilemnickÃ¡","JilemniÄkovÃ¡","KaliskÃ¡","KoÄiÅ¡ovÃ¡","KoleniÄkovÃ¡","KollÃ¡rovÃ¡","KostrovÃ¡","KovÃ¡ÄovÃ¡","KrÃ¡Ä¾ovÃ¡","LukÃ¡ÄovÃ¡","MiÅ¡urovÃ¡","MiÅ¡urovÃ¡","NovomedskÃ¡","NovomeskÃ¡","OndrejovÃ¡","OrszÃ¡ghovÃ¡","PauÄulovÃ¡","PetrovÃ¡","PivovarÄovÃ¡","PleÅ¡tinskÃ¡","PreÅ¡ovskÃ¡","RÃ¡zusovÃ¡","RepkovÃ¡","RybÃ¡rovÃ¡","SmrekovÃ¡","TesÃ¡rovÃ¡","TuroÅ¡Ã­kova","UrbanovÃ¡","VajanskÃ¡","VojtechovÃ¡","VysokÃ¡","ZÃ¡horecovÃ¡","ZahorecovÃ¡"];

	var br = "";

	$('#placeholder').css('textTransform', 'capitalize');
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			rnd2 = Math.random() * nm4.length | 0;
			names = nm2[rnd] + " " + nm4[rnd2];
			nm2.splice(rnd, 1);
			nm4.splice(rnd2, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			rnd2 = Math.random() * nm3.length | 0;
			names = nm1[rnd] + " " + nm3[rnd2];
			nm1.splice(rnd, 1);
			nm3.splice(rnd2, 1);
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