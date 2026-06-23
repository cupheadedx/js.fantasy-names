
function nameGen(type){
	var nm1 = ["Aberrants","Abnormals","Abnorms","Abracadabri","Abras","Abs","Acroamatics","Alchemi","Alchemight","Allura","Allures","Anima","Anomalies","Arcana","Arcandor","Arcani","Ardor","Ascended","Astrolites","Augurs","Auras","Auroras","Aurors","Benders","Beyonders","Bonas","Cabal","Cadabras","Centrics","Chanters","Charismas","Charmed","Chimeras","Chosen","Conji","Conjura","Conjurites","Deviants","Diables","Diaboli","Diabolite","Divergents","Divina","Divine","Dreadfuls","Druids","Eclipsed","Enchanted","Enlightened","Esoteriques","Esoti","Esotopes","Ethera","Etheri","Exorci","Freaks","Gens","Glamora","Glamors","Glams","Hoci","Hoci Poci","Hocus","Hocuspo","Hoodoos","Illusionary","Incantates","Incantors","Incants","Invoques","Itzam","Jinxes","Kazams","Kerei","Learned","Magi","Magica","Magicians","Magius","Magneti","Mastria","Materia","Mutants","Mystics","Mystiques","Mythica","Mythics","Necromi","Necros","Obeah","Obi","Occult","Occulti","Occultists","Orphic","Peculiars","Possessed","Practicioners","Prophesied","Prophets","Prophised","Recondite","Runes","Runi","Runites","Sages","Scholars","Seers","Shadows","Shamans","Soothsayers","Sortileges","Spellbound","Spirited","Sprouted","Surged","Thaumaturgies","Theurgi","Touched","Transcended","Vallant","Varioso","Virtuoso","Vitalities","Vitals","Voyants","Warlock","Warlocks","Witches","Wizards"];

	var br = "";

	$('#placeholder').css('textTransform', 'capitalize');
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd = Math.random() * nm1.length | 0;
		names = nm1[rnd];
		nm1.splice(rnd, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}