import { useState } from "react";
import { ListForm } from "./components/ListForm.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Shopping List</h1>
      <h2>With React...</h2>
      <ListForm />
     
    </>
  );
}

export default App;
