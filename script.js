function trailingZeros(n) {
  let totalZeros = 0, div = 5;
  while(div<n){
	  totalZeros+=Math.floor(n/div);
	  div*=5;
  }
	return totalZeros;
}

const input = prompt("Enter a number");
alert(trailingZeros(parseInt(input)));
