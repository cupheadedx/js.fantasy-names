
var br = "";

function nameGen(type){
	var nm1 = ["Aegis","Aeon","Aether","Air","Aqua","Arcana","Arcane","Arctic","Astral","Aura","Aurora","Austral","Autumn","Avian","Basin","Blizzard","Bloom","Blossom","Bonfire","Boreal","Borealis","Botanic","Brass","Bronze","Bubble","Canine","Celestial","Central","Chaos","Child","Childhood","Chrono","Clay","Cloud","Coin","Copper","Country","Courage","Cradle","Crown","Cryo","Crystal","Dawn","Day","Daydream","Death","Diamond","Divine","Dream","Earth","Earthen","Eclipse","Elemental","Ember","Emotion","Enshrined","Equinox","Eternity","Evening","Eventide","Fable","Fata Morgana","Fauna","Faye","Feather","Feline","Fire","Flame","Floral","Flower","Fog","Forest","Fortune","Frost","Garden","Gem","Glacial","Glacier","Gold","Grove","Gust","Hallowed","Harmony","Harvest","Hearth","Ice","Iron","Jewel","Junior","Justice","Knowledge","Life","Light","Lore","Love","Lucent","Luck","Lunar","Marble","Meadow","Mercurial","Midnight","Moon","Morning","Music","Mystic","Nebula","Night","Nightmare","Nursery","Oasis","Ocean","Omen","Orchard","Paragon","Petal","Pyro","Rainbow","Redemption","River","Sand","Sea","Season","Shadow","Shore","Silver","Sleep","Smoke","Snow","Soil","Solar","Solstice","Spark","Spell","Spirit","Spring","Star","Stone","Storm","Summer","Sun","Sylvan","Tempest","Temporal","Terra","Thicket","Thunder","Timber","Tinder","Trance","Twilight","Underground","Valley","Vapor","Vision","Water","Whisper","Wilderness","Wind","Winter","Wish","Woodland","Zephyr"];
	var nm2 = ["ÃlÃ©mentaire","ÃsotÃ©rique","Arctique","Astrale","Australe","Aviaire","BorÃ©ale","Botanique","CÃ©leste","Canine","Centrale","Divine","EnchÃ¢ssÃ©","FÃ©line","Florale","Glaciale","Lucente","Lunaire","Mercurielle","Mystique","NÃ©buleuse","SanctifiÃ©e","Solaire","Souterraine","Sylvestre","Temporelle","d'Ãgide","d'Ãmotion","d'ÃtÃ©","d'ÃternitÃ©","d'Ãther","d'Ãtincelles","d'Ãtoiles","d'Air","d'Amour","d'Aqua","d'Arc-en-Ciel","d'Argent","d'Argile","d'Aube","d'Auras","d'Automne","d'Enfance","d'Enfants","d'Esprit","d'Harmonie","d'Hiver","d'Ombre","d'Or","de Bijoux","de Bronze","de Cauchemars","de Chance","de Chaos","de Chronologie","de Chuchotements","de Connaissance","de Courage","de CrÃ©puscule","de Cristal","de Cuivre","de Destin","de Diamant","de Fables","de Faune","de Fer","de Feu","de Flammes","de Fleurs","de Floraisons","de Fortune","de FumÃ©e","de Gel","de Glace","de Justice","de Laiton","de LumiÃ¨re","de Marbre","de Minuit","de Morganas","de Mort","de Nuages","de Pierre","de Plumes","de Printemps","de RÃ©demption","de RÃªverie","de Sable","de Sol","de Sommeil","de SortilÃ¨ge","de Temps Infini","de Terre","de Tonnerre","de Traditions","de VÅux","de Vapeur","de Vent","de Vergers","de Vision","de ZÃ©phyr","de l'Ãclipse","de l'Ãquinoxe","de l'Aurore","de l'Eau","de l'Oasis","de l'OcÃ©an","de la Campagne","de la Couronne","de la ForÃªt","de la Garderie","de la Lune","de la Mer","de la Musique","de la Nuit","de la Prairie","de la RÃ©colte","de la Rive","de la RiviÃ¨re","de la VallÃ©e","de la Vie","des Arcanes","des Braises","des Gemmes","des Jardins","des Orages","des PÃ©tales","des PrÃ©sages","des RÃ©gions Sauvages","des RÃªves","des Saisons","des TempÃªtes","du Bassin","du Berceau","du Bois","du Bosquet","du FourrÃ©","du Glacier","du Jardin","du Jour","du Matin","du Parangon","du Soir","du Soleil","du Solstice","du Voile"];
	var nm3 = ["Ãrtica","Arcana","Astral","Austral","Aviar","Boreal","BotÃ¡nica","Canina","Celestial","Central","Consagrada","Divina","Elemental","Felina","Floral","Glacial","Lucent","Lunar","MÃ­stica","Mercurial","Santificada","SelvÃ¡tica","Solar","SubterrÃ¡nea","Temporal","de Ãgida","de Ãter","de Agua","de Aire","de Alba","de Amor","de Arcanos","de Arcilla","de Arena","de ArmonÃ­a","de Auras","de Aurora","de Bronce","de Burbuja","de CÃ©firo","de Caos","de Ciencia","de Cobre","de Conocimiento","de CrepÃºsculo","de Cristal","de DÃ­a","de Deseos","de Destino","de Diamante","de EÃ³n","de EmociÃ³n","de EnsueÃ±o","de EspÃ­ritu","de Eternidad","de Fauna","de Flor","de FloraciÃ³n","de Florecimiento","de Flores","de Fortuna","de Fuego","de Gemas","de Helada","de Hielo","de Hierro","de Hoguera","de Humo","de Infancia","de Jardines","de Joyas","de Justicia","de LatÃ³n","de Llamas","de Luz","de MÃ¡rmol","de MaÃ±ana","de Medianoche","de Muerte","de Niebla","de Nieve","de Nubes","de Oro","de OtoÃ±o","de PÃ©talos","de Pesadillas","de Piedra","de Plata","de Plumas","de Presagios","de Primavera","de RedenciÃ³n","de Sombra","de Suelo","de Suerte","de Susurros","de Tierra","de Tormentas","de Trueno","de Valor","de Vapor","de Verano","de Viento","de VisiÃ³n","de la Arboleda","de la Corona","de la Cosecha","de la Costa","de la Cuenca","de la Cuna","de la Luna","de la MÃºsica","de la Nebulosa","de la Noche","de la Orilla","de la Tarde","de la Tempestad","de la Vida","de las Estrella","de las FÃ¡bulas","de las Huertas","de las Temporadas","de los NiÃ±os","de los Paragones","de los SueÃ±os","del Amanecer","del Arco Iris","del Bosque","del Campo","del Eclipse","del Equinoccio","del Glaciar","del Invierno","del JardÃ­n","del Mar","del Matorral","del Oasis","del OcÃ©ano","del Prado","del RÃ­o","del Sol","del Solsticio","del Valle"];
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			names = "la Cour " + nm2[rnd];
			nm2.splice(rnd, 1);
		}else if(tp === 2){
			rnd = Math.random() * nm3.length | 0;
			names = "la Corte " + nm3[rnd];
			nm3.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			names = "The " + nm1[rnd] + " Throne";
			nm1.splice(rnd, 1);
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