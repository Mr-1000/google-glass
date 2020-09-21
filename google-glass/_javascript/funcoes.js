function mudaFoto(foto) {
   document.getElementById('icone').src = foto; 
}

// formulario procedimento

function calc_total() {
   var qnt = document.getElementById("Cquant").value;
   var total = qnt * 1500;
   document.getElementById("Cpreco").value = total;
}