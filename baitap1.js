
let a = ["Lion", "Tiger", "Wolf", "Kangaroo"];


let b = "";

for (let i = 0; i < a.length; i++) {
  b += a[i];

  
  if (i < a.length - 1) {
    b += ",  "; 
  }
}


console.log(b);
