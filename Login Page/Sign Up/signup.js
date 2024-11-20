document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.querySelector('form');
    const nameInput = signUpForm.querySelector('input[type="text"]');
    const emailInput = signUpForm.querySelector('input[type="email"]');
    const passwordInput = signUpForm.querySelector('input[type="password"]');
    const submitButton = signUpForm.querySelector('button');

    // Menangani event submit form
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah form untuk melakukan submit secara default

        // Mengambil nilai dari input
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validasi input
        if (name === '') {
            alert('Name is required.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // Simulasi pembuatan akun (data disimpan sementara)
        createAccount(name, email, password);
    });

    // Fungsi validasi email menggunakan regex
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    // Fungsi untuk membuat akun user
    function createAccount(name, email, password) {
        // Simulasi penyimpanan data pengguna (bisa disesuaikan dengan backend)
        const user = {
            name: name,
            email: email,
            password: password
        };

        // Menyimpan data akun di localStorage untuk sesi pengguna
        localStorage.setItem('user', JSON.stringify(user));

        // Menampilkan pesan sukses dan mengarahkan ke halaman login atau dashboard
        alert('Account created successfully! Please login.');
        window.location.href = '/sign in/signin.html'; // Ganti dengan URL halaman login Anda
    }
});
