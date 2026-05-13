// Console log saat halaman dibuka
console.log("Website PMR berhasil dijalankan!");

// Function tombol
function pesan() {
    alert("Website PMR berhasil di-deploy!");
}

// Tambah event listener untuk form submit
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Website PMR berhasil di-deploy!");
            // Reset form
            form.reset();
        });
    }
});
