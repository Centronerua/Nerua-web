export default function Home() {
  return (
    <main style={{fontFamily: "Montserrat, sans-serif", background:"#F5F1EB", color:"#3A3A3A"}}>

      {/* HERO */}
      <section style={{
        textAlign:"center",
        padding:"130px 20px",
        maxWidth:"850px",
        margin:"auto",
        background:"#EFE8DD",
        borderRadius:"20px"
      }}>
        <h1 style={{fontSize:"44px", fontWeight:"500"}}>
          Centro <span style={{color:"#C6A96B"}}>NERÚA</span>
        </h1>

        <p style={{color:"#6B7D6D", marginTop:"10px"}}>
          Espacio de bienestar integral
        </p>

        <p style={{marginTop:"30px", lineHeight:"1.7"}}>
          Bruxismo, migrañas, tinnitus, vértigos, digestiones difíciles o una sensación constante de estar en alerta.
          <br /><br />
          Puede que lleves tiempo intentando entender qué te pasa.
          <br /><br />
          Pero muchas veces los síntomas no están separados.
          <br /><br />
          En NERÚA trabajamos desde una visión integradora para ayudarte a comprender qué está ocurriendo y recuperar tu equilibrio.
        </p>

        <div style={{marginTop:"40px"}}>
          <button style={btn}>Reservar sesión</button>
          <button style={btnOutline}>Nuestro enfoque</button>
        </div>
      </section>

      {/* BLOQUE DIFERENCIAL */}
      <section style={section}>
        <p style={{fontSize:"20px"}}>
          Esto no va solo de síntomas.
        </p>

        <p style={text}>
          Cuando el cuerpo lleva tiempo adaptándose, puede empezar a expresar el malestar de diferentes formas.
        </p>

        <p style={text}>
          No tratamos cada parte por separado.
        </p>

        <p style={text}>
          Trabajamos entendiendo el conjunto.
        </p>
      </section>

      {/* SERVICIOS */}
      <section style={section}>
        <h2 style={{textAlign:"center", marginBottom:"40px"}}>
          ¿En qué podemos ayudarte?
        </h2>

        <ServiceCard title="Estrés o malestar emocional" text="Ansiedad, bloqueo o sensación de desbordamiento." />
        <ServiceCard title="Tensión corporal y bruxismo" text="Tensión en mandíbula, cuello o cuerpo asociada al sistema nervioso." />
        <ServiceCard title="Tinnitus y vértigos" text="Alteraciones del equilibrio o percepción de ruido." />
        <ServiceCard title="Malestar digestivo" text="Inflamación abdominal, SIBO o digestiones difíciles." />
      </section>

      {/* EN QUE CONSISTE */}
      <section style={section}>
        <h2>En qué consiste el abordaje</h2>

        <p style={text}>
          En NERÚA no tratamos síntomas aislados, sino procesos.
        </p>

        <p style={text}>
          Muchos de los problemas tienen relación con el sistema nervioso, el estrés mantenido y la adaptación del cuerpo.
        </p>

        <p style={text}>
          Combinamos diferentes enfoques para abordar el problema desde su origen.
        </p>
      </section>

      {/* IMAGEN */}
      <section style={{padding:"60px 20px"}}>
        <img 
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200"
          style={{
            width:"100%",
            borderRadius:"20px"
          }}
        />
      </section>

      {/* TIPOS DE CONSULTA */}
      <section style={section}>
        <h2>Tipos de consulta</h2>

        <Consulta title="Nutrición digestiva integrativa" text="SIBO y digestivo." precio="49€ / 55€" />
        <Consulta title="Acompañamiento psicológico" text="Ansiedad y regulación emocional." precio="49€ / 60€" />
        <Consulta title="Regulación y bienestar" text="Bruxismo, vértigos y tensión." precio="49€ / 60€" />
      </section>

      {/* TESTIMONIOS */}
      <section style={section}>
        <h2 style={{textAlign:"center"}}>Testimonios</h2>

        <Testimonial name="Begoña" text="Mejoró mucho el bruxismo y empecé a descansar mejor." />
        <Testimonial name="Marta" text="Entendí lo que me pasaba y empecé a regularme." />
        <Testimonial name="Bárbara" text="Tras tratar SIBO y candidiasis, las pruebas mejoraron." />
        <Testimonial name="Wilma" text="Pude entender el origen y mejorar progresivamente." />
      </section>

      {/* QUIENES SOMOS */}
      <section style={section}>
        <h2>Quiénes somos</h2>

        <p style={{maxWidth:"700px"}}>
          En NERÚA trabajamos desde una visión integradora del bienestar.
        </p>

        <p style={text}>
          <strong><em>José Manuel</em></strong><br />
          Especialista en sistema nervioso.
        </p>

        <p style={text}>
          <strong><em>María José</em></strong><br />
          Nutrición digestiva integrativa.
        </p>
      </section>

      {/* RESERVA */}
      <section style={{textAlign:"center", padding:"100px 20px"}}>
        <h2>Empieza tu proceso</h2>

        <div style={{marginTop:"20px"}}>
          <button style={btn}>Nutrición</button>
          <button style={btn}>Psicología</button>
          <button style={btn}>Regulación</button>
        </div>
      </section>

      {/* CONTACTO */}
      <section style={section}>
        <h2>Contacto</h2>

        <p>📍 Málaga</p>
        <p>📧 info@centronerua.com</p>

        <a href="https://wa.me/34637541937" target="_blank">
          <button style={btn}>WhatsApp</button>
        </a>
      </section>

      {/* BOTON */}
      <a 
        href="https://wa.me/34637541937"
        style={{
          position:"fixed",
          bottom:"20px",
          right:"20px",
          background:"#25D366",
          color:"white",
          padding:"15px",
          borderRadius:"50px"
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
  return <div style={card}><h3>{title}</h3><p>{text}</p><p>{precio}</p></div>
}

function Testimonial({name, text}) {
  return <div style={card}><p>"{text}"</p><strong>{name}</strong></div>
}

/* ESTILOS */
const section = {maxWidth:"900px", margin:"auto", padding:"80px 20px"}
const text = {marginBottom:"20px"}
const card = {background:"white", padding:"30px", marginBottom:"25px", borderRadius:"14px", boxShadow:"0 8px 25px rgba(0,0,0,0.05)"}
const btn = {background:"#6B7D6D", color:"white", padding:"12px 24px", borderRadius:"30px", margin:"10px"}
const btnOutline = {border:"1px solid #6B7D6D", padding:"12px 24px", borderRadius:"30px", margin:"10px"}
