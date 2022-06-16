$("#form-tv").submit(function (e) { 
    e.preventDefault();
    let p1= $("#form-tv .pregunta1").val();
    let p2= $("#form-tv .pregunta2").val();
    let p3= $("#form-tv .pregunta3").val();
    let p4= $("#form-tv .pregunta4").val();
    let datos = {p1:p1, p2:p2, p3:p3, p4:p4}
    SendLocalStorage(datos);
    $("#form-tv")[0].reset();
    window.location.href = "calculadora.html";

    
});
$("#form-wifi").submit(function (e) { 
    e.preventDefault();
    let p1= $("#form-wifi .pregunta1").val();
    let p2= $("#form-wifi .pregunta2").val();
    let p3= $("#form-wifi .pregunta3").val();
    let p4= $("#form-wifi .pregunta4").val();
    let datos = {p1:p1, p2:p2, p3:p3, p4:p4}
    SendLocalStorage(datos);
    $("#form-wifi")[0].reset();
    window.location.href = "calculadora.html";

    
});
$("#form-i").submit(function (e) { 
    e.preventDefault();
    let p1= $("#form-i .pregunta1").val();
    let p2= $("#form-i .pregunta2").val();
    let p3= $("#form-i .pregunta3").val();
    let p4= $("#form-i .pregunta4").val();
    let datos = {p1:p1, p2:p2, p3:p3, p4:p4}
    SendLocalStorage(datos);
    $("#form-wifi")[0].reset();
    window.location.href = "calculadora.html";
});

function SendLocalStorage(data){
    localStorage.setItem("data", JSON.stringify(data));
}
