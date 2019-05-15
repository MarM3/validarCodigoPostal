//Programado por: Mar Mazuelas - Fecha:15/05/2019
$(document).ready(function () {
    $("#codigopostal").on("change keyup paste", function () {
        let patron = /^[0-9]{5}$/;
        let cp = $("#codigopostal").val();

        if (patron.test(cp)) {
            //if (cp.length === 5) { //"El código postal introducido es correcto.";
                $("#mostrar").html("El código postal introducido es correcto."); //primero aparece el mensaje
                borrar();//luego lo borro
           // }
        } else {
                //"El codigo postal no es correcto. Debe ser de 5 caracteres."
                $("#mostrar").html("El código postal no es correcto. Debe introducir 5 caracteres numéricos.");
                borrar();
        }
    });
});

function borrar() { //cuando pasan 3 minutos aparece este mensaje
    setTimeout(function () {
        $("#mostrar").html("");
    }, 3000);
}