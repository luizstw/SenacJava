const carac = '0123456789ABCDEF'; 

function coresget(){ 
    let cor = '#'; 
    for (let i = 0; i < 6; i++){ 
        cor += carac[Math.floor(Math.random() * 16)];
    } 
    return cor; 
} 
document.getElementById('btn').addEventListener('click', function() {
     const novaCor = coresget(); 
     document.body.style.backgroundColor = novaCor; 
     document.querySelector('.color').textContent = novaCor;
    });