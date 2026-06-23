
function generator$pop_culture$fullmetalAlchemist(type){
	i = Math.floor(Math.random() * 10);

	var nm1 = ["Absorbing","Adapting","Age","Age-Reverse","Air","Alcohol","Anger-Catalyst","Balance","Balancing","Bell","Blade","Blending","Blood","Bone","Brass","Brass Knuckle","Brawn","Bursting","Chain","Change","Chaos","Chrono","Cleansing","Climate","Clockwork","Cloud","Cloudburst","Cold","Comet","Condensing","Crown","Darkmetal","Diamond","Dream","Dreamscape","Drunken","Echo","Electric","Emotion","Emotion-Catalyst","Emphasising","Emulating","Enchantment","Energy","Energy-Convert","Engine","Enhancement","Equinox","Equivalence","Extracting","Fear-Fuel","Feather-Works","Feigning","Fire","Firework","Fleshwork","Fluke","Flux","Foundation","Friction-Field","Garden","Gas","Giantwork","Glass","Glasswork","Golden","Ground","Growth","Growth-Matter","Hate-Fuel","Heart","Ice","Icicle","Impulse","Ink","Inkwork","Ironbark","Ironscale","Ivory","Jewel","Jewelcraft","Lead","Leatherwork","Life","Life-Blood","Life-Breath","Life-Gift","Light","Lightmetal","Lightning","Liquid","Lunar","Machine","Machinework","Marble","Mass","Mind","Mirror","Mirror-Image","Mist","Moonrock","Nightmare","Obsidian","Oil","Paper","Photo","Powder","Prism","Purifying","Pyro","Quicksand","Rain","Rainstorm","Rebirth","Reflection","Refraction","Sand","Sanguine","Scale","Scalework","Silk","Smoke","Snow","Solar","Solstice","Spark","Spark-Work","Spell","Splitting","Star","Stardust","Steam","Storm","Time-Sand","Time-Warp","Timebound","Vapor","Volcano"];

	var tp = type;
	rnd = Math.random() * nm1.length | 0;
		names = "The " + nm1[rnd] + " Alchemist";
		nm1.splice(rnd, 1);
		return names;
}