import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import PageName from "~/components/InputDisplay";
import ChangePageName from "~/components/InputEdit";
import { PageNameProvider } from "~/context/input";
import FullPage from "~/pages/Input";

export default function Home() {
  return (
    <main>
      <Title>Input page</Title>
      <h1>Hello world!!!!</h1>
      <Counter />
      <PageNameProvider>
        <PageName />
        <FullPage />
      </PageNameProvider>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
