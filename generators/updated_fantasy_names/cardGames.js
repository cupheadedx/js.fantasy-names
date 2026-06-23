var nm6 = ["against","and","versus","&","vs."];


function nameGen(){
	var nm1 = ["Accidents","Action","Adventures","Androids","Armies","Bananas","Bears","Beasts","Beings","Blades","Bones","Bottles","Bounties","Bubbles","Candles","Cannons","Cards","Carnivals","Cats","Chains","Champions","Chaos","Chickens","Owls","Colors","Cops","Creatures","Crooks","Crowns","Darkness","Death","Defenders","Demons","Desires","Despair","Detectives","Diamonds","Dimensions","Dogs","Dolls","Donkeys","Dragons","Dreams","Droids","Drums","Dryads","Dungeons","Dwarves","Elves","Evil","Feasts","Figures","Fire","Flames","Gargoyles","Geese","Genies","Ghosts","Ghouls","Giants","Gnolls","Gnomes","Goblins","Gods","Golems","Guardians","Hammers","Honor","Horror","Hunters","Imps","Justice","Killers","Kittens","Knights","Kobolds","Luxuries","Madness","Magic","Masks","Might","Miseries","Monkeys","Music","Mutants","Ogres","Omens","Oracles","Orcs","Ornaments","Pancakes","Parties","Power","Puppets","Quicksand","Riches","Riddles","Robots","Rumors","Scales","Servants","Shadows","Sirens","Snakes","Sorrow","Sparkles","Spiders","Spirits","Squirrels","Storms","Stuff","Thrones","Thunder","Thunderbolts","Titans","Toads","Towers","Treasures","Trolls","Unicorns","Vampires","Visitors","Wars","Whistles","Witches","Wizards","Wonders","Worlds","Worms","Zombies"];
	var nm2 = ["Adventures","Androids","Armies","Bananas","Bears","Beasts","Beings","Blades","Bones","Bottles","Cannons","Cards","Carnivals","Cats","Chains","Champions","Chaos","Chickens","Colors","Cops","Creatures","Crooks","Crowns","Darkness","Death","Defenders","Owls","Demons","Desires","Detectives","Diamonds","Dimensions","Dogs","Dolls","Donkeys","Dragons","Dreams","Droids","Drums","Dryads","Dungeons","Dwarves","Elves","Evil","Feasts","Figures","Fire","Flames","Gargoyles","Geese","Genies","Ghosts","Ghouls","Giants","Gnolls","Gnomes","Goblins","Gods","Golems","Guardians","Honor","Horror","Hunters","Imps","Justice","Killers","Kittens","Knights","Kobolds","Loot","Madness","Magic","Masks","Might","Miseries","Monkeys","Music","Mutants","Ogres","Omens","Oracles","Orcs","Ornaments","Parties","Power","Puppets","Quicksand","Riddles","Robots","Rumors","Scales","Servants","Shadows","Sirens","Snakes","Sorrow","Sparkles","Spiders","Spirits","Squirrels","Storms","Stuff","Thrones","Thunder","Thunderbolts","Titans","Toads","Towers","Treasures","Trolls","Unicorns","Vampires","Visitors","Wars","Whistles","Witches","Wizards","Wonders","Worlds","Worms","Zombies"];
	var nm3 = ["Androids","Armies","Bananas","Bears","Beasts","Beings","Blades","Bones","Bounties","Candles","Cannons","Cards","Cats","Chains","Champions","Chickens","Colors","Cops","Creatures","Crooks","Crowns","Death","Defenders","Demons","Detectives","Diamonds","Dimensions","Dogs","Dolls","Donkeys","Dragons","Dreams","Droids","Drums","Dryads","Dungeons","Dwarves","Elves","Feasts","Figures","Flames","Gargoyles","Geese","Genies","Ghosts","Ghouls","Giants","Gnolls","Owls","Gnomes","Goblins","Gods","Golems","Guardians","Hammers","Hunters","Imps","Killers","Kittens","Knights","Kobolds","Masks","Might","Potatoes","Monkeys","Mutants","Ogres","Omens","Oracles","Orcs","Ornaments","Pancakes","Parties","Puppets","Quicksand","Riches","Riddles","Robots","Rumors","Scales","Servants","Shadows","Sirens","Snakes","Spiders","Spirits","Squirrels","Storms","Stuff","Thrones","Titans","Toads","Towers","Treasures","Trolls","Unicorns","Vampires","Visitors","Wars","Whistles","Witches","Wizards","Wonders","Worlds","Worms","Zombies"];
	var nm4 = ["Abandoned","Absurd","Adventure","Alien","Ancient","Android","Angry","Army","Awkward","Banana","Barbaric","Beastly","Berserker","Blade","Blissful","Blushing","Bone","Bounty","Brave","Broken","Card","Careless","Carnival","Cat","Chain","Champion","Chaos","Chaotic","Cheeky","Chicken","Childish","Clueless","Cop","Creature","Criminal","Dark","Darkness","Deadly","Death","Defence","Demon","Detective","Diamond","Dimension","Doll","Donkey","Dragon","Dream","Droid","Drunk","Dungeon","Dwarf","Electric","Enchanted","Ethereal","Evil","False","Fantasy","Fearless","Filthy","Flame","Foolish","Gentle","Ghost","Ghoul","Giant","God","Golem","Goofy","Guardian","Honest","Honor","Horror","Hungry","Hunter","Idle","Infinite","Innocent","Jolly","Joyful","Justice","Juvenile","Killer","Kobold","Lethal","Little","Loot","Luxury","Mad","Magic","Majestic","Mammoth","Masked","Menacing","Mighty","Mindless","Monkey","Musical","Mutant","Mysterious","Mystery","Nimble","Oracle","Ornamental","Outlandish","Pancake","Party","Pointless","Posh","Puppet","Puzzled","Quicksand","Rabid","Rapid","Reckless","Rich","Robot","Servant","Shadow","Shallow","Silent","Silly","Sleepy","Spider","Spirit","Storm","Stormy","Strange","Surprise","Thunder","Tiny","Titan","Treasure","Troll","Troublesome","Unicorn","Vampire","Vicious","Violent","Visitor","Volatile","War","Weird","Whimsical","Whistle","Wicked","Wild","Witch","Wizard","Wonder","World","Worm","Zombie"];
	var nm5 = ["Action","Adventure","Ambition","Anger","Balance","Battle","Beyond","Blood","Bravery","Business","Celebration","Chance","Chaos","Conflict","Courage","Creation","Curiosity","Darkness","Delight","Desire","Discovery","Dreams","Eternity","Evil","Faith","Fear","Fire","Freedom","Frost","Gold","Happiness","Hatred","Honor","Hope","Horror","Ice","Iron","Jealousy","Judgment","Justice","Life","Light","Luck","Mercy","Might","Nightmares","Passion","Plenty","Power","Shadows","the Cemetary","the Curse","the Dark","the Dead","the Devil","the End","the Escape","the Fall","the Flock","the Future","the Light","the Mist","the Mountain","the Night","the Nightmare","the Omen","the Void"];
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		nTp = Math.random() * 3 | 0;
		if(nTp === 0){
			rnd = Math.random() * nm3.length | 0;
			rnd2 = Math.random() * nm3.length | 0;
			while(rnd === rnd2){
				rnd2 = Math.random() * nm3.length | 0;
			}
			rnd3 = Math.random() * nm6.length | 0;
			names = nm3[rnd] + " " + nm6[rnd3] + " " + nm3[rnd2];
			nm3.splice(rnd, 1);
			nm3.splice(rnd2, 1);
		}else if(nTp === 1){
			rnd = Math.random() * nm4.length | 0;
			rnd2 = Math.random() * nm1.length | 0;
			names = nm4[rnd] + " " + nm1[rnd2];
		}else{
			rnd = Math.random() * nm5.length | 0;
			rnd2 = Math.random() * nm2.length | 0;
			names = nm2[rnd2] + " of " + nm5[rnd];
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