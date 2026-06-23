var nm1 = ["Augur","Bringer","Diviner","Emissary","Envoy","Foreteller","Harbinger","Herald","Magus","Messenger","Oracle","Prophet","Seer"];
var nm4 = ["l'Augur","le Porteur","le Divineur","l'Émissaire","l'Envoyé","le Présage","le Héraut","le Mage","le Messager","l'Oracle","le Prophète","le Voyant"];
	
function generator$miscellaneous$prophetNames(type){
	i = Math.floor(Math.random() * 10);

	var nm2 = ["Angels","Balance","Beauty","Belief","Benevolance","Birth","Blood","Bones","Chance","Change","Chaos","Charity","Choices","Clarity","Clues","Commandments","Commands","Compassion","Conviction","Creation","Curiosity","Cycles","Darkness","Death","Delights","Demands","Desires","Destiny","Discovery","Divinity","Doom","Dreams","Earth","Emotion","Eternity","Existence","Faith","Fire","Flames","Fortune","Freedom","God","Gods","Grace","Guidance","Happiness","Harmony","Heaven","Honesty","Ice","Joy","Judgment","Justice","Kindness","Liberation","Liberty","Light","Love","Marvel","Mercy","Miracles","Obscurity","Omens","Origins","Peace","Possibilities","Power","Provinence","Prudence","Purpose","Reality","Redemption","Reflection","Secrets","Servants","Shadows","Sorrow","Spirits","Time","Tolerance","Tranquility","Truth","Water","Wisdom","the Angel","the Angels","the Aspect","the Beginning","the Beyond","the Birth","the Cause","the Century","the Church","the Clouds","the Creation","the Creator","the Dark","the Divine","the Dominion","the Dream","the Earth","the End","the Epoch","the Eternal","the Faith","the Father","the Flock","the Founder","the God","the Gods","the Heart","the Heavens","the Higher Power","the Light","the Master","the Mistress","the Mother","the Night","the One","the Spirits","the Stranger","the Truth","the Universe","the World","the one God"];
	var nm3 = ["Ancient","Angelic","Beautiful","Beloved","Blind","Bloody","Sanguin","Bright","Brilliant","Broken","Bronze","Chosen","Craven","Crimson","Cruel","Dead","Defiant","Diligent","Disfigured","Emerald","Enchanted","Eternal","Ethereal","Evanescent","Faded","False","Fearless","First","Forsaken","Gifted","Golden","Hallowed","High","Honest","Humble","Hungry","Impure","Diabolical","Infernal","Innocent","Learned","Light","Little","Lone","Lucky","Lying","Macabre","Mad","Marked","Anonymous","Mighty","Mindless","Mysterious","Old","Original","Perfumed","Phony","Prime","Primeval","Pure","Quiet","Radiant","Scaly","Silent","Silver","Sinless","Sinned","Skeletal","Sleeping","Storm","Supreme","Tempest","True","Twin","Unknown","Unnamed","Whispering","Wicked"];
	var nm5 = ["d'Émotion","d'Équilibre","d'Éternité","d'Amour","d'Anges","d'Au-Delà","d'Eau","d'Esprits","d'Existence","d'Harmonie","d'Honnêteté","d'Obscurité","d'Orientation","d'Os","de Balance","de Beauté","de Bienveillance","de Bonheur","de Chance","de Changement","de Chaos","de Charité","de Clarté","de Compassion","de Conviction","de Création","de Croyance","de Curiosité","de Découverte","de Délice","de Demandes","de Destin","de Dieux","de Divinité","de Feu","de Foi","de Fortune","de Gentillesse","de Glace","de Grâce","de Joie","de Jugement","de Justice","de Libération","de Liberté","de Lumière","de Merveille","de Miséricorde","de Mort","de Naissance","de Paix","de Paradis","de Possibilités","de Présages","de Provenance","de Prudence","de Puissance","de Réalité","de Rédemption","de Réflexion","de Rêves","de Sagesse","de Sang","de Secrets","de Temps","de Terre","de Tolérance","de Tranquillité","de Vérité","de l'Église","de l'Époque","de l'Éternel","de l'Étranger","de l'Ange","de l'Aspect","de l'Inaugeration","de l'Obscurité","de l'Univers","de la Cause","de la Création","de la Divinité","de la Domination","de la Fin","de la Foi","de la Lumière","de la Mère","de la Maîtresse","de la Naissance","de la Nuit","de la Perte","de la Puissance Supérieure","de la Résolution","de la Terre","de la Vérité","des Anges","des Choix","des Cieux","des Commandements","des Cycles","des Délices","des Désirs","des Dieux","des Esprits","des Flammes","des Indices","des Miracles","des Nuages","des Ombres","des Ordres","des Origines","des Serviteurs","du Cœur","du Commandement","du Créator","du Début","du Dieu","du Feu","du Fondateur","du Maître","du Monde","du Père","du Rêve","du Siècle","du Troupeau"];
	var nm6 = ["Écailleux","Émeraude","Éternel","Éthéré","Évanescent","Abandonné","Affamé","Ancien","Angélique","Anonyme","Aveugle","Brillant","Brisé","Chéri","Chanceux","Choisi","Cramoisi","Cruel","Défiguré","Délavé","Diabolique","Diligent","Doué","Enchanté","Endormi","Fou","Furieux","Honnête","Humble","Impérissable","Impur","Inconnu","Infernal","Innocent","Innomé","Jumeau","Méchant","Macabre","Marqué","Menteur","Mort","Mystérieux","Original","Péché","Paisible","Parfumé","Primordial","Puissant","Pur","Qui Chuchote","Radiant","Rayonnant","Sacré","Sanglant","Sanguinaire","Sans Péché","Sans Peur","Savant","Silencieux","Solitaire","Squelettique","Stupide","Suprême","d'Argent","d'Or","de Bronze","de Défi"];

	var tp = type;
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
		return names;
}