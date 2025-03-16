let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let turnX=true;
let turn=document.querySelector(".turn");


//Checking the winning pattern
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//To disable box
const disboxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
  };
//To enable box
  const enbboxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
  };

//Logic to reset game
const resetgame = () =>{
    turnX=true;
    enbboxes();
    msgcontainer.classList.add("hide");
    turn.classList.remove("hide");
    turn.innerText="'X' player turn!"
    reset.classList.remove("hide");
};

//For showing 'X' and 'O' in box
boxes.forEach( (box)=>{
    box.addEventListener("click", ()=>{
        if(turnX){
            box.innerText="X"
            turn.innerText="'O' player turn!"
            turnX=false;
        }else{
            box.innerText="O"
            turn.innerText="'X' player turn!"
            turnX=true;
        }
            box.disabled=true;
            checkwinner();
    });
});

//Logic to show draw
const checkwinner = () => {
    let filledBoxes = 0; 
    for (let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
          if(pos1 === pos2 && pos2 === pos3){
            showwinner(pos1);
            return; 
          }
        }
    }
    // Count filled boxes
    for (let box of boxes) {
        if (box.innerText !== "") {
            filledBoxes++;
        }
    }
    // to check draw
    if (filledBoxes === 9) {
        msg.innerText = "It's a draw!";
        msgcontainer.classList.remove("hide");
        turn.classList.add("hide");
        reset.classList.add("hide");
    }
};

//To show the winner message
const showwinner =(winner)=> {
    msg.innerText=`winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    turn.classList.add("hide");
    reset.classList.add("hide");
    disboxes();
}

//To reset or start newgame
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);




