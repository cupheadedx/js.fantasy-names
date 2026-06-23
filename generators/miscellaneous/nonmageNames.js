
function generator$miscellaneous$nonmageNames(type){
	i = Math.floor(Math.random() * 10);

	var nm1 = ["A-types","Aberrants","Abnormals","Abnormies","Abnorms","Abs","Anomalies","Arcanay","Arcanil","Arcanix","Arcano","Arcanoes","Atyps","Beyonders","Blanks","Bonas","Centrics","Chimeras","Commoners","Culiars","Deviants","Eccentrics","Eccents","Extraordinaries","Extraors","Feebles","Freaks","Free","Generics","Genrics","Gens","Hollows","Humdrums","Idles","Illegits","Imps","Impures","Inerts","Irregs","Irregulars","Lawfuls","Legis","Legits","Malfors","Medians","Meras","Millers","Miscreants","Monos","Mortals","Mundanes","Munds","Mutants","Mutes","Nabracadabras","Nabras","Naturals","Naygicians","Naymagi","Nerics","Nizards","Nocana","Noccult","Nocus","Nocus Pocus","Nogician","Nomages","Nomagi","Nomalies","Nonchanters","Nonvoyants","Norcana","Norcerers","Normies","Norms","Novoyants","Oddities","Ordies","Ordinaries","Originals","Orthos","Passives","Peculiars","Propers","Reggies","Regs","Regulars","Spiritless","Standards","Standies","Strangers","Traditionals","Typicals","Typics","Unnaturals","Usuals","Vacants","Voids","Voodon't","Weirdos","Zaros"];

	var tp = type;
	rnd = Math.random() * nm1.length | 0;
		names = nm1[rnd];
		nm1.splice(rnd, 1);
		return names;
}