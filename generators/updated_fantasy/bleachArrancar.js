
function nameGen(type){
	var nm1 = ["Aar","Aaron","Abir","Ald","Arn","Asg","Bant","Bar","Bilg","Bran","Brind","Char","Chryd","Coy","Cronn","Crys","Dabir","Dem","Dirin","Dond","Dord","Eiral","Eiyr","Eldr","Eran","Eylk","Faran","Feirl","Findr","Finm","Fyldr","Gant","Ggir","Ggrin","Gran","Gund","Haran","Harand","Herg","Hirn","Hish","Hril","Iazk","Ilf","Ilq","Irin","Isch","Lidr","Liran","Lisz","Lud","Lurr","Mar","Med","Medaz","Men","Mhoir","Motn","Myln","Nair","Nak","Nask","Navr","Nhirk","Nirg","Nnoit","Nnot","Patr","Pesch","Preln","Pritt","Pryx","Pytr","Rasth","Rhys","Riln","Rinm","Rudb","Ruinn","Shawl","Strilk","Striqs","Szall","Szay","Talq","Tesr","Tirl","Tish","Trill","Uint","Ulq","Ulyn","Uril","Urynd","Yamm","Yar","Yisk","Yrr","Yylf","Zand","Zarin","Zhilg","Zomm","Zrill","Zyrik"];
	var nm2 = ["aan","ad","aid","ain","akka","akt","ama","an","anas","anma","aran","ari","arky","arma","asra","eem","een","eer","egor","ein","einne","eirr","eiss","ekki","elni","eppi","erge","erin","ers","ew","ient","ier","iero","ikke","iks","inger","inkis","irdy","iris","irn","is","ish","itis","itra","iyt","ong","oni","onn","onos","oon","oran","orgo","oris","ornn","orr","orra","os","ote","otte","oura","y","ya","yan","yi","yll","yn","yos","yrr","yss","yt"];
	var nm3 = ["Aan","Aess","Ail","Ann","Ant","Ath","Bess","Bhen","Bien","Bin","Birn","Bren","Cell","Cen","Cerl","Char","Cind","Cir","Dess","Din","Dirn","Dral","Dren","Dun","Eht","Eir","Ell","Em","Ens","Ern","Fan","Fen","Fienn","Fill","Fran","Frin","Han","Hell","Hend","Hil","Hiln","Hrin","Ien","Ier","Ilr","Ion","Ir","Iss","Lell","Len","Less","Lil","Lol","Lupp","Men","Mill","Mir","Mish","Mol","Mun","Near","Nell","Nern","Nim","Nol","Nush","Oll","On","Ool","Opp","Or","Oth","Rell","Ren","Resh","Rienn","Ril","Rin","Sen","Sherr","Siel","Srin","Stell","Sund","Ten","Tiall","Tier","Tin","Tirl","Tren","Uel","Uir","Ull","Ulr","Un","Urh","Verr","Vin","Vril","Yar","Yll","Yr"];
	var nm4 = ["aiel","aila","aine","ala","allou","alni","aly","ama","ani","anou","are","ari","ashe","atti","ayou","eie","eki","ella","elra","elri","enea","enia","enni","enta","eona","era","esha","eshi","eska","ette","i","iana","iel","ier","illa","illi","ilou","ilya","ina","ine","inhi","ira","iro","irou","ishi","ola","oly","ona","onni","onti","oore","ora","ore","ori","orli","orri","osha","ota","oula","outi","ucci","uene","uiri","ula","ulre","une","uni","unne","uri","urre","y","ylle","yri"];
	var nm5 = ["Aiv","Akk","Ant","Ap","Arn","Arrur","Birst","Boond","Bor","Br","Brel","Brend","Cal","Chahl","Chel","Chul","Cif","Crist","Dhat","Dind","Dort","Dr","Drak","Drel","Eb","Eirr","Ekar","Ekr","Ell","Ett","Far","Firr","Fjar","Frand","Fren","Frieg","Gilg","Gill","Gr","Gran","Grind","Guat","Harr","Heiss","Hess","Hind","Hirt","Holl","Kadd","Kan","Kird","Kouf","Kr","Krill","Lank","Lind","Ll","Llarg","Loss","Lutt","Mall","Marg","Mh","Mil","Mosq","Mund","Pand","Pard","Penn","Pr","Priks","Pyx","R","Red","Redd","Rhys","Rold","Rur","Sand","Shin","Snir","St","Star","Strin","Task","Terg","Th","Tholl","Trink","Tsarr","Van","Veg","Vink","Vr","Vran","Vren","Wand","Wern","Wesk","Wilk","Wol","Wrall","Z","Zaran","Zarr","Zhal","Zin","Zokk"];
	var nm6 = ["aal","aell","ahn","aine","air","airn","aller","ang","anne","ant","anz","argo","ark","arr","auss","eall","eard","eaux","ega","eirn","ela","ella","epin","er","ern","es","esis","esk","ett","ezer","iche","idrin","iegen","iess","iktis","ilga","illin","illis","imes","ina","ink","innis","irles","ishe","ius","occ","olin","oll","onik","onte","oore","or","oran","orwic","osal","oss","otse","ourne","oww","ozzac","ueda","uen","uer","uerie","uez","uinne","ukko","ulde","ulk","ull","ullen","unde","uoc","ute","uwen"];
	
	var br = "";
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd3 = Math.random() * nm5.length | 0;
		rnd4 = Math.random() * nm6.length | 0;
		if(tp === 1){
			rnd = Math.random() * nm3.length | 0;
			rnd2 = Math.random() * nm4.length | 0;
			names =  nm3[rnd] + nm4[rnd2] + " " + nm5[rnd3] + nm6[rnd4];
			nm3.splice(rnd, 1);
			nm4.splice(rnd2, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			rnd2 = Math.random() * nm2.length | 0;
			names = nm1[rnd] + nm2[rnd2] + " " + nm5[rnd3] + nm6[rnd4];
			nm1.splice(rnd, 1);
			nm2.splice(rnd2, 1);
		}
		nm5.splice(rnd3, 1);
		nm6.splice(rnd4, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}