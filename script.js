let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let hiden=document.querySelector(".hiden");

let turnX=true;

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

const resetgame = () =>{
    turnX=true;
    enbboxes();
    msgcontainer.classList.add("hide");

};

boxes.forEach( (box)=>{
    box.addEventListener("click", ()=>{
        if(turnX){
            box.innerText="X"
            turnX=false;
        }else{
            box.innerText="O"
            turnX=true;
        }
            box.disabled=true;
            checkwinner();
    });
});

const disboxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
  };

  const enbboxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
  };

const showwinner =(winner)=> {
    msg.innerText=`winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    p.classList.remove("hide");
    disboxes();
}

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
          if(pos1 === pos2 && pos2 === pos3){
            showwinner(pos1);
            
          }
        }
    }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);