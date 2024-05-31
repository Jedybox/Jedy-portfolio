import style from './Home.module.css';


export default function Home() {
  return (
    <div className='NestedPage'>
      <p className={style.message}>
        Hey! I'm Jhon Ericsson, a software developer. 
        Armed with a wide array of skills when it comes to software development and has almost 4 years of experience on programming.
        I have develop multiple projects using different technologies such as React, Node.js, Native Andriod.
        I am a fast learner and I am always eager to learn new technologies.
      </p>

      <div className={style.skills}>
        <h2  className={style.skillHeader}>Skills</h2>
        <p className={style.skillSub}>Skills, Library, and Others I learned, developed, and excelled throught my 4 years of experience as a developer</p>
        <div className={style.skillSet}>
          <div className={style.skillGroup}>
          <h3 className={style.SkillGroupHeader}>Programming langues</h3>
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
            <h3 className={style.SkillGroupHeader}>Frontend</h3>
            <ul>
              <li>React</li>
              <li>Andriod Studio</li>
              <li>PyQt</li>
              <li>.Net MAUI</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div  className={style.skillGroup}>
            <h3 className={style.SkillGroupHeader}>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className={style.skillGroup}>
            <h3 className={style.SkillGroupHeader}>Others</h3>
            <ul>
              <li>Git</li>
              <li>Pandas</li>
              <li>Matplotlib</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
