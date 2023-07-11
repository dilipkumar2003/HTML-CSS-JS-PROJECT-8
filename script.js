// function add(){
//     var a=5
//     var b=5
//     var c=a+b;
//     document.write(c)
// }
// function SUB(){
//     var a=5
//     var b=5
//     var c=a-b;
//     document.write(c)
// }
// function MULTI(){
//     var a=5
//     var b=5
//     var c=a*b;
//     document.write(c)
// }
// function DIV(){
//     var a=5
//     var b=5
//     var c=a/b;
//     document.write(c)
// }


function add(){
    var a=Number(document.getElementById("n1").value);
    var b=Number(document.getElementById("n2").value);
    var c=a+b;
    document.getElementById("ans").innerHTML=c;
}
function sub(){
    var a=Number(document.getElementById("n1").value);
    var b=Number(document.getElementById("n2").value);
    var c=a-b;
    document.getElementById("suba").innerHTML=c;
}
function div(){
    var a=Number(document.getElementById("n1").value);
    var b=Number(document.getElementById("n2").value);
    var c=a/b;
    document.getElementById("diva").innerHTML=c;
}
function multi(){
    var a=Number(document.getElementById("n1").value);
    var b=Number(document.getElementById("n2").value);
    var c=a*b;
    document.getElementById("mula").innerHTML=c;
}
