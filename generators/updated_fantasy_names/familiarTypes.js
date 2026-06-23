var nm1 = ["Animated","Arcane","Artificial","Astral","Celestial","Clockwork","Conjured","Corporeal","Demonic","Elemental","Enchanted","Ethereal","Fey","Spectral","Corporeal","Fell","Magical","Mechanical","Physical","Shadow","Skeletal","Undead"];
var br = "";

function nameGen(){
	var nm2 = ["Ape","Armadillo","Baboon","Badger","Bat","Bear","Beaver","Bird of Paradise","Boar","Bobcat","Bugbear","Bunyip","Cat","Chicken","Cobra","Cockatoo","Cougar","Coyote","Crane","Crow","Cuckoo","Deer","Dodo","Dog","Dove","Dragonling","Drake","Eagle","Falcon","Ferret","Finch","Fox","Golem","Frog","Gerbil","Goat","Goldhorn","Goose","Gorilla","Gull","Hamster","Hare","Hawk","Hedgehog","Heron","Hound","Hummingbird","Hyena","Ibex","Jackal","Jackalope","Jaguar","Kangaroo","Kingfisher","Kitsune","Kiwi","Koala","Komodo Dragon","Lemur","Lion","Llama","Lovebird","Lynx","Macaw","Magpie","Mandrill","Manticore","Meerkat","Mongoose","Mouse","Newt","Nightingale","Ocelot","Opposum","Otter","Owl","Panda","Panther","Parakeet","Parrot","Peacock","Penguin","Pheasant","Phoenix","Pig","Pigeon","Quail","Rabbit","Raccoon","Rat","Raven","Red Panda","Roc","Sloth","Snake","Spider","Squirrel","Stork","Tarsier","Thunderbird","Toad","Tortoise","Turkey","Turtle","Vulture","Weasel","Wolf","Wolpertinger","Wolverine","Wombat","Woodpecker","Yak"];
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd = Math.random() * nm1.length | 0;
		rnd2 = Math.random() * nm2.length | 0;
		nMs = nm1[rnd] + " " + nm2[rnd2];
		nm2.splice(rnd2, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}