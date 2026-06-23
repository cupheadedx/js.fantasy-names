var nm1 = ["Abyss","Aether","Alpha","Ancestral","Angel","Arch","Ash","Aspect","Astral","Azure","Battle","Bitter","Blade","Blaze","Blood","Brand","Bright","Celestial","Chain","Chaos","Chill","Cloud","Cold","Crimson","Crown","Dark","Dawn","Dead","Demon","Devil","Divine","Doom","Dragon","Dread","Dream","Dual","Dusk","Earth","Elder","Ember","End","Eternal","Even","Ever","Faith","Fate","Faye","Finis","Fire","Flame","Flock","Fortune","Frost","Furor","Ghost","Giant","God","Grim","Heaven","Horror","Iron","Last","Life","Light","Lost","Moon","Morn","Nether","Obsidian","Omega","Omen","Onyx","Origin","Other","Phoenix","Pure","Radiant","Root","Serpent","Shadow","Silent","Snow","Sorrow","Spark","Spell","Spider","Spirit","Star","Stark","Stellar","Storm","Sun","Tempest","Thunder","Timeless","Totem","True","Truth","Veil","Virtue","Void","Vortex","Wicked","Wild","Wonder","Wrath"];
var nm2 = ["blood","child","born","soul","gift","heart"];
var nm3 = ["Blood","Child","Born","Soul","Gift","Heart","One"];

var br = "";

function nameGen(){
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		nTp = Math.random() * 2 | 0;
		rnd2 = Math.random() * nm1.length | 0;
		if(nTp === 0){
			rnd = Math.random() * nm2.length | 0;
			names = "The " + nm1[rnd2] + nm2[rnd];
		}else{
			rnd = Math.random() * nm3.length | 0;
			names = "The " + nm1[rnd2] + " " + nm3[rnd];
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