                    // Q 1 . 

// let nums = [3,2,2,3,]
// let val = 3;
// let res = 0;

// for(let i = 0; i<=nums.length-1; i++){
//     if(nums[i]==val){
//         nums[i]=nums[i+1];
//         res = res + 1;
//     }
//     else{
        
//     }
// }

// console.log(nums);
// console.log(res);  

                    //Q.2
// const Palindrome = function (num) {
//     const str = "" + num;
//     console.log(str);
  
//     let left = 0;
//     let right = str.length - 1;
  
//     while (left < right) {
//       if (str[left] === str[right]) {
//         left += 1;
//         right -= 1;
//       } else {
//         return false;
//       }
//     }
  
//     return true;
//   };
  
//   console.log(Palindrome(1211121));
//   console.log(Palindrome(1231));


                //Q.3

// let array=[1,2,3,4,5]
// let result=0;

// function sum(array){
//     for(val of array){
//         result = result + val
//     }
//     return result;
// }
// console.log(sum(array));

                   //Q.4

// const PalindromeStr = function (str) {
//     let left = 0;
//     let right = str.length - 1;
  
//     while (left < right) {
//       if (str[left] === str[right]) {
//         left += 1;
//         right -= 1;
//       } else {
//         return false;
//       }
//     }
  
//     return true;
//   };
  
//   console.log(PalindromeStr("malayalam"));
//   console.log(PalindromeStr("shahabaj"));

                        //Q.5

// let arr = [2, 4, 6, 7];
// let newarr = [ ];

// function reverseArr(arr, newarr){
//     for(let i = 0; i<arr.length; i++){
//         newarr.unshift(arr[i])
//     }
// }

// console.log(arr);
// reverseArr(arr ,newarr);
// console.log(newarr); 

                        //Q.6

// const numbers=[1, 3 ,5 ,3 ,2 ,1];
// let temp = {};
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] in temp) {
//         temp[numbers[i]] += 1 ;
//     }else{
//         temp[numbers[i]] =1 ;
//     }
//     // console.log(temp,i);
// } 
// console.log(temp)
// console.log(Object.keys(temp));

                        //Q.7

// const factorial = function (num) {
//     if (num === 1) {
//       return num;
//     } else {
//       return num * factorial(num - 1);
//     }
//   };
  
//   console.log(factorial(4));
//   console.log(factorial(3));

                        //Q.8

// let num = 97;

// function isPrime(num){
//     let isPrime = true;
//     for(let i = 2; i<num-1; i++){
//         if(num%i==0){
//             isPrime=false;
//         }
//         else{
//             isPrime
//         }
//     }

//     return isPrime;
// }

// console.log(isPrime(num));

                        //Q.9

// let num=3;

// function FindFact(num){
//     let factNumber = 1;

//     while (num>=1) {
//         factNumber = factNumber*num;
//         num--
//     };

//     return factNumber;
// }

// console.log(FindFact(num));

                        //Q.10

// let arr = [5, 6 , 2, 7, 1,4]

// function sortedArr(arr){
//     let sorted = arr.sort()
//     return sorted
// }



// console.log(sortedArr(arr));

                        //Q.12

// let haystack = 'Shahabaj';
// let needle = 'baj'

// let result = haystack.indexOf(needle)
// console.log(result); 

                        //Q.15

// let x = 'hello'

// let a = x.split('')
// console.log(a);

// a = [...new  Set(a)]
// a = a.join('')
// console.log(a);
