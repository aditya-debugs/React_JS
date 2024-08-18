import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Aditya",
    grade: 'A',
    id:2
  }
  let newArray= [1,2,3,4]

  return (
    <>
      <h1 className="bg-green-600 p-4 rounded-2xl text-black ">
        Tailwind Test{" "}
      </h1>
      <Card username="Aditya" btnText="let's explore"/>
      <Card username= "react" />
    
    </>
  );
}

export default App;
