export default function SiteHeader({ badgeText = "Presencial + Online" }) {
  const link = {
    textDecoration: "none",
    color: "#6B7D6D",
    fontSize: 14,
    fontWeight: 600,
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        background: "rgba(245,241,235,0.9)",
        backdropFilter: "blur(6px)",
        padding: "18px 20px",
        zIndex: 10,
        borderBottom: "1px solid rgba(58,58,58,0.06)",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "auto",
          gap: 16,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="/" style={{ textDecoration: "none", color: "#3A3A3A" }}>
            <strong>NERÚA</strong>
          </a>

          <span
            style={{
              marginLeft: 12,
              padding: "6px 10px",
              borderRadius: 999,
              background: "rgba(198,169,107,0.18)",
              border: "1px solid rgba(198,169,107,0.35)",
              color: "#6B7D6D",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.2px",
              whiteSpace: "nowrap",
            }}
          >
            {badgeText}
          </span>
        </div>

        <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", justifyContent: "flex-end" }}>
          <a href="/#quehacemos" style={link}>Qué hacemos</a>
          <a href="/#consultas" style={link}>Consultas</a>
          <a href="/#equipo" style={link}>Equipo</a>
          <a href="/#testimonios" style={link}>Testimonios</a>
          <a href="/#reserva" style={link}>Reserva</a>
          <a href="/#contacto" style={link}>Contacto</a>
        </div>
      </nav>
    </header>
  );
}
