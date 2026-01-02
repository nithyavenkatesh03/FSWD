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
        <h2 style={styles.title}>✈️ Flight Ticket Booking</h2>
        <button style={styles.button} onClick={bookTicket}>
          Book Flight Ticket
        </button>
      </div>
    </div>
  );
};

const styles = {
  center: {
    height: "100vh",                 // full screen height
    display: "flex",
    justifyContent: "center",         // horizontal center
    alignItems: "center",             // vertical center
    backgroundColor: "#eaf2ff",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    textAlign: "center",
    width: "320px",
  },

  title: {
    marginBottom: "25px",
    color: "#2c3e50",
  },

  button: {
    padding: "14px 26px",
    fontSize: "16px",
    backgroundColor: "#0984e3",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default FlightTicket;
