var nm2 = ["beak","belly","bill","breast","claw","crest","crown","eye","eyes","feather","head","mantle","plume","tail","talon","wing","wings"];



function generator$animals_and_creatures$rocNames(type){
	i = Math.floor(Math.random() * 10);


	var nm1 = ["Acid","Anger","Angry","Beam","Bitter","Black","Blade","Bleak","Blood","Bold","Bone","Brass","Bright","Broad","Bronze","Chaos","Cloud","Crazy","Crimson","Crown","Dark","Dawn","Dead","Death","Demon","Devil","Doom","Draft","Dread","Dream","Dusk","Dust","Ebon","Ember","Fire","Flame","Fog","Foul","Frost","Fume","Fury","Ghost","Giant","Glass","Gloom","Gold","Grave","Great","Grey","Grim","Grin","Half","Hate","Hell","Hollow","Ice","Iron","Jade","Kill","Kite","Light","Lightning","Lone","Lunar","Mad","Marsh","Metal","Mist","Moon","Night","Onyx","Phantom","Primal","Prime","Putrid","Quill","Rabid","Rage","Rain","Rapid","Rash","Razor","Red","River","Shadow","Silent","Smoke","Solar","Spark","Spite","Star","Stark","Steel","Stitch","Storm","Sun","Swift","Terror","Thorn","Thrill","Thunder","Twilight","Venom","Warp","Whip"];



	var tp = type;

	rnd = Math.random() * nm1.length | 0;

		rnd2 = Math.random() * nm2.length | 0;

		names = nm1[rnd] + nm2[rnd2];

		nm1.splice(rnd, 1);

		return names;

}