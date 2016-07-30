var reverseString = function(s) {
    console.log(s);
	var s_rev = '';
	for(i=0;i<s.length;i++){
		s_rev += s[s.length-i-1];
	}
	return s_rev;
	console.log(s_rev);
};
//reverseString("Nuts");

var canWinNim = function(n) {
	if((n%4)===0 && n!==0){
		return false;
	}
	else{
		return true;
	}
};
//console.log(canWinNim(1));
//console.log(canWinNim(4));

var getSum = function(a, b) {
	if(b>0){
		while(b>0){
			a++;
			b--;
		}
	}
	else{
		while(b<0){
			a--;
			b++;
		}
	}
	return a;
};

/*console.log(getSum(1,2));
console.log(getSum(-1,-2));
console.log(getSum(-1,2));
console.log(getSum(1,-2));*/
console.log(getSum(2147483647,-2147483648));