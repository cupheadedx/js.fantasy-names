function generator$miscellaneous$supercomputers(){
	i = Math.floor(Math.random() * 10);


	var nm1 = ["Acme","Adamantine","Adamantium","Albatross","Anaconda","Anahit","Anansi","Anomaly","Ant","Apex","Apogee","Apollo","Archangel","Aspen","Athena","Aurora","Baldr","Banyan","Barrage","Basalt","Beetle","Behemoth","Black Bear","Black Knight","Black Marlin","Blue Whale","Brontes","Bulwark","Cannonade","Capstone","Carnwennan","Cerberus","Chaperon","Cheetah","Cirrocumulus","Cirrostratus","Cirrus","Clairvoyance","Cold Iron","Colossus","Comet","Condor","Confucius","Coyote","Crocodile","Crown","Cumulonimbus","Curator","Curio","Custodian","Deluge","Diamond","Diorite","Dragon","Dragonglass","Durendal","Eagle","Eagle Eye","Enki","Epitome","Everest","Evolution","Excalibur","Falcon","Freyr","Frigate","Fusillade","Galvorn","Giant Squid","Golden Eagle","Gorilla","Granite","Graphene","Great White","Greyhound","Griffin","Grizzly","Hare","Harpy","Helios","Hellion","Hercules","Hippo","Hippogriff","Hippopotamus","Honey Badger","Hrotti","Hummingbird","Hydra","Hyena","Jupiter","Kraken","Krypton","Kui Xing","Kusanagi","Legion","Leigong","Leviathan","Lightspeed","Lion","Lioness","Manticore","Marlin","Mastermind","Medusa","Meridian","Merit","Meteor","Meteorite","Metis","Minerva","Mithril","Mjolnir","Mollusk","Myriad","Naga","Needletail","Neith","Neuranium","Nova","Obelisk","Obsidian","Octopus","Odin","Omen","Optimum","Orca","Orthrus","Ostrich","Ox","Paladin","Pando","Panther","Paragon","Pegasus","Peregrine","Phoenix","Pinnacle","Polar Bear","Poseidon","Posidonia","Prodigy","Qilin","Quarzite","Quetzalcoatl","Raven","Rhino","Rhinoceros","Rhinoceros Beetle","Rock Dove","Ruby","Sailfish","Sapphire","Sauropod","Sentinel","Seshat","Set","Sia","Silicon","Sphinx","Spider Silk","Supernova","Supremacy","Swift","Swordfish","Tasmanian Devil","Tenjin","Theropod","Thor","Thoth","Thunderbird","Thunderbolt","Thundercrack","Tiger","Tigress","Tir","Titanium","Topaz","Tortoise","Transcendence","Triceratops","Valkyrie","Velocity","Vertex","Victory","Virtue","Warp","Whale","Whiz","Wyvern","Yellowfin","Zenith","Zeus"];

	rnd = Math.random() * nm1.length | 0;

		nMs = nm1[rnd];

		nm1.splice(rnd, 1);

		return nMs;

}