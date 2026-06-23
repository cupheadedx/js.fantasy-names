var br = "";
var nm2 = ["Dr.","Prof."];

function nameGen(){
	var nm1 = ["Prof. Anity","Prof. Hanity","Prof. Hiler","Prof. Hess","Prof. Husion","Prof. Iterol","Prof. Hiterole","Prof. Oke","Dr. Agon","Dr. Aco","Dr. Ama","Dr. Ools","Dr. Eary","Dr. Hibble","Dr. Howsy","Dr. Hoid","Dr. Hools","Dr. Hugs","Dr. Hama","Dr. Hinks","Dr. Hoops","Dr. Hone","Dr. Heary","Aberrant","Accident","Acrid","Affect","Aftermath","Afterthought","Angel","Animal","Anomaly","Anxiety","Basket","Berserk","Bird","Bitter","Bizarre","Blank","Block","Bloop","Blooper","Bogus","Bone","Bones","Bother","Bottom","Boulder","Brick","Bug","Calamity","Calf","Catalyst","Catch","Chaos","Clockwork","Clueless","Clumsy","Combustion","Complex","Confusion","Cookie","Corner","Cover","Craven","Crayon","Cretin","Crook","Crow","Curiosity","Daisy","Daydream","Deficit","Delay","Delirious","Desire","Despair","Discount","Discovery","Dismal","Draco","Dread","Dynamite","Effect","Effort","Emphasis","Enigma","Estimate","Fanatic","Fascination","Fault","Feeble","Feedback","Fidget","Fingers","Flimsy","Fluke","Fortune","Fowl","Froth","Gander","Glum","Goof","Goose","Grave","Grief","Grim","Habit","Handle","Hap","Hazard","Heebie","Hollow","Horror","Imbalance","Impact","Impulse","Incident","Injury","Jacket","Jeebies","Jitter","Jitters","Judgment","Juvenile","Kaput","Livid","Macabre","Maniac","Marbles","Matter","Misery","Mishap","Moon","Mundane","Nincom","Ninny","Nobody","Noxious","Numb","Occasion","Oops","Outcome","Paltry","Panic","Patient","Personality","Pest","Plastic","Pollution","Possibility","Pressure","Pride","Prism","Prison","Promise","Pungent","Putrid","Quack","Queasy","Question","Quicksand","Rabid","Rash","Recipe","Regret","Requiem","Riddle","Rock","Rubble","Ruin","Rustic","Schmo","Seism","Shabby","Shade","Shadow","Signal","Simple","Slice","Sliver","Somber","Spark","Spider","Spite","Split","Stitch","Storm","Stranger","Subject","Target","Terror","Thrill","Thunder","Toast","Tremble","Trick","Trite","Trivial","Twist","Venom","Virus","Whistle","Wire"];
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd = Math.random() * nm1.length | 0;
		if(rnd < 23){
			names = nm1[rnd];
		}else{
			rnd2 = Math.random() * nm2.length | 0;
			names = nm2[rnd2] + " " + nm1[rnd];
		}
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