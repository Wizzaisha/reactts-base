import { ReactNode } from "react";

interface ThemeComponentProps {
  children?: ReactNode;
}

const ThemeComponent: React.FC<ThemeComponentProps> = ({ children }) => {
  const setTheme = (theme: "light" | "dark") => {
    document.querySelector("body")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  const handleToggle = () => {
    const currentTheme =
      document.querySelector("body")?.getAttribute("data-theme") === "light"
        ? "dark"
        : "light";

    setTheme(currentTheme);
  };

  return (
    <button onClick={handleToggle} className="w-full btn btn-primary max-w-md">
      {children ? children : "Toggle"}
    </button>
  );
};

export default ThemeComponent;
