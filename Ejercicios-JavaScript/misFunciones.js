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
        grad=document.getElementById(elementld:"grados").value:
        rad=(grad*Math.PI)/180;
    }
    else if (id=="radianes"){
        rad=document.getElementById(elementld:"radianes").value;
        grad=(rad*180)/Math.PI;
    }
    document.getElementById(elementld:"grados").value=grad;
    document.getElementById(elementld:"radianes").value=rad;

}
function mostrar_ocultar(valorMO) {
if(valorMO==val_mostrar){
    document.getElementById(elementld"divMO").style.display='block';
}else if(valorMO=="val_ocultar"){
    document.getElementById(elementld"divMO").style.display='none';
}

}
function calularSuma(){
    var num1,num2;
    num1=Number(document.getElementsByName( elementName: "sum_num1")[0].value);
    num2=Number(document.getElementsByName( elementName: "sum_num2")[0].value);
document.getElementsByName(elementName:"sum_total")[0].innerHTML=num1 + num2;
}
function calcularResta() {
    var num1,num2;
    num1=Number(document.getElementsByName( elementName: "res_num1")[0].value);
    num2=Number(document.getElementsByName( elementName: "res_num2")[0].value);
    document.getElementsByName(elementName:"res_total")[0].innerHTML=num1 - num2;
}
function calcularMultiplicacion() {
    var num1,num2;
    num1=Number(document.getElementsByName( elementName: "mul_num1")[0].value);
    num2=Number(document.getElementsByName( elementName: "mul_num1")[0].value);
    document.getElementsByName(elementName:"mul_total")[0].innerHTML=num1 * num2;

}
function calcularDivision() {
    var num1, num2;
    num1=Number(document.getElementsByName( elementName: "div_num1")[0].value);
    num2=Number(document.getElementsByName( elementName: "div_num2")[0].value);
    document.getElementsByName(elementName:"div_total")[0].innerHTML=num1/num2;


}




