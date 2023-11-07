import "./App.css";
import { UseTheme } from "./context/Context";
import Form from "./components/Form";

function App() {

  const { theme } = UseTheme();

  return (
    <div className={theme ?? "light"}>
      <Form />
    </div>
  )
}

export default App;
