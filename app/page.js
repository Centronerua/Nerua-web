export default function Home() {
  export default function Home() {
  return (
    <main style={{fontFamily: "Montserrat, sans-serif", background:"#F5F1EB", color:"#3A3A3A"}}>

      {/* HERO */}
      <section style={{textAlign:"center", padding:"100px 20px"}}>
        <h1 style={{fontSize:"42px"}}>
          Centro <span style={{color:"#C6A96B"}}>NERÚA</span>
        </h1>

        <h3>Espacio de bienestar integral</h3>

        <p style={{maxWidth:"750px", margin:"30px auto", lineHeight:"1.6"}}>
          Hay síntomas y molestias que pueden parecer distintos, pero muchas veces comparten un mismo fondo: 
          bruxismo, migrañas, tinnitus, vértigos, tensión persistente, malestar digestivo o situaciones emocionales 
          que dejan huella en el cuerpo.
          <br /><br />
          En NERÚA los abordamos desde una mirada integradora, humana y profesional, teniendo en cuenta la historia 
          de cada persona y la forma en que el cuerpo expresa lo que está ocurriendo.
        </p>

        <div style={{marginTop:"30px"}}>
          <button style={btn}>Reservar sesión</button>
          <button style={btnOutline}>Conocer cómo trabajamos</button>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={section}>
        <h2>¿En qué podemos ayudarte?</h2>

        <Card 
          title="Malestar digestivo"
          text="Inflamación abdominal, digestiones difíciles o alteraciones digestivas persistentes que afectan al bienestar diario."
        />

        <Card 
          title="Tensión corporal y bruxismo"
          text="Tensión acumulada en mandíbula, cuello o cuerpo asociada al estrés o a situaciones mantenidas en el tiempo."
        />

        <Card 
          title="Tinnitus y vértigos"
          text="Molestias relacionadas con el equilibrio o la percepción constante de ruido en el oído."
        />

        <Card 
          title="Estrés o malestar emocional"
          text="Momentos vitales que generan inquietud, bloqueo o sensación de desbordamiento."
        />
      </section>

      {/* COMO TRABAJAMOS */}
      <section style={section}>
        <h2>Cómo trabajamos</h2>

        <p style={text}>
          En NERÚA entendemos el bienestar como un proceso que requiere escuchar, comprender y abordar cada situación 
          de manera individual.
        </p>

        <p style={text}>
          Muchas veces los síntomas aparecen en lugares distintos, pero forman parte de procesos que necesitan ser comprendidos en conjunto.
        </p>

        <p style={text}>
          Nuestro objetivo es acompañar a cada persona a comprender mejor lo que le sucede y encontrar nuevas formas de recuperar equilibrio y bienestar.
        </p>
      </section>

      {/* CONSULTAS */}
      <section style={section}>
        <h2>Tipos de consulta</h2>

        <Card title="Nutrición digestiva integrativa" text="Primera consulta: 49€ · Seguimiento: 55€" />
        <Card title="Acompañamiento psicológico" text="Primera sesión: 49€ · Sesiones posteriores: 60€" />
        <Card title="Regulación y bienestar" text="Primera sesión: 49€ · Sesiones posteriores: 60€" />
      </section>

      {/* QUIENES SOMOS */}
      <section style={section}>
        <h2>Quiénes somos</h2>

        <p style={text}>
          <strong>José Manuel Gil Rueda</strong><br />
          Psicólogo, CAFD y osteópata. Especializado en regulación del sistema nervioso y enfoques integrativos.
        </p>

        <p style={text}>
          <strong>María José</strong><br />
          Dietista especializada en nutrición digestiva integrativa y microbiota.
        </p>
      </section>

      {/* CONTACTO */}
      <section style={section}>
        <h2>Contacto</h2>
        <p>📍 Camino de los Almendrales 35, Málaga</p>
        <p>📧 info@centronerua.com</p>

        <button style={btn}>Reservar sesión</button>
      </section>

    </main>
  );
}

/* COMPONENTE */
function Card({title, text}) {
  return (
    <div style={{marginBottom:"25px"}}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

/* ESTILOS */
const section = {
  maxWidth:"900px",
  margin:"auto",
  padding:"60px 20px"
}

const text = {
  lineHeight:"1.6",
  marginBottom:"20px"
}

const btn = {
  background:"#6B7D6D",
  color:"white",
  padding:"12px 24px",
  borderRadius:"30px",
  border:"none",
  margin:"10px",
  cursor:"pointer"
}

const btnOutline = {
  background:"transparent",
  color:"#6B7D6D",
  padding:"12px 24px",
  borderRadius:"30px",
  border:"1px solid #6B7D6D",
  margin:"10px",
  cursor:"pointer"
}