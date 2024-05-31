import {NavLink, Outlet} from 'react-router-dom';

import './App.css'
// Profile Picture
import profile from './assets/IMG_4704.jpg';

function App() {

  const windowWidth:number = window.innerWidth;
  const mainElement = document.querySelector('main');
  if (mainElement) {
    mainElement.style.width = `${windowWidth - 500}px`;
  }

  const NestedPages: string[] = [
    '', // Default Page
    'Projects',
    'Background',
    'Contact'
  ]

  return (
    <>
    <aside>
      <div className='pfp-con'>
        <img src={profile} alt='profile' className='pfp'/>
      </div>
      <h1 className='name'>Jhon Ericsson D. Ytac</h1>
      <h2 className='title'>Front-end Developer</h2>
      <nav>
        <ul className='navlist'>
          {NestedPages.map((page, index) => {
            if (page === '') return (
              <li>
                <NavLink key={index} to='/'
                className={({isActive}) => {
                  return isActive ? 'active' : ''
                }}>
                  Home
                </NavLink>
              </li>
            )

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
      <footer></footer>
    </aside>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default App
