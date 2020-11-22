let chess = 8;
let code = "";
for (let y = 0; y < chess; y++) {
  for (let x = 0; x < chess; x++) {
   if ((x + y) % 2 == 0) {
    code += " ";
    } else {
    code += "#";
    }
 }
  code += "\n";}
console.log(code);