if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["Aa","Ae","Ani","Ari","Ca","Cane","Cea","Cia","De","Do","Dre","E","Eli","Exi","Ga","Gamme","Gho","Gia","Ha","Hi","Ho","Ja","Je","Ne","Nea","Nia","O","Oni","Ora","Ra","Rea","Rha","Rho","Ri","Sa","Sca","Sea","Sho","Te","Thi","Tho","Tia","Va","Vare","Vo","Vre","Xea","Xi","Xo","Zha","Zi","Zia","Zo"];

var nm2 = ["barr","bhel","bin","brim","dar","dden","dral","dus","ffal","fral","frin","ghan","gill","gron","himm","his","hnas","hran","lknar","lleah","llus","lnis","miah","miel","mut","neg","nem","niar","non","noss","ran","rgen","rhen","riel","shem","sian","son","ssar","tar","teon","than","tirr","vall","viel","vin","vron","zan","zarr","zham","zial"];

var nm3 = ["Aberrant","Accelerator","Adjuster","Advancer","Analyst","Animator","Arranger","Aspect","Beholder","Bolsterer","Brightener","Builder","Calculator","Changer","Chaos","Cleanser","Collapser","Completer","Concealer","Corroder","Corrupter","Creator","Crusher","Custodian","Dark","Darkener","Darkness","Defiler","Designer","Destroyer","Developer","Diagnoser","Discoverer","Dissolver","Distorter","Dreamer","Echo","Embellisher","Emulator","End","Energizer","Enhancer","Eternal","Expander","Explorer","Extender","Extinguisher","Fabricator","Fidgeter","Fixer","Flame","Fluke","Forger","Forsaker","Gatherer","Gift","Grinder","Grower","Guardian","Guide","Harvester","Igniter","Illuminator","Improver","Impulse","Inducer","Infecter","Infester","Influencer","Infuser","Initiator","Inquirer","Inspector","Inventor","Judge","Light","Maker","Manager","Manipulator","Manufacturer","Measurer","Meddler","Merger","Modifier","Morpher","Moulder","Mutilator","Normalizer","Nullifier","Observer","Organizer","Perceiver","Perfecter","Pioneer","Preserver","Producer","Promoter","Protector","Provider","Questioner","Ravager","Reclaimer","Reducer","Reinforcer","Replacer","Researcher","Restorer","Restructurer","Revealer","Reviser","Revoker","Salvager","Scatterer","Scorcher","Scrutinizer","Settler","Shadow","Sleeper","Squisher","Stabilizer","Star","Streamliner","Strengthener","Subtracter","Sunderer","Supervisor","Supplementer","Temperer","Throttler","Tinkerer","Trampler","Transformer","Treasurer","Twister","Undoer","Unfolder","Unleasher","Unraveler","Vanquisher","Vessel","Watcher","Weaver","Witness","Wonderer"];



function generator$pop_culture$marvelCelestials(type){
	i = Math.floor(Math.random() * 10);


	var tp = type;

	genMas();

		while(nMs === ""){

			genMas();

		}

		rnd = Math.random() * nm3.length | 0;

		nMs += " the " + nm3[rnd];

		return nMs;

}



function genMas(){

	rnd = Math.random() * nm1.length | 0;

	rnd2 = Math.random() * nm2.length | 0;

	nMs = nm1[rnd] + nm2[rnd2];

	testSwear(nMs);

}