
function generator$real$slovakNames(type){
	i = Math.floor(Math.random() * 10);

	var nm1 = ["Ľuboš","Ľubomír","Šimon","Štefan","Žigmund","Adam","Aleš","Alexander","Alojz","Andrej","Augustín","Aurel","Bartolomej","Benjamín ","Blažej","Bohumír","Bohuslav","Branislav","Branko","Bronislav","Ctirad","Cyril","Dávid","Dalibor","Daniel","Denis","Dionýz","Dominik","Drahoslav","Dušan","Eduard","Erik","Eugen","Filip","Gabriel","Gregor","Henrich","Imrich","Ivan","Ján","Július","Jakub","Jaroslav","Jonáš","Jozef","Juraj","Kamil","Karol","Kazimír","Klement","Koloman","Konrád","Kornel","Ladislav","Lukáš","Marcel","Marek","Marián","Martin","Matúš","Matej","Maximilián","Metod","Michal","Mikuláš","Milan","Miloš","Miloslav","Miroslav","Oliver","Ondrej","Patrik","Pavol","Peter","Radovan","René","Richard","Robert","Roman","Samuel","Silvester","Slavomír","Stanislav","Tadeáš","Teodor","Tibor","Timotej","Tomáš","Václav","Vít","Valentín","Vavrinec","Viktor","Viliam","Vincent","Vladimír","Vladislav","Vojtech","Vratislav","Zdenko","Zdeno"];
	var nm2 = ["Štefánia","Žofia","Adriana","Alžbeta","Albína","Alena","Alexandra","Alica","Amália","Anastázia","Andrea","Angelika","Anna","Antónia","Barbora","Beáta","Blanka","Božena","Branislava","Bronislava","Cecília","Dagmar","Danica","Daniela","Darina","Denisa","Dominika","Dorota","Dušana","Edita","Elena","Emília","Ema","Ester","Eva","Gabriela","Gertrúda","Hana","Hedviga","Helena","Ivana","Ivanka","Iveta","Ivona","Júlia","Jana","Jarmila","Jaroslava","Jolana","Jozefína","Judita","Justína","Kamila","Katarína","Klára","Klaudia","Kristína","Lýdia","Ladislava","Lenka","Linda","Ľubica","Ľubomíra","Lucia","Mária","Margita","Mariana","Marika","Marta","Martina","Melánia","Michaela","Miroslava","Monika","Natália","Nela","Nikola","Nina","Olívia","Oľga","Patrícia","Paulína","Petra","Petronela","Renáta","Romana","Sára","Silvia","Simona","Soňa","Sofia","Stanislava","Svetlana","Tamara","Tatiana","Terézia","Valéria","Valentína","Vanda","Vanesa","Veronika","Viktória","Vilma","Vladimíra","Zita","Zlatica","Zora","Zuzana","Zuzka"];
	var nm3 = ["Čížik","Čiernik","Čierny","Šťastný","Široký","Bača","Baník","Bartoš","Biely","Biskup","Bosko","Chren","Chrobák","Cibuľka","Čuda","Dobrovodský","Doležal","Dolina","Havel","Hodža","Holič","Holub","Hornický","Horník","Jahoda","Jankovič","Jeleň","Kľúčiar","Kočiš","Kocúr","Kollár","Koleno","Komár","Koreň","Kostra","Kováč","Kráľ","Kríž","Kuchár","Láska","Mäsiar","Malý","Maliar","Malina","Mečiar","Medvedík","Medveď","Mlynár","Mokrý","Mráz","Nedved","Novák","Otčenáš","Pekár","Pokorný","Rybár","Skalický","Sklenár","Slaný","Slavik","Smutný","Strnád","Suchý","Surový","Tesár","Tesarik","Tichý","Zima"];
	var nm4 = ["Čierna","Čiliaková","Šafáriková","Bartková","Bellová","Blahová","Botošová","Bottová","Bratislavská","Chlebovská","Chlebovcová","Čudová","Eštoková","Grgasová","Hodžová","Hodosyová","Hrljacová","Jánošíková","Jilemnická","Jilemničková","Kaliská","Kočišová","Koleničková","Kollárová","Kostrová","Kováčová","Kráľová","Lukáčová","Mišurová","Mišurová","Novomedská","Novomeská","Ondrejová","Országhová","Paučulová","Petrová","Pivovarčová","Pleštinská","Prešovská","Rázusová","Repková","Rybárová","Smreková","Tesárová","Turošíkova","Urbanová","Vajanská","Vojtechová","Vysoká","Záhorecová","Zahorecová"];

	var tp = type;
	if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			rnd2 = Math.random() * nm4.length | 0;
			names = nm2[rnd] + " " + nm4[rnd2];
			nm2.splice(rnd, 1);
			nm4.splice(rnd2, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			rnd2 = Math.random() * nm3.length | 0;
			names = nm1[rnd] + " " + nm3[rnd2];
			nm1.splice(rnd, 1);
			nm3.splice(rnd2, 1);
		}
		return names;
}