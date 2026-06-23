var nm1 = ["Abr","Adr","Agn","Al","Alb","Ann","Aod","Ar","Arg","Arzh","Aub","Benn","Bern","Boz","Brel","Brev","Briw","Bud","Cad","Car","Coll","Con","Den","Din","Don","Dren","El","Em","Emil","En","Eoz","Ev","Ew","Fin","Gael","Gall","Ger","Gil","Gild","Gon","Goul","Guén","Guér","Guin","Gul","Gwen","Gwend","Gwenn","Gwil","Gwin","Hael","Hel","Herb","Il","Ill","Kad","Kaour","Kar","Kerr","Kil","Kol","Kon","Konn","Koul","Leon","Ler","Lun","Mad","Mael","Maod","Mar","Maud","Maz","Mazh","Mel","Mer","Mil","Mor","Nen","Nom","Ol","Pad","Per","Prim","Rog","Seg","Sul","Thél","Thur","Tin","Trem","Tud","Tur","Ven","Winn"];
var nm2 = ["éthe","ad","adec","aeg","ael","aelig","aer","al","ala","alaer","alan","aler","am","an","and","aog","ara","ard","as","azig","ec","edig","edoc","eg","egan","egig","el","ele","elig","elin","ell","elyn","eneg","enig","enn","enneg","enou","eonoc","eri","erig","ermig","ermou","et","evel","ez","ezig","ian","iel","ien","iern","ig","igan","iged","ikel","in","inig","ioc","ion","oc","og","ole","on","ore","oren","ou","our","ouri","ual","udig","uen","uin","ul","ulig","ur","urig"];
var nm3 = ["Aam","Ad","Ael","Aen","Ag","Ah","Al","Am","Andr","Ann","Aod","Aour","Ar","Arm","Aur","Az","Benn","Briag","Dah","Den","El","En","Eoz","Er","Flam","Gael","Gall","Gan","Gen","Goul","Guén","Gwehn","Gwell","Gwen","Gwenh","Hoel","Il","Iv","Iz","Jil","Kar","Kat","Kav","Kenn","Koul","Lan","Leven","Mad","Mael","Maod","Mar","Mel","Nev","Nil","Nin","Nol","Ol","On","Pred","Reun","Ril","Roz","Ster","Tréph","Trif","Tud","Vel","Yan","Yul"];
var nm4 = ["aèlle","aïg","ael","aela","aelig","aell","aelle","aig","alouen","amma","ana","ane","anez","ann","anna","antael","antel","arde","arin","aza","ed","eda","efa","egan","egen","egwenn","el","ela","elig","eline","ell","elle","ellig","en","ena","enell","enez","enie","enn","ennig","enor","enora","eta","eva","evenn","eza","ezig","ia","ice","iel","iela","ielez","iell","ielle","ig","iga","ilis","ina","ine","is","oela","ola","olda","ole","olina","or","ora","uina","ula","ulenn","urenn","wen","wena","wenn","wenna","wyn","yne","ys"];
var nm5 = ["Aam","Ad","Adr","Ael","Aen","Ag","Agn","Ah","Al","Am","And","Ar","Arm","Aub","Aur","Az","Brel","Briag","Bud","Cad","Car","Coll","Con","Den","Din","Don","Dren","El","Em","Emil","En","Er","Ev","Ew","Fin","Gael","Gall","Gan","Gen","Ger","Gil","Gild","Gon","Goul","Guin","Gul","Gwil","Gwin","Hael","Hel","Hoel","Il","Ill","Iv","Iz","Jil","Kad","Kar","Kat","Kav","Kenn","Kerr","Kil","Kol","Kon","Konn","Koul","Lan","Leon","Ler","Leven","Lun","Mad","Mael","Maod","Mar","Maud","Maz","Mazh","Mel","Mer","Mil","Mor","Nen","Nev","Nil","Nin","Nol","Nom","Ol","On","Pad","Per","Pred","Prim","Reun","Ril","Rog","Roz","Seg","Ster","Sul","Thél","Thur","Tin","Tréph","Trem","Trif","Tud","Tur","Vel","Ven","Winn","Yan","Yul"];
var nm6 = ["éthe","ad","ael","aelig","aell","aer","aig","al","ala","alan","aler","alouen","am","an","ana","and","ane","ann","anna","antael","antel","arde","arin","as","aza","edig","edoc","eg","egan","egen","egig","el","elig","elin","ell","elle","elyn","en","ena","enell","enie","enig","enn","enneg","ennig","enor","eri","erig","et","evel","evenn","ian","ice","iel","iell","ien","iern","ig","iga","igan","iged","ikel","ilis","in","ina","ine","inig","ion","is","og","ola","olda","ole","on","or","ora","ore","oren","ou","ual","udig","uen","uin","ul","ula","ulenn","ulig","ur","urenn","urig","wen","wenn","wyn","yne","ys"];

function generator$animals_and_creatures$morgenNames(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	if(tp === 1){
			rnd = Math.random() * nm3.length | 0;
			rnd2 = Math.random() * nm4.length | 0;
			names = nm3[rnd] + nm4[rnd2];
		}else if(tp == 2){
			rnd = Math.random() * nm5.length | 0;
			rnd2 = Math.random() * nm6.length | 0;
			names = nm5[rnd] + nm6[rnd2];
		}else{
			rnd = Math.random() * nm1.length | 0;
			rnd2 = Math.random() * nm2.length | 0;
			names = nm1[rnd] + nm2[rnd2];
		}
		return names;
}