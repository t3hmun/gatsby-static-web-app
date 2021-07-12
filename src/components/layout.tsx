import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./header"
import "./layout.css"

export function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          themeAccent
          buildDate
        }
      }
    }
  `).site.siteMetadata

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <div>
        <main>{children}</main>
        <footer>Last updated {data.site.siteMetadata.buildDate}</footer>
      </div>
    </>
  )
}
