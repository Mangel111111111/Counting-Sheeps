const list =  [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true];

let countSheeps = 0;

for (let i = 0; i < list.length; i++) {
    if (list[i]) {
        countSheeps++;
    }
}

if (countSheeps == 0) {
    console.log("UPS!!! Wolfs eaten Sheeps");
}

if (countSheeps > 0) {
    console.log("There are ",countSheeps," sheeps in total");
}