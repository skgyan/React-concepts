import { useEffect, useState } from "react";

export default function useData() {
  const [data, setData] = useState([]);

  const fetchJson = () => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then(({ data }) => {
        console.log("fetch", data);
        setData(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return [data];
}
