// Console log saat halaman dibuka
console.log("Website PMR berhasil dijalankan!");

// Function tombol
function pesan() {

    // Link Netlify
    const link = "https://website-pmr.netlify.app";

    // Popup deploy berhasil
    const buka = confirm(
        "Website PMR berhasil di-deploy!\n\n" +
        "Klik OK untuk membuka link Netlify."
    );

    // Jika klik OK
    if (buka) {
        window.open(link, "_blank");
    }
}


