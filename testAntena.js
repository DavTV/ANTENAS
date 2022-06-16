
$("#form-tvt").submit(function (e) { 
    console.log("click")
    e.preventDefault();
    let p1= $("#form-tvt .pregunta1").val();
    let p2= $("#form-tvt .pregunta2").val();
    let p3= $("#form-tvt .pregunta3").val();
    let p4= $("#form-tvt .pregunta4").val();
    let p5= $("#form-tvt .pregunta5").val();
    let p6= $("#form-tvt .pregunta6").val();
    let p7= $("#form-tvt .pregunta7").val();
    
    $("#modaltesttv").modal("show");
    
    if(p1=='si' && p2=='si' && p3=='si' && p4=='si'){
        $("#modalBodyTv").html(`
            <p>Su antena perfecta es:</p>
            <small class="py-2">Nombre de la antena 1</small>
            <figure>
                <img class="w-100 shadow rounded" src="https://i0.wp.com/www.hablandodeciencia.com/articulos/wp-content/uploads/2244526o-1024x768.jpg?ssl=1" alt="..." /> 
            </figure>
        `);
    }else{
        $("#modalBodyTv").html(`
        <p>Su antena perfecta es:</p>
        <small class="py-2">Nombre de la antena 2</small>
        <figure>
            <img class="w-100 shadow rounded" src="http://www.nuevosvecinos.com/includes/ficheros/antena.jpg" alt="..." /> 
        </figure>
    `);

    }
    // $("#form-test")[0].reset(); 
});

$("#form-wifit").submit(function (e) { 
    e.preventDefault();
    let p1= $("#form-wifit .pregunta1").val();
    let p2= $("#form-wifit .pregunta2").val();
    let p3= $("#form-wifit .pregunta3").val();
    let p4= $("#form-wifit .pregunta4").val();
    let p5= $("#form-wifit .pregunta5").val();
    let p6= $("#form-wifit .pregunta6").val();
    let p7= $("#form-wifit .pregunta7").val();
    
    $("#modaltestwifi").modal("show");
    if(p1=='si' && p2=='si' && p3=='si' && p4=='si'){
        $("#modalBodyWifi").html(`
            <p>Su antena perfecta es:</p>
            <small class="py-2">Nombre de la antena 1</small>
            <figure>
                <img class="w-100 shadow rounded" src="https://www.siliceo.es/wp-content/uploads/2021/01/WIFI-LONG-RANGE.jpg" alt="..." /> 
            </figure>
        `);
    }else{
        $("#modalBodyWifi").html(`
        <p>Su antena perfecta es:</p>
        <small class="py-2">Nombre de la antena 2</small>
        <figure>
            <img class="w-100 shadow rounded" src="https://www.testdevelocidad.es/app/uploads/2018/06/antena-wifi-usb.jpg" alt="..." /> 
        </figure>
    `);

    }
    // $("#form-test")[0].reset(); 
});
$("#form-it").submit(function (e) { 
    e.preventDefault();
    let p1= $("#form-it .pregunta1").val();
    let p2= $("#form-it .pregunta2").val();
    let p3= $("#form-it .pregunta3").val();
    let p4= $("#form-it .pregunta4").val();
    let p5= $("#form-it .pregunta5").val();
    let p6= $("#form-it .pregunta6").val();
    let p7= $("#form-it .pregunta7").val();
    
    $("#modaltestinte").modal("show");
    if(p1=='si' && p2=='si' && p3=='si' && p4=='si'){
        $("#modalBodyInte").html(`
            <p>Su antena perfecta es:</p>
            <small class="py-2">Nombre de la antena 1</small>
            <figure>
                <img class="w-100 shadow rounded" src="https://img.nauticexpo.es/images_ne/photo-g/35605-6973529.jpg" alt="..." /> 
            </figure>
        `);
    }else{
        $("#modalBodyInte").html(`
        <p>Su antena perfecta es:</p>
        <small class="py-2">Nombre de la antena 2</small>
        <figure>
            <img class="w-100 shadow rounded" src="https://img.nauticexpo.es/images_ne/photo-g/35736-7696107.jpg" alt="..." /> 
        </figure>
    `);

    }
    // $("#form-test")[0].reset(); 
});
