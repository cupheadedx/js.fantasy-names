var br = "";

function nameGen(){
	var nm1 = ["Ãed","Ãeda","Ãengus","Aenbecan","AilpÃ­n","Ailpein","Ainftech","Allcallorred","AlpÃ­n","Alpin","Angus","Aniel","Bili","Breidei","Breth","Bridei","Broichan","Brude","Cailtarni","Cailtram","Caltram","Cano","Carvorst","Castantin","CausantÃ­n","CaustantÃ­n","Caustantin","Choinnich","Cimoiod","CinÃ¡ed","CinÃ¡eda","Cinadhon","Ciniath","Cinioch","Ciniod","Conall","Constantin","Crautreic","DÃºngail","DÃºngal","Denbecan","Deocillimon","Deocilunon","Deoord","Deort","Dhunghail","Domech","Domelch","Domnall","Dompneth","Dornornauch","Drest","Drosten","Drust","EÃ³gan","Eanfrith","Echach","Eddarrnonn","Elphin","Elpin","Eochaid","Eoganan","Erilich","Erip","Erp","Fergus","Fiachu","Fochle","Forcus","Foth","Gailtram","Galam","Galan","Galanan","Garnaith","Garthnac","Gartnaich","Gartnait","Gartnaith","Gede","Gest","Gigurum","Giric","Girom","Gurum","Irb","Kinet","Luthren","Lutrin","Maelchon","Mailcon","Manath","Melcho","Melcon","Mordeleg","Morleo","Munait","Murtolic","Nechtan","Nehhton","Oengus","Onnist","Onuis","Onuist","Oswiu","Pidarnoin","Ru","Talluorh","Talorc","Talorcan","Talore","Talorgan","Talorgen","Tarain","Taran","Tarla","Tharain","Uerb","Uid","Uist","Unen","Unuist","Uoret","Uradech","Uudrost","Uuid","Uuirp","Uurad","Uuredach","Uuroid","Uvan","Uven","Vipoig","Vurguist","Wid","Wroid"]
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		rnd = Math.random() * nm1.length | 0;
		nMs = nm1[rnd];
		nm1.splice(rnd, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}