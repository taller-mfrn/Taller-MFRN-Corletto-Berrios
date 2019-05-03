const fs = require("fs");

fs.writeFile("./potito.txt","Bbesitooooo",(err)=> {
  console.log("Lo de nosotros eh un secreto bbesitooo");
  if(err) throw err;
})

console.log("Fin del comunicado");
