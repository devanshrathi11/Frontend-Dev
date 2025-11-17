// Q5: Movie Ticket Booking

function validateBooking(name, email, seats) {
    let nameRegex = /^[A-Za-z ]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let seatRegex = /^([1-9]|10)$/;

    if (!nameRegex.test(name)) return "Invalid Name";
    if (!emailRegex.test(email)) return "Invalid Email";
    if (!seatRegex.test(seats)) return "Seats must be 1-10";

    const booking = { name, email, seats };
    console.log("Booking Successful:", booking);
}

validateBooking("John", "john@example.com", "4");
