// Ejercicio 1: Verificar si es un palíndromo
function verificarPalindromo() {
  const input = document.getElementById("palindromoInput").value;
  const frase = input.toLowerCase().replace(/[\W_]/g, '');
  const esPalindromo = frase === frase.split('').reverse().join('');
  document.getElementById("resultadoPalindromo").textContent =
    esPalindromo ? "Sí es un palíndromo" : "No es un palíndromo";
}

// Ejercicio 2: Comparar dos números
function compararNumeros() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const resultado = a > b ? `El número mayor es: ${a}` : a < b ? `El número mayor es: ${b}` : "Ambos números son iguales";
  document.getElementById("resultadoComparacion").textContent = resultado;
}

// Ejercicio 3: Mostrar vocales presentes
function mostrarVocales() {
  const frase = document.getElementById("fraseVocales").value.toLowerCase();
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  const presentes = vocales.filter(v => frase.includes(v));
  document.getElementById("vocalesEncontradas").textContent =
    presentes.length ? `Vocales encontradas: ${presentes.join(', ')}` : "No se encontraron vocales.";
}

// Ejercicio 4: Contar vocales
function contarVocales() {
  const frase = document.getElementById("fraseConteo").value.toLowerCase();
  const conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (const letra of frase) {
    if (conteo.hasOwnProperty(letra)) {
      conteo[letra]++;
    }
  }

  let resultado = "";
  for (const vocal in conteo) {
    resultado += `${vocal.toUpperCase()}: ${conteo[vocal]} `;
  }

  document.getElementById("conteoVocales").textContent = resultado.trim();
}

// Al cargar la página, poner la URL actual en el input
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("urlInput").value = window.location.href;
});

function realizarPeticion() {
  const url = document.getElementById("urlInput").value;
  const xhr = new XMLHttpRequest();

  // Mostrar los estados de la petición
  xhr.onreadystatechange = function () {
    const estados = [
      "0 - No iniciada",
      "1 - Conexión establecida",
      "2 - Petición recibida",
      "3 - Procesando petición",
      "4 - Petición completada"
    ];

    document.getElementById("estadoPeticion").textContent = `Estado: ${xhr.readyState} - ${estados[xhr.readyState] || "Desconocido"}`;

    if (xhr.readyState === 4) {
      // Mostrar contenido de la respuesta
      document.getElementById("contenidoRespuesta").innerText = xhr.responseText;

      // Mostrar código y texto de estado
      document.getElementById("codigoEstado").textContent = `${xhr.status} - ${xhr.statusText}`;

      // Mostrar cabeceras de la respuesta
      document.getElementById("cabecerasRespuesta").textContent = xhr.getAllResponseHeaders();
    }
  };

  // Abrir y enviar petición
  xhr.open("GET", url, true);
  xhr.send();
}
