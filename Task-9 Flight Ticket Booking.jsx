const FlightTicket = () => {
  const bookTicket = () => {
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    const destination = prompt("Enter Destination:");
    if (!destination) {
      alert("Booking cancelled: Destination is required.");
      return;
    }

    const confirmBooking = confirm(
      `Confirm Booking?\nPassenger: ${name}\nDestination: ${destination}`
    );

    if (confirmBooking) {
      alert(
        `🎉 Ticket Booked Successfully!\nPassenger: ${name}\nDestination: ${destination}`
      );
    } else {
      alert("❌ Ticket booking cancelled.");
    }
  };

  return (
    <div style={styles.center}>
      <div style={styles.card}>
        <div style={styles.icon}>✈️</div>
        <h2 style={styles.title}>Flight Ticket Booking</h2>
        <p style={styles.subtitle}>Book your flight easily</p>
        <button style={styles.button} onClick={bookTicket}>
          Book Flight Ticket
        </button>
      </div>
    </div>
  );
};

const styles = {
  center: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#74ebd5,#9face6)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "18px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
    textAlign: "center",
    width: "340px",
  },
  icon: {
    fontSize: "45px",
    marginBottom: "50px",
  },
  title: {
    marginBottom: "30px",
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: "14px",
    color: "#636e72",
    marginBottom: "25px",
  },
  button: {
    padding: "14px 28px",
    background: "linear-gradient(135deg,#0984e3,#6c5ce7)",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default FlightTicket;
