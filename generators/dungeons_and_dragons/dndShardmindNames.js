if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["Adu","Ama","Ani","Ar","Arsha","Ashi","Ashtu","Bala","Bara","Basha","Beles","Delu","Di","Dura","Duru","Enu","Eri","Eshu","Hua","Hun","Il","Ilu","Ira","Ish","Ku","Kua","Kuba","Lu","Mani","Mara","Mashi","Na","Nara","Nashi","Nu","Rua","Run","Sana","Sari","Selu","Shir","Suma","Tab","Tin","Tiru","Uba","Uku","Ura","Ut","Zaki"];
var nm2 = ["ba","bam","bani","bu","ha","hara","hu","ka","ku","lazu","lua","mea","nar","nara","naram","naru","nashtu","ni","niri","nu","nua","pana","ram","ranu","rashi","raya","ri","rin","runu","shara","shari","shi","shti","shtu","shu","sunu","ta","tana","tani","tari","ti","tira","tiru","tua","tum","wia","ya","yara","yua","zu"];

function generator$dungeons_and_dragons$dndShardmindNames(){
	i = Math.floor(Math.random() * 10);

	nameMas();
		while(nMs === ""){
			nameMas();
		}
		return nMs;
}

function nameMas(){
	rnd = Math.floor(Math.random() * nm1.length);
	rnd2 = Math.floor(Math.random() * nm2.length);
	nMs = nm1[rnd] + nm2[rnd2];
	testSwear(nMs);
}