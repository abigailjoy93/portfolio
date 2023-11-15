// Include screenshots of six applications with links to the deployed applications and github links
import projectOne from "../../assets/css-cheatsheet.png";
import projectTwo from "../../assets/html-portfolio.png";
import projectThree from "../../assets/password-generator.png";
import projectFour from "../../assets/plant-search.png";
import projectFive from "../../assets/prework-study-guide.png";
import projectSix from "../../assets/weather-application.png";

function Portfolio() {
  return (
    <div>
      <section className="project">
        <h3>CSS Cheatsheet</h3>
        <a href="https://github.com/abigailjoy93/css-application">
          <h4>GitHub Repo</h4>
        </a>
        <a href="https://abigailjoy93.github.io/css-application/">
          <img src={projectOne}></img>
        </a>
      </section>
      <section className="project">
        <h3>HTML and CSS-Based Portfolio</h3>
        <a href="https://github.com/abigailjoy93/Week2-Portfolio">
          <h4>GitHub Repo</h4>
        </a>
        <a href="https://abigailjoy93.github.io/Week2-Portfolio/">
          <img src={projectTwo}></img>
        </a>
      </section>
      <section className="project">
        <h3>Password Generator</h3>
        <a href="https://github.com/abigailjoy93/passwordgenerator">
          <h4>GitHub Repo</h4>
        </a>
        <a href="https://abigailjoy93.github.io/passwordgenerator/">
          <img src={projectThree}></img>
        </a>
      </section>
      <section className="project">
        <h3>Plant Search</h3>
        <a href="https://github.com/abigailjoy93/plant-search-project">
          <h4>GitHub Repo</h4>
        </a>
        <a href="https://abigailjoy93.github.io/plant-search-project/">
          <img src={projectFour}></img>
        </a>
      </section>
      <section className="project">
        <h3>Prework Study Guide</h3>
        <a href="https://github.com/abigailjoy93/prework-study-guide">
          <h4>GitHub Repo</h4>
        </a>
        <a href="https://abigailjoy93.github.io/prework-study-guide/">
          <img src={projectFive}></img>
        </a>
      </section>
      <section className="project">
        <h3>Forecast App</h3>
        <a href="https://github.com/abigailjoy93/Forecast-Application">
          <h4>GitHub Repo</h4>
        </a>
        <a href="https://abigailjoy93.github.io/Forecast-Application/">
          <img src={projectSix}></img>
        </a>
      </section>
    </div>
  );
}

export default Portfolio;
