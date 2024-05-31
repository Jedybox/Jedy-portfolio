import {NavLink} from 'react-router-dom';
import './App.css'
// Profile Picture
import profile from './assets/IMG_4704.jpg';

function App() {

  const NestedPages: string[] = [
    'Home',
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
      <nav>
        <ul className='navlist'>
          {NestedPages.map((page, index) => {
            return (
              <li key={index}>
                <NavLink to={`/${page.toLowerCase()}`}>
                  {page}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <footer></footer>
    </aside>
    <main></main>
    </>
  )
}

export default App
