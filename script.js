const textArea = document.querySelector(".cajaTexto");
const mensaje = document.querySelector(".mensaje");
const muneco = document.getElementById("muneco");
const btnCopiar = document.querySelector(".btnCopiar");  // Selecciona el botón de copiar


function btnEncriptar() {
    const texto = textArea.value.trim();

    // Validaciones si el campo este vacio, notificar que esta vacio y debe de ingresar datos
    if (texto === "") {
        alert("El campo no puede estar vacío.");
        return;
    }
    
    //solo permite letras minusculas, no permite letras mayuscula y caracteres
    if (!/^[a-z\s]+$/.test(texto)) {
        alert("Solo se permiten letras minúsculas sin acentos.");
        return;
    }

    // Encriptar el texto
    const textoEncriptado = encriptar(texto);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    muneco.style.display = "none";  // Oculta la imagen al encriptar
    btnCopiar.classList.remove("oculto");  // Muestra el botón de copiar

}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar() {
    const texto = textArea.value.trim();

       // Validaciones si el campo este vacio, notificar que esta vacio y debe de ingresar datos
    if (texto === "") {
        alert("El campo no puede estar vacío.");
        return;
    }

    // Desencriptar el texto
    const textoDesencriptado = desencriptar(texto);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    muneco.style.display = "block";  // Muestra la imagen al desencriptar
    btnCopiar.classList.remove("oculto");  // Muestra el botón de copiar
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function copiarTexto() {
    // Selecciona el contenido del textarea
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    document.execCommand("copy");

    // Mensaje de confirmación 
    alert("Texto copiado al portapapeles");
}