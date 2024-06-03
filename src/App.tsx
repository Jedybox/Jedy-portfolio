import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const deviceHeight = window.innerHeight

  const body = document.querySelector('body');
  if (body) {
    body.style.height = `${deviceHeight}px`;
  }
  

  return (
    <>
      <svg width="580" height="309" viewBox="0 0 580 309" fill="none" xmlns="http://www.w3.org/2000/svg" className='cornerEffect'>
        <rect width="583" height="309" fill="url(#paint0_linear_54_3)"/>
        <defs>
        <linearGradient id="paint0_linear_54_3" x1="583" y1="3.49009e-05" x2="427.731" y2="155.364" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E84A4A" stop-opacity="0.33"/>
        <stop offset="1" stop-color="#E84A4A" stop-opacity="0"/>
        </linearGradient>
      </defs>
      </svg>

      <div className='splash'>

        <h1 className="Hi">HI!</h1>

        <div className="splashBox">

          <h3 className='splashHeader'>Welcome to by personal website.</h3>
          <p className='splashMessage'>
            I have created this Portfolio website to feel like a game/sci-fi interface. All text inside tries to reflect this.
          </p>
          <p className='splashMessage'>
            You will find ‘achievements’ or ‘quests’ that show the progress in my professional life and are related to what I am working on.
          </p>

          <Link to={'/home'}><button className='EnterBtn'>enter the system</button></Link>

        </div>

      </div>
    </>
  )
}

export default App
