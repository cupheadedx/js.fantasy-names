var br = "";

function nameGen(){
	var nm1 = ["A Fine Line","A Touch of Ink","Absolute Tat","Ace Up A Sleeve","All In The Wrist","Along The Line","Altered Ego","An Inkling","Black Ink","Black Pearl Ink","Bloody Ink","Body Canvas","Body Designs","Body Mods","Body Works","Bound by Design","Bound by Ink","Breath of Ink","Brothers in Ink","Certified Customs","Classique","Cloud of Ink","Color Me Inked","Colors of Magic","Crown of Ink","Dedication","Den of Inkiquities","Downtown Tattoos","Dream Ink","Dreaming of Ink","Empire of Ink","Eye of the Needle","Feel Good Ink","Finishing Touch","First Draft","Fit Like A Glove","Flying Colors","Forever Ink","Forever and Ever","Forever in Ink","Get Inked","Golden Touch","Habitattoo","Hard Lines","Heart On My Sleeve","Heart of Ink","Hotline Ink","I Ink, Therefore I Am","Ink & Steel","Ink About It","Ink Addicts","Ink Again","Ink Ambition","Ink Animal","Ink Bits","Ink City","Ink Dealer","Ink Design","Ink Envy","Ink Escape","Ink Galore","Ink Heart","Ink Inc.","Ink Inclined","Ink Ink, Nudge Nudge","Ink Instinct","Ink Isle","Ink Journeys","Ink On","Ink Tank","Ink This!","Ink'd","Inked Up","Inkindle","Inklined","Inkling","Inklusive","Inkoded","Inkognito","Inkorporated","Inkquire","Inkredible","Inkscape","Inksignia","Inkspire","Inque","Just Ink","Justin King (Just Inking)","Killer Ink","Kitchens' Ink","Kraken Studio","L'Ink","Monsters' Ink","N's Ink","Needle Art","No Ragrets Tattoos","On Point","One's True Colors","Pigment Exchange","Pigment Passion","Pigment of Truth","Pigments of Your Imagination","Pimp My Hide","Pimp My Ink","Pinpoint Art","Pins and Needles","Pretty in Ink","Rat-A-Tat-Tat","Royal Ink","Rusty's Needles","Saint Ink (St. Ink)","Sea of Ink","Sharp Art","Sisters in Ink","Skin Art","Skin Deep","Skin Display","Skin and Tones","Skin-Deep Beauty","Skins and Needles","Skinwear","Spark of Ink","Squid Studio","Stellar Ink","Stroke of Luck","Ta-2","Tat Shop","Tat' Beauty","Tatatooie","Tatman!","Tatoosle","Tatootsie","TatouchÃ©","Tats All, Folks","Tats Life","Tats, My Boy","Tats, The Way It Is","Tatt's All","Tatt's Amore","Tatt's Cute","Tatt's Impossible","Tatt's No Moon","Tatt's Why","Tattoo Champion","Tattoo Change","Tattoo Channel","Tattoo Dimension","Tattoo Envy","Tattoo Existence","Tattoo Taboo","Tattoo Temple","Tattoo'll Do","Tattoohoo","Tattooine","Tattos By Design","Tattoucan","The Art of Ink","The Coloring Book","The Cycle of Ink","The Empty Canvas","The Illustrated Man","The Illustrated Woman","The Ink Appeal","The Ink Branch","The Ink Cabinet","The Ink Cloud","The Ink Creature","The Ink Cycle","The Ink Doctor","The Ink Kink","The Ink Link","The Ink Trail","The Inkpot","The Inkubi","The Inkubus","The Inkwell","The Mad Tatter","The Pigment","The Quill","The Skin Canvas","The Social Club","The Tat Bat","The Tat Cat","The Tattoo Crew","The Tattoo Crib","The Tattoo Den","The Tattoomb","The Thin Line","Think Ink","This 'n Tat","Tit 'n Tat","Total Tat","Touch Base","Under Your Skin","White Rabbit Studio","wInk wInk"];
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd = Math.random() * nm1.length  | 0;
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