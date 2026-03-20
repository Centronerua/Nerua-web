export default function Home() {
  return (
    <main>

      <section style={{textAlign:"center", padding:"100px 20px"}}>
        <h1>Centro <span style={{color:"#C6A96B"}}>NERÚA</span></h1>
        <h3>Espacio de bienestar integral</h3>

        <p style={{maxWidth:"700px", margin:"auto"}}>
          Hay síntomas y molestias que pueden parecer distintos, pero muchas veces comparten un mismo fondo:
          bruxismo, migrañas, tinnitus, vértigos o malestar digestivo.
        </p>

        <div style={{marginTop:"30px"}}>
          <button style={{background:"#6B7D6D", color:"white", padding:"10px 20px", borderRadius:"30px", margin:"10px"}}>
            Reservar sesión
          </button>

          <button style={{background:"#6B7D6D", color:"white", padding:"10px 20px", borderRadius:"30px", margin:"10px"}}>
            Conocer cómo trabajamos
          </button>
        </div>
      </section>

    </main>
  );
}