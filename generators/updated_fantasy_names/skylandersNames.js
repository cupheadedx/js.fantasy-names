
function nameGen(){
	var nm1 = ["Acousticks","Aerobits","Aikidozer","Aquaticktock","Aquifear","Aurorat","Avalance","Ballistar","Bazoocat","Beacondor","Beezard","Blisscharge","Blitz","Blubmarine","Blunderbuster","Blush Crush","Bomb-Bard","Bomblastic","Bombustion","Boohickey","Boomfire","Borealaser","Bowknight","Bushidoom","Cascadence","Catana","Celesteed","Chimpney","Clickwork","Cloudbuster","Combusted","Cometeor","Commandog","Cosmouse","Crankshift","Crisister","Crisscrossbow","Crisscrossfire","Crosspitch","Decathron","Decimatrix","Deep-See","Desegator","Destroid","Dewball","Discrush","Doomino","Downpourage","Eclipser","Eclipticktock","Eerieka","Embear","Equinoxius","Eradicat","Estuwar","Estuwarring","Extingwish","Fireborks","Fireflight","Firewarden","Flagreat","Flammiferret","Flashpointy","Fleashooter","Gasmo","Gizmomo","Hidroseism","Hoodoom","Hopscorch","Hurricrane","Hydroloco","Hypnotiger","Ignigenious","Ignight","Infernope","Inflammaster","Judocat","Judoom","Karatea","King Fu","Lightninja","Mainsteam","Maritimeless","Mesma Coil","Meteorment","Miraculoopy","Misstic","Molotoffee","Monsooner","Mousetique","Musketeeny","Mystiquail","Nebulast","Neutrhino","Ninjasper","Obliterite","Oceanicknack","Padlook","Palgae","Pawlock","Peekaboom","Pigsaw","Popsickle","Precipotato","Primevulture","Psychick","Pulpitbull","Purnace","Pyre","Rainrise","Rampain","Ratchette","Relinsquish","Ribboom","Rignite","Rignition","Scabbarbarian","Scardio","Scythiger","Seawayward","Senseitional","Shamanewt","Shurika","Sinflux","Skirmush","Slamstring","Sorcerat","Sourprise","Splendoom","Squabbler","Starcasm","Synchrome","Taloon","Teleparrot","Tempester","Threatmill","Thundersea","Thunderstomp","Thunderstork","Thunderwater","Timepest","Toadcast","Tornadoom","Torrend","Treadmulligan","Trollstice","Turbulance","Turmole","Twistar","Voodog","Whirlwings","Wildpyre","Witchdogter","Wrestlynx"];
	var nm2 = ["Aqua","Aurora","Barrage","Beacon","Blaze","Bloom","Blossom","Boom","Bud","Burst","Chompy","Clash","Comet","Crash","Crazy","Eclipse","Ember","Explosion","Explosion","Flare","Flash","Flood","Flux","Furor","Fury","Fuse","Fuse","Glow","Gush","Howl","Ice","Icicle","Ignition","Inferno","Influx","Jam","Light","Lightning","Morph","Petal","Pit","Quake","Rage","Rash","Roar","Rocket","Rush","Scorch","Seism","Snow","Spark","Splice","Sprout","Star","Storm","Surge","Thunder","Tide","Torch","Vine","Wail","Wild",""];
	var nm3 = ["Ape","Arachnid","Baboon","Badger","Bandit","Barbarian","Basilisk","Bear","Beast","Bee","Beetle","Bird","Bison","Boar","Boss","Bot","Braggart","Bruiser","Brute","Bug","Bull","Bully","Bumpkin","Canine","Cat","Coyote","Crab","Critter","Croc","Crook","Crow","Cub","Demon","Dino","Dog","Dove","Dragon","Eagle","Elephant","Falcon","Feline","Fiend","Fox","Freak","Goat","Golem","Goliath","Goon","Gorilla","Hare","Hippo","Hog","Hornet","Horse","Hound","Ibis","Jaguar","King","Knight","Komodo","Kraken","Lion","Mage","Mammoth","Maniac","Mantis","Mech","Minion","Monkey","Monster","Moocher","Mumbler","Ogre","Otter","Owl","Panda","Queen","Rabble","Rascal","Rat","Rhino","Rook","Sage","Savage","Scalawag","Scamp","Seal","Seer","Serpent","Shaman","Skunk","Sloth","Snake","Spider","Spirit","Sprite","Swan","Swine","Thug","Tiger","Tigress","Toad","Tortoise","Turtle","Valkyrie","Vermin","Warrior","Witch","Wizard","Wolf","Wolverine"];

	var br = "";

	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(i < 5){
			rnd = Math.random() * nm1.length | 0;
			names = nm1[rnd];
			nm1.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm2.length | 0;
			rnd2 = Math.random() * nm3.length | 0;
			names = nm2[rnd] + " " + nm3[rnd2];
			nm2.splice(rnd, 1);
			nm3.splice(rnd2, 1);
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