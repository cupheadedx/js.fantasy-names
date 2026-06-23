var nm1 = ["","","","c","cr","d","dr","f","m","n","p","ph","t","th","v","z"];
var nm2 = ["au","ai","ei","ae","y","a","e","i","a","e","i","a","e","i","a","e","i","y","y"];
var nm3 = ["d","dr","l","lm","lr","lv","m","mm","n","nd","ndr","ng","nn","nth","r","rn","st"];
var nm4 = ["ae","aa","ei","ia","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i"];
var nm5 = ["c","l","n","r","s","sh","st"];
var nm6 = ["a","e","i","o","a","e","i","o","a","e","i","o"];
var nm7 = ["","","","","","","","","","","h","n","r","s"];

var nm8 = ["Air","Almond","Amber","Apple","Aspen","Beauty","Beech","Better","Bird","Bitter","Black","Blue","Bramble","Briar","Bright","Broom","Bubble","Bumble","Candle","Carrot","Cat","Cedar","Chilly","Cinnamon","Citrus","Cloud","Cloudy","Cocoa","Copper","Cotton","Cozy","Cricket","Crystal","Cute","Daisy","Dapple","Dark","Day","Dazzle","Diamond","Dimple","Drift","Elm","Evening","Falcon","Fancy","Fern","Fig","Fire","Flatter","Flicker","Flirty","Flutter","Foggy","Fox","Frost","Frosty","Frozen","Funny","Garlic","Gem","Giggle","Glitter","Golden","Grassy","Gray","Green","Grey","Hazel","Holly","Honey","Ice","Island","Isle","Jelly","Jester","Jingle","Jumpy","Leaf","Lemon","Light","Lightning","Lilly","Lily","Lime","Little","Lotus","Lovely","Magic","Mango","Maple","Meadow","Merry","Misty","Moon","Morning","Moss","Mossy","Mountain","Muddy","Never","Night","Oak","Olive","Orange","Palm","Parsley","Peach","Pear","Pepper","Petal","Pine","Plum","Pollen","Poplar","Pretty","Pumpkin","Purple","Quick","Rain","Rainbow","Rainy","Red","Rose","Rumple","Sandy","Sea","Shadow","Shimmer","Shiny","Silk","Silver","Snow","Sour","Sparkle","Speedy","Spider","Star","Sugar","Sun","Sweet","Swift","Tangle","Thunder","Tiger","Toad","Tree","Tulip","Tumble","Twinkle","Twisty","Vanilla","Water","Turtle","Whiffle","White","Wild","Willow","Windy","Winter","Wonder","Wood","Wrinkle"];
var nm9 = ["bead","beam","bee","bay","bees","bell","belle","berry","bird","dove","bite","bloom","blossom","boots","bottom","breath","breeze","briar","bud","bug","bush","butter","button","cliff","cloud","clove","clover","cone","creek","crystal","cup","curl","dale","dance","dash","dew","drop","dust","feather","fall","falls","feet","field","fig","flame","flash","fleck","flight","flip","flower","fluff","fly","foam","fog","foot","forest","freeze","frost","fruit","jacket","fur","garden","gem","glade","glimmer","glow","gourd","grace","grass","griddle","grove","gust","heart","hill","hop","horn","jewel","lace","lake","lashes","leaf","light","lily","locks","loop","meadow","mello","mint","mist","moon","muddle","muse","newt","noodles","nut","pearl","pebbles","petal","plume","pond","pool","puff","ray","ripple","river","rock","root","rose","sage","sand","shadow","shimmer","spice","shine","shore","sky","socks","song","spark","sparkle","speck","spirit","splash","spring","sprite","sprout","stem","stone","storm","twig","stream","stripe","swamp","swirls","tail","thistle","thorn","toad","toes","tree","twill","twinkle","twirl","twirls","twist","vale","valley","vine","wax","weather","web","whirl","whisk","whisper","whistle","white","willow","wind","wing","wings","wink","wish","wood","wort"];

var br = "";

function nameGen(){
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		if(i < 5){
			nameMas();
			while(nMs === ""){
				nameMas();
			}
		}else{
			rnd = Math.random() * nm8.length | 0;
			rnd2 = Math.random() * nm9.length | 0;
			nMs = nm8[rnd] + nm9[rnd2];
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

function nameMas(){
	nTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm7.length | 0;
	while(rnd2 < 4 && rnd4 < 4){
		rnd2 = Math.random() * nm2.length | 0;
	}
	if(nTp < 3){
		while(nm1[rnd] === nm3[rnd3] || nm3[rnd3] === nm7[rnd5]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm7[rnd5];
	}else{
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm6.length | 0;
		while(nm5[rnd6] === nm3[rnd3] || nm5[rnd6] === nm7[rnd5]){
			rnd6 = Math.random() * nm5.length | 0;
			while(rnd6 > 6 && rnd3 > 7){
				rnd6 = Math.random() * nm5.length | 0;
			}
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm6[rnd7] + nm5[rnd6] + nm4[rnd4] + nm7[rnd5];
	}
	testSwear(nMs);
}
