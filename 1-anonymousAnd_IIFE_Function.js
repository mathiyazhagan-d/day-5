// question 1 (anonymous function and IIFE)
console.log("Question no 1");
console.log("In Anonymous and IIFE Function");
console.log(" ");

// a.print odd number in an array
//anonymous function

let odd = function (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      res.push(arr[i]);
    }
  }
  return res.join(" ");
};
console.log(
  `A.  odd number in anonymous function : ${odd([1, 2, 3, 4, 5, 6, 7, 8])}`
);

//IIFE

(function (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      res.push(arr[i]);
    }
  }
  let odd = function (arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        res.push(arr[i]);
      }
    }
    return res.join(" ");
  };
  console.log(`a.  odd number in IIFE function : ${res.join(" ")}`);
  return;
})([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(""); //alingnment perpose
//------------------------------------------------------------------------------------------------------------

//b.Convert all the strings to title caps in a string array
//anonymous function

// anonymous function

let caps = function (str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(
    `B. title caps in a string array anonymous function "${str.join(" ")}"`
  );
};
caps("guvi fullstack ");

//IIFE

(function (str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(
    `b. title caps in a string array IIFE function "${str.join(" ")}"`
  );
})("guvi fullstack weekdays");

console.log(""); //alingnment perpose

//------------------------------------------------------------------------------------------------------------

// c.Sum of all numbers in an array

//anonymous

let sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(`C.Sum in anonymous function "${sum}"`);
};
sum([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// IIFE

(function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(`c.Sum in IIFE function "${sum}"`);
})([1, 2, 3, 4, 3, 4, 4, 4, 5]);

console.log(""); //alingnment perpose
//------------------------------------------------------------------------------------------------------------

//d.Return all the prime numbers in an array

//anonymous function

let prim = function (arr) {
  let primeNo = [];
  for (let v = 0; v < arr.length; v++) {
    let num = true;
    for (let i = 2; i <= arr[v] - 1; i++) {
      if (arr[v] % i === 0) {
        num = false;
      }
    }
    if (num === true) {
      primeNo.push(arr[v]);
    }
  }
  console.log(
    `D.the prime numbers in an array using anonymous function ${primeNo}`
  );
};
prim([
  3, 5, 1, 2, 4, 8, 12, 14, 15, 18, 19, 23, 25, 37, 38, 42, 45, 46, 49, 58,
]);

//IIFE

(function (arr) {
  let primeNo = [];
  for (let v = 0; v < arr.length; v++) {
    let num = true;
    for (let i = 2; i <= arr[v] - 1; i++) {
      if (arr[v] % i === 0) {
        num = false;
      }
    }
    if (num === true) {
      primeNo.push(arr[v]);
    }
  }
  console.log(
    `d.the prime numbers in an array using IIFE  function ${primeNo}`
  );
})([3, 5, 1, 2, 4, 8, 12, 14, 15, 18, 198, 42, 45, 46, 49, 58]);

console.log(""); //alingnment perpose
//------------------------------------------------------------------------------------------------------------

//e.Return all the palindromes in an array

//anonymous

let arr = function (array) {
  console.log("E.palindrome using anonymous function");
  for (i = 0; i < array.length; i++) {
    let mikding = array[i].split("");
    let count = 0;
    for (j = 0; j < mikding.length; j++) {
      if (mikding[j] == mikding[mikding.length - 1 - j]) {
        count++;
      }
    }

    if (count == mikding.length) {
      console.log(` ${count} => ${array[i]} : Palindrome`);
    } else {
      console.log(`${count} => ${array[i]} : Not a Palindrome`);
    }
  }
};
arr(["naran", "121", "nayan", "ashok"]);

//IIFE

(function (array) {
  console.log("e.palindrome using IIFE function");
  let sij = [];
  let count = 0;

  {
    for (i = 0; i < array.length; i++) {
      let si = array[i].split("").reverse().join("");
      sij.push(si);
      for (j = 0; j < si.length; j++) {
        if (sij[j] == array[i]) {
          count++;
        }
      }
      if (count == sij.length) {
        console.log(`${array[i]} : Palindrome`);
      } else console.log(`${array[i]} : Not a Palindrome`);
    }
  }
})(["bab", "malayalam", "1234321", "program"]);

console.log(""); //alingnment perpose
//------------------------------------------------------------------------------------------------------------

//f.Return median of two sorted arrays of the same size.

//anonymous
console.log(
  "F.median of two sorted arrays of the same size anonymous and IIFE"
);
let m, n;
let medd = function (passs) {
  let arr1 = [1, 2, 4, 3];
  let arr2 = [66, 10];
  let arr = [...arr1, ...arr2].sort((m, n) => m - n);
  return arr;
};
medd();
let a = medd();
console.log(a);
let med = function (pass) {
  if (a.length % 2 == 0) {
    let medi = (a[a.length / 2 - 1] + a[a.length / 2]) / 2;
    console.log(medi);
  } else {
    let d = parseInt(a.length / 2);
    console.log(a[d]);
  }
};
med();

//IIFE

(function (a) {
  if (a.length % 2 == 0) {
    let medi = (a[a.length / 2 - 1] + a[a.length / 2]) / 2;
    console.log(medi);
  } else {
    let d = parseInt(a.length / 2);
    console.log(a[d]);
  }
})(a);

console.log(""); //alingnment perpose
//------------------------------------------------------------------------------------------------------------

//g.Remove duplicates from an array

//anonymous
console.log("G remove dublicate");
let dupli = function (array) {
  let res = array.filter((item, i) => array.indexOf(item) == i);
  console.log(array);
  console.log(`result ${res.join(" ")}`);
};
dupli(["121", "6543", "121", "546", "121"]);

//IIFE

(function (array) {
  let res = array.filter((item, i) => array.indexOf(item) == i);
  console.log(array);
  console.log(`result ${res.join(" ")}`);
})(["121", "6543", "121", "546", "121"]);

console.log(""); //alingnment perpose
//------------------------------------------------------------------------------------------------------------

//h.Rotate an array by k times

console.log("H.Rotate an array by k times");

//anonymous
let k = 4;
console.log("[1,2,4,5,6] k=4");
let rotate = function (array, k) {
  for (i = 0; i < k; i++) {
    array.unshift(array.pop());
  }
  console.log(array);
};
rotate([1, 2, 4, 5, 6], k);

//IIFE
console.log("[3,4,6,7,8] k=3");
(function (array, k) {
  for (i = 0; i < k; i++) {
    array.unshift(array.pop());
  }
  console.log(array);
})([3, 4, 6, 7, 8], 3);

console.log(""); //alingnment perpose
//------------------------------------------------------------------------------------------------------------
