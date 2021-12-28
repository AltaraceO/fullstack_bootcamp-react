import React, { useState, useEffect } from "react";
import axios from "axios";

export const ApiComp = () => {
  const [neededData, setNeededData] = useState("");

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getData = async () => {
      try {
        const data = await axios.get("https://swapi.dev/api/people/1/", {
          cancelToken: source.token,
        });
        console.log(data.data.name);
        setNeededData(data.data.name);
      } catch (error) {
        if (axios.isCancel(error)) return;
      }
    };
    getData();
    return () => source.cancel();
  }, []);

  return (
    <div>
      <div>hello</div>
      {neededData && neededData}
    </div>
  );
};
