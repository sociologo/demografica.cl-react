
import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
   return (
      <header className="main__header">
         <div className="container main__header-container">
            <div className="main__header-left">
               <h4>info@demografica.cl</h4>
               <h1>PRUEBA datos sociales en decisiones inteligentes</h1>
               <p>
               En SocioLab, diseñamos soluciones de análisis predictivo y 
               automatización estadística para los desafíos más complejos en sociología, demografía y epidemiología.
               </p>
               {/* <Link to="/plans" className='btn lg'>Comencemos...</Link> */}
               <Link to="https://rpubs.com/ccastro/casen2022" className='btn lg'>Comencemos...</Link>
            </div>
            <div className="main__header-right">
               <div className="main__header-circle"></div>
               <div className="main__header-image">
                  <img src={Image} alt="Main Header Image" />
               </div>
            </div>
         </div>
      </header>
   )
}

export default MainHeader
