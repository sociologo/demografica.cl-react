
import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'

import { MdEmail } from "react-icons/md";

const MainHeader = () => {
   return (
      <header className="main__header">
         <div className="container main__header-container">
            <div className="main__header-left">

               <h4>Escríbenos</h4>
               <a href="mailto:info@demografica.cl" target="_blank" rel="noreferrer noopener" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
               <MdEmail size={28} />
               <span>info@demografica.cl</span>
               </a> 


               <h1>PRUEBA datos sociales en decisiones inteligentes</h1>
               <p>
               En SocioLab, diseñamos soluciones de análisis predictivo y 
               automatización estadística para los desafíos más complejos en sociología, demografía y epidemiología.
               </p>

               {/* Este era la linea original del programa:} */}
               {/* <Link to="/plans" className='btn lg'>Comencemos...</Link> */}
               <Link to="https://rpubs.com/ccastro/casen2022" className='btn lg'>Comencemos...</Link>
            
            
            
            </div>
            <div className="main__header-right">
               <div className="main__header-circle"></div>
               <div className="main__header-image">
                  
                  {/* Este era la linea original del programa:} */}
                  {/* <img src={Image} alt="Main Header Image" /> */}
                  {/* por alguna razon debi reemplazar" Image" por Imagen */}

                  <img src={Image} alt="Main Header Imagen" />
               </div>
            </div>

         </div>
      </header>
   )
}

export default MainHeader
