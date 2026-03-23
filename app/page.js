export default function Home() {
  return (
    <main style={{fontFamily:"Montserrat, sans-serif", background:"#F5F1EB", color:"#3A3A3A"}}>

      {/* HEADER */}
      <header style={{
        position:"sticky",
        top:0,
        background:"rgba(245,241,235,0.9)",
        backdropFilter:"blur(6px)",
        padding:"25px 20px",
        zIndex:10
      }}>
        <nav style={{
          display:"flex",
          justifyContent:"space-between",
          maxWidth:"1100px",
          margin:"auto"
        }}>
          <strong>NERÚA</strong>

          <div style={{display:"flex", gap:"30px"}}>
            <a href="#quehacemos" style={link}>Qué hacemos</a>
            <a href="#servicios" style={link}>Servicios</a>
            <a href="#proceso" style={link}>Proceso</a>
            <a href="#equipo" style={link}>Equipo</a>
            <a href="#contacto" style={link}>Contacto</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section style={{textAlign:"center", padding:"120px 20px", maxWidth:"850px", margin:"auto"}}>
        <h1 style={{fontSize:"44px"}}>
          Centro <span style={{color:"#C6A96B"}}>NERÚA</span>
        </h1>

        <p style={{color:"#6B7D6D"}}>Espacio de bienestar integral</p>

        <p style={{marginTop:"30px", lineHeight:"1.7"}}>
          Bruxismo, migrañas, tinnitus, vértigos, digestiones difíciles o una sensación constante de estar en alerta.
          <br /><br />
          Puede que lleves tiempo intentando entender qué te pasa y que cada síntoma parezca distinto.
          <br /><br />
          En NERÚA trabajamos desde una visión integradora del cuerpo y el sistema nervioso para ayudarte a comprender qué está ocurriendo y recuperar tu equilibrio.
        </p>
      </section>

 {/* IMAGEN CAMILLA */}
  <section style={{padding:"40px 20px", maxWidth:"900px", margin:"auto"}}>
  <img 
    src="https://images.pexels.com/photos/6627436/pexels-photo-6627436.jpeg"
    style={{
      width:"100%",
      borderRadius:"16px",
      maxHeight:"220px",
      objectFit:"cover",
      display:"block"
    }}
  />
</section>

      {/* QUE HACEMOS */}
      <section id="quehacemos" style={section}>
        <h2>Qué hacemos</h2>

        <p style={text}>
          En NERÚA abordamos los problemas de salud desde una perspectiva integradora, teniendo en cuenta el sistema nervioso, el cuerpo y la historia de cada persona.
        </p>

        <p style={text}>
          Muchos síntomas no aparecen de forma aislada, sino que forman parte de procesos más amplios que el organismo ha ido desarrollando con el tiempo.
        </p>

        <p style={text}>
          Nuestro trabajo consiste en entender qué está sosteniendo ese proceso y acompañar a la persona en un cambio real y progresivo.
        </p>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" style={section}>
        <h2>Servicios</h2>

        <Card title="Estrés y malestar emocional" text="Ansiedad, bloqueo o sensación de desbordamiento que afectan al día a día." />
        <Card title="Tensión corporal y bruxismo" text="Sobrecarga en mandíbula, cuello o cuerpo asociada al sistema nervioso." />
        <Card title="Tinnitus y vértigos" text="Alteraciones del equilibrio o percepción de ruido persistente." />
        <Card title="Malestar digestivo" text="Inflamación abdominal, SIBO o digestiones difíciles que no terminan de resolverse." />
      </section>

      {/* PROCESO */}
      <section id="proceso" style={section}>
        <h2>Cómo trabajamos</h2>

        <p style={text}>
          Analizamos cada caso de forma individual para entender cómo está funcionando el sistema nervioso y qué factores están influyendo en el mantenimiento del problema.
        </p>

        <p style={text}>
          A partir de ahí, combinamos trabajo corporal, regulación del sistema nervioso y acompañamiento emocional o digestivo según cada persona.
        </p>

        <p style={text}>
          El objetivo es generar un cambio profundo y sostenido, no solo aliviar síntomas de forma puntual.
        </p>
      </section>

{/* IMAGEN VELA */}
      <section style={{padding:"40px 20px", maxWidth:"900px", margin:"auto"}}>
  <img 
    src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
    style={{
      width:"100%",
      borderRadius:"16px",
      maxHeight:"220px",
      objectFit:"cover",
      display:"block"
    }}
  />
</section>
      {/* EQUIPO */}
      <section id="equipo" style={section}>
        <h2>Quiénes somos</h2>

        <p style={{maxWidth:"700px", lineHeight:"1.7"}}>
          NERÚA nace de la necesidad de abordar la salud desde una mirada más amplia, donde sistema nervioso, cuerpo y experiencia están conectados.
        </p>

        <p style={text}>
          <strong><em>José Manuel Gil Rueda</em></strong><br />
          Psicólogo, CAFD y osteópata. Especializado en regulación del sistema nervioso y en el abordaje de síntomas persistentes desde un enfoque global.
        </p>

        <p style={text}>
          <strong><em>María José Martínez Granados</em></strong><br />
          Especializada en nutrición digestiva integrativa y microbiota, trabajando desde una visión funcional, cercana y personalizada.
        </p>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={section}>
        <h2>Contacto</h2>

        <p>📍 Málaga</p>
        <p>📧 info@centronerua.com</p>

        <a href="https://wa.me/34637541937" target="_blank" style={{textDecoration:"none"}}>
          <button style={btn}>Hablar por WhatsApp</button>
        </a>
      </section>
<a
  href="https://wa.me/34637541937"
  target="_blank"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    borderRadius: "30px",
    padding: "12px 18px",
    fontSize: "14px",
    fontWeight: "500",
    textDecoration: "none",
    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}
>
  WhatsApp
</a>
   
        </main>
  );
}

/* COMPONENTE */
function Card({title, text}) {
  return (
    <div style={card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

/* ESTILOS */
const section = {maxWidth:"900px", margin:"auto", padding:"80px 20px"}
const text = {marginBottom:"20px", lineHeight:"1.6"}
const card = {
  background:"white",
  padding:"25px",
  marginBottom:"20px",
  borderRadius:"12px",
  boxShadow:"0 8px 20px rgba(0,0,0,0.05)"
}
const btn = {
  background:"#6B7D6D",
  color:"white",
  padding:"10px 20px",
  borderRadius:"20px",
  border:"none"
}
const link = {
  textDecoration:"none",
  color:"#6B7D6D"
}
