var nm1 = ["Augur","Bringer","Diviner","Emissary","Envoy","Foreteller","Harbinger","Herald","Magus","Messenger","Oracle","Prophet","Seer"];
var nm4 = ["l'Augur","le Porteur","le Divineur","l'Ãmissaire","l'EnvoyÃ©","le PrÃ©sage","le HÃ©raut","le Mage","le Messager","l'Oracle","le ProphÃ¨te","le Voyant"];
	
function nameGen(type){
	var nm2 = ["Angels","Balance","Beauty","Belief","Benevolance","Birth","Blood","Bones","Chance","Change","Chaos","Charity","Choices","Clarity","Clues","Commandments","Commands","Compassion","Conviction","Creation","Curiosity","Cycles","Darkness","Death","Delights","Demands","Desires","Destiny","Discovery","Divinity","Doom","Dreams","Earth","Emotion","Eternity","Existence","Faith","Fire","Flames","Fortune","Freedom","God","Gods","Grace","Guidance","Happiness","Harmony","Heaven","Honesty","Ice","Joy","Judgment","Justice","Kindness","Liberation","Liberty","Light","Love","Marvel","Mercy","Miracles","Obscurity","Omens","Origins","Peace","Possibilities","Power","Provinence","Prudence","Purpose","Reality","Redemption","Reflection","Secrets","Servants","Shadows","Sorrow","Spirits","Time","Tolerance","Tranquility","Truth","Water","Wisdom","the Angel","the Angels","the Aspect","the Beginning","the Beyond","the Birth","the Cause","the Century","the Church","the Clouds","the Creation","the Creator","the Dark","the Divine","the Dominion","the Dream","the Earth","the End","the Epoch","the Eternal","the Faith","the Father","the Flock","the Founder","the God","the Gods","the Heart","the Heavens","the Higher Power","the Light","the Master","the Mistress","the Mother","the Night","the One","the Spirits","the Stranger","the Truth","the Universe","the World","the one God"];
	var nm3 = ["Ancient","Angelic","Beautiful","Beloved","Blind","Bloody","Sanguin","Bright","Brilliant","Broken","Bronze","Chosen","Craven","Crimson","Cruel","Dead","Defiant","Diligent","Disfigured","Emerald","Enchanted","Eternal","Ethereal","Evanescent","Faded","False","Fearless","First","Forsaken","Gifted","Golden","Hallowed","High","Honest","Humble","Hungry","Impure","Diabolical","Infernal","Innocent","Learned","Light","Little","Lone","Lucky","Lying","Macabre","Mad","Marked","Anonymous","Mighty","Mindless","Mysterious","Old","Original","Perfumed","Phony","Prime","Primeval","Pure","Quiet","Radiant","Scaly","Silent","Silver","Sinless","Sinned","Skeletal","Sleeping","Storm","Supreme","Tempest","True","Twin","Unknown","Unnamed","Whispering","Wicked"];
	var nm5 = ["d'Ãmotion","d'Ãquilibre","d'ÃternitÃ©","d'Amour","d'Anges","d'Au-DelÃ ","d'Eau","d'Esprits","d'Existence","d'Harmonie","d'HonnÃªtetÃ©","d'ObscuritÃ©","d'Orientation","d'Os","de Balance","de BeautÃ©","de Bienveillance","de Bonheur","de Chance","de Changement","de Chaos","de CharitÃ©","de ClartÃ©","de Compassion","de Conviction","de CrÃ©ation","de Croyance","de CuriositÃ©","de DÃ©couverte","de DÃ©lice","de Demandes","de Destin","de Dieux","de DivinitÃ©","de Feu","de Foi","de Fortune","de Gentillesse","de Glace","de GrÃ¢ce","de Joie","de Jugement","de Justice","de LibÃ©ration","de LibertÃ©","de LumiÃ¨re","de Merveille","de MisÃ©ricorde","de Mort","de Naissance","de Paix","de Paradis","de PossibilitÃ©s","de PrÃ©sages","de Provenance","de Prudence","de Puissance","de RÃ©alitÃ©","de RÃ©demption","de RÃ©flexion","de RÃªves","de Sagesse","de Sang","de Secrets","de Temps","de Terre","de TolÃ©rance","de TranquillitÃ©","de VÃ©ritÃ©","de l'Ãglise","de l'Ãpoque","de l'Ãternel","de l'Ãtranger","de l'Ange","de l'Aspect","de l'Inaugeration","de l'ObscuritÃ©","de l'Univers","de la Cause","de la CrÃ©ation","de la DivinitÃ©","de la Domination","de la Fin","de la Foi","de la LumiÃ¨re","de la MÃ¨re","de la MaÃ®tresse","de la Naissance","de la Nuit","de la Perte","de la Puissance SupÃ©rieure","de la RÃ©solution","de la Terre","de la VÃ©ritÃ©","des Anges","des Choix","des Cieux","des Commandements","des Cycles","des DÃ©lices","des DÃ©sirs","des Dieux","des Esprits","des Flammes","des Indices","des Miracles","des Nuages","des Ombres","des Ordres","des Origines","des Serviteurs","du CÅur","du Commandement","du CrÃ©ator","du DÃ©but","du Dieu","du Feu","du Fondateur","du MaÃ®tre","du Monde","du PÃ¨re","du RÃªve","du SiÃ¨cle","du Troupeau"];
	var nm6 = ["Ãcailleux","Ãmeraude","Ãternel","ÃthÃ©rÃ©","Ãvanescent","AbandonnÃ©","AffamÃ©","Ancien","AngÃ©lique","Anonyme","Aveugle","Brillant","BrisÃ©","ChÃ©ri","Chanceux","Choisi","Cramoisi","Cruel","DÃ©figurÃ©","DÃ©lavÃ©","Diabolique","Diligent","DouÃ©","EnchantÃ©","Endormi","Fou","Furieux","HonnÃªte","Humble","ImpÃ©rissable","Impur","Inconnu","Infernal","Innocent","InnomÃ©","Jumeau","MÃ©chant","Macabre","MarquÃ©","Menteur","Mort","MystÃ©rieux","Original","PÃ©chÃ©","Paisible","ParfumÃ©","Primordial","Puissant","Pur","Qui Chuchote","Radiant","Rayonnant","SacrÃ©","Sanglant","Sanguinaire","Sans PÃ©chÃ©","Sans Peur","Savant","Silencieux","Solitaire","Squelettique","Stupide","SuprÃªme","d'Argent","d'Or","de Bronze","de DÃ©fi"];

	var br = "";

	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		if(tp === 1){
			rnd = Math.random() * nm4.length | 0;
			if(i < 5){
				rnd2 = Math.random() * nm5.length | 0;
				names = nm4[rnd] + " " + nm5[rnd2];
				nm5.splice(rnd2, 1);
			}else{
				rnd2 = Math.random() * nm6.length | 0;
				names = nm4[rnd] + " " + nm6[rnd2];
				nm6.splice(rnd2, 1);
			}
		}else{
			rnd = Math.random() * nm1.length | 0;
			if(i < 5){
				rnd2 = Math.random() * nm2.length | 0;
				names = "The " + nm1[rnd] + " of " + nm2[rnd2];
				nm2.splice(rnd2, 1);
			}else{
				rnd2 = Math.random() * nm3.length | 0;
				names = "The " + nm3[rnd2] + " " + nm1[rnd];
				nm3.splice(rnd2, 1);
			}
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