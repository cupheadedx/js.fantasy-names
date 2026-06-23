function nameGen(){
	var nm1 = ["Baboonpaw","Baboontooth","Badgerden","Badgerfur","Badgerpaw","Beaverdam","Beaverpaw","Beavertail","Beavertooth","Beetleflight","Beetlescale","Bisonfur","Bisonhoof","Bisonhorn","Bisonmane","Bisontail","Bunyipclaw","Bunyiptooh","Canidfur","Canidgrowl","Canidpaw","Centaurhoof","Cougarclaw","Cougargrowl","Cougarleap","Cougarpelt","Cougarroar","Cougarshade","Cricketleap","Cricketsong","Dragonegg","Dragonfire","Dragonflight","Dragonfly","Dragonnest","Dragonpaw","Dragonroar","Dragonscale","Dragontail","Eagle-Eye","Eagleclaw","Eagleflight","Eaglenest","Eagleplume","Falconflight","Falconnest","Falconplume","Golemclay","Gopherden","Gopherpaw","Gorgonden","Gorgoneye","Gorgonscale","Harpynest","Harpysong","Heronflight","Heronleap","Heronnest","Hydraden","Hydrahead","Hydrascale","Jackalden","Jackalhowl","Jackalpaw","Kelphiehair","Kelpiemane","Leopardmane","Leopardpaw","Leopardspot","Leopardtooth","Lionden","Lionmane","Lionpaw","Lionroar","Lupuseye","Lupusfur","Lupushowl","Lupuspelt","Marlinfin","Marlinleap","Marlinscale","Marlinspear","Martenpaw","Martenpelt","Nagaden","Nagascale","Otterpelt","Otterstone","Pandafur","Pandapaw","Pantherden","Panthereye","Pantherpelt","Phoenixeye","Phoenixflame","Phoenixflight","Pythonbite","Pythonden","Pythoneye","Rabbitden","Rabbitfur","Rabbitleap","Ravenbeak","Ravenflight","Ravennest","Rhinohorn","Rhinoskin","Salmonleap","Salmonscale","Satyrhoof","Satyrhorn","Satyrsong","Selkieflight","Selkietail","Sparrowbeak","Sparrowclaw","Sparrowflight","Sparrownest","Spiderden","Spidereye","Spiderweb","Tigereye","Tigerfur","Tigerstripe","Tortoiseshell","Turtleshell","Turtletail","Viperden","Vipernest","Viperscale","Weaselden","Weaselfur","Weaselpaw","Wyvernflight","Wyvernnest","Wyvernpaw","Wyvernscale","Yetifur","Yetipaw","Yetipelt"];
	var nm2 = ["Alba","Alpa","Bandi","Barra","Cobra","Croco","Dragon","Falcon","Gibbon","Gorgon","Griffin","Gryffin","Grizzle","Gryzzle","Heron","Hummin","Hydra","Jagu","Kanga","Leo","Lion","Llama","Mockin","Naga","Orca","Panda","Para","Puffin","Puma","Python","Raven","Rhino","Rhyno","Robin","Sala","Sparrow","Toucan","Turtle","Tyran","Vixen","Vyxen","Yeti","Zebra"];
	var nm3 = ["Arach","Arachn","Bandic","Basil","Basyl","Buffal","Bunyip","Buzzar","Centaur","Chimer","Chymer","Condor","Coral","Coyot","Crocod","Dragon","Eleph","Falcon","Ferret","Gator","Gibbon","Gybbon","Giraf","Gyraf","Golem","Gorgon","Griffin","Gryffin","Heron","Hover","Hummin","Jackal","Lemur","Leopard","Lion","Lizar","Lyzar","Lizard","Lyzard","Loris","Lupus","Macaw","Marlin","Mockin","Nighting","Octop","Otter","Panther","Parrot","Pegas","Puffin","Python","Quetzal","Raven","Rhinos","Rhynos","Robin","Salam","Satyr","Sparrow","Spider","Spyder","Tiger","Tyger","Toucan","Tyran","Undin","Unic","Viper","Vyper","Vixen","Vyxen","Weasel","Wyvern"];
	var nm4 = ["d","g","h","l","m","n","r","s","t","v","w","z"];
	var nm5 = ["a","e","o","i","a","o"];
	var nm6 = ["c","f","l","l","n","n","r","r","s","s","t","th","th"];
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		if(i < 6){
			rnd2 = Math.random() * nm5.length | 0;
			rnd3 = Math.random() * nm6.length | 0;
			if(i < 3){
				rnd = Math.random() * nm3.length | 0;
				names = nm3[rnd] + nm5[rnd2] + nm6[rnd3];
				nm3.splice(rnd, 1);
			}else{
				rnd = Math.random() * nm2.length | 0;
				rnd4 = Math.random() * nm4.length | 0;
				names = nm2[rnd] + nm4[rnd4] + nm5[rnd2] + nm6[rnd3];
				nm2.splice(rnd, 1);
			}
		}else{
			rnd = Math.random() * nm1.length | 0;
			names = nm1[rnd];
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