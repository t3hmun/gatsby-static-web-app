import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { ReactElement } from "react";

type MetaItem = {
  name: string;
  content: string;
};

export type SeoProps = {
  description?: string;
  lang?: string;
  meta?: MetaItem[];
  title?: string;
};

/** Sets the Head meta data in a way thats good for seo. */
export function Seo(props: SeoProps): ReactElement<SeoProps> {
  // TODO: Add canonical URL and stuff, learn bare basics of common meta and SEO.
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = props.description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang,
      }}
      title={props.title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(props.meta ?? [])}
    />
  );
}
