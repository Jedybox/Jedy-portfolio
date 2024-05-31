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
        <p className={style.skillSub}>Skills, Library, and Others I learned, developed, and excelled throught my 4 years of experience as a developer.</p>
        <div className={style.skillSet}>
          <div className={style.skillGroup}>
          <h3 className={style.SkillGroupHeader}>Programming langues</h3>
            <ul className={style.skillList}>
              <li className={style.skillItem}>Python</li>
              <li className={style.skillItem}>JavaScript</li>
              <li className={style.skillItem}>TypeScript</li>
              <li className={style.skillItem}>C#</li>
              <li className={style.skillItem}>Java</li>
              <li className={style.skillItem}>SQL</li>
            </ul>
          </div>
          <div  className={style.skillGroup}>
            <h3 className={style.SkillGroupHeader}>Frontend</h3>
            <ul className={style.skillList}>
              <li className={style.skillItem}>React</li>
              <li className={style.skillItem}>Andriod Studio</li>
              <li className={style.skillItem}>PyQt</li>
              <li className={style.skillItem}>.Net MAUI</li>
              <li className={style.skillItem}>HTML</li>
              <li className={style.skillItem}>CSS</li>
            </ul>
          </div>
          <div  className={style.skillGroup}>
            <h3 className={style.SkillGroupHeader}>Backend</h3>
            <ul className={style.skillList} >
              <li className={style.skillItem}>Node.js</li>
              <li className={style.skillItem}>MySQL</li>
              <li className={style.skillItem}>Firebase</li>
            </ul>
          </div>
          <div className={style.skillGroup}>
            <h3 className={style.SkillGroupHeader}>Others</h3>
            <ul className={style.skillList}>
              <li className={style.skillItem}>Git</li>
              <li className={style.skillItem}>Pandas</li>
              <li className={style.skillItem}>Matplotlib</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
