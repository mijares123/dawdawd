function agregar(){

   var pro=document.getElementById("producto").value;
   var pre=document.getElementById("precio").value;
   var var1=parseFloat(pre);
   var can=document.getElementById("cantidad").value;
   alert(can);
    var var2=parseFloat(can);
   var sub=var1*var2;

    agregartabla(pro,pre,can,sub);

}
var n=0;
function agregartabla(pro,pre,can,sub){
  var table=document.getElementById("tabla");
   n=table.rows.length;
  table.innerHTML=table.innerHTML+"<tr><td>"+n+"</td><td>"+pro+"</td><td>"+pre+"</td><td>"+can+"</td><td>"+sub+"</td><td><button onclick='borrar(this)'>borrar</button></td><td><button onclick='corregir(this)'>corregir</button></td></tr>";

}
function borrar(p){
  var table=document.getElementById("tabla");
  var pos=p.parentNode.parentNode.rowIndex;
  table.deleteRow(pos);
  alert(table.rows.length);
  for (var i = 1; i <table.rows.length; i++) {
    table.rows[i].cells[0].innerHTML=i;
  }

}
