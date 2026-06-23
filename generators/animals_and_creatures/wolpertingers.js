

function generator$animals_and_creatures$wolpertingers(type){
	i = Math.floor(Math.random() * 10);


	var nm1 = ["Ace","Achilles","Alchemy","Amadeus","Angek","Apache","Apocalypse","Apollo","Aragorn","Archer","Armageddon","Ash","Ashes","Athena","Atlas","Aurora","Avalanche","Avalon","Bandit","Beacon","Blackjack","Blink","Blinker","Blitz","Bolt","Bomber","Bones","Bonkers","Boomerang","Booth","Boulder","Brimstone","Bruise","Bruiser","Brutus","Buck","Buckle","Bullet","Buster","Caerbannog","Chance","Chaos","Chase","Chronos","Cinder","Colt","Comet","Cosmos","Cotton","Cottonball","Courage","Crimson","Cuddles","Dagger","Dalton","Dandelion","Dash","Dawn","Death","Destiny","Digger","Dusk","Dust","Echo","Edge","Enigma","Eternity","Excalibur","Fable","Faith","Flapsy","Flopsy","Fluff","Fluffernutter","Fringey","Fury","Gallop","Ghost","Goliath","Hannibal","Havoc","Hawke","Hector","Hunter","Huntress","Hymn","Indigo","Ivory","Jade","Jaeger","Jaws","Jeckyll","Jenkins","Jericho","Juggernaut","Julius","Jupiter","Karma","Killer","Liberty","Lightning","Lore","Lullaby","Lupus","Magnum","Magnus","Mahogany","Marshmallow","Maverick","Maximus","Mellow","Midnight","Mittens","Mohawk","Munchkin","Myth","Nero","Nibbles","Nightmare","Nugget","Nutters","Oak","Omega","Onyx","Oracle","Orbit","Orion","Pacino","Padfoot","Pandora","Patch","Patches","Paws","Pebbles","Phantom","Plume","Precious","Quest","Quicksilver","Quill","Rage","Rags","Ranger","Rascal","Razor","Rebel","Requiem","Ribbon","Rogue","Rohan","Romulus","Rosebud","Ruby","Ruffles","Rumble","Rumbles","Sabre","Saruman","Sauron","Scarlet","Shade","Shadow","Sierra","Silver","Smudge","Solace","Solstice","Soot","Speckle","Spike","Splinter","Storm","Tawny","Thor","Thumper","Thunder","Tiberius","Timber","Titan","Tooth","Toots","Tracker","Trapper","Trembles","Tripper","Truffle","Tumble","Twilight","Umber","Vapor","Voltaire","Whiskers","Widget","Winter","Wolp","Wolper","Wonder","Woods","Zen","Zeus"];

	var tp = type;

	rnd = Math.random() * nm1.length | 0;

		names = nm1[rnd];

		nm1.splice(rnd, 1);

		return names;

}