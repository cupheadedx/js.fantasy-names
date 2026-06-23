// Elements
var nametype  = document.getElementsByClassName('nametype')[0] || document.getElementById('nametype');
var quantity  = document.getElementById('quantity');
var output    = document.getElementById('output');
var seperator = "\n";
var clear     = true;

var GITHUB_API_URL = "https://api.github.com/repos/cupheadedx/js.fantasy-names/git/trees/master?recursive=1";
var generators = {};

async function initGenerators() {
    let treeData;
    const cacheKey = "generator_github_tree_cache";
    const cacheTimeKey = "generator_github_tree_cache_time";
    
    const now = new Date().getTime();
    if (localStorage.getItem(cacheKey) && localStorage.getItem(cacheTimeKey) && now - parseInt(localStorage.getItem(cacheTimeKey)) < 3600000) {
        treeData = JSON.parse(localStorage.getItem(cacheKey));
    } else {
        try {
            const response = await fetch(GITHUB_API_URL);
            if (!response.ok) throw new Error("API error");
            const data = await response.json();
            treeData = data.tree;
            localStorage.setItem(cacheKey, JSON.stringify(treeData));
            localStorage.setItem(cacheTimeKey, now.toString());
        } catch (e) {
            console.error("Failed to fetch from GitHub API.", e);
            output.innerText = "Error loading generator list from GitHub. You may have hit the API rate limit.";
            return;
        }
    }
    
    treeData.forEach(item => {
        if (item.path.startsWith('generators/') && item.path.endsWith('.js')) {
            const parts = item.path.split('/');
            if (parts.length === 3) {
                const category = parts[1];
                if (category === "to_sort") return;
                const filename = parts[2];
                const name = filename.replace(/\.min\.js$/, '').replace(/\.js$/, '');
                
                if (!generators[category]) {
                    generators[category] = {};
                }
                generators[category][name] = filename;
            }
        }
    });

    populateDropdowns();
}

function formatName(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function populateDropdowns() {
    nametype.innerHTML = '';
    
    const sortedCategories = Object.keys(generators).sort();
    sortedCategories.forEach(cat => {
        let opt = document.createElement('option');
        opt.value = cat;
        opt.innerText = formatName(cat);
        nametype.appendChild(opt);
    });
    
    Array.from(document.getElementsByClassName('namelist')).forEach(el => el.remove());
    
    sortedCategories.forEach(cat => {
        let select = document.createElement('select');
        select.className = 'namelist';
        select.id = cat;
        select.style.display = 'none';
        
        const sortedItems = Object.keys(generators[cat]).sort();
        sortedItems.forEach(item => {
            let opt = document.createElement('option');
            opt.value = item;
            opt.innerText = formatName(item);
            select.appendChild(opt);
        });
        
        nametype.after(select);
    });
    
    setupListeners();
}

function getnamelist() {
    return document.getElementById(nametype.value);
}

function setupListeners() {
    if(readCookie("selectedGenerator") != null) {
        var options = readCookie("selectedGenerator").split("$");
        if (generators[options[0]] && generators[options[0]][options[1]]) {
            nametype.value = options[0];
            getnamelist().style.display = "inline";
            getnamelist().value = options[1];
            if(quantity) quantity.value = options[2] || 10;
        }
    }
    
    nametype.onchange = function() {
        var namelists = document.getElementsByClassName('namelist');
        for(var i = 0; i < namelists.length; i++) namelists[i].style.display = "none";
        if (getnamelist()) {
            getnamelist().style.display = "inline";
            getnamelist().onchange = function() {generate();}
        }
        if(quantity) quantity.onchange = function() {generate();}
        generate();
    }
    document.onkeydown = function(evt) {if ((evt || window.event).keyCode == 32) generate();};
    nametype.onchange();
}

function generatelist() {
	clear = false;
	seperator = ", ";
	output.innerText = "";
	for(var i = 0; i < getnamelist().length; i++) {
		getnamelist().selectedIndex = i;
		output.innerText += "\n" + getnamelist().value.replace("_", " ") + "\n";
		generate();
		output.innerText += "\n";
		generate();
	}
	clear = true;
	seperator = "\n";
}

function generate() {
    if (!getnamelist()) return;
    if(quantity) createCookie("selectedGenerator", nametype.value+"$"+getnamelist().value+"$"+quantity.value, 365);
	
	if(nametype.value == "descriptions" && quantity) quantity.value = 1;
	
    let cat = nametype.value;
    let item = getnamelist().value;
    let exactFilename = generators[cat][item];

	var generator = window["generator$"+cat.replace(/-/g, '_')+"$"+item];
	if(typeof generator === 'function') {
		output.setAttribute("data-generator", cat+"$"+item);
		if(clear) output.innerText = "";
        let q = quantity ? quantity.value : 10;
		for(var i = 0; i < q; i++) output.innerText += generator(Math.random() > 0.5 ? 1 : 0) + seperator;
	} else {
		loadScript("generators/"+cat+"/"+exactFilename, function() {
			var generator = window["generator$"+cat.replace(/-/g, '_')+"$"+item];
			if(typeof generator === 'function') {
				output.setAttribute("data-generator", cat+"$"+item);
				if(clear) output.innerText = "";
                let q = quantity ? quantity.value : 10;
				for(var i = 0; i < q; i++) output.innerText += generator(Math.random() > 0.5 ? 1 : 0) + seperator;
			} else {
				console.log("Not found: generator$"+cat.replace(/-/g, '_')+"$"+item);
			}
		});
	}
}

initGenerators();
