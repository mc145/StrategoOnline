

let mouseDown = 0;


class Piece{


    constructor(number, square){
        this.number = number; 
        this.square = square; 
    }

    drag = (event) => {
        mouseDown = 1;
        console.log(event.clientX, event.clientY);
    }    

    dragIt = (event) => {
        mouseDown=0;
    }




    //While on click
    //While touching map
    //Change size to map size piece
    //Image mvoes based on mouse coordinates
    //When mouse releases, if the placement is legal, then move


    listenEvent = () =>{

        let piecePhoto = document.getElementById(`piece-images${this.number}`);
        console.log(piecePhoto);
        piecePhoto.addEventListener(`mousedown`, this.drag);
        piecePhoto.addEventListener(`mouseup`, this.dragIt);
    }

}

let Test = new Piece(16, [2,2]); 


let i = 1;

myLoop = () => {
    setTimeout(function() {
        Test.listenEvent();
        i++;
        if (i < 10) {
            lyLoop();
        }
    }, 1000)
}

myLoop();



//desktop version -> works on 13 inch, 15 inch, and 24 inch screens: 

let pieceImages = []; 
let width = window.innerWidth; 
let height = window.innerHeight; 
let numberOfPieces = []; //insert array of the number of duplicates each piece in the game begins with


document.documentElement.style.setProperty('--pieceSize', `${width * 0.08*0.85}px`); 


let pieceSize = width * 0.08; 
let heightPieceSize = height * 0.21; 


for(let i = 1; i<=24; i++){
    pieceImages.push(document.getElementById(`piece-images${i}`)); 
} 


for(let i = 1; i<=12; i++){
    let topMovement = 100 + heightPieceSize*((i%4+1)-1); 
    pieceImages[i-1].style.top = `${topMovement}px`; 
    let numberOfColumns = Math.floor((i+3)/4); 
    let rightMovement = 10 + pieceSize*(numberOfColumns-1); 
    pieceImages[i-1].style.right = `${rightMovement}px`
}


for(let i = 13; i<=24; i++){
    let topMovement = 100 + heightPieceSize*((i%4+1)-1); 
    pieceImages[i-1].style.top = `${topMovement}px`; 
    let numberOfColumns = Math.floor(((i%12)+3)/4); 
    let leftMovement = 10 + pieceSize*(numberOfColumns-1); 
    pieceImages[i-1].style.left = `${leftMovement}px`
}

pieceImages[23].style.left =  `${pieceSize * 2 + 10}px`; 
pieceImages[23].style.top = `100px`;


// width is 1920px
// height is 981 px 

//145 px width 

// 0.08th of the entire width 
