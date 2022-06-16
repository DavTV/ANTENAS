
    //    FrecuenciaCorte();
       CalculoDistancia();
       CalcularGanacia();
       DistanciaAntena();
    //   function FrecuenciaCorte() {
    //     $("#frecuenciaCorte").submit(function (e) { 
    //        e.preventDefault();
    //        console.log(Math.sqrt(25))
    //        let fc =$("#fc-fc").val();
    //        let tg =$("#tg-fc").val();
    //        console.log('fc, tg :>> ', fc, tg);
    //        let val1 =fc*Math.pow(10,6);
    //        let val2 =Math.pow(300000000 / tg * Math.pow(10,3),2);
    //        let resultado = Math.sqrt((val1+ val2));
    //            console.log(val1, val2)
       

    //         document.getElementById("resultado-fc").innerHTML=`
    //         <div class="alert alert-warning alert-dismissible fade show" role="alert">
    //                 <strong>La frecuencia de corte es de: ${resultado}!</strong>
    //                 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    //             </div>
    //         `;
    //        $("#resultado-fc").fadeIn();

    //    });

    //   }
      
      function CalculoDistancia() {
        $("#calculoDistancia").submit(function (e) { 
           e.preventDefault();
            $("#resultado-p").hide();
           
           let a1 =$("#a1").val();
           let a2 =$("#a2").val();

           console.log('a1, a2 :>> ', a1, a2);
           
           let resultado = 3.6*(Math.sqrt(a1) +Math.sqrt(a2))

            document.getElementById("resultado-p").innerHTML=`
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>La Distancia  es de: ${resultado.toFixed(2)}Km!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            $("#resultado-p").fadeIn();
       });

    //    $("#calculoa").submit(function (e) { 
    //        e.preventDefault();
    //        let distancia =$("#d-ca").val();
    //        let a2 =$("#a2").val();
    //        let a1=calculoValor(distancia,a2);
    //        document.getElementById("resultado-p").innerHTML=`
    //         <div class="alert alert-warning alert-dismissible fade show" role="alert">
    //                 <strong>El valor  es de: ${a1.toFixed(2)}m!</strong>
    //                 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

    //             </div>
    //         `;
    //         $("#resultado-p").fadeIn();
    //    });

    //    function calculoValor(distancia,valor){
    //        return Math.pow(((distancia/3.6)-Math.sqrt(valor)),2 );
    //    }
    }
    function CalcularGanacia(){
        $("#GananciaPotencia").submit(function (e) { 
           e.preventDefault();
           $("#resultado-pot1").hide();
           
           let pa =$("#pa").val();
           let pb =$("#pb").val();
           
           
           let resultadog =10*Math.log10(pa/pb);
           
            document.getElementById("resultado-pot1").innerHTML=`
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>La Ganacia de potencia  es de: ${resultadog.toFixed(2)}dB!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
           $("#resultado-pot1").fadeIn();

       });
       $("#GananciaTension").submit(function (e) { 
           e.preventDefault();
           $("#resultado-pot").hide();
           let pa =$("#va").val();
           let pb =$("#vb").val();
           
           
           let resultadog =20*Math.log10(pa/pb);
            document.getElementById("resultado-pot").innerHTML=`
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>La Ganacia de tensión  es de: ${resultadog.toFixed(2)}dB!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

                </div>
            `;
           $("#resultado-pot").fadeIn();

       });
    }
    function DistanciaAntena(){
        $("#longitudA").submit(function (e) { 
           e.preventDefault();
           $("#resultado-da").hide();

           let va =$("#v-a").val();
          
           
           
            let resultado = (3)/va;
            resultado = (resultado/2)*100;
            console.log(resultado)
            document.getElementById("resultado-da").innerHTML=`
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>La Distancia  es de: ${ resultado.toFixed(2)}m!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

                </div>
            `;
           $("#resultado-da").fadeIn();

       });

    }
  