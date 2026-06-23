function generator$fantasy$worldTreeNames(type){
	i = Math.floor(Math.random() * 10);


	var tp = type;

	var nm1 = ["Éclatant","Éternel","Éthéré","Abondant","Ancien","Ancré","Angélique","Ardent","Brûlant","Céleste","Central","Champion","Colossal","Divin","Doré","Doux","Enchanté","Errant","Exalté","Géant","Généreux","Gracieux","Grandiose","Illimité","Imposant","Incessant","Infini","Invincible","Paradisiaque","Perpétuel","Primal","Primitif","Protecteir","Puissant","Pur","Régalien","Radiant","Radieux","Royal","Sacré","Saint","Solitaire","Squelettique","Tranquille","Vénéré","Vertueux","Vibrant","d'Âme","d'Éclat","d'Émotion","d'Énergie","d'Équilibre","d'Éternité","d'Évolution","d'Abondance","d'Accord","d'Ambition","d'Amour","d'Ange","d'Ardeur","d'Argent","d'Aube","d'Espérance","d'Esprit","d'Existence","d'Exubérance","d'Harmonie","d'Honneur","d'Imagination","d'Indépendance","d'Indulgence","d'Infini","d'Infinité","d'Innocence","d'Ivoire","d'Or","d'Orage","d'Ordre","de Bataille","de Beauté","de Bienveillance","de Bonheur","de Bravoure","de Brillant","de Chagrin","de Chance","de Chaos","de Concorde","de Connaissance","de Courage","de Création","de Croissance","de Croyance","de Début","de Découverte","de Délice","de Demain","de Destinée","de Destin","de Donation","de Douleur","de Félicité","de Famille","de Feu","de Fidélité","de Flambeau","de Foi","de Fondation","de Fortune","de Fumée","de Garantie","de Gentillesse","de Grâce","de Guérison","de Hasard","de Joie","de Jugement","de Libération","de Liberté","de Livraison","de Lueur","de Lumière","de Lutte","de Mémoire","de Mémoires","de Magie","de Merveille","de Mort","de Naissance","de Nos Ancêtres","de Notre Peuple","de Paix","de Paradis","de Passion","de Patronage","de Phare","de Pitié","de Pouvoir","de Promesse","de Prospérité","de Protection","de Puissance","de Pureté","de Rédemption","de Réflexion","de Rêvasserie","de Rêverie","de Raccordement","de Richesse","de Sécurité","de Sérénité","de Sagesse","de Sainteté","de Sanctuaire","de Sang","de Santé","de Solutions","de Songerie","de Sort","de Sourire","de Souvenir","de Tempête","de Temps","de Tonnerre","de Tout","de Tradition","de Tranquillité","de Vénération","de Vœux","de Vie","de Vitalité","de l'Au-Delà","de l'Aurore","de l'Univers","de la Famille","de la Fin","de la Lignée","de la Mère","de la Maison","de la Terre","de la Vie","des Âmes","des Ancêtres","des Anciens","des Anges","des Arbres","des Bijoux","des Cœurs","des Chaînes","des Champions","des Couleurs","des Dimensions","des Esprits","des Fêtes","des Familles","des Flammes","des Gens","des Liens","des Lignées","des Lumières","des Mémoires","des Merveilles","des Miracles","des Mondes","des Morts","des Naissances","des Os","des Passages","des Réponses","des Rêves","des Sortilèges","des Trônes","du Cœur","du Ciel","du Commencement","du Créateur","du Début","du Futur","du Globe","du Monde","du Père","du Passé","du Sanctuaire","du Sang","du Trône","du Troupeau"];

	var nm2 = ["Abundance","Accord","Ambition","Ancestors","Angels","Answers","Balance","Battle","Beauty","Beginnings","Belief","Birth","Births","Blood","Bloodlines","Bones","Bravery","Brilliance","Chains","Champions","Chances","Prosperity","Paradise","Hope","Chaos","Colors","Connections","Vitality","Courage","Creation","Dawn","Daydreams","Death","Delight","Delivery","Dimensions","Discovery","Dreams","Emotion","Energy","Eternity","Existence","Faith","Families","Family","Fate","Feasts","Fire","Flames","Flocks","Fortunes","Freedom","Futures","Giants","Gifts","Gold","Grace","Growth","Happiness","Harmony","Health","Hearts","Heaven","Honor","Imagination","Independence","Infinity","Innocence","Jewels","Judgment","Kindness","Knowledge","Liberty","Life","Lifeblood","Light","Lights","Love","Memories","Memory","Mercy","Miracles","Order","Our Ancestors","Our People","Pasts","Paths","Peace","Power","Promise","Protection","Purity","Reckoning","Redemption","Reflection","Riches","Royals","Sanctitude","Sanctuary","Security","Serenity","Silver","Smiles","Smoke","Sorrow","Souls","Spells","Spirits","Storms","Struggles","Thrones","Thunder","Time","Tomorrows","Tradition","Tranquillity","Trees","Truth","Truths","Unity","Victory","Virtues","Voices","Voyages","Warmth","Webs","Whispers","Wisdom","Wishes","Wonders","Worlds","Worship","Yesterdays","the Ancients","the Beginning","the Beyond","the Creator","the Dead","the Future","the Universe","the World"];

	var nm3 = ["All","Ancestor","Anchored","Ancient","Angel","Angelic","Aurora","Beacon","Birth","Blazing","Blood","Boundless","Bountiful","Burning","Ceaseless","Central","Champion","Colossal","Enchanted","Vitality","Prosperity","Paradise","Hope","Eternal","Ethereal","Exalted","Family","Father","First","Fortune","Freedom","Gentle","Giant","Gifting","Globe","God","Golden","Grand","Hallowed","Healing","Heart","Heavenly","Holy","Home","Independence","Infinite","Invincible","Knowledge","Liberty","Lifeblood","Light","Lone","Love","Loving","Magic","Mighty","Miracle","Mother","Peace","People's","Perpetual","Power","Primal","Primeval","Protector","Pure","Purity","Radiant","Redemption","Reflection","Righteous","Royal","Sacred","Sanctuary","Serenity","Silver","Skeletal","Soul","Spirit","Tomorrow","Towering","Tranquil","Venerated","Vibrant","Wandering","Wisdom","Wishing","Wonder","World"];

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

		return nMs;

}