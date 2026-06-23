// Dependencies
const fs = require('fs');
const path = require('path');

const generators = {};
const generatorsPath = path.join(__dirname, 'generators');

try {
	const folders = fs.readdirSync(generatorsPath);
	for (const folder of folders) {
		const folderPath = path.join(generatorsPath, folder);
		if (fs.statSync(folderPath).isDirectory() && folder !== 'to_sort') {
			const files = fs.readdirSync(folderPath);
			const items = [];
			for (const file of files) {
				if (file.endsWith('.js')) {
					const name = file.replace(/\.min\.js$/, '').replace(/\.js$/, '');
					if (!items.includes(name)) {
						items.push(name);
					}
				}
			}
			if (items.length > 0) {
				generators[folder] = items;
			}
		}
	}
} catch (e) {
	console.error("Failed to dynamically load generators list:", e);
}

module.exports = function(group, individual, quantity) {
	// Randomise inputs
	if(typeof group === 'undefined') group = Object.keys(generators)[Math.floor(Math.random() * Object.keys(generators).length)];
	group = group.toLowerCase().replace(" ", "_");
	if(!(group in generators)) throw "Invalid group: " + group + "!";
	if(typeof individual === 'undefined') individual = generators[group][Math.floor(Math.random() * generators[group].length)];
	individual = individual.toLowerCase().replace(" ", "_");
	if(!generators[group].includes(individual)) throw "Invalid individual: " + group + "/" + individual + "!";
	if(typeof quantity === 'undefined') quantity = 1;
	
	// Generate names
	try {
		var generator;
		try {
			// Try first to see if it has already been loaded.
			generator = eval('generator$'+group+'$'+individual);
		} catch(ignored) {
			// TODO This eval is horrible, convert to a proper module.
			let filePath = path.join(__dirname, 'generators', group, individual + '.min.js');
			if (!fs.existsSync(filePath)) {
				filePath = path.join(__dirname, 'generators', group, individual + '.js');
			}
			eval(fs.readFileSync(filePath, 'utf8'));
			generator = eval('generator$'+group+'$'+individual);
		}
		
		var output = [];
		for(var q = 0; q < quantity; q++) output.push(generator(Math.random() > 0.5 ? 0 : 1));
		return output;
	} catch(e) {throw "Couldn't load: generator$"+group+"$"+individual;}
}
