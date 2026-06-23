	
function nameGen(type){
	var nm1 = ["Absolus","Adventus","Ambis","Anchora","Ange","Arca","Arcadis","Arcanith","Aroman","Aurath","Auror","Auroran","Austerith","Beautos","Benedith","Benevol","Bition","Brees","Brilansis","Brillia","Caus","Charme","Clemen","Comforth","Couras","Cradel","Creatis","Creyate","Curio","Curios","Delice","Desir","Diance","Dilige","Diligen","Discori","Drem","Dreme","Earnstly","Elega","Emince","Emotis","Ernes","Espirit","Essen","Essenths","Eternis","Euphor","Euphoril","Excelle","Fortuna","Fortunis","Fragra","Fragrath","Gaias","Generos","Gloria","Glorith","Graece","Grandis","Guida","Guidath","Harmon","Harmonil","Hones","Humili","Idae","Idela","Imagi","Imagina","Impuls","Infini","Inventus","Jance","Jange","Jayd","Justix","Legance","Lerance","Libertis","Liverance","Lova","Loyaltis","Lumence","Lyri","Marblis","Melodis","Memoril","Mility","Minence","Momentus","Motife","Naissance","Nebulas","Nebule","Novas","Novis","Ocane","Omene","Onor","Opportan","Ornamen","Ornamentis","Paece","Passis","Patieth","Peom","Persevance","Pessage","Poemme","Poetris","Portunis","Possiblis","Presentis","Primos","Princil","Principa","Pristin","Queste","Quieme","Quility","Radians","Redempt","Redemsia","Reflecia","Reflexis","Renaisse","Renaize","Renity","Requim","Riche","Romantis","Rosity","Sensilis","Sensility","Serenia","Serenis","Silva","Silvis","Solus","Sparkis","Spirith","Storia","Storith","Surpril","Surprith","Sympas","Sympatis","Toleran","Topia","Tradis","Tradition","Tranquilis","Tranquilith","Utopa","Utopis","Variatis","Varietin","Velves","Ventios","Ventura","Venturis","Vibrane","Vibrantis","Victora","Victoris","Xellence"];
	var nm2 = ["Absolution","Adventure","Ambition","Anchorage","Angel","Arcadia","Arcane","Aroma","Aura","Aurora","Austerity","Beauty","Benediction","Benevolence","Birth","Bliss","Breeze","Brilliance","Cause","Chance","Change","Charm","Clemency","Comfort","Courage","Cradle","Create","Creation","Curiosity","Daydream","Delicacy","Deliverance","Desire","Diligence","Discovery","Dream","Earnest","Earnestly","Elegance","Eminence","Emotion","Essence","Eternity","Euphoria","Excellence","Flock","Fortune","Fragrance","Freedom","Gaia","Generosity","Glory","Gold","Grace","Grandeur","Guidance","Hallow","Harmony","Honesty","Honor","Hope","Humility","Idea","Ideal","Imagination","Impulse","Infinity","Invention","Jade","Jewel","Justice","Liberty","Life","Light","Love","Loyalty","Lumen","Lyric","Marble","Marvel","Melody","Memory","Moment","Motive","Nebula","Nova","Ocean","Omen","Opportunity","Ornament","Passage","Patience","Peace","Perseverance","Poem","Poetry","Possibility","Present","Prime","Principle","Pristine","Question","Radiance","Redemption","Reflection","Renaissance","Requiem","Riches","Romance","Sensibility","Serenity","Silver","Somewhere","Spark","Sparkle","Spirit","Story","Surprise","Sympathy","Tolerance","Tradition","Tranquility","Utopia","Variety","Velvet","Venture","Vibrance","Victory"];
	var nm3 = ["Ãclat","ÃlÃ©gance","Ãminence","Ãmotion","ÃternitÃ©","Ãtincelle","Abondance","Absolution","Accord","Ambition","Amour","Ancrage","Ange","ArÃ´me","Arcadia","Arcane","Ardent","Argent","Augure","Aura","Aurore","AustÃ©ritÃ©","Aventure","BÃ©nÃ©diction","BeautÃ©","Berceau","Bienveillance","Breloque","Brise","Cadeau","Cause","Chance","Charme","ClÃ©mence","Concorde","Confort","Courage","CrÃ©ation","CuriositÃ©","DÃ©couverte","DÃ©licatesse","DÃ©livrance","DÃ©sir","Destin","Diligence","Douceur","Envie","Espoir","Esprit","Essence","Euphorie","Excellence","FÃ©licitÃ©","Fantaisie","FidÃ©litÃ©","Finesse","Fondation","Fortune","GÃ©nÃ©rositÃ©","Gaia","Gloire","GrÃ¢ce","Grandeur","Guidage","Harmonie","Honneur","HumilitÃ©","IdÃ©al","IdÃ©e","Imagination","Impulsion","Infini","Invention","Jade","Joyau","Justice","LibertÃ©","Lueur","Lumen","LumiÃ¨re","Lyrique","MÃ©lodie","MÃ©moire","Marbre","Merveille","Moment","Motif","Murmure","NÃ©buleuse","Naissance","Notion","Nova","OcÃ©an","Or","Ornement","Paix","Passage","Patience","Perle","Prime","Principe","Pulsion","Question","RÃ©demption","RÃ©flexion","RÃªve","RÃªverie","Renaissance","Requiem","Richesse","Romance","Rubis","SÃ©rÃ©nitÃ©","Sensation","Sentiment","Surprise","Sympathie","TolÃ©rance","Tradition","TranquillitÃ©","Triomphe","Utopie","Vaillance","VariÃ©tÃ©","Velours","Vibrance","Victoire","Virginal"];
	var nm4 = ["Ãclatia","ÃlÃ©gantis","ÃlÃ©gion","Ãminentis","Ãminia","ÃmonitÃ©","Ãmotis","ÃtÃ©nitÃ©","ÃterniÃ©","Ãtincea","Absolas","Absoluce","Accordia","AmbiÃ©","Ambitia","Amora","Amourion","Ancrance","Ancresse","Angeance","ArÃ´mencia","ArÃ´min","Arcadis","Arcance","Arcanis","Ardentis","Argenne","Argentance","Augurea","AuguritÃ©","Auraia","Auranis","Auroreur","AuroriÃ©","AustÃ©ria","AustÃ©ris","Aventus","BÃ©nÃ©dictia","Beauteille","Beautis","Berceaumes","Bercelle","Bondance","Breloco","Brisesse","Cado","Cadose","Causesse","Chanceille","Chantis","Charmens","ClÃ©meaux","ClÃ©meny","Concordeaux","Concort","Conforthe","Confour","Couragny","Courague","Couvertis","CrÃ©atienne","CrÃ©atiers","Curiosieux","Curiosix","DÃ©couville","DÃ©licain","DÃ©licatille","DÃ©livrentis","DÃ©livrille","DÃ©sier","DÃ©sira","Destille","Destinus","Diligentia","Doucelle","Envielle","Espora","Espriny","Espritagne","Essensia","Euphoris","Excellantis","FÃ©licelle","FÃ©liciÃ©","Fantaini","Fantaisia","FidÃ©laux","FidÃ©liÃ©","Finesaux","Finessea","Fondailles","Fondatia","Fortuna","Fortunis","GÃ©nÃ©resse","GÃ©nÃ©ros","Gaiara","Gloireaux","GrÃ¢celle","Grandeaux","Grandocy","Guidagelle","Guidarde","Harmonia","Harmonice","Honneuil","Humilia","Humilleaux","IdÃ©alais","IdÃ©alps","IdÃ©nis","Imagina","Imaginataux","Impulisa","Impulsi","Infina","Inventelle","Jadeaux","Joyaunis","Justia","Justis","Libertis","Lueurre","Lumence","Lumiyerre","Lyrique","MÃ©lodisse","MÃ©moriasse","Marbrelle","Merveilis","Momentis","Motifort","Motivis","Murmurelle","NÃ©bulenne","Naissantis","Notillon","Novais","OcÃ©anis","Ornamenterre","Ornemenne","Paixis","Passagentis","Patientis","Perleaux","Primenne","Principienne","Pulsienne","Pulsioble","Questio","Questis","RÃ©dempte","RÃ©demptis","RÃ©flexis","RÃªvelle","RÃªveria","RÃªverierre","RÃªvierre","Renaissanne","Requielle","Richesis","Romantis","Rubisy","SÃ©rÃ©nitieux","SÃ©rentes","Sensateaux","Sentimentin","Surprisis","Sympateaux","TolÃ©ranÃ§on","TolÃ©rancy","Traditimes","Traditry","Tranquillet","Triompagne","Triompigny","Utopigny","Vaillantis","VariÃ©tienne","Veillantis","Velourges","Vibrannis","Victoie","Virginasse"];

	var br = "";

	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		if(tp === 1){
			if(i < 5){
				rnd = Math.random() * nm4.length | 0;
				names = nm4[rnd];
				nm4.splice(rnd, 1);
			}else{
				rnd = Math.random() * nm3.length | 0;
				names = nm3[rnd];
				nm3.splice(rnd, 1);
			}
		}else{
			if(i < 5){
				rnd = Math.random() * nm1.length | 0;
				names = nm1[rnd];
				nm1.splice(rnd, 1);
			}else{
				rnd = Math.random() * nm2.length | 0;
				names = nm2[rnd];
				nm2.splice(rnd, 1);
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