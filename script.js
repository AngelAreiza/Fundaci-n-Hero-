let totalDonaciones = 0; // Variable para almacenar el total de donaciones

function habilitarPago(event) {
    event.preventDefault(); // Previene el envío del formulario

    var registroForm = document.getElementById("registro");

    if (registroForm.checkValidity()) {
        // Si el formulario es válido, muestra la sección de pago
        document.getElementById("divPago").style.display = "block";
    } else {
        alert("Por favor, completa todos los campos requeridos.");
    }
}

function realizarPago(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const metodoPago = document.getElementById("opcionesPago").value;
    const monto = parseFloat(document.getElementById("monto").value);

    // Validar que el monto sea un número positivo
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingresa un monto válido.");
        return;
    }

    // Sumar la donación al total
    totalDonaciones += monto;

    // Actualizar el total en la interfaz
    document.getElementById("totalDonaciones").innerText = totalDonaciones.toFixed(2);

    // Agregar la donación a la tabla
    const tablaDonaciones = document.getElementById("tablaDonaciones").getElementsByTagName('tbody')[0];
    const nuevaFila = tablaDonaciones.insertRow();

    const celdaNombre = nuevaFila.insertCell(0);
    const celdaMetodoPago = nuevaFila.insertCell(1);
    const celdaMonto = nuevaFila.insertCell(2);

    celdaNombre.innerText = nombre;
    celdaMetodoPago.innerText = metodoPago;
    celdaMonto.innerText = monto.toFixed(2);

    // Limpiar el formulario de pago
    document.getElementById("formPago").reset();
    document.getElementById("divPago").style.display = "none"; // Ocultar la sección de pago
}

// Agrega un listener para el evento submit del formulario de registro
document.getElementById("registro").addEventListener("submit", habilitarPago);