import {Link} from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>En construcción</h2>
        <Link to="/" className='btn'>Regresa a Home</Link>
      </div>
    </section>
  )
}

export default NotFound