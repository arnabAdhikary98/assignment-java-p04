function isPrime(num, div=2){
    // using recursive approach
   if(num <= 1){
       return false;
   }
   if(div > Math.sqrt(num)){
       return true;
   }
   if(num % div === 0){
       return false;
   } 
   else{
       return isPrime(num, div + 1);
   }
}

let arr = [0,1,2,5,7,9,34,67,55,31,89,91,45,77,57]

for(let i=0; i<arr.length; i++){
    if(isPrime(arr[i]) === true){
        console.log(arr[i])
    }
}