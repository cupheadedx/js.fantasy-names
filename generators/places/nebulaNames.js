



function generator$places$nebulaNames(type){
	i = Math.floor(Math.random() * 10);


	var nm1 = ["Acorn","Alligator","Angel Wings","Ant","Apple","Arch","Arm","Badger","Balloon","Banana","Basin","Bat","Beach","Beam","Bean","Bear","Beaver","Beetle","Bell","Berry","Bird","Blade","Boar","Boat","Bone","Book","Bottle","Branch","Bridge","Bubble","Bucket","Buffalo","Bulb","Cable","Candle","Carpet","Cat's Tail","Caterpillar","Cattle Bell","Chain","Chameleon","Chestnut","Chicken Nest","Clam","Clock","Clock Tower","Clover","Cobra","Cobweb","Cockroach","Coffee Bean","Collar","Cork","Corkscrew","Crab","Crane","Crayon","Crow","Crow's Feet","Crown","Disk","Doe","Dog's Nose","Donkey","Dove","Dove's Tail","Dragonfly","Drum","Eagle","Eagle Talon","Egg","Elephant","Eye","Falcon","Fang","Feather","Flag","Flame","Flower","Fly","Fox","Frog","Gear","Glove","Goat","Goose","Grape","Hammer","Heart","Horn","Hornet","Horse","Horseshoe","Hummingbird","Hydrant","Icicle","Iris","Jellyfish","Kangaroo","Kettle","Kite","Knot","Ladybug","Leaf","Lily Pad","Lion","Lizard","Lobster","Locket","Marble","Mask","Mitten","Mole","Monkey","Mouse","Needle","Nightingale","Octopus","Oyster","Penguin","Petal","Phoenix","Pickle","Pig","Pig's Nose","Pizza","Popcorn","Potato","Pupil","Quill","Rabbit","Rabbit's Foot","Raccoon","Rat","Rat's Tail","Rhino Horn","Robin","Rope","Sandwich","Scarf","Serpent","Shark","Shark Tooth","Sheep","Snail","Snowflake","Spark","Spider","Squid","Stag","Teacup","Tiger","Tiger Stripe","Toad","Tortoise","Toucan","Turtle","Umbrella","Visage","Volcano","Wing","Yarn"];

	var nm2 = ["d'Étincelle","de Bassin","de Bouteille","de Branche","de Bras","de Bulle","de Câble","de Chaîne","de Collier","de Disque","de Marbre","de Noix de Gland","de Pizza","de Pop-Corn","de Rayon","de Seau","de Tapis","de Voûte","de l'Âne","de l'Écharpe","de l'Éléphant","de l'Œil","de l'Œuf","de l'Aigle","de l'Aiguille","de l'Aile","de l'Araignée","de l'Escargot","de l'Huître","de l'Iris","de l'Oie","de l'Oiseau","de l'Ombrelle","de l'Os","de l'Ours","de la Baie","de la Banane","de la Bande de Tigre","de la Biche","de la Bougie","de la Bouilloire","de la Châtaigne","de la Chauve Souris","de la Chenille","de la Cloche","de la Clochette","de la Coccinelle","de la Colombe","de la Corde","de la Corne","de la Corne de Rhinocéros","de la Corneille","de la Couronne","de la Dent de Requin","de la Feuille","de la Flamme","de la Fleur","de la Fourmi","de la Grenouille","de la Griffe d'Aigle","de la Grue","de la Lame","de la Libellule","de la Méduse","de la Mitaine","de la Mouche","de la Palourde","de la Patte d'Oie","de la Patte de Lapin","de la Pendule","de la Penne","de la Plage","de la Plume","de la Pomme","de la Pomme-de-Terre","de la Pupille","de la Queue de Chat","de la Queue de Colombe","de la Queue de Rat","de la Souris","de la Stalactite","de la Tasse","de la Taupe","de la Toile d'Araignée","de la Tortue","de la Tour","des Ailes d'Anges","du Alligator","du Ballon","du Bateau","du Blaireau","du Bouc","du Bouchon","du Buffle","du Bulbe","du Cœur","du Cafard","du Calamar","du Caméléon","du Castor","du Cerf","du Cerf-Volant","du Cheval","du Cobra","du Cochon","du Colibri","du Cornichon","du Crabe","du Crapaud","du Crayon","du Croc","du Drapeau","du Faucon","du Fer à Cheval","du Fil","du Flocon de Neige","du Frelon","du Gant","du Grain de Café","du Haricot","du Homard","du Kangourou","du Lézard","du Lapin","du Lion","du Livre","du Médaillon","du Manchot","du Marteau","du Masque","du Mouton","du Nénuphar","du Nœud","du Nez de Chien","du Nez de Cochon","du Nid","du Pétale","du Parasol","du Phénix","du Pont","du Poulpe","du Raisin","du Rat","du Raton Laveur","du Renard","du Requin","du Rossignol","du Rouge-Gorge","du Sandwich","du Sanglier","du Scarabée","du Serpent","du Singe","du Tambour","du Tigre","du Tire-Bouchon","du Toucan","du Trèfle","du Visage","du Volcan"];

	var nm3 = ["de Rayo","de la Aguja","de la Ala","de la Almeja","de la Alubia","de la Araña","de la Bandera","de la Baya","de la Bellota","de la Botella","de la Bufanda","de la Burbuja","de la Cabra","de la Cadena","de la Campana","de la Campanilla","de la Candela","de la Castaña","de la Cobra","de la Cola de Gato","de la Cola de Rata","de la Cola de la Paloma","de la Cometa","de la Corona","de la Cucaracha","de la Cuenca","de la Cuerda","de la Espada","de la Espina","de la Flor","de la Garra del Águila","de la Grúa","de la Gusano","de la Hembra","de la Herradura","de la Hoja","de la Hormiga","de la Langosta","de la Libélula","de la Llama","de la Máscara","de la Manzana","de la Mariquita","de la Medusa","de la Moqueta","de la Mosca","de la Nariz del Cerdo","de la Nariz del Perro","de la Paloma","de la Pata de Conejo","de la Pata de Gallo","de la Patata","de la Pizza","de la Playa","de la Pluma","de la Pupila","de la Rama","de la Rana","de la Rata","de la Raya del Tigre","de la Serpiente","de la Sombrilla","de la Taza","de la Telaraña","de la Tetera","de la Torre del Reloj","de la Tortuga","de la Uva","de las Alas de Angel","del Águila","del Arco","del Avispón","del Búfalo","del Balón","del Barco","del Brazo","del Bulbo","del Burro","del Caballo","del Cable","del Caimán","del Calamar","del Camaleón","del Cangrejo","del Canguro","del Carámbano","del Castor","del Cerdo","del Ciervo","del Colibrí","del Collar","del Colmillo","del Conejo","del Corazón","del Corcho","del Cubo","del Cuerbo","del Cuerno","del Cuerno de Rinoceronte","del Disco","del Elefante","del Escarabajo","del Fénix","del Ganso","del Grano de Café","del Guante","del Halcón","del Hilo","del Hueso","del Huevo","del Iris","del Lápiz","del Lagarto","del León","del Libro","del Mármol","del Mapache","del Martillo","del Medallón","del Mitón","del Mono","del Murciélago","del Nenúfar","del Nido","del Nudo","del Ojo","del Oso","del Ostión","del Pájaro","del Pétalo","del Petirrojo","del Pingüino","del Plátano","del Puente","del Pulpo","del Ratón","del Reloj","del Ruiseñor","del Sándwich","del Sacacorchos","del Sapo","del Tambor","del Tejón","del Tiburón","del Tigre","del Topo","del Trébol","del Tucán","del Verraco","del Visaje","del Volcán","del Zorro"];

	var tp = type;

	if(tp === 1){

			rnd = Math.random() * nm2.length | 0;

			nMs = "la Nébuleuse " + nm2[rnd];

			nm2.splice(rnd, 1);

		}else if(tp === 2){

			rnd = Math.random() * nm3.length | 0;

			nMs = "la Nebulosa " + nm3[rnd];

			nm3.splice(rnd, 1);

		}else{

			rnd = Math.random() * nm1.length | 0;

			nMs = "The " + nm1[rnd] + " Nebula";

			nm1.splice(rnd, 1);

		}

		return nMs;

}