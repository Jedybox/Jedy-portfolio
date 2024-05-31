import style from './Home.module.css';


export default function Home() {
  return (
    <div className='NestedPage'>
      <h1>About me</h1>
      <p className={style.message}>
        Hey! I'm Jhon Ericsson, a software developer. 
        Armed with a wide array of skills when it comes to software development and has 3+ years of experience on programming.
        I have develop multiple projects using different technologies such as React, Node.js, Native Andriod, and MAUI and many more.
        I am a fast learner and I am always eager to learn new technologies.
      </p>

      <h2>Skills</h2>
      <div className={style.skillSet}>
        <div  className={style.skillGroup}>
          <h3>Programming langues</h3>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>C#</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>
        <div  className={style.skillGroup}>
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>Andriod Studio</li>
            <li>PyQt</li>
            <li>MAUI</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div  className={style.skillGroup}>
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className={style.skillGroup}>
          <h3>Others</h3>
          <ul>
            <li>Git</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
