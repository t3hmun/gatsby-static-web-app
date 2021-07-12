import * as React from "react";
import { Helmet } from "react-helmet";
import { ReactElement } from "react";
import { useSiteMetadata } from "../queries";

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

/** Sets the Head meta data in a way that's good for seo. */
export function Seo(props: SeoProps): ReactElement<SeoProps> {
  // TODO: Add canonical URL and stuff, learn bare basics of common meta and SEO.
  const data = useSiteMetadata();

  const metaDescription = props.description || data.description;
  const defaultTitle = data.title;

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
          content: data.author || ``,
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
