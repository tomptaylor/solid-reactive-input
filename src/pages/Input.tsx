import { Component } from "solid-js";
import PageName from "~/components/InputDisplay";
import ChangePageName from "~/components/InputEdit";

const FullPage: Component = () => {
  console.log("in full page");
  return (
    <div>
      in full page
      <PageName />
      <ChangePageName />
    </div>
  );
};

export default FullPage;
