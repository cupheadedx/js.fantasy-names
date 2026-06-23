
var br ="";


function nameGen(type){
	var nm1 = ["Aaron Time","Ace Hearts","Adam Miration","Adam Nation","Adan Gerous","Aiden Gardens","Alec Smarts","Alex Travert","Alexander Struction","Allen Wrench","Amir Amore","Andrew Maeda","Andrew Pictures","Angel Wings","Art Class","Ashton Twister","Atlas Borne","Atticus Words","August Winds","Austin Nuendo","Axel Questions","Beau Dacious","Benjamin Buttocks","Bigby Wolf","Bjorn Again","Blake Well","Brad Winner","Brian Storme","Brody Builder","Bryan Drogynous","Cameron Top","Carlos Tinyu","Carson Fyre","Carter Town","Chase Minnow","Christian Sins","Cole Lection","Colin Coming","Colton Locked","Connor Stay","Conor Ganic","Cooper Up","Damian Slayer","Damon Signeur","Dean Don","Dominic Trix","Drew Pictures","Dylan Selot","Edward Robes","Eli Truths","Elias Tronomy","Elijah Wood","Enzo Wiego","Ethan Dercloud","Eugene Jackets","Even Nescent","Ezra Dickle","Felix Mannie","Finn Naleigh","Forrest Walks","Francis Picious","Gabriel Leesium","Gavin Toumi","Gio Graphic","Graham Bittion","Grayson Daughters","Hankey Pankey","Haye Wyre","Herb Gardens","Holden Riter","Hudson Rivers","Hue Watt","Hugh Rang","Hugo Tutown","Isaac O'Sheet","Ivan Tastic","Jacob Byte","Jacques Sheet","Jason Sation","Jaxon Fyve","Jayden Gerous","Jesse Janes","Jesus Piscious","Jett Setter","Joaquin Eyes","Joe Phial","John Sun","Jonah Thanks","Jose Nomore","Juan Knight","Judas Kiss","Jude Hayes","Julian Gell","Justin Thyme","Kai Yenne","Kevin Credible","Knox Onwood","Kobe Yurself","Landon Under","Leo Patra","Levi Alone","Liam Down","Lincoln Strictor","Logan Control","Luca Sanova","Luis Kent","Malcolm Witme","Manuel Away","Marco D. Deville","Marco Polover","Marcus Tombild","Marshal Arts","Matthew Fenism","Max Speeds","Maximus Sull","Maxwell Done","Merph Vellus","Micah Sanova","Mike Drop","Miles Away","Milo Ryder","Morgan Fatana","Nathaniel Scape","Neil Downe","Nicholas Toogo","Noah Arcs","Noah Veil","Oliver Body","Oliver Twists","Omar Goodness","Owen Monet","Patrick Ster","Pedro Mantic","Phoenix Bright","Phoenix Rising","Quinn Some","Raiden Castle","Ray Diante","Ray Nessance","Ray Storm","Rey Bitt","Rey Mantique","Rey Markeble","Rey Moorse","Rey Torric","Rhett Alert","Rocky Bottom","Rocky Solid","Roman Temple","Ronin Fidel","Rowan Teds","Ruben Evolence","Ryan Gellic","Sam Armie","Sam Ooth","Sammy Cologne","Santiago Away","Saul Lay","Saul Leeness","Sawyer Go","Silas Kings","Silver Foxx","Simon Star","Solomon Ologue","Stan Up","Ted Talks","Theo Rettical","Thomas Siff","Travis Suall","Trevor Rocious","Tye Girh","Tye Phoon","Victor Rious","Vin Dictive","Vincent Sational","Wade Aminit","Walker Holmes","Warren Tee","Waylon Time","Wesley Swipes","Will Power","Wyatt Tractif","Zayn Zational"];
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id","result");
	
	for(i = 0; i < 10; i++){
		rnd = Math.random() * nm1.length | 0;
		names = nm1[rnd];
		nm1.splice(rnd, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}