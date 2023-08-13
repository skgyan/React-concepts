import { useCallback, useState, useEffect, useRef } from "react";
import DisplayCountries from "./DisplayCountries";
import SearchBox from "./SearchBox";

export default function FilterCountry() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const searchBoxInput = useRef(null);

  const onSearchChange = (e) => {
    console.log("on search chagne");
    setSearchQuery(e.target.value);
  };

  const editSearchQuery = () => {
    searchBoxInput.current.reset();
    setSearchQuery(searchBoxInput.current.value());
    searchBoxInput.current.focus();
  };

  const fetchJson = useCallback(() => {
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
  }, [setData]);

  useEffect(() => {
    console.log("re-render");
    fetchJson();
  }, [fetchJson]);

  return (
    <div>
      <SearchBox onSearchChange={onSearchChange} ref={searchBoxInput} />
      <button type="button" onClick={editSearchQuery}>
        Edit
      </button>
      <DisplayCountries searchStr={searchQuery} countries={data} />
    </div>
  );
}
