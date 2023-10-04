console.log("Ready...");

let nbr = 0;
let count = 1;
let point = 0;
let newgame = 1
let win = 0;
let lose = 0;
let result = "nice";

const loaded = () => {
    display(nbr);

}

const change = () => {
    


        
        nbr = Math.floor(Math.random() * 11 + 2);
        display(nbr);
        if(count == 1){
            
            if(nbr == 7 || nbr == 11){
                console.log("YOU WIN!!!");
                win++;
        
            }
            else if(nbr == 2 || nbr == 3 || nbr == 12){
                console.log("YOU LOSE!!!");
                lose++;
                
            }
        else{
            point = nbr;
        }
    }

    if(count > 1){
        if(nbr == 7){
            console.log("SECOND: YOU LOSE!!!");
            lose++;
        }
        else if(nbr == point){
            console.log("YOU FOUND THE POINT YOU WIN!!!");
            win++;
            
        }
        else{
            console.log("ROLL AGAIN");
        }
    }
    
    count++;
    }



const restart = () =>{
    
}

const display = (nbr) => {
    let ctrl = document.getElementById("nbr");
    ctrl.value = nbr;
    ctrl.style.color = nbr % 2 == 0 ? "red" : "black";
    ctrl.style.fontStyle = nbr % 3 == 0 ? "italic" : "normal";
    ctrl.style.fontWeight = nbr % 7 == 0 ? "bold" : "normal";
}

const results = () => {
    
    result = `${win} wins and ${lose} losses`;
    
    displayResult();

}

const displayResult = () => {
    let ctrl = document.getElementById("result");
    ctrl.textContent = result;
}