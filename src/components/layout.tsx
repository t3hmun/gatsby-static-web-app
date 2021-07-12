import * as React from "react";

import { Header } from "./header";
import { useSiteMetadata } from "../queries";

import "./layout.css";

export function Layout({ children }) {
  const data = useSiteMetadata();

  return (
    <>
      <Header siteTitle={data.title} description={data.description} />
      <div>
        <main>{children}</main>
        <footer>Last updated at {data.buildDate}</footer>
      </div>
    </>
  );
}
