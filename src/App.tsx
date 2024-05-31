import {NavLink, Outlet} from 'react-router-dom';

import './App.css'
// Profile Picture
import profile from './assets/IMG_4704.jpg'

// Social Media Icons
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import github from './assets/github.png'

function App() {

  const deviceWidth:number = window.innerWidth;

  const mainstyle = {
    width: deviceWidth - 450
  }

  const NestedPages: string[] = [
    '', // Default Page
    'Projects',
    'Background',
    'Hire Me'
  ]

  return (
    <>
    <aside>
      <div className='pfp-con'>
        <img src={profile} alt='profile' className='pfp'/>
      </div>
      <h1 className='name'>Jhon Ericsson D. Ytac</h1>
      <h2 className='title'>Front-end Developer</h2>
      <ul className='socMeds'>
        <li><a href="https://www.facebook.com/jhonericssonytac123/"><img src={facebook} alt="Facebook" className='socIcon'/> Jhon Ericsson</a></li>
        <li><a href="https://www.instagram.com/jedy_onbox/"><img src={instagram} alt="Instagram" className='socIcon'/> jedy_onbox</a></li>
        <li><a href="https://github.com/Jedybox"><img src={github} alt="github" className='socIcon'/>Jedybox</a></li>
        <li>jhonericssonytac365@gmail.com</li>
        <li>(+63) 948 427 4626</li>
      </ul>
      <footer></footer>
    </aside>
    <main style={mainstyle}>
    <nav>
        <ul className='navlist'>
          {NestedPages.map((page, index) => {
            if (page === '') {
              return (
                <li>
                  <NavLink key={index} to='/'
                  className={({isActive}) => {
                    return isActive ? 'active' : ''
                  }}>
                    Home
                  </NavLink>
                </li>
              )
            } else if (page === 'Hire Me') {
              return (
                <li>
                  <NavLink key={index} to='/hire-me'
                  className={({isActive}) => {
                    return isActive ? 'active' : ''
                  }}>
                    {page}
                  </NavLink>
                </li>
              )
            }

            return (
              <li>
                <NavLink key={index} to={`/${page.toLowerCase()}`}
                className={({isActive}) => {
                  return isActive ? 'active' : ''
                }}>
                  {page}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <Outlet />
    </main>
    </>
  )
}

export default App
