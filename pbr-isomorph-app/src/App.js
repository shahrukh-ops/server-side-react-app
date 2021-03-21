import React, { useEffect, useState } from "react";
import OfficeList from "./components/OfficeList";
import config from "./config.json";
import axios from "axios";

const App = ({ isSSR, ssrData }) => {
  const [err, setErr] = useState(false);
  const [result, setResult] = useState({ loading: true, offices: null });
  useEffect(() => {
    const getData = async () => {
      const url = config.BackEndApi.apiurl;
      try {
        let result = await axios.get(url);
        setResult({ loading: false, offices: result.data });
      } catch (error) {
        setErr(error);
      }
    };
    getData();
  }, []);
  if (err) {
    return <div>Error {err}</div>;
  } else {
    return (
      <div>
        <OfficeList result={result} />
      </div>
    );
  }
};

export default App;