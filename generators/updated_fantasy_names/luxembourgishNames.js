
function nameGen(type){
	var nm1 = ["Adrien","Alain","Albert","Alex","Alexandre","Alfred","Alphonse","Aly","AndrÃ©","Antoine","Armand","Arnold","Arthur","Auguste","BenoÃ®t","Bernard","Bertrand","Bruno","CÃ©dric","Camille","Carlo","Charles","Christian","Christophe","Constant","Dan","Daniel","Dany","David","Denis","Didier","Edmond","Edouard","Emile","Emmanuel","Eric","Ernest","Erny","Etienne","EugÃ¨ne","FÃ©lix","Fabien","Fabrice","Ferdinand","Fernand","Florent","FrÃ©dÃ©ric","FranÃ§ois","France","Franck","Frank","GÃ©rard","Gaston","Georges","Gilbert","Gilles","Guillaume","Guy","Hans","Heinz","Henri","Henry","HervÃ©","JÃ©rÃ´me","Jacques","Jean-Claude","Jean-Luc","Jean-Paul","Jean-Pierre","Jeannot","Jeff","Jim","JoÃ©","JoÃ«l","John","Johny","Jorge","Joseph","Jules","Julien","Klaus","LÃ©o","LÃ©on","Laurent","Louis","Luc","Lucien","Manuel","Marc","Marcel","Marco","Martin","Mathias","Maurice","Michael","Michel","Mike","Nicolas","Norbert","Olivier","Pascal","Patrick","Paul","Peter","Philippe","RÃ©my","Ralph","RaphaÃ«l","Raymond","RenÃ©","Richard","Robert","Roger","Roland","Romain","Ronald","Rudy","SÃ©bastien","Serge","StÃ©phane","Stephan","Sylvain","ThÃ©o","ThÃ©odore","Thierry","Thomas","Victor","Vincent","Werner","Wolfgang","Xavier","Yves"];
	var nm2 = ["AgnÃ¨s","Albertine","Alice","Aline","AmÃ©lie","AndrÃ©a","AndrÃ©e","AngÃ¨le","Anita","Anna","Anne","Annette","Annick","Annie","Anouk","Antoinette","Arlette","Astrid","Audrey","BÃ©atrice","Barbara","Bernadette","Berthe","Betty","Bianca","Blanche","Brigitte","CÃ©cile","CÃ©line","Carine","Carole","Caroline","Catherine","Chantal","Christelle","Christiane","Christine","Cindy","Claire","Claudia","Claudine","Colette","Corinne","Cynthia","DaniÃ¨le","Daniela","Danielle","Deborah","Delphine","Denise","Diane","Doris","Eliane","Elisabeth","Elise","Elvira","Elvire","Emilie","Emmanuelle","Estelle","Esther","EugÃ©nie","Eva","FÃ©licie","Fabienne","Fernande","Florence","FrÃ©dÃ©rique","FranÃ§oise","Francine","GÃ©raldine","Gabrielle","GeneviÃ¨ve","Georgette","Gilberte","Ginette","GisÃ¨le","HÃ©lÃ¨ne","Henriette","Hilda","Ida","Ingrid","IrÃ¨ne","Irma","Isabel","Isabelle","Jacqueline","Jeanne","Jeannette","Jeannine","Jeanny","Jennifer","Jessica","JoÃ«lle","JosÃ©e","JosÃ©phine","Josette","Josiane","Josy","Judith","Julia","Julie","Juliette","Karin","Karine","Kim","LÃ©a","LÃ©onie","Laure","Laurence","Liliane","Lily","Lina","Linda","Louise","Lucie","Lucienne","Lydia","Lydie","MÃ©lanie","Madeleine","Maggy","Maisy","Malou","Manuela","Marcelle","Margot","Marguerite","Marianne","Mariette","Marion","MarlÃ¨ne","Marthe","Martine","Maryse","Mathilde","MichÃ¨le","Micheline","Michelle","Mireille","Monika","Monique","Muriel","Murielle","Myriam","Nadia","Nadine","Nancy","Nathalie","Nelly","Nicole","Nina","Odette","Odile","Olga","Pascale","Patricia","Paule","Paulette","Pauline","Peggy","Petra","Pierrette","RÃ©gine","Rachel","Raymonde","RenÃ©e","Rita","Romaine","Rose","Sabine","Sandra","Sandrine","Sandy","Sarah","Severine","Simone","Solange","Sonia","Sophie","StÃ©phanie","Susanne","Suzanne","Suzette","Sylvie","ThÃ©rÃ¨se","Tina","Ursula","VÃ©ronique","ValÃ©rie","Vera","Vicky","Virginie","Viviane","Yolande","Yvette","Yvonne"];
	var nm3 = ["Albrecht","Barthel","Becker","Beicht","Bernhoeft","Boeres","Brandebourg","Braun","Calmes","Clemes","Da Silva","Diederich","Dieschbourg","Engels","Fabeck","Faber","Fischer","Flammang","Frantz","Fresez","Gault","Goedert","Goergen","Groben","Hansen","Hausemer","Heinen","Helminger","Hirsh","Hoffmann","Huberty","Jacoby","Joris","Juncker","Jung","Kahnt","Kayser","Kemmer","Kerg","Kerger","Kesseler","Kieffer","Kilburg","Kirchen","Kirsch","Kirscht","Klein","Klopp","Koltz","Kremer","Krier","Kutter","Lentz","Lippmann","Luxenberg","Majerus","Marx","Mayer","Menager","Meyer","Meyers","Minck","Molitor","Mullenbach","Muller","Nilles","Nosbusch","Probst","Rabinger","Reding","Reis","Reuter","Rewenig","Ries","Santer","Sax","Schaus","Schauss","Schiltz","Schlechter","Schleck","Schmit","Schmitz","Schneider","Schneiders","Scholtes","Schroeder","Schumacher","Schuman","Seimetz","Simon","Steffen","Steichen","Theis","Theisen","Thill","Thimmesch","Thorn","Thyes","Tissen","Trausch","Tudor","Wagener","Wagner","Weber","Weiler","Weis","Weiss","Welter","Wengler","Werner","Wolff","Zeimet"];

	var br = "";

	$('#placeholder').css('textTransform', 'capitalize');
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd2 = Math.random() * nm3.length | 0;
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			names = nm2[rnd] + " " + nm3[rnd2];
			nm2.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			names = nm1[rnd] + " " + nm3[rnd2];
			nm1.splice(rnd, 1);
		}
		nm3.splice(rnd2, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}