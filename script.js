var you;
var yourscore=0;
var opponent;
var opponentscore=0;

 var choices=['papper','rock','scissors']
 console.log(choices.length)
 

 window.onload=()=>{
    for(i=0;i<choices.length;i++){
        let choice=document.createElement('img');
        choice.id=choices[i];
        console.log(choice.id);
        choice.src=`${choices[i]}.png`;
        choice.addEventListener('click',selectchoice)
        document.querySelector(".choices").append(choice)
        

    }
}

function selectchoice() {
    you=this.id;
    
    document.getElementById('your-choice').src=`${you}.png`
    opponent=choices[Math.floor(Math.random()*3)]
    document.getElementById('opponent-choice').src=`${opponent}.png`
if(you == opponent){
    yourscore +=1
    opponentscore +=1
}
else{
    if(you == 'papper'){
       if(opponent=="scissors"){
        opponentscore +=1
       }
       else if(opponent == 'rock'){
        yourscore +=1
       }
    }
    if(you == "scissors"){
        if(opponent=="papper"){
        yourscore += 1
        }
        else if(opponent == 'rock'){
         opponentscore +=1
        }
     }
     if(you == "rock"){
        if(opponent=="scissors"){
         yourscore +=1
        }
        else if(opponent == 'papper'){
         opponentscore +=1
        }
     }
}
    document.getElementById("your-score").innerText=yourscore
    document.getElementById("opponent-score").innerText=opponentscore
    
}