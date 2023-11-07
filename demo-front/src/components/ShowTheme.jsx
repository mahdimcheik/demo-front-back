import { UseTheme } from "../context/Context";

function ShowTheme() {

  const { theme } = UseTheme();

  return <h1>{theme}</h1>
}

export default ShowTheme;