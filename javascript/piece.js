let pieceImages = []; 
let width = window.innerWidth; 
let height = window.innerHeight; 
let numberOfPieces = []; //insert array of the number of duplicates each piece in the game begins with


document.documentElement.style.setProperty('--pieceSize', `${width * 0.08*0.85}px`); 


let pieceSize = width * 0.08; 
let heightPieceSize = height * 0.21; 


let mouseDown = 0;




class Piece{


    constructor(number, square){
        this.number = number; 
        this.square = square; 
        this.draggable = false; 
    }

    
    downMouse = () =>{
        // let yCoord = 100 + heightPieceSize*((this.number%4+1)-1);
        // let columns = Math.floor((this.number+3)/4); 
        // let xCoord = 10 + pieceSize*(columns-1); 
        // console.log(xCoord, yCoord);
        console.log("down");
        let pieceObjectss = document.getElementById("piece-images" + this.number); 
        pieceObjectss.style.width = `${pieceSize/2.3}px`;
        this.draggable = true;



    }
    

    upMouse = () => {
        console.log("up");
        this.draggable = false;
    }

    moveMouse = (event) => {
        console.log("move");
        if(this.draggable){
            let pieceObjects = document.getElementById('piece-images' + this.number); 
            pieceObjects.style.left = `${event.clientX}px`; 
            pieceObjects.style.top = `${event.clientY}px`; 
        }
    } 


    listenEvents = () =>{
        let pieceObject = document.getElementById('piece-images' + this.number); 
        pieceObject.addEventListener('mousedown',this.downMouse); 
        pieceObject.addEventListener('mouseup', this.upMouse);
        document.addEventListener('mousemove',this.moveMouse);
    }


}

let pieceObjects = []; 

for(let i = 0; i<24; i++){
    pieceObjects.push(new Piece(i+1, [2,2])); // change the [2,2] later
    pieceObjects[i].listenEvents(); 
}

//desktop version -> works on 13 inch, 15 inch, and 24 inch screens: 



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
