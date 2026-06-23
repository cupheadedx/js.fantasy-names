var nm1 = ["Acanthu","Acha","Aci","Acti","Ae","Aegy","Aepy","Ailu","Aithe","Aja","Alce","Alcela","Alli","Alo","Aloua","Amby","Amphi","An","Ana","Angui","Ani","Aniso","Antho","Anti","Antilo","Apa","Api","Apo","Apode","Apollo","Apte","Apteno","Arachno","Arcti","Arcto","Ardei","Ari","Arvi","As","Aste","Astero","Astro","Ate","Atele","Balae","Balse","Bar","Be","Bi","Bla","Bom","Bra","Brachy","Bran","Bu","Buba","Ca","Caca","Cae","Caele","Caeli","Cai","Cal","Calli","Came","Cani","Cap","Car","Cara","Carcha","Carchar","Cari","Cas","Casua","Cau","Ce","Celae","Cele","Celes","Celi","Cepha","Cephalo","Cer","Cera","Cerato","Ceratop","Ceru","Ceto","Chelo","Chilo","Chin","Chiro","Chloro","Cichli","Cle","Conno","Cora","Cotu","Cro","Croco","Cryp","Dasy","Del","Demo","Dendro","Dep","Desmo","Di","Dice","Dide","Dio","Dra","Dracae","Dro","Echi","Ele","Elea","Elia","Emy","Enhy","Ere","Eri","Es","Fal","Falco","Fe","Formi","Fra","Fre","Funa","Ga","Galeo","Gavia","Geo","Ger","Gira","Gli","Go","Gophe","Gori","Grui","Gu","Hali","Hela","Helo","Hemi","Hippo","Hydro","Hylo","Ida","Igua","Iri","Iso","La","Lace","Lago","Le","Lem","Leo","Li","Limu","Lito","Lu","Luca","Ly","Ma","Man","Mar","Mega","Melea","Melo","Mero","Meso","Micro","Molo","Myo","Myr","Na","Nan","Nasa","Necto","Neo","Neph","Ocho","Octo","Odo","Oka","Orci","Orea","Oria","Osteo","Ota","Pa","Pagu","Pan","Para","Passe","Pe","Pelo","Pera","Pha","Phae","Pici","Pla","Plata","Po","Pogo","Prio","Pro","Pseu","Psi","Pte","Pygo","Pyro","Ran","Rhin","Rhino","Ru","Rupi","Sa","Sagui","Sarco","Scor","Sele","Ser","Seto","Si","Smi","Sphy","Stri","Syl","Sylvi","Syn","Ta","Tada","Tamia","Tapi","Tera","Terra","Terre","Tetra","Tho","Thre","Trema","Tri","Ur","Ursi","Vara","Ve","Vega","Ves","Vi","Vive","Vul","Xeno"];
var nm2 = ["batus","bius","bus","caena","campa","canus","capra","cata","cebus","celis","cerdo","ceros","ces","cetus","cola","comys","cula","cus","dae","dalia","data","dea","dectus","demus","derma","des","dia","didae","do","don","doryx","durus","felis","fera","gale","galus","gata","gator","guis","laemus","leus","lia","linae","lis","lone","lurus","lus","lys","malis","mias","mo","morpha","mus","mys","na","nae","nia","nidae","ninae","no","nodon","noidea","nomys","nos","nus","nyx","pedia","pelma","pera","pes","pex","phaga","philus","phorus","pia","pidae","piones","pira","pius","poda","porus","pus","raena","rena","rex","ria","rida","ridae","rium","rodon","ros","rus","saurus","sodon","sorex","ta","taria","tela","tella","tera","terus","tes","thacus","therium","thida","thrix","tidae","tilia","tina","tine","tis","todea","toma","tona","tor","tos","tra","tula","tulus","tura","tus","verra","zoa"];

var br = "";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		rnd = Math.random() * nm1.length | 0;
		rnd2 = Math.random() * nm2.length | 0;
		nMs = nm1[rnd] + nm2[rnd2];
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}