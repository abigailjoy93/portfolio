import { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  // setting "AboutMe" as the default page
  const [currentPage, setCurrentPage] = useState("AboutMe");

  // checking the value of 'currentPage' and rendering accordingly
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  // function to change from page a to page b when selected
  const handlePageChange = (page) => setCurrentPage(page);

  // code to call the page change function, saying to load a new page when render page is called
  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
    </div>
  );
}
