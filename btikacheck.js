// Tunggu hingga seluruh halaman dimuat
window.onload = function () {
    // Pilih semua checkbox
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Periksa status checkbox di localStorage dan setel statusnya
    checkboxes.forEach(function (checkbox) {
        const checkboxId = checkbox.id; // Ambil ID dari setiap checkbox

        // Ambil status centang dari localStorage, jika ada
        const isChecked = localStorage.getItem(checkboxId) === 'true';

        // Set status centang berdasarkan nilai di localStorage
        checkbox.checked = isChecked;

        // Event listener untuk menyimpan status ketika checkbox diubah
        checkbox.addEventListener('change', function () {
            localStorage.setItem(checkboxId, checkbox.checked); // Simpan status ke localStorage
        });
    });
};
