/* Contador EX 8 */

let count = 0
let res = document.getElementById("clickcount")

function add(){
count++
res.innerHTML = `${count}`
}

function zerar(){
let count = 0
res.innerHTML = `${count}`
}