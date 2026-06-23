var nm1 = ["Aberrant","Abnormal","Absurd","Advanced","Agile","Ancient","Angry","Arrogant","Berserk","Berserker","Bitter","Bizarre","Bloody","Bold","Brilliant","Broken","Careless","Cold","Corrupt","Craven","Cruel","Dapper","Dashing","Defiant","Depraved","Dim","Drunk","Dull","Dynamic","Elite","Enraged","Ethereal","False","Fearless","Fierce","Foolhardy","Free","Frozen","Gentle","Giant","Glum","Golden","Grand","Grave","Grim","Hallowed","Harsh","Hidden","High","Hollow","Horned","Idle","Infamous","Infernal","Juvenile","Keen","Last","Lazy","Light","Little","Livid","Lone","Lost","Loud","Loyal","Lucky","Mad","Majestic","Mammoth","Marked","Mellow","Mild","Monster","Mute","Mysterious","Mystery","Next","Nimble","Numb","Old","One","Pale","Partial","Petty","Phony","Poison","Prime","Proud","Putrid","Quick","Quiet","Rabid","Radiant","Rampant","Rebel","Reckless","Rotten","Ruthless","Second","Secret","Serene","Shallow","Sharp","Sick","Silent","Silver","Simple","Skeleton","Smiling","Somber","Spirit","Stark","Steel","Strange","Strong","Supreme","Swift","Tiny","True","Twin","Useless","Vacant","Vague","Venom","Vibrant","Violent","Volatile","Wandering","War","Warped","Wrathful","Wicked","Wild","Wretched"];
var nm2 = ["Adventure","Aftermath","Ambition","Anger","Animal","Bandana","Beam","Bear","Beast","Beetle","Bite","Blade","Bomb","Bone","Bonus","Brick","Bubble","Bug","Burst","Cable","Cactus","Cannon","Chain","Chaos","Cloud","Club","Creature","Crook","Crush","Earthquake","Edge","Escape","Fang","Feast","Fire","Flame","Flock","Fluke","Flux","Garbage","Ghost","Gift","Gold","Gun","Hammer","Hide","Horn","Ice","Impulse","Ink","Insanity","Iron","Jewel","Judge","Kite","Knife","Knot","Leaf","Light","Lightning","Lock","Luck","Mask","Master","Might","Mist","Mouth","Muscle","Nail","Needle","Nerve","Night","Noise","Omen","Peace","Phase","Pitch","Poison","Pride","Quill","Rain","Riddle","Risk","Rock","Root","Rose","Salt","Scale","Shift","Shock","Sky","Slice","Song","Spark","Spider","Split","Sponge","Star","Steel","Stick","Stitch","Stone","Storm","Stretch","Switch","Tackle","Temper","Thunder","Tiger","Toad","Tooth","Trash","Tremor","Trick","Twist","Veil","Web","Whip","Whistle","Wish","Worm"];

function generator$pop_culture$onePunchMan(){
	i = Math.floor(Math.random() * 10);

	nTp = Math.random() * 2 | 0;
		rnd2 = Math.random() * nm2.length | 0;
		if(nTp === 0){
			names = nm2[rnd2];
		}else{
			rnd = Math.random() * nm1.length | 0;
			names = nm1[rnd] + " " + nm2[rnd2];
		}
		return names;
}