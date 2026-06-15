// ==========================
// MÚSICA
// ==========================
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");

// Intentar reproducir automáticamente
window.addEventListener("load", () => {
    musica.play().catch(() => {
        console.log("El navegador bloqueó la reproducción automática.");
    });
});

// Botón de música
btnMusica.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        btnMusica.innerHTML = "🔊 Música";
    } else {
        musica.pause();
        btnMusica.innerHTML = "🎵 Música";
    }
});


// ==========================
// WHATSAPP
// ==========================
document.getElementById("btnWhatsapp")
.addEventListener("click", () => {

    const mensaje = encodeURIComponent(
        "Hola, confirmo mi asistencia a los 15 años de Andrea Carolina."
    );

    window.open(
        `https://wa.me/573176819593?text=${mensaje}`,
        "_blank"
    );
});


// ==========================
// UBICACIÓN
// ==========================
document.getElementById("btnUbicacion")
.addEventListener("click", () => {

    window.open(
        "https://maps.google.com/?q=Cra.+39+%2331A-89,+Cartagena",
        "_blank"
    );
});


// ==========================
// CUENTA REGRESIVA
// ==========================
const fechaEvento = new Date("2026-07-31T20:00:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    document.getElementById("contador").innerHTML =
        `⏳ ${dias} días y ${horas} horas`;

}, 1000);


// ==========================
// INVITADO DE PRUEBA
// ==========================
document.getElementById("nombreInvitado")
.innerHTML = "JAIR";

document.getElementById("cuposInvitado")
.innerHTML = "3 PERSONA(S)";