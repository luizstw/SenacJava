/* Interagindo com o Sistema EX12 */
function start(){
    let h = new Date
    let data = h.toLocaleDateString()
    let hora = h.toLocaleTimeString()
    
    document.getElementById("res").innerHTML = `Analisando o seu sistema, a data de hoje é ${data} e o horário ${hora}`
}