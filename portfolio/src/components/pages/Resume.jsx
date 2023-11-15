// Include a downloadable resume with a list of the developers proficiencies
import React from "react";
import Resume from "../../assets/ResumePlaceholder.pdf";

const downloadResume = () => {
  return (
    <div>
      <p>Please click below to download my most current resume.</p>
      <a href={Resume} download="TurnwallResume.pdf">
        Download File
      </a>
    </div>
  );
};

export default downloadResume;
