const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
    target.addEventListener('click', () => {
        content.forEach(c => {
            c.classList.remove('active')
        })
        const t = document.querySelector(target.dataset.target)
        t.classList.add('active')
    })
})


function holaMundo() {
    console.log("hola mundo")
}


function generarOpciones_anti() {
    const select = document.getElementById('opciones_anti');
    if (select) { // Verifica si el elemento existe
        for (let i = 1; i <= 100; i++) {
            const opcion = document.createElement('option');
            opcion.value = i;
            opcion.textContent = `${i} Años`;
            select.appendChild(opcion);
        }
    }
}

function generarOpciones_grado() {
    const select = document.getElementById('opciones_grado');
    if (select) { // Verifica si el elemento existe
        const grados = ["Soldado", "Cabo", "Sargento Segundo", "Sargento Primero", "Subteniente", "Teniente", "Capitán Segundo", "Capitan Primero", "Mayor", "Teniente Coronel", "Coronel", "General de Brigadier", "General de Brigada", "General de División", "General de Secretario de la Defensa Nacional"]
        for (let i = 1; i < grados.length; i++) {
            const opcion = document.createElement('option');
            opcion.value = i;
            opcion.textContent = grados[i];
            select.appendChild(opcion);
        }
    }
}

function validarNumero(id) {
    const input = document.getElementById(id);
    if (input.value < 0) {
        input.value = ''; // Borra el valor si es negativo
    }
}

function clickBuscar() {
    const content = document.querySelectorAll('[data-content]')
    content.forEach(c => {
        c.classList.remove('active')
    })
    const t = document.getElementById("resultado")
    t.classList.add('active')
    const te = document.getElementById("texto_resultado")
    te.textContent = "algo"
}

window.onload = function () {
    generarOpciones_anti();
    generarOpciones_grado();
};

function calculateSalary() {
    var salarioBaseInput = document.getElementById('baseSalary');
    var horasTrabajadasInput = document.getElementById('hoursWorked');
    var horasExtrasInput = document.getElementById('extraHours');

    // Verificar si los campos de entrada están vacíos
    if (!salarioBaseInput.value || !horasTrabajadasInput.value || !horasExtrasInput.value) {
        alert(salarioBaseInput.validationMessage || horasTrabajadasInput.validationMessage || horasExtrasInput.validationMessage );
        return;
    }

    validarNumero('baseSalary');
    validarNumero('hoursWorked');
    validarNumero('extraHours');

    var salarioBase = parseFloat(salarioBaseInput.value);
    var horasTrabajadas = parseFloat(horasTrabajadasInput.value);
    var horasExtras = parseFloat(horasExtrasInput.value);

    // Las horas extras se pagan al doble
    var salarioHoraExtra = salarioBase * 2;
    var salarioTotal = (horasTrabajadas * salarioBase) + (horasExtras * salarioHoraExtra);

    var impuestos = calcularImpuestos(salarioTotal);
    var salarioNeto = salarioTotal - impuestos;

    // Calcular el porcentaje de impuestos
    var porcentajeImpuestos = (impuestos / salarioTotal) * 100;

    // Mostrar los resultados
    document.getElementById('salarioBruto').textContent = "El salario sin impuestos: " + salarioTotal.toFixed(2);
    document.getElementById('impuestos').textContent = "El impuesto total diario: " + impuestos.toFixed(2);
    document.getElementById('porcentajeImpuestos').textContent = "El porcentaje de impuestos es: " + porcentajeImpuestos.toFixed(2) + "%";
    document.getElementById('salarioNeto').textContent = "El salario es: " + salarioNeto.toFixed(2);
}

function calcularImpuestos(totalIngreso) {
    // Definir las tasas de impuestos
    var tasasImpuestos = [
        { limiteInferior: 0.01, limiteSuperior: 24.54, cuotaFija: 0.00, porcentaje: 1.92 },
        { limiteInferior: 24.54, limiteSuperior: 208.29, cuotaFija: 0.47, porcentaje: 6.40 },
        { limiteInferior: 208.30, limiteSuperior: 366.05, cuotaFija: 12.23, porcentaje: 10.88 },
        { limiteInferior: 366.06, limiteSuperior: 425.52, cuotaFija: 29.40, porcentaje: 16.00 },
        { limiteInferior: 425.53, limiteSuperior: 509.46, cuotaFija: 38.91, porcentaje: 17.92 },
        { limiteInferior: 509.47, limiteSuperior: 1024.52, cuotaFija: 53.95, porcentaje: 21.36 },
        { limiteInferior: 1027.53, limiteSuperior: 1619.51, cuotaFija: 164.61, porcentaje: 23.52 },
        { limiteInferior: 1619.52, limiteSuperior: 3091.90, cuotaFija: 303.85, porcentaje: 30.00 },
        { limiteInferior: 3091.91, limiteSuperior: 4122.54, cuotaFija: 745.56, porcentaje: 32.00 },
        { limiteInferior: 4122.55, limiteSuperior: 12367.62, cuotaFija: 1075.37, porcentaje: 34.00 },
        { limiteInferior: 12367.63, cuotaFija: 3878.69, porcentaje: 35.00 }
    ];

    var impuestoTotal = 0;

    // Calcular el impuesto para el rango de ingreso correcto
    for (var i = 0; i < tasasImpuestos.length; i++) {
        var rango = tasasImpuestos[i];
        if (totalIngreso > rango.limiteInferior && (!rango.limiteSuperior || totalIngreso <= rango.limiteSuperior)) {
            var ingresoImponible = totalIngreso - rango.limiteInferior;
            impuestoTotal = rango.cuotaFija + (ingresoImponible * (rango.porcentaje / 100));
            break;
        }
    }

    return impuestoTotal;
}

function createAccount() {
}
