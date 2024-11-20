document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById('booking-form');
    const submitButton = document.getElementById('submit-button');
    const bookingSummary = document.getElementById('booking-summary');
    const checkinDate = document.getElementById('checkin-date');
    const checkoutDate = document.getElementById('checkout-date');
    const guestsInput = document.getElementById('guests');
    const roomTypeSelect = document.getElementById('room-type');
    const nightsInput = document.getElementById('nights');
    const summaryCheckin = document.getElementById('summary-checkin');
    const summaryCheckout = document.getElementById('summary-checkout');
    const summaryGuests = document.getElementById('summary-guests');
    const summaryRoom = document.getElementById('summary-room');
    const summaryNights = document.getElementById('summary-nights');
    const summaryTotal = document.getElementById('summary-total');
    const confirmBookingButton = document.getElementById('confirm-booking');

    // Fungsi untuk menghitung total biaya
    function calculateTotalPrice(roomType, nights) {
        const roomPrices = {
            single: 350000000,
            double: 670000000,
            suite: 930000000
        };

        return roomPrices[roomType] * nights;
    }

    // Mengatur tampilan ringkasan pemesanan
    function updateBookingSummary() {
        const checkin = checkinDate.value;
        const checkout = checkoutDate.value;
        const guests = guestsInput.value;
        const roomType = roomTypeSelect.value;
        const nights = nightsInput.value;

        const totalPrice = calculateTotalPrice(roomType, nights);

        summaryCheckin.textContent = checkin;
        summaryCheckout.textContent = checkout;
        summaryGuests.textContent = guests;
        summaryRoom.textContent = roomType.charAt(0).toUpperCase() + roomType.slice(1);
        summaryNights.textContent = nights;
        summaryTotal.textContent = `Rp ${totalPrice.toLocaleString()}`;
    }

    // Menangani pengiriman form
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();
        updateBookingSummary();
        bookingForm.reset();
        bookingSummary.classList.remove('hidden');
    });

    // Konfirmasi pemesanan
    confirmBookingButton.addEventListener('click', () => {
        alert('Pemesanan Anda berhasil! Terima kasih telah memilih Hawaii Hotel.');
        bookingSummary.classList.add('hidden');
    });
});
