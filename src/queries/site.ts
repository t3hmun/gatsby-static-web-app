import { useStaticQuery, graphql } from "gatsby";

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  buildDate: string;
}

export const useSiteMetadata: () => SiteMetadata = () =>
  useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          themeAccent
          buildDate
        }
      }
    }
  `).site.siteMetadata as SiteMetadata;
