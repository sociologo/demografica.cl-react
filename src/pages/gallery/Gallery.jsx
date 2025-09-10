import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {
   // const galleryLength = 15;
   const images = []

   for(let i = 1; i <= 1; i++) {
      images.push(require(`../../images/galeria${i}.png`))
   }

/*    for(let i = 1; i <= galleryLength; i++) {
      images.push(require(`../../images/gallery${i}.jpg`))
   } */


  return (
      <>
         <Header title="Hallazgos importantes" image={HeaderImage}>
           <h1>Visualización de resultados</h1>
  <p>
    En esta sección presento una selección de los gráficos más relevantes que han surgido de mi investigación sobre la desigualdad social en Chile.  
    Utilizando herramientas estadísticas y visuales desarrolladas en <strong>R</strong>, he analizado datos provenientes de encuestas como <em>CASEN</em>, con el objetivo de representar de forma clara y rigurosa fenómenos como la distribución del ingreso, el índice de Gini, y las brechas regionales.
  </p>
  <p>
    Cada gráfico está acompañado de una breve interpretación que busca conectar la evidencia empírica con el debate sociológico contemporáneo.  
    Esta visualización no solo busca informar, sino también invitar a reflexionar sobre las estructuras que sostienen la desigualdad en nuestro país.
  </p>
      </Header>
         <section className="gallery">
         <div className="container gallery__container">
            {
               images.map((image, index) => {
               return <article key={index}>
                  <img src={image} alt={``} />
                  {/* <img src={image} alt={`Gallery Image ${index + 1}`} /> */}
               </article>
               })
            }
         </div>
         </section>
      </>
  )
}

export default Gallery
