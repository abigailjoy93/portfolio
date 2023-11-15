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
        <h2>CSS Cheatsheet</h2>
        <a href="https://github.com/abigailjoy93/css-application">
          <h3>GitHub Repo</h3>
        </a>
        <a href="https://abigailjoy93.github.io/css-application/">
          <img src={projectOne} style={{ width: "27%" }}></img>
        </a>
      </section>
      <section className="project">
        <h2>HTML and CSS-Based Portfolio</h2>
        <a href="https://github.com/abigailjoy93/Week2-Portfolio">
          <h3>GitHub Repo</h3>
        </a>
        <a href="https://abigailjoy93.github.io/Week2-Portfolio/">
          <img src={projectTwo} style={{ width: "27%" }}></img>
        </a>
      </section>
      <section className="project">
        <h2>Password Generator</h2>
        <a href="https://github.com/abigailjoy93/passwordgenerator">
          <h3>GitHub Repo</h3>
        </a>
        <a href="https://abigailjoy93.github.io/passwordgenerator/">
          <img src={projectThree} style={{ width: "27%" }}></img>
        </a>
      </section>
      <section className="project">
        <h2>Plant Search</h2>
        <a href="https://github.com/abigailjoy93/plant-search-project">
          <h3>GitHub Repo</h3>
        </a>
        <a href="https://abigailjoy93.github.io/plant-search-project/">
          <img src={projectFour} style={{ width: "27%" }}></img>
        </a>
      </section>
      <section className="project">
        <h2>Prework Study Guide</h2>
        <a href="https://github.com/abigailjoy93/prework-study-guide">
          <h3>GitHub Repo</h3>
        </a>
        <a href="https://abigailjoy93.github.io/prework-study-guide/">
          <img src={projectFive} style={{ width: "27%" }}></img>
        </a>
      </section>
      <section className="project">
        <h2>Forecast App</h2>
        <a href="https://github.com/abigailjoy93/Forecast-Application">
          <h3>GitHub Repo</h3>
        </a>
        <a href="https://abigailjoy93.github.io/Forecast-Application/">
          <img src={projectSix} style={{ width: "27%" }}></img>
        </a>
      </section>
    </div>
  );
}

export default Portfolio;
