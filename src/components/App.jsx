import { useState } from "react";
import Head from "./Head";
import Body from "./Body";

export default function App() {
  const [display, setDisplay] = useState("");

  return (
    <div className="app">
      <Head display={display} />
      <Body display={display} setDisplay={setDisplay} />
    </div>
  );
}
