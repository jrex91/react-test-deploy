// Gets the myBands object from the bands file.

var bandList = require("./bands.js");

// Loop through band list and print out details
// for (var key in bandList) {
//   console.log("A " + key + " band is " + bandList[key] + ".");
// }

if(process.argv[2]) {
 var champ=Object.keys(bandList).map(key=>{if(key===process.argv[2]){return bandList[process.argv[2]]}})
 return console.log("A " + process.argv[2] + " band is " + champ + ".")
} else{Object.keys(bandList).map(key=>console.log(("A " + key + " band is " + bandList[key] + ".")))
}


