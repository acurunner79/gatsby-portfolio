import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
 
const Seo = ({ description, lang, meta = {}, title }) => {
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

    const metaDescription = description || site.siteMetadata.description;
    const metaImage = "https://res.cloudinary.com/acurunner79/image/upload/v1623006406/Screenshot_from_2021-06-06_14-06-06_ralye4.png"
    const defaultTitle = site.siteMetadata?.title;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:image`,
                    content: metaImage,
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
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    );
};

export default Seo