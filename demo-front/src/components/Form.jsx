import { useState } from "react";
import axios from "axios";
import { UseTheme } from "../context/Context";
import ShowTheme from "./ShowTheme";

function Form() {

  const { setTheme } = UseTheme();
  const [user, setUser] = useState(undefined);

  const getUser = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/?id=${e.target.value}`
      );
      setUser(response.data);
      setTheme(response.data.theme);
    } catch (err) {
      console.error(err.response.data);
      setUser(undefined);
    }
  };

  return (
    <>
      <ShowTheme />
      {!user ? (
        <p>Veuillez saisir un identifiant </p>
      ) : (
        <p>name : {user.name}</p>
      )}
      <input type="text" onChange={getUser} />
    </>
  );
}

export default Form;