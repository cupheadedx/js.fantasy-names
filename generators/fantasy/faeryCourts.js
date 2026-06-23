

function generator$fantasy$faeryCourts(type){
	i = Math.floor(Math.random() * 10);


	var nm1 = ["Aegis","Aeon","Aether","Air","Aqua","Arcana","Arcane","Arctic","Astral","Aura","Aurora","Austral","Autumn","Avian","Basin","Blizzard","Bloom","Blossom","Bonfire","Boreal","Borealis","Botanic","Brass","Bronze","Bubble","Canine","Celestial","Central","Chaos","Child","Childhood","Chrono","Clay","Cloud","Coin","Copper","Country","Courage","Cradle","Crown","Cryo","Crystal","Dawn","Day","Daydream","Death","Diamond","Divine","Dream","Earth","Earthen","Eclipse","Elemental","Ember","Emotion","Enshrined","Equinox","Eternity","Evening","Eventide","Fable","Fata Morgana","Fauna","Faye","Feather","Feline","Fire","Flame","Floral","Flower","Fog","Forest","Fortune","Frost","Garden","Gem","Glacial","Glacier","Gold","Grove","Gust","Hallowed","Harmony","Harvest","Hearth","Ice","Iron","Jewel","Junior","Justice","Knowledge","Life","Light","Lore","Love","Lucent","Luck","Lunar","Marble","Meadow","Mercurial","Midnight","Moon","Morning","Music","Mystic","Nebula","Night","Nightmare","Nursery","Oasis","Ocean","Omen","Orchard","Paragon","Petal","Pyro","Rainbow","Redemption","River","Sand","Sea","Season","Shadow","Shore","Silver","Sleep","Smoke","Snow","Soil","Solar","Solstice","Spark","Spell","Spirit","Spring","Star","Stone","Storm","Summer","Sun","Sylvan","Tempest","Temporal","Terra","Thicket","Thunder","Timber","Tinder","Trance","Twilight","Underground","Valley","Vapor","Vision","Water","Whisper","Wilderness","Wind","Winter","Wish","Woodland","Zephyr"];

	var nm2 = ["Élémentaire","Ésotérique","Arctique","Astrale","Australe","Aviaire","Boréale","Botanique","Céleste","Canine","Centrale","Divine","Enchâssé","Féline","Florale","Glaciale","Lucente","Lunaire","Mercurielle","Mystique","Nébuleuse","Sanctifiée","Solaire","Souterraine","Sylvestre","Temporelle","d'Égide","d'Émotion","d'Été","d'Éternité","d'Éther","d'Étincelles","d'Étoiles","d'Air","d'Amour","d'Aqua","d'Arc-en-Ciel","d'Argent","d'Argile","d'Aube","d'Auras","d'Automne","d'Enfance","d'Enfants","d'Esprit","d'Harmonie","d'Hiver","d'Ombre","d'Or","de Bijoux","de Bronze","de Cauchemars","de Chance","de Chaos","de Chronologie","de Chuchotements","de Connaissance","de Courage","de Crépuscule","de Cristal","de Cuivre","de Destin","de Diamant","de Fables","de Faune","de Fer","de Feu","de Flammes","de Fleurs","de Floraisons","de Fortune","de Fumée","de Gel","de Glace","de Justice","de Laiton","de Lumière","de Marbre","de Minuit","de Morganas","de Mort","de Nuages","de Pierre","de Plumes","de Printemps","de Rédemption","de Rêverie","de Sable","de Sol","de Sommeil","de Sortilège","de Temps Infini","de Terre","de Tonnerre","de Traditions","de Vœux","de Vapeur","de Vent","de Vergers","de Vision","de Zéphyr","de l'Éclipse","de l'Équinoxe","de l'Aurore","de l'Eau","de l'Oasis","de l'Océan","de la Campagne","de la Couronne","de la Forêt","de la Garderie","de la Lune","de la Mer","de la Musique","de la Nuit","de la Prairie","de la Récolte","de la Rive","de la Rivière","de la Vallée","de la Vie","des Arcanes","des Braises","des Gemmes","des Jardins","des Orages","des Pétales","des Présages","des Régions Sauvages","des Rêves","des Saisons","des Tempêtes","du Bassin","du Berceau","du Bois","du Bosquet","du Fourré","du Glacier","du Jardin","du Jour","du Matin","du Parangon","du Soir","du Soleil","du Solstice","du Voile"];

	var nm3 = ["Ártica","Arcana","Astral","Austral","Aviar","Boreal","Botánica","Canina","Celestial","Central","Consagrada","Divina","Elemental","Felina","Floral","Glacial","Lucent","Lunar","Mística","Mercurial","Santificada","Selvática","Solar","Subterránea","Temporal","de Égida","de Éter","de Agua","de Aire","de Alba","de Amor","de Arcanos","de Arcilla","de Arena","de Armonía","de Auras","de Aurora","de Bronce","de Burbuja","de Céfiro","de Caos","de Ciencia","de Cobre","de Conocimiento","de Crepúsculo","de Cristal","de Día","de Deseos","de Destino","de Diamante","de Eón","de Emoción","de Ensueño","de Espíritu","de Eternidad","de Fauna","de Flor","de Floración","de Florecimiento","de Flores","de Fortuna","de Fuego","de Gemas","de Helada","de Hielo","de Hierro","de Hoguera","de Humo","de Infancia","de Jardines","de Joyas","de Justicia","de Latón","de Llamas","de Luz","de Mármol","de Mañana","de Medianoche","de Muerte","de Niebla","de Nieve","de Nubes","de Oro","de Otoño","de Pétalos","de Pesadillas","de Piedra","de Plata","de Plumas","de Presagios","de Primavera","de Redención","de Sombra","de Suelo","de Suerte","de Susurros","de Tierra","de Tormentas","de Trueno","de Valor","de Vapor","de Verano","de Viento","de Visión","de la Arboleda","de la Corona","de la Cosecha","de la Costa","de la Cuenca","de la Cuna","de la Luna","de la Música","de la Nebulosa","de la Noche","de la Orilla","de la Tarde","de la Tempestad","de la Vida","de las Estrella","de las Fábulas","de las Huertas","de las Temporadas","de los Niños","de los Paragones","de los Sueños","del Amanecer","del Arco Iris","del Bosque","del Campo","del Eclipse","del Equinoccio","del Glaciar","del Invierno","del Jardín","del Mar","del Matorral","del Oasis","del Océano","del Prado","del Río","del Sol","del Solsticio","del Valle"];

	var tp = type;

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

		return names;

}