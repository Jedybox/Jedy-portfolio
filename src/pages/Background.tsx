import style from './Background.module.css'

export default function Background() {
  return (
    <div className='NestedPage'>
      <h1 className={style.head}>Backgrounds</h1>
      <section className={style.EducBg}>
        <h2 className={style.EducTitle}>Senior High</h2>
        <p>
          I graduated Senior High School at <strong>STI College Lucena</strong> year 2023.
          I took the <strong>ICT-MAWD</strong> strand which stands for Information and Communication Technology - Mobile App and Web Development.
        </p>
        <p>
          During my 2 years of Senior High School is when I first learned about Programming.
          I learned the basics of <strong>Web Development</strong> with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> later on.
          And during my first year, I learned my first programming language, <strong>Java</strong> and Andriod Studio for <strong>Mobile App Development</strong> (Native Andriod).
        </p>
        <p>
          In My second year, I learned <strong>C#</strong> and <strong>.Net Xamarin</strong> for <strong>Mobile App Development</strong> (Cross-platform) but unfortunately Xamarin is no longer supported by Microsoft.
          It is also in my second year of Senior High School when I learned the basics of <strong>SQL</strong> and Database Management. As I was learning <strong>SQL</strong> I'm also learning how to use <strong>Microsoft SQL Server</strong> for Database Management.
        </p>
      </section>
      <section className={style.EducBg}>
        <h2 className={style.EducTitle}>College</h2>
        <p>
          I am currently studying at <strong>Manuel S. Enverga University Foundation</strong> at Lucena City.
          I am taking up <strong>Bachelor of Science in Computer Science</strong> with the major/sepecialization of <strong>Software Engineering</strong>.
        </p>
        <p>
          I just finished my freshman year and I am currently on my way sophomore. During my freshman year, I learned the basics of <strong>Python</strong>.
          But later on I learned more about Python and its libraries such as <strong>Pandas</strong> and <strong>Matplotlib</strong> for Data Analysis and Visualization.
          I also Learned how to use <strong>RegEx</strong> for Data Cleaning and Data Preprocessing.
        </p>
        <p>
          The last thing I learned during my freshman year in <strong>Python</strong> is <strong>PyQt</strong> for sophisticated and cross-platform graphical user interfaces.
          Also <strong>MySQL</strong> for Database Management and Data Manipulation.
        </p>
      </section>
      <section className={style.EducBg}>
        <h2 className={style.EducTitle}>Self-Taught</h2>
        <p>
          Apart from what I learned from school, I also learned a lot of things on my own.
          At my Senior High School years I thought myself how to use <strong>git</strong> for version control and collaboration.
        </p>
        <p>
          Later on College, I learned <strong>Node.js</strong> and <strong>Firebase</strong> for <strong>Backend Development</strong> and <strong>React</strong> for <strong>Frontend Development</strong> and the <strong>TypeScript</strong> programming language.
        </p>
      </section>
    </div>
  )
}
