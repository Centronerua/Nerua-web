export default function Home() {
  return (
    <main style={{fontFamily:"Montserrat, sans-serif", background:"#F5F1EB", color:"#3A3A3A"}}>

      {/* HEADER */}
      <header style={{
        position:"sticky",
        top:0,
        background:"#F5F1EB",
        padding:"20px",
        borderBottom:"1px solid #eee",
        zIndex:10
      }}>
        <nav style={{
          display:"flex",
          justifyContent:"space-between",
          maxWidth:"1000px",
          margin:"auto"
        }}>
          <strong>NERÚA</strong>

          <div style={{display:"flex", gap:"20px"}}>
            <a href="#quehacemos">Qué hacemos</a>
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Cómo trabajamos</a>
            <a href="#equipo">Equipo</a>
            <a href="#contacto">Contacto</a>
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
          Puede que lleves tiempo intentando entender qué te pasa.
          <br /><br />
          En NERÚA trabajamos desde una visión integradora del cuerpo y el sistema nervioso para ayudarte a recuperar tu equilibrio.
        </p>
      </section>

      {/* IMAGEN CALMA */}
      <section style={{padding:"0 20px"}}>
        <img 
          src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200"
          style={{width:"100%", borderRadius:"20px", maxHeight:"350px", objectFit:"cover"}}
        />
      </section>

      {/* QUE HACEMOS */}
      <section id="quehacemos" style={section}>
        <h2>Qué hacemos</h2>

        <p style={text}>
          En NERÚA abordamos los problemas de salud desde una perspectiva integradora, teniendo en cuenta el sistema nervioso, el cuerpo y la historia de cada persona.
        </p>

        <p style={text}>
          Muchos síntomas no aparecen de forma aislada, sino que forman parte de procesos más amplios que el cuerpo ha ido desarrollando con el tiempo.
        </p>

        <p style={text}>
          Nuestro trabajo consiste en entender qué está sosteniendo ese proceso y acompañar a la persona en un cambio real.
        </p>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" style={section}>
        <h2>Servicios</h2>

        <Card title="Estrés y malestar emocional" text="Ansiedad, bloqueo o sensación de desbordamiento." />
        <Card title="Tensión corporal y bruxismo" text="Sobrecarga física relacionada con el sistema nervioso." />
        <Card title="Tinnitus y vértigos" text="Alteraciones del equilibrio o ruido persistente." />
        <Card title="Malestar digestivo" text="SIBO, inflamación abdominal o digestiones difíciles." />
      </section>

      {/* PROCESO */}
      <section id="proceso" style={section}>
        <h2>Cómo trabajamos</h2>

        <p style={text}>
          Analizamos cada caso de forma individual para entender cómo está funcionando el sistema nervioso y qué factores están influyendo.
        </p>

        <p style={text}>
          Combinamos trabajo corporal, regulación del sistema nervioso y acompañamiento emocional.
        </p>

        <p style={text}>
          El objetivo es un cambio profundo y sostenido, no solo aliviar síntomas.
        </p>
      </section>

      {/* IMAGEN CONSULTA */}
      <section style={{padding:"0 20px"}}>
        <img 
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200"
          style={{width:"100%", borderRadius:"20px", maxHeight:"350px", objectFit:"cover"}}
        />
      </section>

      {/* TESTIMONIOS */}
      <section style={section}>
        <h2>Testimonios</h2>

        <Card text="Mejoré mucho el bruxismo y el descanso." />
        <Card text="Entendí lo que me pasaba y me regulé." />
        <Card text="El digestivo mejoró tras años de problema." />
        <Card text="Proceso profundo y cambio real." />
      </section>

      {/* EQUIPO */}
      <section id="equipo" style={section}>
        <h2>Quiénes somos</h2>

        <p style={text}>
          <strong><em>José Manuel Gil Rueda</em></strong><br />
          Especializado en sistema nervioso y regulación.
        </p>

        <p style={text}>
          <strong><em>María José Martínez Granados</em></strong><br />
          Especializada en nutrición digestiva integrativa.
        </p>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={section}>
        <h2>Contacto</h2>

        <p>📍 Málaga</p>
        <p>📧 info@centronerua.com</p>

        <a href="https://wa.me/34637541937">
          <button style={btn}>WhatsApp</button>
        </a>
      </section>

    </main>
  );
}

function Card({title, text}) {
  return <div style={card}><h3>{title}</h3><p>{text}</p></div>
}

const section = {maxWidth:"900px", margin:"auto", padding:"80px 20px"}
const text = {marginBottom:"20px"}
const card = {background:"white", padding:"25px", marginBottom:"20px", borderRadius:"12px"}
const btn = {background:"#6B7D6D", color:"white", padding:"10px 20px", borderRadius:"20px"}
