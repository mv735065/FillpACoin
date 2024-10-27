let myscore=document.querySelector("#mine");
let computer=document.querySelector("#comp");


let heads=document.querySelector("#head");
let tails=document.querySelector("#tail");

let one=0
let two=1

heads.addEventListener("click",()=>seeWinner(one));
tails.addEventListener("click",()=>seeWinner(two));

function seeWinner(num){
    let random=Math.floor(Math.random()*2);
   
    if(random==num){
        console.log("i won");
        myscore.value=parseInt(myscore.value)+1;
    }
    else {
        console.log("computer won");
        computer.value=parseInt(computer.value)+1;}
    
}



// function seeWinnerTails(){

//     let random=Math.floor(Math.random()*2);
//     console.log("tails"," ",random);
//     if(random==0){
//         myscore.value=parseInt(myscore.value)+1;
//     }
//     else computer.value=parseInt(computer.value)+1;
    
// }




