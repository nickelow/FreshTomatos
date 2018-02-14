function isPrime(integer) {
	if (integer === 2){
		return true
	}
	else {
		for(var i = 2; i < integer; i++){
			if( integer % i === 0){
				return false
			} 
		}
	}
	return true
}