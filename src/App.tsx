import { useState } from "react";
import PrimaryButton from "./modules/core/components/buttons/PrimaryButton";
import ThemeComponent from "./modules/core/components/buttons/ThemeComponent";

function App() {
  const selectedTheme = localStorage.getItem("theme");

  if (selectedTheme) {
    document.querySelector("body")?.setAttribute("data-theme", selectedTheme);
  }

  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    console.log("omg click");
    setCount(count + 1);
  };

  return (
    <>
      <h1>Hello {count}</h1>
      <PrimaryButton onClick={handleOnClick}>Boton </PrimaryButton>

      <ThemeComponent></ThemeComponent>
    </>
  );
}

export default App;
