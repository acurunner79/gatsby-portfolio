import React from 'react' 
import { graphql } from 'gatsby'
import Layout from '../../components/Layout/index'
import Seo from '../../components/Seo/index'
import RichText from '../../components/RichText/index'


const BlogPost = (props) => {
    console.log("blog post props", props)
    return (
        <Layout>
            <Seo 
                title={props.data.contentfulBlogPost.title} 
                description={props.data.contentfulBlogPost.description}
                />
            <RichText raw={props.data.contentfulBlogPost.pageContent.raw}/>
        </Layout>
    )
}

export const query = graphql`
    query BlogPostQuery($postId: String) {
    contentfulBlogPost(contentful_id: {eq: $postId}) {
        publishedDate(formatString: "MMM DD YYYY")
            pageContent {
                raw
            }
            description
            title
            contentful_id
            slug
        }
    }
`


export default BlogPost