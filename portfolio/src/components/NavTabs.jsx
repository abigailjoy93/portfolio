// Titles should include About Me, Portfolio, Contact, and Resume
// Currently selected title should be highlighted
export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    // created an unordered list for the navigation sections
    <div className="Nav NavTabs">
      {/* NAVNAME 1: AboutMe */}
      <p className="NavName">
        {/* setting AboutMe to nav-link active and highlighting if it is current, otherwise setting it to nav-link */}
        <a href="#AboutMe" onClick={() => handlePageChange("AboutMe")} className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"} style={currentPage === "AboutMe" ? { backgroundColor: "yellow" } : {}}>
          About Me
        </a>
      </p>
      <p className="NavName">
        {/* setting Portfolio to nav-link active and highlighting if it is current, otherwise setting it to nav-link */}
        <a href="#Portfolio" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"} style={currentPage === "Portfolio" ? { backgroundColor: "yellow" } : {}}>
          Porfolio
        </a>
      </p>
      <p className="NavName">
        {/* setting Resume to nav-link active and highlighting if it is current, otherwise setting it to nav-link */}
        <a href="#Resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"} style={currentPage === "Resume" ? { backgroundColor: "yellow" } : {}}>
          Resume
        </a>
      </p>
      <p className="NavName">
        {/* setting Contact to nav-link active and highlighting if it is current, otherwise setting it to nav-link */}
        <a href="#Contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "nav-link active" : "nav-link"} style={currentPage === "Contact" ? { backgroundColor: "yellow" } : {}}>
          Contact
        </a>
      </p>
    </div>
  );
}
