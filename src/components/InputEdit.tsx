import { Component } from "solid-js";
import { usePageName } from "~/context/input";

// Component for changing the page name
const ChangePageName: Component = () => {
  const [name, setName] = usePageName();
  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  return <input type="text" onInput={handleChange} />;
};

export default ChangePageName;
