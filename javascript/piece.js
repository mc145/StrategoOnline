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
    

    


    // three events:
    // on mouse up
    // on mouse down
    // on mouse move

    // on mouse down, if it's in range of a picture, then draggable = true √
    // on mouse move, drag the picture to the correc x and y coordinates √
    //on mouse up release

}

let Test0 = new Piece(1, [2,2]); 
Test0.listenEvents(); 
let Test1 = new Piece(2, [2,2]); 
Test1.listenEvents(); 
let Test2 = new Piece(3, [2,2]); 
Test2.listenEvents(); 
let Test3 = new Piece(4, [2,2]); 
Test3.listenEvents(); 
let Test4 = new Piece(5, [2,2]); 
Test4.listenEvents(); 
let Test5 = new Piece(6, [2,2]); 
Test5.listenEvents(); 
let Test6 = new Piece(7, [2,2]); 
Test6.listenEvents(); 
let Test7 = new Piece(8, [2,2]); 
Test7.listenEvents(); 
let Test8 = new Piece(9, [2,2]); 
Test8.listenEvents(); 
let Test9 = new Piece(10, [2,2]); 
Test9.listenEvents(); 
let Test10 = new Piece(11, [2,2]); 
Test10.listenEvents(); 
let Test11 = new Piece(12, [2,2]); 
Test11.listenEvents(); 
let Test12 = new Piece(13, [2,2]); 
Test12.listenEvents(); 
let Test13 = new Piece(14, [2,2]); 
Test13.listenEvents(); 
let Test14 = new Piece(15, [2,2]); 
Test14.listenEvents(); 
let Test15 = new Piece(16, [2,2]); 
Test15.listenEvents(); 
let Test16 = new Piece(17, [2,2]); 
Test16.listenEvents(); 
let Test17 = new Piece(18, [2,2]); 
Test17.listenEvents(); 
let Test18 = new Piece(19, [2,2]); 
Test18.listenEvents(); 
let Test19 = new Piece(20, [2,2]); 
Test19.listenEvents(); 
let Test20 = new Piece(21, [2,2]); 
Test20.listenEvents(); 
let Test21 = new Piece(22, [2,2]); 
Test21.listenEvents(); 
let Test22 = new Piece(23, [2,2]); 
Test22.listenEvents(); 
let Test23 = new Piece(24, [2,2]); 
Test23.listenEvents(); 




// document.addEventListener('mousedown', blah); 

//  function blah(){
//      console.log("herro");
//  }

//tips : onmousedown doesn't work ok





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
