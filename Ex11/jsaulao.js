/* Par ou Ímpar EX11*/

function start(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let calc = num1 > num2 ? 'Maior' : 'Menor'
    document.getElementById("res").innerHTML = `O número "${num1}" é "${calc}" que "${num2}"`
}