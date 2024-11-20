document.addEventListener('DOMContentLoaded', () => {
    // Mendapatkan elemen form berdasarkan id
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitButton = loginForm.querySelector('button');
    
    // Menangani event submit form
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah form untuk melakukan submit secara default

        // Mengambil nilai dari input
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validasi input
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // Simulasi login (bisa diganti dengan API call)
        loginUser(email, password);
    });

    // Fungsi validasi email menggunakan regex
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    // Fungsi untuk login user
    function loginUser(email, password) {
        // Simulasi validasi username dan password
        const storedEmail = 'user@example.com';
        const storedPassword = 'password123'; // Ini hanya contoh, sebaiknya ganti dengan sistem autentikasi yang lebih aman.

        if (email === storedEmail && password === storedPassword) {
            alert('Login successful!');
            // Simpan email ke localStorage untuk sesi pengguna
            localStorage.setItem('userEmail', email);
            window.location.href = 'dashboard.html'; // Arahkan ke halaman dashboard setelah login berhasil
        } else {
            alert('Invalid email or password. Please try again.');
        }
    }
});
