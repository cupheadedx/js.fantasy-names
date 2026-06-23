function generator$animals_and_creatures$moonRabbits(){
	i = Math.floor(Math.random() * 10);

	var nm1 = [["Ān Jìng","Quiet"],["Ai","Friendly"],["An","Peaceful"],["An","Quiet"],["Bái","White"],["Bèn","Stupid"],["Bènzhuō","Clumsy"],["Bóxué","Learned"],["Bao","Precious"],["Cáo Zá","Noisy"],["Cōng Míng","Smart"],["Cháng","Long"],["Chéng","Honest"],["Chéng","True"],["Dà","Big"],["Dàdǎn","Bold"],["Dàdǎn","Daring"],["Dàndìng","Calm"],["Dá","Clever"],["Dānchún","Innocent"],["Dānchún","Pure"],["Dǒngshì","Sensible"],["Diandian","Spot"],["Fēngqù","Witty"],["Fang","Beautiful"],["Fang","Fragrant"],["Gěng Zhí","Honest"],["Gǎoxiào","Funny"],["Gang","Strong"],["Gengi","Golden"],["Guiying","Brave"],["Hēi Àn","Dark"],["Hēi","Black"],["Huáng","Bright"],["Huòdá","Optimistic"],["Huī","Gray"],["Huǎn Màm","Slow"],["Hui","Wise"],["Jù","Enormous"],["Jún","Handsome"],["Jiàn","Healthy"],["Jiàn","Strong"],["Jia","Beautiful"],["Jin","Gold"],["Kèbó","Mean"],["Kāng Kǎi","Generous"],["Kěài","Cute"],["Kě Ài","Cute"],["Kuài","Fast"],["Lǎn Duò","Lazy"],["Lǎo","Old"],["Lǔmǎng","Reckless"],["Lan","Elegant"],["Míngzhì","Wise"],["Mei","Beautiful"],["Min","Clever"],["Nà","Graceful"],["Níng","Serene"],["Nao Nao","Naughty"],["Nián Qīng","Young"],["Nuan","Warm"],["Pàng","Fat"],["Pàxiū","Shy"],["Pàxiū","Timid"],["Piàoliang","Beautiful"],["Ping","Peaceful"],["Qíguài","Strange"],["Qīng","Light"],["Qiáng Dà","Powerful"],["Qiang","Energetic"],["Rènxìng","Headstrong"],["Ruǎn","Soft"],["Sai Hu","Fast"],["Shu","Charming"],["Tānlán","Greedy"],["Wángù","Stubborn"],["Wei","Robust"],["Xiǎo","Short"],["Xiao Bai","Little White"],["Xinyi","Joyful"],["Xue","Snow"],["Xun","Fast"],["Yòuzhì","Childish"],["Yòuzhì","Naive"],["Yú","Delightful"],["Yúchǔn","Foolish"],["Yīngmíng","Wise"],["Yōumò","Funny"],["Yong","Brave"],["Zōng","Brown"],["Zhōng Chéng","Loyal"],["Zhǎng","Long"],["Zhōng","Loyal"]];
	nTp = Math.random() * 3 | 0;
		if(nTp === 0){
			rnd = Math.random() * nm1.length | 0;
			names = nm1[rnd][0] + " (" + nm1[rnd][1] + ")";
			nm1.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			rnd2 = Math.random() * nm1.length | 0;
			while(rnd === rnd2){
				rnd2 = Math.random() * nm1.length | 0;
			}
			names = nm1[rnd][0] + " " + nm1[rnd2][0] + " (" + nm1[rnd][1] + " " + nm1[rnd2][1] + ")";
			nm1.splice(rnd, 1);
			nm1.splice(rnd2, 1);
		}
		return names;
}