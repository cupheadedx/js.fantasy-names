var nm1 = ["anger","arctic","bent","best","big","bird","blond","blue","bold","brash","brave","brief","bright","broad","broken","brown","chief","clean","clear","clover","cold","cool","copper","crazy","crisp","curly","dim","dirty","dull","east","echo","eight","even","faint","fair","far","fine","fish","flat","fond","four","frail","free","front","frost","full","fur","gentle","glum","good","goot","grand","great","green","half","hard","hawk","high","hop","hozen","ink","jam","keen","kind","last","light","lint","little","lone","long","lost","loud","luck","mild","mountain","musk","neat","north","odd","oil","plume","plush","prime","proud","quill","rabbit","rabbits","red","seven","shallow","sharp","short","shy","slim","slow","small","smug","snow","soft","soot","south","steep","stout","sweet","swift","tall","tame","tea","tough","trail","trim","true","twin","west","wild","wind","wise","wish","wolf","wolfs","yak"];
var nm2 = ["badge","bag","bags","band","beat","bell","bells","bit","block","board","bone","book","books","branch","brew","bulb","bun","button","buttons","can","candle","cane","cart","catcher","chart","chest","cloth","cloud","coin","coins","cord","craft","crate","deal","dealer","dice","dig","dime","dimes","dish","draft","dream","dreamer","drink","feather","finder","finding","findings","flock","flow","flower","fly","foot","fortune","fot","free","friend","fur","gatherer","gift","gifts","glove","gloves","hammer","hands","hat","heart","hold","jacket","jewel","kite","knot","knots","leaf","letter","light","line","lint","marble","marbles","mask","message","mirror","mitten","mittens","mug","musk","nail","pack","page","parcel","patch","patches","paw","peak","pencil","pocket","pond","riches","riddle","riddles","root","roots","rubble","saddle","scarf","shoe","shoes","silk","song","spark","spell","staff","star","stick","sticks","stone","string","surprise","sweater","swift","tail","tassle","tooth","top","traveller","trick","tricks","trim","voyager","whistle"];
var nm3 = ["adventurer","alpinist","artisan","backpacker","big","brother","carpenter","climber","companion","courier","cousin","crafter","dealer","explorer","friend","furnisher","grandfather","grandpa","guide","herder","hiker","little","lucky","master","merchant","messenger","mountaineer","mystic","nephew","packer","pathfinder","pilgrim","pioneer","professor","rancher","retailer","seeker","shepherd","speaker","specialist","trader","trailblazer","traveler","uncle","vendor","voyager","watcher","worker"];
var nm4 = ["adventurer","alpinist","artisan","backpacker","big","sister","carpenter","climber","companion","courier","cousin","crafter","dealer","explorer","friend","furnisher","grandmother","grandma","guide","herder","hiker","little","lucky","master","merchant","messenger","mountaineer","mystic","niece","packer","pathfinder","pilgrim","pioneer","professor","rancher","retailer","seeker","shepherd","speaker","specialist","trader","trailblazer","traveler","aunt","auntie","vendor","voyager","watcher","worker"];

function generator$world_of_warcraft$wowGrummles(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	rnd = Math.random() * nm1.length | 0;
		rnd2 = Math.random() * nm2.length | 0;
		while(nm1[rnd] === nm2[rnd2]){
			rnd2 = Math.random() * nm2.length | 0;
		}
		if(tp === 1){
			rnd3 = Math.random() * nm4.length | 0;
			nMs = nm4[rnd3] + " " + nm1[rnd] + nm2[rnd2]
		}else{
			rnd3 = Math.random() * nm3.length | 0;
			nMs = nm3[rnd3] + " " + nm1[rnd] + nm2[rnd2]
		}
		return nMs;
}