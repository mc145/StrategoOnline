let pieceImages = []; 
let width = window.innerWidth; 
let height = window.innerHeight; 
let numberOfPieces = []; //insert array of the number of duplicates each piece in the game begins with


document.documentElement.style.setProperty('--pieceSize', `${width * 0.08*0.85}px`); 


const pieceSize = width * 0.08; 
let heightPieceSize = height * 0.21; 

console.log("width", "height", width, height); 

// with width at 1920 and height at 981, the bottom left corner of the square is at (490, 907); 


let grid = document.getElementById('img-board'); 
let gridStyles = window.getComputedStyle(grid); 
let gridWidths = gridStyles.width; 
let gridWidth = parseInt(gridWidths.substring(0, gridWidths.length - 2)); 


let gridX = Math.floor(width/1920 * 490);
let gridY = Math.floor(height/981 * 907); 


let squareCoords = []; 
let squareCoords2 = []; 

for(let i = 0; i<40; i++){
    let rowNum = Math.floor(i/10); 
    let colNum = i%10; 
    let squareX = gridX + (colNum * gridWidth/10); 
    let squareY = gridY - (rowNum * gridWidth/10); 
    squareCoords.push([squareX + gridWidth/20, squareY - gridWidth/20 + 30]);
}

for(let i = 0; i<40; i++){
    let rowNum = Math.floor(i/10); 
    let colNum = i%10; 
    let squareX  =  gridX + (colNum * gridWidth/10); 
    let squareY = gridY  - 6*gridWidth/10 - (rowNum * gridWidth/10); 
    squareCoords2.push([squareX + gridWidth/20, squareY - gridWidth/20 + 30]); 
}

console.log(squareCoords); 

class Piece{


    constructor(number){
        this.number = number; 
        this.draggable = false; 
    }

    pythag = (x1, y1, x2, y2) =>{
        return Math.sqrt(Math.abs(x1 - x2) * Math.abs(x1 - x2) + Math.abs(y1 - y2) * Math.abs(y1 - y2)); 
    }
    
    downMouse = (e) =>{
        // let yCoord = 100 + heightPieceSize*((this.number%4+1)-1);
        // let columns = Math.floor((this.number+3)/4); 
        // let xCoord = 10 + pieceSize*(columns-1); 
        // console.log(xCoord, yCoord);
        e.preventDefault(); 
      
        this.draggable = true;



    }

    findClosestGrid = (xMouse, yMouse) =>{
        console.log("number", this.number); 
        
        let correctGrid = 0; 
        let correctGridVal = this.pythag(xMouse, yMouse, squareCoords[0][0], squareCoords[0][1]); 
        if(this.number <= 12){
       
        for(let i = 1; i < squareCoords.length; i++){
            if(this.pythag(xMouse, yMouse, squareCoords[i][0], squareCoords[i][1]) < correctGridVal){
                correctGridVal = this.pythag(xMouse, yMouse, squareCoords[i][0], squareCoords[i][1]); 
                correctGrid = i; 
            }
        }
        
    }

    else if(this.number > 12){
        correctGrid = 0; 
        correctGridVal = this.pythag(xMouse, yMouse, squareCoords2[0][0], squareCoords2[0][1]); 
        for(let i = 1; i < squareCoords2.length; i++){
            if(this.pythag(xMouse, yMouse, squareCoords2[i][0], squareCoords2[i][1]) < correctGridVal){
                correctGridVal = this.pythag(xMouse, yMouse, squareCoords2[i][0], squareCoords2[i][1]); 
                correctGrid = i; 
            }
        }
    }

    return correctGrid; 

   
    }
    

    upMouse = (e) => {
        e.preventDefault(); 

        if(this.draggable){
            if((e.clientX >= gridX) && (e.clientX <= gridX + gridWidth) && (e.clientY <= gridY) && (e.clientY >= gridY - gridWidth)){
                let pieceObjectss = document.getElementById('piece-images' + this.number); 
                let closestGrid = this.findClosestGrid(e.clientX, e.clientY); 

                if(this.number <= 12){
                pieceObjectss.style.left = `${squareCoords[closestGrid][0] - 30}px`; 
                pieceObjectss.style.top =  `${squareCoords[closestGrid][1] - 20}px`; 
                }
                else{
                    pieceObjectss.style.left = `${squareCoords2[closestGrid][0] - 30}px`; 
                    pieceObjectss.style.top = `${squareCoords2[closestGrid][1] - 20}px`; 
                }

            }
        }
        this.draggable = false;
    }

    moveMouse = (event) => {

        event.preventDefault(); 
        if(this.draggable){
            
            let pieceObjects = document.getElementById('piece-images' + this.number); 
            pieceObjects.style.left = `${event.clientX-40}px`; 
            pieceObjects.style.top = `${event.clientY-40}px`; 
            // 203, 17
            // 595, 17
            // 595, 409
            // 203, 409
            //2.3

            console.log(gridX, gridX + gridWidth, gridY, gridY - gridWidth); 
            if((event.clientX >= gridX) && (event.clientX <= gridX + gridWidth) && (event.clientY <= gridY) && (event.clientY >= gridY - gridWidth)){
                pieceObjects.style.width = `${pieceSize/2.3}px`;

            }
            else{
                pieceObjects.style.width = `${pieceSize * 0.85}px`;
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
