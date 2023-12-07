var names = new Array();
names[0] = "Mustafa";
names[1] = "Asmaa";
names[2] = "John";
names[3] = "Ibrahim";
names[4] = "Ahmed";
names[5] = "Jonas";
names[6] = "Myada";
names[7] = "jermy";
names[8] = "Noran";
names[9] = "Islam";
names[10] = "Banna";
names[11] = "Hatem";
names[12] = "jihan";
names[12] = "aml";
names[14] = "sara";
names[13] = "koko";
names[15] = "jojo";
names[16] = "lolo";

var sayHello = "Hello";
var sayBye = "Goode Bye";
for (let n in names) {
  if (names[n][0].toLowerCase() === "j") {
    console.log(sayBye + " " + names[n]);
  } else {
    console.log(sayHello + " " + names[n]);
  }
}
