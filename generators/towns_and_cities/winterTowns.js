

var nm2 = ["aval","bare","bleak","bliz","chill","clear","cloud","cold","cristal","crystal","dark","drift","frost","gliss","ice","moon","north","shiver","sleet","snow","storm","that","thaw","therm","whit","white","wild","wind","winter","wit","wolf","yce"];

var nm3 = ["band","barrow","bell","born","borough","bourne","breach","break","chill","cliff","crest","dale","denn","drift","fall","fell","field","ford","fort","frost","gard","garde","glen","grasp","grave","guard","hallow","ham","hand","helm","hill","hold","holde","hollow","horn","host","keep","maw","mire","mond","moor","more","pass","peak","point","port","reach","rest","scar","shield","spell","spire","storm","strand","tide","vale","vault","vein","ville","wall","wallow","ward","watch","wich"];



function generator$towns_and_cities$winterTowns(){
	i = Math.floor(Math.random() * 10);


	var nm1 = ["Arcta","Arcti","Avala","Avalan","Blizz","Blyz","Boots","Brisque","Chill","Chillis","Cristal","Cryo","Crystal","Drift","Firn","Flaike","Flake","Flo","Flurris","Frigid","Fross","Frost","Frostbite","Fyre","Glace","Glacia","Glacier","Glacis","Glaize","Gliss","Hayle","Hearth","Hiber","Hiver","Ice","Iglis","Lanche","Melte","Mitten","Mittens","Névé","Neige","Onding","Quilt","Rime","Shiver","Sleat","Sleath","Sled","Sledge","Sleet","Slush","Snift","Sno","Snow","Solstice","Thaw","Thawe","Thermia","Thermis","Thermos","Wind","Winde","Winter","Wool","Wynter","Yce"];

	if(i < 4){

			rnd = Math.random() * nm1.length | 0;

			names = nm1[rnd];

			nm1.splice(rnd, 1);

		}else{

			rnd = Math.random() * nm2.length  | 0;

			rnd2 = Math.random() * nm3.length | 0;

			while(nm2[rnd] === nm3[rnd2]){

				rnd2 = Math.floor(Math.random() * nm3.length);

			}

			names = nm2[rnd] + nm3[rnd2];

		}

		return names;

}