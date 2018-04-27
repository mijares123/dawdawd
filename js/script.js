function agregar(){

   var pro=document.getElementById("producto").value;
   var pre=document.getElementById("precio").value;
   var var1=parseFloat(pre);
   var can=document.getElementById("cantidad").value;
    var var2=parseFloat(can);
   if(comp(pro,var1,var2)==true){
      
      
  }else{
    var sub=var1*var2;
    agregartabla(pro,pre,can,sub);
    
  }
  igv();

}
var n=0;
function agregartabla(pro,pre,can,sub){
  var table=document.getElementById("tabla");
   n=table.rows.length;
  table.innerHTML=table.innerHTML+"<tr><td>"+n+"</td><td>"+pro+"</td><td>"+pre+"</td><td>"+can+"</td><td>"+sub+"</td><td class='action'><button onclick='borrar(this)'>borrar</button></td></tr>";

}
function borrar(p){
  var table=document.getElementById("tabla");
  var pos=p.parentNode.parentNode.rowIndex;
  table.deleteRow(pos);
  for (var i = 1; i <table.rows.length; i++) {
    table.rows[i].cells[0].innerHTML=i;
  }
  igv();
}
function corregir(){
    data.rows[ri].cells[1].innerHTML = document.getElementById("nombre").value;
    data.rows[ri].cells[2].innerHTML = document.getElementById("Apellidos").value;
    data.rows[ri].cells[3].innerHTML = document.getElementById("Direccion").value;
}
function igv(){
  var table=document.getElementById("tabla");
  var sum=0;
  for (var i=1; i<table.rows.length; i++) {
     sum=sum+parseFloat( table.rows[i].cells[4].innerHTML);
    
  }
  document.getElementById("sinigv").value= sum;
  document.getElementById("igv").value= sum*0.18;
  document.getElementById("conigv").value= sum+sum*0.18;
}
function comp(pro,pre,can){
  var co=false;
  var table=document.getElementById("tabla");
  for (var i=1; i<table.rows.length; i++) {
     if(pro==table.rows[i].cells[1].innerHTML){
        table.rows[i].cells[3].innerHTML=parseFloat(table.rows[i].cells[3].innerHTML)+can;
        table.rows[i].cells[4].innerHTML=pre*parseFloat(table.rows[i].cells[3].innerHTML);
        co=true;
     }
  }
  return co;
}