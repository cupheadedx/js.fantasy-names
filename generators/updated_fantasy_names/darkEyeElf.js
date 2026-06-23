var nm1 = ["","","c","d","f","g","l","m","s","t","th","y"];
var nm2 = ["a","a","e","e","i","o"];
var nm3 = ["d","d","l","l","ld","ll","lv","lw","m","m","mm","n","n","nc","nd","ndr","nv","r","r","rd","rs","rv","rw","s","s","sr","z","z"];
var nm4 = ["a","a","e","e","i","i","o","u"];
var nm5 = ["c","d","dr","n","nd","ndr","r","s","v","y"];
var nm6 = ["ia","io","ie","a","e","a","e","o"];
var nm7 = ["l","ll","n","r"];

var nm8 = ["","","c","f","l","h","n","s","v"];
var nm9 = ["a","e","i","o"];
var nm10 = ["l","n","m","r","v","y"];
var nm11 = ["a","i","a","i","e","o"];
var nm12 = ["d","m","n","r","s","w","y"];
var nm13 = ["a","o","a","o","e","i"];
var nm14 = ["n","r","y","v"];
var nm15 = ["ia","a","e","a","e","a","e","a","e","a","e","a","e","a","e","a","e","a","e","a","e"];

var br = "";

function nameGen(type){
	var nm16 = ["Autumn","Bear","Beetle","Boar","Boulder","Bronze","Cave","Cavern","Cliff","Cloud","Crow","Crystal","Dark","Desert","Dune","Dust","Earth","Ember","Evening","Feather","Fern","Field","Fir","Fire","Flame","Flower","Fog","Forest","Frost","Glacier","Gold","Grove","Hill","Ice","Lake","Lichen","Light","Lilac","Lynx","Maple","Marsh","Mist","Moon","Morning","Moss","Mountain","Night","Oak","Petal","Rain","Raven","River","Rock","Rose","Sand","Scarlet","Shadow","Shore","Silver","Smoke","Snow","Spring","Star","Steam","Storm","Stream","Summer","Sun","Thicket","Thunder","Water","Willow","Wind","Winter","Wolf","Yew"];
	var nm17 = ["Arrow","Blade","Bow","Breath","Call","Crest","Dance","Dancer","Dew","Dream","Dreamer","Eye","Hair","Heart","Helm","Jumper","Lance","Light","Listener","Path","Pyre","Rider","Run","Runner","Seeker","Sense","Shadow","Shield","Shot","Song","Spear","Spirit","Strike","Sword","View","Walker","Weaver"];
	$('#placeholder').css('textTransform', 'capitalize');
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		rnl = Math.random() * nm16.length | 0;
		rnl2 = Math.random() * nm17.length | 0;
		while(nm16[rnl] === nm17[rnl2]){
			rnl2 = Math.random() * nm17.length | 0;
		}
		names = nm16[rnl] + " " + nm17[rnl2];
		nm16.splice(rnl, 1);
		nm17.splice(rnl2, 1);
		if(tp === 1){
			nameFem();
			while(nMs === ""){
				nameFem();
			}
			names = nMs + " " + names;
		}else{
			nameMas();
			while(nMs === ""){
				nameMas();
			}
			names = nMs + " " + names;
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

function nameFem(){
	nTp = Math.random() * 4 | 0;
	rnd = Math.random() * nm8.length | 0;
	rnd2 = Math.random() * nm9.length | 0;
	rnd3 = Math.random() * nm10.length | 0;
	rnd4 = Math.random() * nm13.length | 0;
	rnd7 = Math.random() * nm14.length | 0;
	rnd8 = Math.random() * nm15.length | 0;
	if(nTp === 0){
		while(nm10[rnd3] === nm8[rnd]){
			rnd3 = Math.random() * nm10.length | 0;
		}
		nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm13[rnd4] + nm14[rnd7] + nm15[rnd8];
	}else{
		rnd5 = Math.random() * nm11.length | 0;
		rnd6 = Math.random() * nm12.length | 0;
		while(nm12[rnd6] === nm10[rnd3] || nm10[rnd3] === nm8[rnd]){
			rnd3 = Math.random() * nm10.length | 0;
		}
		nMs = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd5] + nm12[rnd6] + nm13[rnd4] + nm14[rnd7] + nm15[rnd8];
	}
	testSwear(nMs);
}

function nameMas(){
	nTp = Math.random() * 5 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm7.length | 0;
	rnd4 = Math.random() * nm3.length | 0;
	rnd5 = Math.random() * nm4.length | 0;
	if(nTp < 3){
		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm7[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm7[rnd3];
	}else{
		rnd6 = Math.random() * nm5.length | 0;
		rnd7 = Math.random() * nm6.length | 0;
		while(nm3[rnd4] === nm5[rnd6] || nm5[rnd6] === nm7[rnd3]){
			rnd6 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm6[rnd7] + nm7[rnd3];
	}
	testSwear(nMs);
}