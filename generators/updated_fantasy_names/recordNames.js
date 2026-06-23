var br = "";
var nm2 = ["Audio","Distribution","Entertainment","Entertainment Group","International","Music","Music Group","Recordings","Records","Records, Inc.","Records","Records","Music","Records","Records","Music","Records","Records","Music","Records","Records","Music"];

function nameGen(){
	var nm1 = ["Aberrant","Adoration","Adventure","Afternoon","Alloy","Ambition","Animal","Animation","Anybody","Apparatus","Appeal","Applause","Artistry","Attitude","Awakening","Beacon","Big Break","Big Chance","Big Dreams","Bird of Paradise","Black Crow","Blessing","Blossom","Blue Flame","Blue Moon","Brilliance","Broadcast","Bull","Burning Flame","Cannonball","Capture","Catapult","Celebration","Chaperon","Chariot","Cherish","Cherry","Clamor","Clarity","Classic","Clockwork","Cloud Nine","Community","Courage","Crane","Crimson Crown","Crossroad","Crown","Curiosity","Daydream","Definition","Delight","Delivery","Desire","Diamond","Discovery","District","Doodle","Double Plat","Downtown","Dragonfire","Drumbeat","Echo","Eclipse","Elegance","Elephant","Enchanted","Enchanting","Energy","Enigma","Enthralling","Envision","Estate","Exclamation","Exploration","Expression","Extreme","Fascination","Fiddlestick","Figurine","Flock","Fortune","Fourth Dimension","Freedom","Frontier","Full Moon","Future","Generosity","Ghost","Ghostwork","Gilded","Golden Canary","Good Fortune","Good Grace","Grace","Green Grass","Griffin","Harmonize","Harmony","Heart","Hearth","Herald","Highlight","Hummingbird","Hypnotize","Illustrate","Illustrious","Image","Imagination","Imagine","Impact","Impulse","Independence","Ink","Inkwork","Invention","Ivory","Jellyfish","Jewel","Justice","Keyline","Kickback","Languish","Liberty","Lightbulb","Lightning","Lightningbolt","Limitless","Little Fiddle","Little Light","Lodestar","Lucky Clover","Lucky Streak","Lumber","Magpie","Mama Bear","Mammoth","Marble","Mask","Masquerade","Matron","Meadow","Memento","Memory","Midnight","Miracle","Mixture","Mockingbird","Monolith","Nebula","New Bloom","New Harbor","New Leaf","Nightingale","Nightowl","North Star","Nova","Oaken","Obelisk","Oceanview","Omen","Opportunity","Ornament","Paradise","Passion","Passionwork","Patriot","Patron","Phantom","Phoenix","Picture Perfect","Pinnacle","Pitch Perfect","Platinum","Platinum Songbird","Playground","Power Chord","Principle","Prism","Prophecy","Purple Flower","Quail","Quicksilver","Rainbow","Reality","Red Robin","Relish","Resolve","Rhinoceros","Ribbon","Right Note","Rosebud","Royal","Scarecrow","Scorpion","Selection","Serenade","Serenity","Shroud","Sidewalk","Signal","Signature","Smile","Smiling","Snowflake","Solstice","Somersault","Sonata","Songbird","Soundwave","Spark","Sparkle","Sparrow","Spectrum","Spellbound","Spirit","Stallion","Starling","Status","Strength","Summersong","Sunshine","Supernova","Third Dimension","Thrill","Throne","Thunderwave","Tinkerer","Tomorrow","Track","Treasure","Triumph","Unchained","Vagabond","Veil","Victory","Visage","Vision","Visionary","Voice","Weeping Willow","White Feather","White Rabbit","White Wolf","Witness","Wonder","World"];
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		rnd = Math.random() * nm1.length | 0;
		rnd2 = Math.random() * nm2.length | 0;
		nMs = nm1[rnd] + " " + nm2[rnd2];
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