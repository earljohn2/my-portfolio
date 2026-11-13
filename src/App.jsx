
import "./App.css";

function App() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Python", "SQL", "Node.js", "TypeScript"
  ];

  const projects = [
    {
      number: "01",
      title: "Student Information System",
      description: "A web application for managing student records with add, view, edit, and delete features.",
      tools: "React • TypeScript • Node.js"
    },
    {
      number: "02",
      title: "SoleStore",
      description: "A beginner web application project with a sign-up page and a simple user interface.",
      tools: "Python • Flask • HTML • CSS"
    }
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">EARL<span>.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
            <h1>Hi, I'm John Earl <span>Burguillo.</span></h1>
            <h2>Information Technology Student</h2>
            <p className="description">
              I am passionate about technology, programming, and
              web development. I enjoy learning new things and
              building useful digital projects.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">View My Work</a>
              <a href="#about" className="outline-btn">About Me</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>
            <div className="profile-card">
              <div className="profile-circle">EJ</div>
              <h3>John Earl Burguillo</h3>
              <p>IT STUDENT</p>
              <div className="profile-line"></div>
              <span>Learning • Creating • Growing</span>
            </div>
          </div>

          <div className="hero-bottom">PORTFOLIO — 2026</div>
        </section>

        <section className="quick-links">
          <p className="section-label">EXPLORE MY PORTFOLIO</p>
          <h2>Discover <span>more about me.</span></h2>

          <div className="quick-grid">
            <a href="#about" className="quick-card">
              <div className="card-icon">01</div>
              <h3>About Me</h3>
              <p>Get to know my background and interests.</p>
              <span>Explore About →</span>
            </a>

            <a href="#skills" className="quick-card">
              <div className="card-icon">02</div>
              <h3>My Skills</h3>
              <p>See the technologies and tools I'm learning.</p>
              <span>Explore Skills →</span>
            </a>

            <a href="#projects" className="quick-card">
              <div className="card-icon">03</div>
              <h3>My Projects</h3>
              <p>Check out the projects I've been working on.</p>
              <span>Explore Projects →</span>
            </a>
          </div>
        </section>

        <section className="section" id="about">
          <p className="section-label">01 — ABOUT ME</p>
          <h2>Getting to know <span>me.</span></h2>
          <p className="description">
            I am currently pursuing a degree in Information Technology.
            I am interested in web development, programming, Business
            Analysis, and Data Analysis. My goal is to improve my
            technical knowledge and communication skills.
          </p>

          <div className="info-grid">
            <div className="info-item">
              <small>NAME</small>
              <h3>John Earl Burguillo</h3>
            </div>
            <div className="info-item">
              <small>COURSE</small>
              <h3>BS Information Technology</h3>
            </div>
            <div className="info-item">
              <small>INTEREST</small>
              <h3>Web Development</h3>
            </div>
            <div className="info-item">
              <small>CAREER INTEREST</small>
              <h3>Business & Data Analysis</h3>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <p className="section-label">02 — MY SKILLS</p>
          <h2>Tools I'm <span>learning.</span></h2>
          <p className="description">
            These are some of the technologies I have explored
            through my studies and projects.
          </p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-dot"></span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="section-label">03 — MY WORK</p>
          <h2>Selected <span>projects.</span></h2>
          <p className="description">
            Here are some projects I have worked on while learning
            programming and web development.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tools">{project.tools}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="section-label">LET'S CONNECT</p>
          <h2>Have a project in mind?</h2>
          <p>Feel free to reach out and let's connect.</p>
          <a href="mailto:YOUR_EMAIL_HERE" className="primary-btn">
            Contact Me
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 John Earl Burguillo. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
