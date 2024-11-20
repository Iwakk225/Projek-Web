document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    const nameInput = contactForm.querySelector('input[name="name"]');
    const emailInput = contactForm.querySelector('input[name="email"]');
    const phoneInput = contactForm.querySelector('input[name="phone"]');
    const messageInput = contactForm.querySelector('textarea[name="message"]');
    const submitButton = contactForm.querySelector('button');

    // Event listener untuk pengiriman form
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah form untuk submit secara default

        // Ambil nilai input form
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const message = messageInput.value.trim();

        // Validasi form
        if (name === '') {
            alert('Nama tidak boleh kosong!');
            return;
        }

        if (!validateEmail(email)) {
            alert('Alamat email tidak valid!');
            return;
        }

        if (message === '') {
            alert('Pesan tidak boleh kosong!');
            return;
        }

        // Jika validasi berhasil, simulasikan pengiriman form
        submitForm(name, email, phone, message);
    });

    // Fungsi untuk memvalidasi email
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    // Fungsi untuk mengirimkan data form (simulasi)
    function submitForm(name, email, phone, message) {
        // Menampilkan pesan sukses
        alert('Pesan Anda telah dikirimkan! Terima kasih telah menghubungi kami.');
        
        // Reset form setelah pengiriman sukses
        contactForm.reset();
    }
});
