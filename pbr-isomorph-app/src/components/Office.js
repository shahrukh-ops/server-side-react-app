import React from "react";

const Office = ({ officeNumber, officeName, pendingBusiness}) => {
  return (
    <div id={officeNumber}>
      <h1>OFFICE-NUMBER: {officeNumber}</h1>
      <h1>OFFICE-NAME: {officeName}</h1>
      <p>PENDING-BUSINESS ${pendingBusiness}</p>
    </div>
  );
};

export default Office;