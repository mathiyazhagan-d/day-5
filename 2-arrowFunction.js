// question 2 
// in arrow function
console.log("Question no 2")
console.log("In Arrow Function")
console.log("")//alingnment perpose
//------------------------------------------------------------------------------------------------------------

//a.Print odd numbers in an array


let odd3= (arr)=>{
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0)
        {
            res.push(arr[i]);
        }
    }
    return res.join(" ");
}
console.log(`A.  odd number in arrow  function : ${odd3([1,2,4,5,6,7,8])}`);


console.log("")//alingnment perpose
//------------------------------------------------------------------------------------------------------------

//b.Convert all the strings to title caps in a string array

let caps3 =  (str)=> {
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    } 
    console.log(`B. title caps in a string array anonymous function "${str.join(" ")}"`)
}
caps3("unit inside the pack");

console.log("")//alingnment perpose
//------------------------------------------------------------------------------------------------------------

//c.Sum of all numbers in an array



let sum3 = (array)=>{
    let sum = 0;
    for(let i=0;i<array.length;i++) {
        sum += array[i];
        
    };
    console.log(`C.Sum in anonymous function "${sum}"`)
        
    }
    sum3([1,2,3,4,5,6,7,3,4,5,6,6,8,9]);

    console.log("")//alingnment perpose
//------------------------------------------------------------------------------------------------------------
//d.Return all the prime numbers in an array

let prim3=(arr)=>{
    let primeNo=[];      
for(let v=0;v < arr.length ;v++)     
 { 
  let num = true;
   for(let i = 2; i <= arr[v]-1 ; i++)
     {
       if (arr[v] % i === 0) 
         {
         num = false;
         }}
   if (num === true)
      {
       primeNo.push(arr[v]);
      }
   }
 console.log(`D.the prime numbers in an array using anonymous function ${primeNo}`)
}
prim3([ 3,5,1,2,4,8,12,14,15,18,19,23,25,37,38,42,45,46,49,58]);


console.log("")//alingnment perpose
//------------------------------------------------------------------------------------------------------------

//e.Return all the palindromes in an array

let arr3 = (array)=>{
    console.log("E.palindrome using anonymous function")
    for (i = 0; i < array.length; i++) 
    {
        let mikding = array[i].split("")
        let count = 0;
        for (j = 0; j < mikding.length; j++) 
        {
            if (mikding[j] == mikding[mikding.length - 1 - j]) 
            {
                count++;
            }
        }
    
        if (count == mikding.length) 
        {
            console.log(` ${count} => ${array[i]} : Palindrome`)
        }
        else 
        {
            console.log(`${count} => ${array[i]} : Not a Palindrome`)
        }
    }
    }
    arr3(["naran","121","nayan","ashok"]);
    

    console.log("")//alingnment perpose
    //------------------------------------------------------------------------------------------------------------
    