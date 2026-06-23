var br = "";

function nameGen(){
	var nm1 = ["Abseiler","Accountant","Acrobat","Actor","Acupuncturist","Aerobat","Anesthesiologist","Angler","Animal Trainer","Arborist","Archaeologist","Archer","Architect","Astrologist","Astronomer","Athletic Trainer","Attorney","Auctioneer","Author","BMXer","Babysitter","Baker","Bartender","Basketball Player","Biokineticist","Biologist","Bookbinder","Bookkeeper","Bricklayer","Broadcaster","Bullrider","Business Analyst","Butler","CEO","Cardiologist","Carpenter","Cashier","Chauffeur","Cheerleader","Chemist","Chiropractor","Choir Member","Clerk","Clock Maker","Clown","Comedian","Composer","Computer Analyst","Computer Repair Technician","Conductor","Construction Worker","Cop","Correction Officer","Counselor","Cowboy/girl","Curator","Cyber Security Agent","Dancer","Data Manager","Decathlonist","Delivery Person","Demolitionist","Dentist","Dermatologist","Dietician","Diplomat","Dodgeball Player","Dog Groomer","Driver","Ecologist","Economist","Editor","Emergency Physician","Engineer","Equestrian","Event Planner","Exorcist","Factory Worker","Fashion Designer","Fencer","Fighter Pilot","Filmmaker","Fireman","Florist","Flutist","Food Critic","Food Inspector","Foreman","Forensic Scientist","Forger","Free Runner","Freestyle BMXer","Game Designer","Gardener","Ghostwriter","Glover","Golfer","Graphic Designer","Guard","Hacker","Haematologist","Hairstylist","Hardware Engineer","Hatter","Herbalist","Hiker","Historian","Home Inspector","Host","Hunter","Hypnotist","Ice Climber","Ice Skater","Illusionist","Illustrator","Impersonator","Interior Designer","Interviewer","Janitor","Jewellery Designer","Journalist","Judge","Juggler","Kitesurfer","Landscaper","Lawyer","Librarian","Lifeguard","Linguist","Mailman","Manager","Marathon Runner","Marksman","Massage Therapist","Medic","Mental Health Professional","Miller","Miner","Model","Mountain Biker","Mountaineer","Neurosurgeon","News Anchor","Nuclear Engineer","Nutritionist","Officer","Olympic Champion","Opera Singer","Optometrist","Orchestra Member","PR Manager","Paintballer","Painter","Paraglider","Pastry Chef","Pathfinder","Perfumer","Philosopher","Physical Therapist","Physician","Pilot","Plumber","Poet","Politician","Principal","Prison Warden","Probation Officer","Psychiatrist","Public Speaker","Puppeteer","Racer","Radio Host","Ranger","Referee","Rigger","Robotic Engineer","Rock Climber","Runway Model","Salesperson","Scaffolder","Scammer","School Counselor","Scribe","Sculptor","Seamstress","Security Engineer","Security Guard","Shoemaker","Skateboarder","Sky Marshal","Skydiver","Smith","Snowboarder","Social Worker","Speechwriter","Sprinter","Tattoo Artist","Tax Inspector","Taxi Driver","Taxidermist","Toy Maker","Train Conductor","Translator","Triathlonist","Truck Driver","Undertaker","Ventriloquist","Violinist","Visual Designer","Voodoo Doctor","Web Developer","Wheelwright"];
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	for(i = 0; i < 10; i++){
		rnd = Math.random() * nm1.length | 0;
		nMs = nm1[rnd];
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