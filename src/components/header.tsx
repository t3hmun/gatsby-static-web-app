import * as React from "react";
import { Link } from "gatsby";
import { ReactElement } from "react";

export type headerProps = {
  siteTitle: string;
  description: string;
};

export function Header(props: headerProps): ReactElement<headerProps> {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">{props.siteTitle}</Link>
        </h1>
        <p>{props.description}</p>
      </div>
    </header>
  );
}
