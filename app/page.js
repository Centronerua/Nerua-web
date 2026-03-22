export default function Home() {
  return (
    <main style={{fontFamily: "Montserrat, sans-serif", background:"#F5F1EB", color:"#3A3A3A"}}>

     {/* HERO */}
<section style={{
  textAlign:"center",
  padding:"120px 20px",
  maxWidth:"800px",
  margin:"auto"
}}>

  <h1 style={{
    fontSize:"44px",
    fontWeight:"500"
  }}>
    Centro <span style={{color:"#C6A96B"}}>NERÚA</span>
  </h1>

  <p style={{
    fontSize:"18px",
    marginTop:"10px",
    color:"#6B7D6D"
  }}>
    Espacio de bienestar integral
  </p>

  <p style={{
    marginTop:"30px",
    lineHeight:"1.7",
    fontSize:"16px"
  }}>
    Bruxismo, migrañas, tinnitus, vértigos, digestiones difíciles o estrés persistente.  
    <br /><br />
    A veces los síntomas parecen distintos, pero tienen un origen común.
    <br /><br />
    En NERÚA trabajamos desde una visión integradora para ayudarte a comprender qué está ocurriendo y recuperar equilibrio.
  </p>

  <div style={{marginTop:"40px"}}>
    <button style={btn}>Reservar sesión</button>
    <button style={btnOutline}>Cómo trabajamos</button>
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

  <h2 style={{textAlign:"center", marginBottom:"50px"}}>
    Quiénes somos
  </h2>

  <div style={{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",
    gap:"40px"
  }}>

    {/* JOSE */}
    <div style={cardStyle}>
      <h3 style={{marginBottom:"10px"}}>
        José Manuel Gil Rueda
      </h3>

      <p style={{fontStyle:"italic", marginBottom:"15px", color:"#6B7D6D"}}>
        Psicólogo · CAFD · Osteópata
      </p>

      <p style={text}>
        Especializado en enfoques integrativos centrados en la regulación del sistema nervioso y el bienestar global.
      </p>

      <p style={text}>
        Combina conocimiento técnico, experiencia clínica y una mirada cercana para comprender los procesos que hay detrás de los síntomas persistentes.
      </p>
    </div>

    {/* MARIA JOSE */}
    <div style={cardStyle}>
      <h3 style={{marginBottom:"10px"}}>
        María José Martínez Granados
      </h3>

      <p style={{fontStyle:"italic", marginBottom:"15px", color:"#6B7D6D"}}>
        Nutrición digestiva integrativa
      </p>

      <p style={text}>
        Especializada en salud digestiva, microbiota y abordaje integrativo de alteraciones digestivas.
      </p>

      <p style={text}>
        Acompaña a las personas desde una visión global, combinando rigor, cercanía y personalización en cada proceso.
      </p>
    </div>

  </div>

</section>

<Testimonial 
  name="Begoña"
  text="Llegué con bruxismo, mucha tensión en la mandíbula, dificultad para dormir y una sensación constante de estar en alerta. Después de las dos primeras sesiones noté una mejoría muy clara, especialmente en la tensión, y empecé a descansar mucho mejor."
/>

<Testimonial 
  name="Marta"
  text="Llevaba tiempo con ansiedad y sensación de desbordamiento sin entender qué me ocurría. El proceso me ayudó a comprender lo que estaba pasando y a empezar a regularme de una forma diferente."
/>

<Testimonial 
  name="Bárbara"
  text="Después de años con inflamación abdominal, digestiones pesadas y varios tratamientos sin resultado, me detectaron SIBO de metano y candidiasis. Tras el proceso de trabajo, repetí las pruebas y los resultados ya no mostraban esas alteraciones, además de notar una mejoría clara en los síntomas."
/>

<Testimonial 
  name="Wilma"
  text="Durante mucho tiempo conviví con digestiones difíciles, hinchazón y malestar constante. A través del proceso pude entender qué estaba ocurriendo y mejorar progresivamente, sintiéndome mucho más estable."
/>
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
const cardStyle = {
  background:"white",
  padding:"30px",
  borderRadius:"12px",
  boxShadow:"0 5px 15px rgba(0,0,0,0.05)"
}
function Testimonial({name, text}) {
  return (
    <div style={{
      background:"white",
      padding:"25px",
      borderRadius:"12px",
      boxShadow:"0 5px 15px rgba(0,0,0,0.05)"
    }}>
      <p style={{fontStyle:"italic", marginBottom:"15px"}}>
        “{text}”
      </p>
      <strong>{name}</strong>
    </div>
  )
}
