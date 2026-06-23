
function nameGen(){
	var nm1 = ["Ace","Angel","Answer","Ant","Antsy","Apple","Art","Aunt","Babble","Babe","Badger","Baffle","Bandana","Bear","Beauty","Beetle","Belcher","Berry","Big Bear","Blossom","Blubber","Boggle","Bonbon","Bubble","Bubbles","Buddy","Bug","Buggy","Bulb","Bumble","Bunbun","Bunny","Button","Buttons","Cake","Chalk","Cheek","Cheeks","Cheese","Chick","Chicken","Chickpea","Chin","Chip","Chipper","Chippie","Chitter","Chomper","Chuckle","Chuckles","Cloud","Clover","Coco","Cocoa","Cork","Corky","Cracker","Crayon","Crinkle","Croaker","Cuddle","Cuddles","Cupcake","Diamond","Digger","Dime","Dimple","Dimples","Doll","Doodle","Dot","Dottie","Dreamer","Dribble","Droplet","Drum","Duck","Dusty","Echo","Edge","Egg","Eggy","Emerald","Face","Feather","Fiddle","Fidget","Firj","Flake","Fluff","Fluke","Flush","Fly","Friend","Frogger","Froggy","Fruit","Fruitcake","Gambol","Ghost","Giddy","Giggle","Giggles","Ginger","Gnash","Gobble","Goggle","Goggles","Goose","Goosebump","Gossip","Grape","Grimace","Grouch","Groucher","Hammer","Heart","Heckle","Hope","Ice","Impulse","Ink","Jabber","Jade","Jangle","Jelly","Jester","Jewel","Jiggle","Jiggles","Jingle","Juice","Junior","King","Knit","Knot","Lace","Lady","Ladybug","Legs","Light","Loop","Loopy","Lucky","Lullaby","Marble","Marbles","Meep","Meow","Mercy","Mime","Mimic","Mint","Minty","Monkey","Moon","Mouse","Muffle","Mumble","Mumbles","Munch","Nana","Nanners","Nemo","Nibble","Nibbles","Nimty","Noodle","Numty","Nutmeg","Nutty","Oaf","Oats","Ocean","Ogle","Oracle","Pancake","Patch","Patches","Peanut","Peanutbutter","Pear","Pebble","Pencil","Pickle","Pickles","Pie","Piece","Pinhead","Pint","Pitch","Pizza","Plume","Pocket","Poem","Popcorn","Potato","Prickle","Putput","Puzzle","Quartz","Query","Quill","Quince","Rabbit","Ramble","Rattle","Red","Rhyme","Riddle","Rifraf","Robin","Root","Ruby","Rumble","Sailor","Salt","Salty","Sandy","Sapphire","Scamp","Scramble","Scratch","Scribble","Senior","Shadow","Shine","Shoo","Silly","Silver","Skitter","Smiley","Smirk","Sniffle","Sniffles","Snow","Snowflake","Soap","Soda","Spark","Sparkle","Speedy","Spirit","Squirrel","Star","Starlight","Stew","Stitch","Stitches","Stretch","Sugar","Sunny","Sunshine","Sweets","Switch","TJ","Tackle","Tale","Tank","Tater","Tato","Tattoo","Teeth","Thread","Thumb","Thunder","Tickle","Tickles","Tingle","Tippytoe","Tiptoe","Toad","Toads","Tooth","Tramp","Trouble","Trouser","Trousers","Tubby","Tubs","Tumble","Twilight","Twinkle","Twinkletoe","Twist","Twister","Twitch","Uncle","Veil","Vex","Waddle","Whistle","Wish","Worm","Wrinkle","Yarn","Yodel"];

	var br = "";

	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
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