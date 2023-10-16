import Button from "./button";
import { useState } from "react";

function App() {
  const[sk, setSk] = useState(0)
function plusviens(){
  setSk(sk + 1);
}
function minusviens(){
  setSk(sk - 1);
}
  return (
    <>
    <Button plusviens={plusviens}/>
    <Button plusviens={minusviens}/>
    <h1>{sk}</h1>
    </>
  );
}

export default App;