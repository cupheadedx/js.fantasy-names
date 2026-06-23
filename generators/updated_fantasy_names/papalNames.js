function nameGen(){
	var nm1 = ["Adeodatus","Adrian","Agapetus","Agatho","Alexander","Anacletus","Anastasius","Anicetus","Anterus","Benedict","Boniface","Caius","Callixtus","Celestine","Clement","Conon","Constantine","Cornelius","Damasus","Dionysius","Donus","Eleuterus","Eugene","Eusebius","Eutychian","Evaristus","Fabian","Felix","Formosus","Francis","Gelasius","Gregory","Hilarius","Honorius","Hormisdas","Hyginus","Innocent","John","John Paul","Julius","Lando","Leo","Liberius","Linus","Lucius","Marcellinus","Marcellus","Marinus","Mark","Martin","Miltiades","Nicholas","Paschal","Paul","Pelagius","Peter","Pius","Pontian","Romanus","Sabinian","Sergius","Severinus","Silverius","Simplicius","Siricius","Sisinnius","Sixtus","Soter","Stephen","Sylvester","Symmachus","Telesphorus","Theodore","Urban","Valentine","Victor","Vigilius","Vitalian","Zachary","Zephyrinus","Zosimus"];
	var nm2 = ["Abraham","Achillas","Agathon","Agrippinus","Alexander","Anastasius","Andronicus","Anianus","Athanasius","Avilius","Benjamin","Celadion","Christoldoulos","Cosmas","Cyril","Damian","Demetrius","Dionysius","Dioscorus","Eumenius","Gabriel","Heraclas","Isaac","James","John","Joseph","Julian","Justus","Kedron","Macarius","Mark","Markianos","Matthew","Maximus","Michael","Mina","Peter","Philotheos","Primus","Shenouda","Simeon","Theodore","Theodosius","Theonas","Theophilus","Timothy","Zacharias"];
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		if(i < 5){
			rnd = Math.random() * nm1.length | 0;
			names = "Pope " + nm1[rnd];
			nm1.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm2.length | 0;
			names = "Pope " + nm2[rnd];
			nm2.splice(rnd, 1);
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