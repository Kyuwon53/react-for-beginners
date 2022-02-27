import styles from "./App.module.css";
import { useState, useEffect } from "react";
function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setShowing((prev) => !prev);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run only once.");
  useEffect(() => {
    console.log("CALL THE API");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  return (
    <div >
      {showing ? <Hello /> : null}
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}></h1>
      <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
    </div>
  );
}

export default App;
