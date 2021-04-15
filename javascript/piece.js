let pieceImages = []; 
let width = window.innerWidth; 
let height = window.innerHeight; 
let numberOfPieces = []; //insert array of the number of duplicates each piece in the game begins with


document.documentElement.style.setProperty('--pieceSize', `${width * 0.08*0.85}px`); 


const pieceSize = width * 0.08; 
let heightPieceSize = height * 0.21; 


let mouseDown = 0;

class Square{

    constructor(squareNumber){
        this.squareNumber = squareNumber; 
    }

    calculateCoordinat




    
    


}


class Piece{


    constructor(number){
        this.number = number; 
        this.draggable = false; 
        this.onBoard;
    }

    
    downMouse = (e) =>{
        // let yCoord = 100 + heightPieceSize*((this.number%4+1)-1);
        // let columns = Math.floor((this.number+3)/4); 
        // let xCoord = 10 + pieceSize*(columns-1); 
        // console.log(xCoord, yCoord);
        e.preventDefault(); 
        console.log("down");
      
        this.draggable = true;



    }
    

    upMouse = (e) => {
        e.preventDefault(); 
        console.log("up");
        this.draggable = false;
        if(!onBoard){
            
        }
    }

    moveMouse = (event) => {
        if(this.draggable){
            
            let pieceObjects = document.getElementById('piece-images' + this.number); 
            pieceObjects.style.left = `${event.clientX-40}px`; 
            pieceObjects.style.top = `${event.clientY-40}px`; 
            // 203, 17
            // 595, 17
            // 595, 409
            // 203, 409
            let pieceObjectss = document.getElementById("piece-images" + this.number); 
            if((event.clientX >= 444) && (event.clientX <= 1298) && (event.clientY >= 528) && (event.clientY <= 873)){
                pieceObjectss.style.width = `${pieceSize/2.3}px`;
                this.onBoard = true;
            }
            else{
                pieceObjectss.style.width = `${pieceSize}px`; 
                this.onBoard = false;
                //pieceImages[i-1].style.top = `${topMovement}px`;  
                //pieceImages[i-1].style.right = `${rightMovement}px`;
                //pieceImages[i-1].style.left = `${leftMovement}px`;
            }


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
    pieceObjects.push(new Piece(i+1)); // change the [2,2] later
    pieceObjects[i].listenEvents(); 
}

let squareObjects = []; 
for(let i = 0; i<40; i++){
    squareObjects.push(new Square([1,1], [1,2], [1,3], [1,4])); 
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
// function unacceptableAkshay(){
// while(true){
//     alert("akshay, you're BADDDD");
// }

// }


// unacceptableAkshay();




document.addEventListener('click', blah); 

function blah(e){
    console.log(e.clientX, e.clientY);
}
