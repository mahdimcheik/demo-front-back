import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState(undefined);
  const getUser = async (e) => {
    console.log(" avant la http ");
    try {
      const response = await axios.get(
        `http://localhost:5000/?id=${e.target.value}`
      );
      setUser(response.data);
    } catch (err) {
      console.error(err.response.data);
      setUser(undefined);
    }
  };

  return (
    <>
      {!user ? (
        <p>Veuillez saisir un identifiant </p>
      ) : (
        <p>name : {user.name}</p>
      )}
      <input type="text " onChange={getUser} />
    </>
  );
}

export default App;
