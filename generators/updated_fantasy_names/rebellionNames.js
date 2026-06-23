var br = "";
var nm2 = ["Coup","Defiance","Defiants","Fighters","Guerrillas","Insurgence","Insurgency","Insurgents","Insurrection","Rebellion","Rebels","Reformation","Renegades","Resistance","Revolt","Revolters","Revolution","Rising","Separatists","Shift","Uprising"];

function nameGen(){
	var nm1 = ["Abandoned","Abolition","Ancient","Arctic","Awareness","Balance","Barren","Beginning","Belated","Berserker","Bitter","Blade","Blind","Blood","Bloody","Bold","Brass","Bright","Broken","Capital","Capitol","Ceaseless","Chain","Chained","Chainless","Change","Citizen","Climate","Closed","Cloud","Cold","Craven","Crimson","Crown","Cruel","Dark","Dead","Death","Defiance","Defiant","Delivery","Deserted","Devoted","Diamond","Diligent","Dirty","Dual","Early","Election","Emancipation","Enraged","Equality","Eternity","Ethereal","Exemption","Faded","Faith","False","Fate","Fearless","Feigned","Fierce","First","Fluke","Forsaken","Free","Freedom","Ghastly","Ghost","Gold","Golden","Grand","Grave","Great","Grim","Guiltless","Half","Hallowed","Heaven's","Hellish","Hollow","Horror","Ideal","Ill","Immunity","Impure","Income","Independence","Infinite","Island","Jewel","Joint","Justice","Juvenile","Keen","Killing","Last","Liberation","Liberty","Light","Little","Livid","Lone","Long","Lost","Love","Loyal","Mad","Marble","Marked","Masked","Master","Media","Memory","Midnight","Mindless","Misery","Mute","Next","Old","Patriot","Peaceful","Phantom","Playground","Pollution","Prime","Professional","Promise","Proud","Public","Pure","Putrid","Quick","Quiet","Rabid","Rebel","Rebirth","Reckless","Redemption","Reflection","Requiem","Resolution","Revenue","Riches","Rotten","Royal","Rural","Ruthless","Salvation","Sanguine","Sanity","Second","Security","Service","Shadow","Short","Silent","Slave","Slavery","Spark","Spirit","Stark","Steel","Storm","Swift","Tax","Terror","Throne","Thunder","Tolerance","Tradition","Trivial","Truth","Unbound","Unsung","Unwritten","Urban","Vagabond","Vindication","Voiceless","Volatile","Whistle","Wild","Wrathful","Wretched"];
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
			rnd = Math.random() * nm1.length | 0;
			rnd2 = Math.random() * nm2.length | 0;
			names = "The " + nm1[rnd] + " " + nm2[rnd2];
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