import React from 'react' 
import { graphql } from 'gatsby'
import Layout from '../../components/Layout/index'
import Seo from '../../components/Seo/index'
import RichText from '../../components/RichText/index'


const BlogPost = (props) => {
    console.log("blog post prop", props)
    return (
        <Layout>
            <Seo 
                title={props.data.contentfulBlogPost.title} 
                description={props.data.contentfulBlogPost.description}
                />
            <RichText raw={props.data.contentfulBlogPost.pageContent.raw}
                    assetRef={props.data.contentfulBlogPost.pageContent.references[0]}
            />
        </Layout>
    )
}

export const query = graphql`
    query BlogPostQuery($postId: String) {
        contentfulBlogPost(contentful_id: {eq: $postId}) {
        publishedDate(formatString: "MMM DD YYYY")
            pageContent {
                raw
                references {
                    ... on ContentfulAsset{
                        __typename
                        contentful_id
                        fixed (width: 1600) {
                            width
                            height
                            src
                            srcSet
                        }
                    }
                    description
                    title
                }
            }
            description
            title
            contentful_id
            slug
            pageContent {
                raw
                    references {
                    ... on ContentfulAsset{
                        __typename
                        contentful_id
                        fixed (width: 1600) {
                            width
                            height
                            src
                            srcSet
                        }
                    }
                }
            }
        }
    }
`


export default BlogPost