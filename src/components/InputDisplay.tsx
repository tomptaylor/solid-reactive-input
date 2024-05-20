import { Component } from "solid-js";
import { usePageName } from "~/context/input";

type PageNameContextType = [string, (name: string) => void];

// Component that renders the page name
const PageName: Component = () => {
  const [name, setName] = usePageName();
  console.log("in pagename component", name());
  return <h1>{name}</h1>;
};

export default PageName;
