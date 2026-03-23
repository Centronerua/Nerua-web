export default function Home() {
  return (
    <main style={{fontFamily: "Montserrat, sans-serif", background:"#F5F1EB", color:"#3A3A3A"}}>

      {/* HERO */}
      <section style={{textAlign:"center", padding:"130px 20px", maxWidth:"850px", margin:"auto"}}>
        <h1 style={{fontSize:"44px", fontWeight:"500"}}>
          Centro <span style={{color:"#C6A96B"}}>NERÚA</span>
        </h1>

        <p style={{color:"#6B7D6D", marginTop:"10px"}}>
          Espacio de bienestar integral
        </p>

        <p style={{marginTop:"30px", lineHeight:"1.7"}}>
          Bruxismo, migrañas, tinnitus, vértigos, digestiones difíciles o una sensación constante de estar en alerta.
          <br /><br />
          Puede que lleves tiempo intentando entender qué te pasa y que cada síntoma parezca distinto.
          <br /><br />
          Pero muchas veces no lo son.
          <br /><br />
          En NERÚA trabajamos desde una visión integradora del cuerpo y el sistema nervioso para ayudarte a comprender qué está ocurriendo y recuperar tu equilibrio.
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
          Cuando el cuerpo lleva tiempo adaptándose, puede empezar a expresar el malestar de diferentes formas: tensión, dolor, digestivo, ansiedad o sensaciones difíciles de explicar.
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

        <ServiceCard title="Estrés o malestar emocional" text="Ansiedad, bloqueo o sensación de desbordamiento que afectan al día a día." />
        <ServiceCard title="Tensión corporal y bruxismo" text="Tensión acumulada en mandíbula, cuello o cuerpo asociada al sistema nervioso." />
        <ServiceCard title="Tinnitus y vértigos" text="Alteraciones del equilibrio o percepción constante de ruido." />
        <ServiceCard title="Malestar digestivo" text="Inflamación abdominal, SIBO o digestiones difíciles que no terminan de resolverse." />
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

      {/* QUE HACEMOS EXACTAMENTE */}
      <section style={section}>
        <h2>Qué hacemos exactamente</h2>

        <p style={text}>
          En consulta no seguimos un protocolo estándar ni trabajamos desde una única disciplina.
        </p>

        <p style={text}>
          Analizamos cada caso de forma individual para entender qué está sosteniendo el problema: cómo está funcionando el sistema nervioso, qué patrones se han instaurado en el cuerpo y qué factores pueden estar influyendo.
        </p>

        <p style={text}>
          A partir de ahí, combinamos diferentes herramientas según cada persona: trabajo sobre el sistema nervioso, abordaje corporal, acompañamiento emocional y, cuando es necesario, intervención digestiva.
        </p>

        <p style={text}>
          No se trata de aplicar una técnica concreta, sino de construir un proceso adaptado.
        </p>
      </section>

      {/* TIPOS DE CONSULTA */}
      <section style={section}>
        <h2>Tipos de consulta</h2>

        <Consulta title="Nutrición digestiva integrativa" text="SIBO, inflamación abdominal y alteraciones digestivas." precio="Primera consulta: 49€ · Seguimiento: 55€" />
        <Consulta title="Acompañamiento psicológico" text="Ansiedad, regulación emocional y procesos vitales." precio="Primera sesión: 49€ · Sesiones posteriores: 60€" />
        <Consulta title="Regulación y bienestar" text="Bruxismo, vértigos, tinnitus o tensión persistente." precio="Primera sesión: 49€ · Sesiones posteriores: 60€" />
      </section>

      {/* TESTIMONIOS */}
      <section style={section}>
        <h2 style={{textAlign:"center"}}>Testimonios</h2>

        <Testimonial name="Begoña" text="Llegué con bruxismo muy marcado, tensión constante y dificultad para dormir. Después de pocas sesiones la mejoría fue muy evidente y empecé a descansar mejor." />
        <Testimonial name="Marta" text="Me sentía desbordada y sin entender lo que me pasaba. El proceso me ayudó a comprenderlo y a regularme de forma mucho más estable." />
        <Testimonial name="Bárbara" text="Tras años con problemas digestivos, me diagnosticaron SIBO de metano y candidiasis. Después del tratamiento, las pruebas dejaron de mostrar esas alteraciones." />
        <Testimonial name="Wilma" text="Durante años conviví con inflamación abdominal y malestar constante. En consulta pude entender el origen y mejorar progresivamente." />
      </section>

      {/* QUIENES SOMOS */}
      <section style={section}>
        <h2>Quiénes somos</h2>

        <p style={{maxWidth:"700px"}}>
          NERÚA nace de la necesidad de abordar la salud desde una mirada más amplia, donde sistema nervioso, cuerpo y experiencia están conectados.
        </p>

        <div style={{marginTop:"40px"}}>
          <p style={text}>
            <strong><em>José Manuel Gil Rueda</em></strong><br />
            Psicólogo, CAFD y osteópata. Especializado en regulación del sistema nervioso.
          </p>

          <p style={text}>
            <strong><em>María José Martínez Granados</em></strong><br />
            Especializada en nutrición digestiva integrativa y microbiota.
          </p>
        </div>
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

      {/* BOTON */}
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
