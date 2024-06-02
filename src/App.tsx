import './App.css'

function App() {

  const deviceHeight = window.innerHeight

  const body = document.querySelector('body');
  if (body) {
    body.style.height = `${deviceHeight}px`;
  }
  
  const reverseFlickerAnimation = ():void => {
    const splash = document.querySelector('.HI');
    if (splash) {
      splash.classList.add('reverseFlicker');
    }
  }

  return (
    <>
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

          <button className='EnterBtn' onClick={reverseFlickerAnimation}>enter the system</button>

        </div>

      </div>
    </>
  )
}

export default App
