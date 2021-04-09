//24 elements

let pieceImages = []; 
let width = window.innerWidth; 
let height = window.innerHeight; 


document.documentElement.style.setProperty('--pieceSize', `${width * 0.08}px`); 


console.log(width); 
let pieceSize = width * 0.08; 

console.log(pieceSize);

for(let i = 1; i<=24; i++){
    pieceImages.push(document.getElementById(`piece-images${i}`)); 
} 


for(let i = 1; i<=12; i++){
    let topMovement = 100 + 220*((i%4+1)-1); 
    pieceImages[i-1].style.top = `${topMovement}px`; 
    let numberOfColumns = Math.floor((i+3)/4); 
<<<<<<< HEAD
    let rightMovement = 10 + 130*(numberOfColumns-1); 
=======
    let rightMovement = 10 + pieceSize*(numberOfColumns-1); 
>>>>>>> 7b52393aeefe868be542141a3db5e896931f1212
    pieceImages[i-1].style.right = `${rightMovement}px`
}


for(let i = 13; i<=24; i++){
    let topMovement = 100 + 220*((i%4+1)-1); 
    pieceImages[i-1].style.top = `${topMovement}px`; 
    let numberOfColumns = Math.floor(((i%12)+3)/4); 
<<<<<<< HEAD
    let leftMovement = 10 + 130*(numberOfColumns-1); 
=======
    let leftMovement = 10 + pieceSize*(numberOfColumns-1); 
>>>>>>> 7b52393aeefe868be542141a3db5e896931f1212
    pieceImages[i-1].style.left = `${leftMovement}px`
}

pieceImages[23].style.left = "310px"; 


// width is 1920px
// height is 981 px 

//145 px width 

// 0.08th of the entire width 