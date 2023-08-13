import { useEffect, useState } from "react";
import MemoGreetings from "./PureComponentUsingMemo";

export default function DisplayCountries({ searchStr, countries }) {
  const [count, setCount] = useState(0);

  const FilterCountryData = (searchStr) => {
    const data = countries.filter((ctry) => {
      return ctry.toLowerCase().includes(searchStr.toLowerCase());
    });

    return data;
  };

  useEffect(() => {
    setTimeout(() => setCount((count) => count + 1), 5000);
  }, [count]);

  const filteredList = FilterCountryData(searchStr);

  return (
    <div>
      <ul>
        {filteredList.map((ctry) => (
          <li key={ctry}>{ctry}</li>
        ))}
      </ul>
      <MemoGreetings name={count} />
    </div>
  );
}
