function generator$real$pictishNames(){
	i = Math.floor(Math.random() * 10);


	var nm1 = ["Áed","Áeda","Óengus","Aenbecan","Ailpín","Ailpein","Ainftech","Allcallorred","Alpín","Alpin","Angus","Aniel","Bili","Breidei","Breth","Bridei","Broichan","Brude","Cailtarni","Cailtram","Caltram","Cano","Carvorst","Castantin","Causantín","Caustantín","Caustantin","Choinnich","Cimoiod","Cináed","Cináeda","Cinadhon","Ciniath","Cinioch","Ciniod","Conall","Constantin","Crautreic","Dúngail","Dúngal","Denbecan","Deocillimon","Deocilunon","Deoord","Deort","Dhunghail","Domech","Domelch","Domnall","Dompneth","Dornornauch","Drest","Drosten","Drust","Eógan","Eanfrith","Echach","Eddarrnonn","Elphin","Elpin","Eochaid","Eoganan","Erilich","Erip","Erp","Fergus","Fiachu","Fochle","Forcus","Foth","Gailtram","Galam","Galan","Galanan","Garnaith","Garthnac","Gartnaich","Gartnait","Gartnaith","Gede","Gest","Gigurum","Giric","Girom","Gurum","Irb","Kinet","Luthren","Lutrin","Maelchon","Mailcon","Manath","Melcho","Melcon","Mordeleg","Morleo","Munait","Murtolic","Nechtan","Nehhton","Oengus","Onnist","Onuis","Onuist","Oswiu","Pidarnoin","Ru","Talluorh","Talorc","Talorcan","Talore","Talorgan","Talorgen","Tarain","Taran","Tarla","Tharain","Uerb","Uid","Uist","Unen","Unuist","Uoret","Uradech","Uudrost","Uuid","Uuirp","Uurad","Uuredach","Uuroid","Uvan","Uven","Vipoig","Vurguist","Wid","Wroid"]

	rnd = Math.random() * nm1.length | 0;

		nMs = nm1[rnd];

		nm1.splice(rnd, 1);

		return nMs;

}