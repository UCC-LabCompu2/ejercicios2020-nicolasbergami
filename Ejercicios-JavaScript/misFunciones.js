/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversion de Unidades de metros,yardas,pies y pulgadas
 * @method CambiarUnidades
 * @param (string) id- los id de los inputs de metros,yardas,pies y pulgadas
 * @param (number) valor-el valor de los inputs de metros,yardas,pulgadas y pies
 * @return
 */
function CambiarUnidades(id,valor){
    if(isNaN(value)){
        alert("se ingreso un valor invalido");
        document.LasUnidades.unid_metro.value=" ";
    }else if (id=="metro"){
        document.LasUnidades.unid_pulgada.value=39.37*valor;
        document.LasUnidades.unid_pie.value=3.28084*valor;
        document.LasUnidades.unid_yarda.value=1.0936*valor;
    }
    else if (id=="pulgada"){
        document.LasUnidades.unid_metro.value=0.0254*valor;
        document.LasUnidades.unid_pie.value=0.08333*valor;
        document.LasUnidades.unid_yarda.value=0.02777*valor;
    }
    else if (id=="yarda"){
        document.LasUnidades.unid_metro.value=0.9144*valor;
        document.LasUnidades.unid_pie.value=3*valor;
        document.LasUnidades.unid_pulgada.value=36*valor;

    }
    else if (id=="pie"){
        document.LasUnidades.unid_metro.value=0.3048*valor;
        document.LasUnidades.unid_yarda.value=0.333333*valor;
        document.LasUnidades.unid_pulgada.value=11.999988*valor;

    }
}
function convertirGR(id){
    var grad;
    var rad;
    if(id=="grados"){
        grad=document.getElementById("grados").value:
        rad=(grad*Math.PI)/180;
    }
    else if (id=="radianes"){
        rad=document.getElementById("radianes").value;
        grad=(rad*180)/Math.PI;
    }
    document.getElementById("grados").value=grad;
    document.getElementById("radianes").value=rad;

}
function mostrar_ocultar(valorMO) {
if(valorMO==val_mostrar){
    document.getElementById("divMO").style.display='block';
}else if(valorMO=="val_ocultar"){
    document.getElementById("divMO").style.display='none';
}

}
function calularSuma(){
    var num1,num2;
    num1=Number(document.getElementsByName(  "sum_num1")[0].value);
    num2=Number(document.getElementsByName(  "sum_num2")[0].value);
document.getElementsByName("sum_total")[0].innerHTML=num1 + num2;
}
function calcularResta() {
    var num1,num2;
    num1=Number(document.getElementsByName(  "res_num1")[0].value);
    num2=Number(document.getElementsByName(  "res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML=num1 - num2;
}
function calcularMultiplicacion() {
    var num1,num2;
    num1=Number(document.getElementsByName(  "mul_num1")[0].value);
    num2=Number(document.getElementsByName(  "mul_num1")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML=num1 * num2;

}
function calcularDivision() {
    var num1, num2;
    num1=Number(document.getElementsByName(  "div_num1")[0].value);
    num2=Number(document.getElementsByName(  "div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML=num1/num2;


}
function cargarWeb() {
    var cant,unidad,urlComp;
    cant=document.getElementById("distancia").value;
    unidad=document.getElementsByName( "unidades")[0].value;
urlComp="segundaWeb.html#" + cant+ "#" + unidad;
window.open (urlComp);
}
function cargarResultado() {
var urlComp, can,un;
urlComp=window.location.href.split( "/")[5];
can=urlComp.split("#")[1];
un=urlComp.split("#")[2];
document.getElementById("dist").value=can + " " + un;
}
function dibujarCirCuad(){
    var canvas=document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");
    var yMax=canvas.width;
    var xMax=canvas.height;
    var margen=5;
    ctx.fillStyle="#333899";
    ctx.fillRect(0+margen,-40-margen,40,40);
    ctx.arc(xMax/2,yMax/2,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle="#345899"
    ctx.fill();

}
var bandera;
function dibujar(evento) {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");
    var posX = evento.clientX;
    var posY = evento.clientY;
    console.log(posX, posY);
    canvas.onmousedown = function () {
        bandera = true;
    }
    canvas.onmouseup = function () {
        bandera = false;
    }
    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }
}
function limpiarCanvas() {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");
    canvas.width=canvas.width;


}
function dibujarCuadriculado() {
    var canvas=document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");
    var alturaMax=canvas.height;
    var anchoMax=canvas.width;
    //dibujar lineas horizontales
    ctx.beginPath();
    for (var i=0-;i<alturaMax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#8e06c1";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();
    //dibujar lineas verticales
    ctx.beginPath();
    for (i=0;i<anchoMax;){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();
    //eje X
    ctx.beginPath();
        ctx.moveTo(0, alturaMax/2);
        ctx.lineTo(anchoMax, alturaMax/2);
        ctx.strokeStyle = "#ff045c";
        ctx.stroke();
    }
    ctx.closePath();
ctx.closePath();
//eje y
ctx.beginPath();
ctx.moveTo(anchoMax/2, 0);
ctx.lineTo(anchoMax/2, alturaMax);
ctx.strokeStyle = "#ff045c";
ctx.stroke();
}
ctx.closePath();



}
function dibujarimagen(posx,posy) {
var canvas=document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");
    console.log(posx,posy);
    var img=new Image();
    img.src="images/auto.png";
    canvas.width=canvas.width;
    img.onload= function(){
        ctx.drawImage(img,posx,posy);
    }

}
x=0;
dx=2;
function animarAuto() {
    var canvas=document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");
    console.log(posx,posy);
    var img=new Image();
    img.src="images/auto.png";
    canvas.width=canvas.width;
    img.onload= function(){
        ctx.drawImage(img,x,100;
    }
    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}




