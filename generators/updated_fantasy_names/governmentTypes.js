var nm1 = ["People's","Co-Operative","Democratic","Democratic Socialist","Democratic People's","Federal Democratic","People's","Socialist","People's Democratic","People's Socialist","Federative","Plurinational","Communist","Capitalist"];
var nm2 = ["State","States","Republic","Commonwealth","Confederation","Federation","Duchy","Kingdom","Empire","Principality","Sultanate","Union","Monarchy","Hegemony","Alliance","League","Caliphate"];
var nm3 = ["Absolute","Altruistic","Ancient","Boundless","Common","Determined","Devout","Divine","Elevated","Enlightened","Eternal","First","Free","Glorious","Grand","Great","Hallowed","Holy","Honorable","Honored","Independent","Infinite","Invincible","Loyal","Majestic","Matriarchal","Patriarchal","Peaceful","Powerful","Proud","Pure","Radiant","Righteous","Rightful","Second","Serene","Spiritual","Superior","Supreme","Timeless","True","Ultimate","United","Venerated","Vigilant"];
var nm4 = ["Academics'","Artisan's","Champion's","Chosen One's","Clergy's","Commoner's","Divinity's","Economists'","Farmer's","Fortune's","General's","Highborn's","Individual's","Judge's","Mage's","Merchant's","Minister's","Noble's","Officer's","Patriot's","People's","Philosopher's","Sage's","Scholar's","Scientists'","Seer's","Slaver's","Sorcerer's","Trader's","Warrior's"];

var br = "";

function nameGen(){
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd2 = Math.random() * nm2.length | 0;
		if(i < 7){
			nTp = Math.random() * 5 | 0;
			if(nTp === 0){
				rnd3 = Math.random() * nm3.length | 0;
				names = nm3[rnd3] + " " + nm2[rnd2];
			}else if(nTp < 3){
				rnd = Math.random() * nm1.length | 0;
				rnd3 = Math.random() * nm3.length | 0;
				names = nm3[rnd3] + " " + nm1[rnd] + " " + nm2[rnd2];
			}else{
				rnd = Math.random() * nm1.length | 0;
				names = nm1[rnd] + " " + nm2[rnd2];
			}
		}else{
			rnd = Math.random() * nm4.length | 0;
			names = nm4[rnd] + " " + nm2[rnd2];
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