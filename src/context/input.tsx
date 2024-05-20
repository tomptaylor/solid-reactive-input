import { createSignal, createContext, useContext } from "solid-js";

// Define the context for storing the page name
type PageNameContextType = [string, (name: string) => void];

const PageNameContext = createContext<PageNameContextType>();

export const PageNameProvider: any = (props: { children: any }) => {
  const [name, setName] = createSignal("Home");
  return (
    <PageNameContext.Provider value={[name, setName]}>
      {props.children}
    </PageNameContext.Provider>
  );
};

export function usePageName() {
  return useContext(PageNameContext);
}
