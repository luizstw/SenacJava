let count = 0;
let res = document.getElementById("clickcount");

function add(){
    document.getElementById("clickcount").style.color = `#00FF00`;
    count++;
    res.innerHTML = `${count}`;
}

function zerar(){
    document.getElementById("clickcount").style.color = `#FFFFFF`;
    count = 0;
    res.innerHTML = `${count}`;
}

function dim(){
    count--;
    if (count < 0){
        document.getElementById("clickcount").style.color = `#FF0000`;
    } else{
        document.getElementById("clickcount").style.color = `#FFFFFF`;
    }
    
    res.innerHTML = `${count}`;
}