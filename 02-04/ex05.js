/* variables declared using the let keyword are in block-scoped. */

let k = 10;

if(k > 0) {
    let i = 100;
    i += k;
}

console.log(i);  // reference error