import { useState } from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
// import StoryImage from '../../images/about1.jpg'
/* import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg' */

import Sociologo from '../../images/titulo_sociologo.jpg'
import Rank_prog from '../../images/rank_prog.jpg'

import './about.css'

const About = () => {


  const [isEnlarged, setIsEnlarged] = useState(false)



  return (
      <>
      <Header title="Christian Castro" image={HeaderImage}>
      Soy sociólogo de la Universidad de Chile y Analista programador de Inacap.
      </Header>

   <section className="about__story">
        <div className="container about__story-container">
          <div 
            className={`about__section-image ${isEnlarged ? 'enlarged' : ''}`}
            onClick={() => setIsEnlarged(!isEnlarged)}
          >
            <img src={Sociologo} alt="mi título" />
          </div>
          <div className="about__section-content">
            <h1>Soy sociólogo</h1>
            <p>Estudié en la Universidad de Chile.</p>
          </div>
        </div>
      </section>



   {/* <section className="about__story">
      <div className="container about__story-container">
         <div className="about__section-image">
            {/* <img src={StoryImage} alt="Our Story Image" /> */}
               {/* <img src={Sociologo} alt="mi título" /> */}
      {/*   </div>
         <div className="about__section-content">
            <h1>Soy sociólogo</h1>
            <p>
            Estudié en la Universidad de Chile.
            </p>
         </div>
      </div>
   </section> */}

      <section className="about__Vision">
         <div className="container about__Vision-container">
         <div className="about__section-content">
            <h1>Soy analista programador</h1>
            <p>
            Éste título técnico lo obtuve en la sede Santiago centro de Inacap
            </p>
         </div>
         <div className="about__section-image">
            <img src={Rank_prog} alt="" />
            {/* <img src={VisionImage} alt="Our Vision Image" /> */}
         </div>
         </div>
      </section>

      <section className="about__mission">
         <div className="container about__mission-container">
         <div className="about__section-image">
            <img src={Sociologo} alt="" />
            {/*   <img src={MissionImage} alt="Our Mission Image" /> */}
         </div>
         <div className="about__section-content">
            <h1>Tengo un diplomado en Big Data y Machine Learning</h1>
            <p>
            Este postítulo lo obtuve en la Pontificia Universidad Católica de Chile.
            </p>
         </div>
         </div>
      </section>
      </>
   )
}

export default About