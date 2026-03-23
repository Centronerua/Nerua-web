export default function Home() {
  return (
    <main style={{fontFamily: "Montserrat, sans-serif", background:"#F5F1EB", color:"#3A3A3A"}}>

      {/* HERO */}
      <section style={{textAlign:"center", padding:"120px 20px", maxWidth:"850px", margin:"auto"}}>
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
          En NERÚA abordamos estos procesos desde una visión integradora, teniendo en cuenta el sistema nervioso, el cuerpo y la historia de cada persona.
        </p>

        <div style={{marginTop:"40px"}}>
          <button style={btn}>Reservar sesión</button>
          <button style={btnOutline}>Nuestro enfoque</button>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={section}>
        <h2 style={{textAlign:"center", marginBottom:"40px"}}>
          ¿En qué podemos ayudarte?
        </h2>

        <ServiceCard title="Estrés o malestar emocional" text="Ansiedad, bloqueo o sensación de desbordamiento que afectan al día a día." />
        <ServiceCard title="Tensión corporal y bruxismo" text="Sobrecarga en mandíbula, cuello o cuerpo relacionada con el sistema nervioso." />
        <ServiceCard title="Tinnitus y vértigos" text="Alteraciones del equilibrio o percepción de ruido persistente." />
        <ServiceCard title="Malestar digestivo" text="Inflamación abdominal, SIBO, digestiones difíciles o alteraciones persistentes." />
      </section>

      {/* EN QUE CONSISTE */}
      <section style={section}>
        <h2>En qué consiste el abordaje</h2>

        <p style={text}>
          En NERÚA no tratamos síntomas aislados, sino procesos.
        </p>

        <p style={text}>
          Muchos de los problemas que aparecen en el cuerpo tienen relación con cómo está funcionando el sistema nervioso, el nivel de estrés mantenido y la forma en que el organismo ha ido adaptándose.
        </p>

        <p style={text}>
          Por eso trabajamos combinando diferentes enfoques: regulación del sistema nervioso, abordaje físico y acompañamiento en los factores que están sosteniendo el problema.
        </p>

        <p style={text}>
          El objetivo no es solo aliviar síntomas, sino entender el origen y favorecer un cambio real y progresivo.
        </p>
      </section>

      {/* TIPOS DE CONSULTA */}
      <section style={section}>
        <h2>Tipos de consulta</h2>

        <Consulta title="Nutrición digestiva integrativa" text="Abordaje de SIBO, inflamación abdominal y alteraciones digestivas desde una visión global." precio="Primera consulta: 49€ · Seguimiento: 55€" />
        <Consulta title="Acompañamiento psicológico" text="Trabajo sobre ansiedad, regulación emocional y procesos vitales complejos." precio="Primera sesión: 49€ · Sesiones posteriores: 60€" />
        <Consulta title="Regulación y bienestar" text="Intervención en bruxismo, vértigos, tinnitus o tensión persistente." precio="Primera sesión: 49€ · Sesiones posteriores: 60€" />

      </section>

      {/* TESTIMONIOS */}
      <section style={section}>
        <h2 style={{textAlign:"center"}}>Testimonios</h2>

        <Testimonial 
          name="Begoña"
          text="Llegué con bruxismo muy marcado, tensión constante y dificultad para dormir. Después de pocas sesiones la mejoría fue muy evidente y empecé a descansar mejor."
        />

        <Testimonial 
          name="Bárbara"
          text="Tras años con problemas digestivos, me diagnosticaron SIBO de metano y candidiasis. Después del tratamiento, las pruebas dejaron de mostrar esas alteraciones y los síntomas mejoraron de forma clara."
        />

        <Testimonial 
          name="Wilma"
          text="Durante años conviví con inflamación abdominal y malestar constante. En consulta pude entender el origen del problema y empezar a mejorar de forma progresiva."
        />

      </section>

      {/* QUIENES SOMOS */}
      <section style={section}>
        <h2>Quiénes somos</h2>

        <p style={{maxWidth:"700px"}}>
          En NERÚA trabajamos desde una visión integradora del bienestar, donde sistema nervioso, cuerpo y experiencia están conectados.
        </p>

        <p style={text}>
          <strong><em>José Manuel Gil Rueda</em></strong><br />
          Psicólogo, CAFD y osteópata. Especializado en regulación del sistema nervioso y abordaje global de los síntomas persistentes.
        </p>

        <p style={text}>
          <strong><em>María José Martínez Granados</em></strong><br />
          Especializada en nutrición digestiva integrativa y microbiota, con un enfoque cercano y personalizado.
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

      {/* CONTACTO */}
      <section style={section}>
        <h2>Contacto</h2>

        <p>📍 AFA Málaga · Camino de los Almendrales 35</p>
        <p>📧 info@centronerua.com</p>

        <a href="https://wa.me/34637541937" target="_blank" style={{textDecoration:"none"}}>
          <button style={btn}>Hablar por WhatsApp</button>
        </a>
      </section>

      {/* BOTÓN */}
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
          padding: "15px 20px"
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
const card = {background:"white", padding:"25px", marginBottom:"25px", borderRadius:"12px"}
const btn = {background:"#6B7D6D", color:"white", padding:"12px 24px", borderRadius:"30px", border:"none", margin:"10px"}
const btnOutline = {background:"transparent", color:"#6B7D6D", padding:"12px 24px", borderRadius:"30px", border:"1px solid #6B7D6D", margin:"10px"}
