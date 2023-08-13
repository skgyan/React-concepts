import { memo } from "react";

const MemoGreetings = memo(function Greetings({ name }) {
  console.log("Greeting from memo pure component");
  return <h4>Hello, {name}</h4>;
});

export default MemoGreetings;
