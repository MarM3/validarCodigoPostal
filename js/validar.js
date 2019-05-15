//Programado por: Mar Mazuelas - Fecha:15/05/2019
function validar() {
    $(document).ready(function () {
        let patron = /^[0-9]{5}$/;
        let cp = $(codigopostal).val();

        if (patron.test(cp)) {
            setTimeout(function () {
                //"El código postal introducido es correcto.";
                $(#codigopostal).html("El código postal introducido es correcto.");
            }, 3000);
        } else {
            setTimeout(function () {
                //"El codigo postal no es correcto. Debe ser de 5 caracteres."
                $(#codigopostal).html("El código postal no es correcto. Debe introducir 5 caracteres numéricos.");
            }, 3000);
        }
    });
}