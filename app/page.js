export default function Home() {
  return (
    <main style={{fontFamily: "Montserrat, sans-serif", background:"#F5F1EB", color:"#3A3A3A"}}>

      {/* HERO */}
      <section style={{
        textAlign:"center",
        padding:"140px 20px",
        maxWidth:"900px",
        margin:"auto",
        backgroundImage:"url('https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200')",
        backgroundSize:"cover",
        backgroundPosition:"center",
        borderRadius:"20px"
      }}>

        <div style={{background:"rgba(245,241,235,0.9)", padding:"40px", borderRadius:"20px"}}>

          <h1 style={{fontSize:"44px", fontWeight:"500"}}>
            Centro <span style={{color:"#C6A96B"}}>NERÚA</span>
          </h1>

          <p style={{color:"#6B7D6D", marginTop:"10px"}}>
            Espacio de bienestar integral
          </p>

          <p style={{marginTop:"30px", lineHeight:"1.7"}}>
            Bruxismo, migrañas, tinnitus, vértigos, digestiones difíciles o estrés persistente.
            <br /><br />
            A veces los síntomas parecen distintos, pero tienen un mismo origen.
            <br /><br />
            En NERÚA trabajamos desde una visión integradora para ayudarte a comprender qué está ocurriendo y recuperar tu equilibrio.
          </p>

          <div style={{marginTop:"40px"}}>
            <button style={btn}>Reservar sesión</button>
            <button style={btnOutline}>Nuestro enfoque</button>
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section style={section}>
        <h2 style={{textAlign:"center", marginBottom:"40px"}}>
          ¿En qué podemos ayudarte?
        </h2>

        <ServiceCard title="Estrés o malestar emocional" text="Situaciones que generan ansiedad, bloqueo o sensación de desbordamiento." />
        <ServiceCard title="Tensión corporal y bruxismo" text="Tensión acumulada en mandíbula, cuello o cuerpo asociada al estrés." />
        <ServiceCard title="Tinnitus y vértigos" text="Molestias relacionadas con el equilibrio o la percepción de ruido." />
        <ServiceCard title="Malestar digestivo" text="Inflamación abdominal, digestiones difíciles o alteraciones persistentes." />
      </section>

      {/* COMO TRABAJAMOS */}
      <section style={section}>
        <h2>Cómo trabajamos</h2>

        <p style={text}>
          En NERÚA entendemos el bienestar como un proceso que requiere escuchar, comprender y abordar cada situación de forma individual.
        </p>

        <p style={text}>
          Muchas veces los síntomas aparecen en lugares distintos, pero forman parte de procesos que necesitan ser comprendidos en conjunto.
        </p>

        <p style={text}>
          Trabajamos desde una visión integradora, teniendo en cuenta la historia de cada persona, para ayudarte a recuperar equilibrio de forma progresiva y sostenible.
        </p>
      </section>

      {/* TIPOS DE CONSULTA */}
      <section style={section}>
        <h2>Tipos de consulta</h2>

        <Consulta title="Nutrición digestiva integrativa" text="Inflamación abdominal, SIBO o digestiones difíciles." precio="Primera consulta: 49€ · Seguimiento: 55€" />
        <Consulta title="Acompañamiento psicológico" text="Ansiedad, bloqueo o malestar emocional." precio="Primera sesión: 49€ · Sesiones posteriores: 60€" />
        <Consulta title="Regulación y bienestar" text="Bruxismo, vértigos, tinnitus o tensión persistente." precio="Primera sesión: 49€ · Sesiones posteriores: 60€" />

        <p style={{marginTop:"20px", fontStyle:"italic"}}>
          También puedes consultar nuestros bonos de sesiones.
        </p>
      </section>

      {/* TESTIMONIOS */}
      <section style={section}>
        <h2 style={{textAlign:"center"}}>Testimonios</h2>

        <Testimonial name="Begoña" text="Después de las primeras sesiones mejoró mucho el bruxismo y empecé a descansar mejor." />
        <Testimonial name="Bárbara" text="Tras tratar SIBO de metano y candidiasis, las pruebas ya no mostraban alteraciones." />
        <Testimonial name="Marta" text="Me ayudó a comprender lo que me pasaba y a regularme." />
      </section>

      {/* QUIENES SOMOS */}
      <section style={section}>
        <h2>Quiénes somos</h2>

        <p style={{maxWidth:"700px"}}>
          En NERÚA trabajamos desde una visión integradora del bienestar, donde cuerpo y sistema nervioso están conectados.
        </p>

        <p style={text}>
          <strong><em>José Manuel Gil Rueda</em></strong><br />
          Psicólogo, CAFD y osteópata. Especializado en regulación del sistema nervioso.
        </p>

        <p style={text}>
          <strong><em>María José Martínez Granados</em></strong><br />
          Especializada en nutrición digestiva integrativa y microbiota.
        </p>
      </section>

      {/* RESERVA */}
      <section style={{textAlign:"center", padding:"100px 20px"}}>
        <h2>Empieza tu proceso</h2>

        <p style={{maxWidth:"600px", margin:"auto"}}>
          Puedes elegir el tipo de consulta o escribirnos para orientarte.
        </p>

        <div style={{marginTop:"30px"}}>
          <button style={btn}>Nutrición digestiva</button>
          <button style={btn}>Psicología</button>
          <button style={btn}>Regulación</button>
        </div>
      </section>

      {/* CURSOS */}
      <section style={section}>
        <h2>Cursos y recursos</h2>
        <p style={text}>
          Próximamente contenidos sobre salud digestiva, estrés y bienestar.
        </p>
      </section>

      {/* CONTACTO */}
      <section style={section}>
        <h2>Contacto</h2>
        <p>📍 AFA Málaga · Camino de los Almendrales 35</p>
        <p>📧 info@centronerua.com</p>

        <a href="https://wa.me/34637541937" target="_blank" style={{textDecoration:"none"}}>
          <button style={btn}>Hablar por WhatsApp</button>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{textAlign:"center", padding:"40px", color:"#777"}}>
        <p>Centro NERÚA · Málaga</p>
        <p>© Centro NERÚA</p>
      </footer>

      {/* BOTÓN FLOTANTE */}
      <a 
        href="https://wa.me/34637541937"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "white",
          borderRadius: "50px",
          padding: "15px 20px",
          textDecoration: "none"
        }}
      >
        Escríbenos
      </a>

    </main>
  );
}

/* COMPONENTES */
function ServiceCard({title, text}) {
  return <div style={card}><h3>{title}</h3><p>{text}</p></div>
}

function Consulta({title, text, precio}) {
  return <div style={card}><h3>{title}</h3><p>{text}</p><p style={{fontWeight:"500"}}>{precio}</p></div>
}

function Testimonial({name, text}) {
  return <div style={card}><p style={{fontStyle:"italic"}}>"{text}"</p><strong>{name}</strong></div>
}

/* ESTILOS */
const section = {maxWidth:"900px", margin:"auto", padding:"80px 20px"}
const text = {lineHeight:"1.6", marginBottom:"20px"}
const card = {background:"white", padding:"25px", marginBottom:"25px", borderRadius:"12px", boxShadow:"0 5px 15px rgba(0,0,0,0.05)"}
const btn = {background:"#6B7D6D", color:"white", padding:"12px 24px", borderRadius:"30px", border:"none", margin:"10px"}
const btnOutline = {background:"transparent", color:"#6B7D6D", padding:"12px 24px", borderRadius:"30px", border:"1px solid #6B7D6D", margin:"10px"}
