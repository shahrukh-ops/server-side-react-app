import React, { useState } from "react";
import OfficeList from "./components/OfficeList";

const ServerApp = ({ data }) => {
  const [result, setResult] = useState({ loading: false, offices: data });
  return (
    <div>
      <OfficeList result={result} />
    </div>
  );
};

export default ServerApp;