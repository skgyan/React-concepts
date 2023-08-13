import "./styles.css";
import FilterCountry from "./CountryList";
import Greetings from "./PureComponent";

export default function App() {
  return (
    <div className="App">
      <Greetings date={new Date().toLocaleDateString()} />
      <h3>Country Search</h3>
      <FilterCountry />
    </div>
  );
}
