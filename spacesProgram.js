const inputString = "Welcome To Vinsys";
let noSpacesString = "";

for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== ' ') {
        noSpacesString += inputString[i];
    }
}

console.log(noSpacesString); 
