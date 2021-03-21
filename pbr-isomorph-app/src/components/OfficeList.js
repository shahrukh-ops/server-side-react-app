import React from "react";
import Office from "./Office";

const OfficeList = ({ result }) => {
  console.log(result);
  if (result.loading) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        {result.offices.map((office, i) => (
          <Office key={i} {...office} />
        ))}
      </div>
    );
  }
};
export default OfficeList;