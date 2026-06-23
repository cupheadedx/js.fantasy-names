var br = "";

function nameGen(type){
	var tp = type;
	var nm1 = ["Ãclatant","Ãternel","ÃthÃ©rÃ©","Abondant","Ancien","AncrÃ©","AngÃ©lique","Ardent","BrÃ»lant","CÃ©leste","Central","Champion","Colossal","Divin","DorÃ©","Doux","EnchantÃ©","Errant","ExaltÃ©","GÃ©ant","GÃ©nÃ©reux","Gracieux","Grandiose","IllimitÃ©","Imposant","Incessant","Infini","Invincible","Paradisiaque","PerpÃ©tuel","Primal","Primitif","Protecteir","Puissant","Pur","RÃ©galien","Radiant","Radieux","Royal","SacrÃ©","Saint","Solitaire","Squelettique","Tranquille","VÃ©nÃ©rÃ©","Vertueux","Vibrant","d'Ãme","d'Ãclat","d'Ãmotion","d'Ãnergie","d'Ãquilibre","d'ÃternitÃ©","d'Ãvolution","d'Abondance","d'Accord","d'Ambition","d'Amour","d'Ange","d'Ardeur","d'Argent","d'Aube","d'EspÃ©rance","d'Esprit","d'Existence","d'ExubÃ©rance","d'Harmonie","d'Honneur","d'Imagination","d'IndÃ©pendance","d'Indulgence","d'Infini","d'InfinitÃ©","d'Innocence","d'Ivoire","d'Or","d'Orage","d'Ordre","de Bataille","de BeautÃ©","de Bienveillance","de Bonheur","de Bravoure","de Brillant","de Chagrin","de Chance","de Chaos","de Concorde","de Connaissance","de Courage","de CrÃ©ation","de Croissance","de Croyance","de DÃ©but","de DÃ©couverte","de DÃ©lice","de Demain","de DestinÃ©e","de Destin","de Donation","de Douleur","de FÃ©licitÃ©","de Famille","de Feu","de FidÃ©litÃ©","de Flambeau","de Foi","de Fondation","de Fortune","de FumÃ©e","de Garantie","de Gentillesse","de GrÃ¢ce","de GuÃ©rison","de Hasard","de Joie","de Jugement","de LibÃ©ration","de LibertÃ©","de Livraison","de Lueur","de LumiÃ¨re","de Lutte","de MÃ©moire","de MÃ©moires","de Magie","de Merveille","de Mort","de Naissance","de Nos AncÃªtres","de Notre Peuple","de Paix","de Paradis","de Passion","de Patronage","de Phare","de PitiÃ©","de Pouvoir","de Promesse","de ProspÃ©ritÃ©","de Protection","de Puissance","de PuretÃ©","de RÃ©demption","de RÃ©flexion","de RÃªvasserie","de RÃªverie","de Raccordement","de Richesse","de SÃ©curitÃ©","de SÃ©rÃ©nitÃ©","de Sagesse","de SaintetÃ©","de Sanctuaire","de Sang","de SantÃ©","de Solutions","de Songerie","de Sort","de Sourire","de Souvenir","de TempÃªte","de Temps","de Tonnerre","de Tout","de Tradition","de TranquillitÃ©","de VÃ©nÃ©ration","de VÅux","de Vie","de VitalitÃ©","de l'Au-DelÃ ","de l'Aurore","de l'Univers","de la Famille","de la Fin","de la LignÃ©e","de la MÃ¨re","de la Maison","de la Terre","de la Vie","des Ãmes","des AncÃªtres","des Anciens","des Anges","des Arbres","des Bijoux","des CÅurs","des ChaÃ®nes","des Champions","des Couleurs","des Dimensions","des Esprits","des FÃªtes","des Familles","des Flammes","des Gens","des Liens","des LignÃ©es","des LumiÃ¨res","des MÃ©moires","des Merveilles","des Miracles","des Mondes","des Morts","des Naissances","des Os","des Passages","des RÃ©ponses","des RÃªves","des SortilÃ¨ges","des TrÃ´nes","du CÅur","du Ciel","du Commencement","du CrÃ©ateur","du DÃ©but","du Futur","du Globe","du Monde","du PÃ¨re","du PassÃ©","du Sanctuaire","du Sang","du TrÃ´ne","du Troupeau"];
	var nm2 = ["Abundance","Accord","Ambition","Ancestors","Angels","Answers","Balance","Battle","Beauty","Beginnings","Belief","Birth","Births","Blood","Bloodlines","Bones","Bravery","Brilliance","Chains","Champions","Chances","Prosperity","Paradise","Hope","Chaos","Colors","Connections","Vitality","Courage","Creation","Dawn","Daydreams","Death","Delight","Delivery","Dimensions","Discovery","Dreams","Emotion","Energy","Eternity","Existence","Faith","Families","Family","Fate","Feasts","Fire","Flames","Flocks","Fortunes","Freedom","Futures","Giants","Gifts","Gold","Grace","Growth","Happiness","Harmony","Health","Hearts","Heaven","Honor","Imagination","Independence","Infinity","Innocence","Jewels","Judgment","Kindness","Knowledge","Liberty","Life","Lifeblood","Light","Lights","Love","Memories","Memory","Mercy","Miracles","Order","Our Ancestors","Our People","Pasts","Paths","Peace","Power","Promise","Protection","Purity","Reckoning","Redemption","Reflection","Riches","Royals","Sanctitude","Sanctuary","Security","Serenity","Silver","Smiles","Smoke","Sorrow","Souls","Spells","Spirits","Storms","Struggles","Thrones","Thunder","Time","Tomorrows","Tradition","Tranquillity","Trees","Truth","Truths","Unity","Victory","Virtues","Voices","Voyages","Warmth","Webs","Whispers","Wisdom","Wishes","Wonders","Worlds","Worship","Yesterdays","the Ancients","the Beginning","the Beyond","the Creator","the Dead","the Future","the Universe","the World"];
	var nm3 = ["All","Ancestor","Anchored","Ancient","Angel","Angelic","Aurora","Beacon","Birth","Blazing","Blood","Boundless","Bountiful","Burning","Ceaseless","Central","Champion","Colossal","Enchanted","Vitality","Prosperity","Paradise","Hope","Eternal","Ethereal","Exalted","Family","Father","First","Fortune","Freedom","Gentle","Giant","Gifting","Globe","God","Golden","Grand","Hallowed","Healing","Heart","Heavenly","Holy","Home","Independence","Infinite","Invincible","Knowledge","Liberty","Lifeblood","Light","Lone","Love","Loving","Magic","Mighty","Miracle","Mother","Peace","People's","Perpetual","Power","Primal","Primeval","Protector","Pure","Purity","Radiant","Redemption","Reflection","Righteous","Royal","Sacred","Sanctuary","Serenity","Silver","Skeletal","Soul","Spirit","Tomorrow","Towering","Tranquil","Venerated","Vibrant","Wandering","Wisdom","Wishing","Wonder","World"];
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		if(tp === 1){
			rnd = Math.random() * nm1.length | 0;
			nMs = "l'Arbre " + nm1[rnd];
			nm1.splice(rnd, 1);
		}else{
			nTp = Math.random() * 2 | 0;
			if (nTp === 0){
				rnd = Math.random() * nm3.length | 0;
				nMs = "The " + nm3[rnd] + " Tree";
				nm3.splice(rnd, 1);
			}else{
				rnd = Math.random() * nm2.length | 0;
				nMs = "The Tree of " + nm2[rnd];
				nm2.splice(rnd, 1);
			}
		}
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}