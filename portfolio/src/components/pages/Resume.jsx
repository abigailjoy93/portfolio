// Include a downloadable resume with a list of the developers proficiencies
import React from "react";
import Resume from "../../assets/ResumePlaceholder.docx";

const downloadResume = () => {
  return (
    <div>
      <p>Please click below to download my most current resume.</p>
      <a href={Resume} download="TurnwallResume.docx">
        Download File
      </a>
    </div>
  );
};

export default downloadResume;
