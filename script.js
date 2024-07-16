let boxes = document.querySelectorAll('.box');
let resetBtn = document.getElementById('reset-btn');
let winText = document.getElementById('win-text');

let turnO = true;
let ct=0;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

function isDraw(){
    if (ct==9){
        boxes.forEach((box)=>{
            if(box.innerText===''){
                return false;
            }
        })
        return true;
    }
}
boxes.forEach((box)=>{
    box.addEventListener('click' ,()=>{
        ct+=1;
        
        if(turnO){
            box.innerText = 'O';
           
        }else{
            box.innerText = 'X';
        }
        turnO = !turnO;
        box.disabled = true;
        checkWinner();
        if(ct==9 && isDraw()){
            winText.classList.remove('hide');
            winText.innerText = "Game is Draw!!";
        }
        
    })

})

const disableBtns = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const checkWinner = () =>{
   for (let pattern of winPatterns){
    // console.log(pattern);
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if( pos1 != "" && pos2!= "" && pos3!=""){
        if(pos1 === pos2 && pos2 === pos3){
            if(turnO){
                winText.innerText  = "Player X Wins!!";
                winText.classList.remove('hide');
            }else{
                winText.innerText  = "Player O Wins!!";
                winText.classList.remove('hide');
            }

            disableBtns();
            
        }
    }
   }
}

const Reset = () =>{
    turnO =true;
    ct=0;
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled =  false;
    })
    winText.classList.add('hide');
}
resetBtn.addEventListener("click" , Reset);