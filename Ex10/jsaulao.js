/* Par ou Ímpar EX10 */

function start(){
    let num = Number(document.getElementById("num").value)
    let calc = num % 2 == 0 ? 'Par' : 'Ímpar'
    document.getElementById("res").innerHTML = `Seu resultado é igual a ${calc}`
}