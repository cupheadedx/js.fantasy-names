
function nameGen(type){
	var nm1 = ["Chege","Chomba","CiugÅ©","GÄ©chÅ©ki","GÄ©chÅ©rÅ©","GÄ©cheha","GÄ©chere","GÄ©chikÅ©","GÄ©chohi","GÄ©chuhÄ©","GÄ©konyo","GÄ©tÅ©ma","GÄ©tÅ©ra","GÄ©taÅ©","GÄ©tahi","GÄ©tari","GÄ©thÄ©nji","GÄ©thaiga","GÄ©thire","GÄ©tonga","GÄ©tukÅ©","GachÅ©hÄ©","Gachagua","Gachanja","Gachara","Gachii","Gakure","Gathaiya","Gathanja","Gathenya","Gathigira","Gathogo","Gathongo","Gathu","Gathua","Gathuuri","GatimÅ©","GithendÅ©","Goko","Hinga","IrÅ©ngÅ©","Ireri","KÄ©bachia","KÄ©bakÄ©","KÄ©bunja","KÄ©hÄ©a","KÄ©hara","KÄ©hiÅ©","KÄ©horo","KÄ©huna","KÄ©mani","KÄ©motho","KÄ©munya","KÄ©ngâOri","KÄ©nuthia","KÄ©nyanjui","KÄ©nyua","KÄ©oi","KÄ©ongo","KÄ©rÄ©ka","KÄ©rÄ©ma","KÄ©ragÅ©","KÅ©ngÅ©","KabirÅ©","Kabutha","Kago","Kagoci","Kagwa","KahÅ©thia","Kahara","KahiÄ©","Kairu","Kamande","KamangÄ©","Kamau","Kamotho","KaniÅ©","Kanja","KarÄ©mi","KarÅ©gÅ©","Karanja","KariÅ©ki","Karungu","Kenyatta","Kibe","Kimane","Kimaru","Kimathi","KinÅ©thia","KogÄ©","Koinange","Kuria","MÄ©chuki","MÅ©chene","MÅ©choki","MÅ©ciri","MÅ©gane","MÅ©go","MÅ©hÄ©a","MÅ©hÅ©ri","MÅ©hoho","MÅ©horo","MÅ©irÅ©rÄ©","MÅ©ite","MÅ©kundi","MÅ©nene","MÅ©ngai","MÅ©ngania","MÅ©rÄ©gÄ©","MÅ©rÄ©ithi","MÅ©rÄ©mi","MÅ©rÄ©ranja","MÅ©rÄ©u","MÅ©rÅ©ngarÅ©","MÅ©ragÅ©ri","MÅ©rakaru","MÅ©raya","MÅ©rira","MÅ©tÅ©ngâÅ¨","MÅ©tegi","MÅ©thÄ©nji","MÅ©thÅ©i","MÅ©thÅ©ngÅ©","MÅ©tiga","MÅ©tugi","MÅ©ya","Macharia","MahÄ©hu","Maina","Maitho","Mathani","Mathenge","Matu","MbÄ©ra","MbÅ©gua","MbÅ©rÅ©","Mogo","MuriÅ©ki","Murigo","MwagÄ©ru","Mwai","MwanÄ©ki","Mwangi","Mwathi","NdÅ©n'GÅ©","Ndegwa","NderitÅ©","Ndiangui","NdirangÅ©","NgÅ©gÄ©","NgÅ©njiri","Ng'Ang'A","NgarÄ©","NgechÅ©","Ngengi","NgichÅ©","NgigÄ©","Ngina","Nginyo","Ngure","NjÅ©ki","NjaÅ©","NjagÄ©","Njaramba","Njau","Njenga","NjerÅ©","Njogu","Njoka","Njomo","Njonjo","Njoroge","Njuguna","Nyamu","Nyoike","Nyoro","Thairu","Theuri","ThuÅ©","Thuku","Wachira,","Wachiru","Wachiuri","Wachiuru","Wahome","Waigwa","Wainaina","Waita","WaititÅ©","WakaritÅ©","WamÅ©gÅ©nda","WamahiÅ©","WambÅ©gÅ©","Wamiti","Wanderi","WangâOmbe","WangâOndu","Wang'Ombe","Wanjohi","Wanyoike","WarÅ©Ä©","WarÅ©irÅ©","Warari","Watene","WawerÅ©"];
	var nm2 = ["GakuhÄ©","Gathoni","Jata","Kanyi","Kioni","MÅ©kami","MÅ©kina","MÅ©mbi","MÅ©rÄ©nga","MÅ©ringo","MÅ©rugi","MÅ©thoni","Magiri","Makena","Moombi","Mukami","Mukondi","Mumbi","Murigo","Murugi","Muthoni","Mwara","Mwihaki","NÅ©ngari","Nduta","NgÄ©na","NgâEndo","Ngendo","Ngina","Njambi","Njeri","Njoki","Noni","NyagÅ©ra","NyagÅ©thiÄ©","Nyaguthii","Nyakio","Nyambugi","Nyambura","NyawÄ©ra","Nyawira","Nyokabi","WacÅ©","Waceera","Waceke","Wacuka","Wagichugu","Wahu","Waihumbu","WairimÅ©","Wairimu","Wairmu","WaithÄ©ra","Waitherero","Waithira","Wakiuru","WamÅ©yÅ©","Wamaitha","WambÅ©i","Wambeere","Wambugua","Wambui","Wameru","Wamuhu","Wamuiru","Wamweru","Wandia","WangÅ©","WangÅ©i","Wangai","WangarÄ©","Wangari","Wangeci","Wangera","Wangu","WanjÄ©ra","Wanja","Wanjeri","WanjikÅ©","Wanjiku","WanjirÅ©","Wanjira","Wanjiru","Wanyiri","Wanyora","WarÄ©nga","WarÅ©gÅ©rÅ©","Warigia","Wathira","WawÄ©ra","Wokabi"];

	var br = "";

	$('#placeholder').css('textTransform', 'capitalize');
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			rnd2 = Math.random() * nm2.length | 0;
			names = nm2[rnd] + " " + nm2[rnd2];
			nm2.splice(rnd, 1);
			nm2.splice(rnd2, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			rnd2 = Math.random() * nm1.length | 0;
			names = nm1[rnd] + " " + nm1[rnd2];
			nm1.splice(rnd, 1);
			nm1.splice(rnd2, 1);
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