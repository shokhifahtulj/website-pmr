// Console log saat halaman dibuka
console.log("Website PMR berhasil dijalankan!");

// Function tombol
function pesan() {

    // Link Netlify
    const link = "https://website-pmr.netlify.app";

    // Popup pesan
    const buka = confirm(
        "Website PMR berhasil di-deploy!\n\n" +
        "Klik OK untuk membuka link website."
    );

    // Jika klik OK
    if (buka) {
        window.open(link, "_blank");
    }
}

// Tambah event listener untuk form submit
document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');

    if (form) {

        form.addEventListener('submit', function(e) {

            e.preventDefault();

            const link = "https://website-sekolah.netlify.app";

            const buka = confirm(
                "Website PMR berhasil di-deploy!\n\n" +
                "Klik OK untuk membuka link website."
            );

            if (buka) {
                window.open(link, "_blank");
            }

            // Reset form
            form.reset();
        });

    }

});
