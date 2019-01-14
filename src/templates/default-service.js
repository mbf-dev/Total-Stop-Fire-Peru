import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const DefaultServiceTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
      
              <PageContent className="content " content={content} />
           
    
  )
}


DefaultServiceTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}
const DefaultService = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout titulo={post.frontmatter.title}>
      <DefaultServiceTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}
 

DefaultService.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}


export default DefaultService

export const DefaultServiceQuery = graphql`
  query DefaultService($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        portada {
                      childImageSharp {
                        sizes(maxWidth: 400) {
                          ...GatsbyImageSharpSizes_tracedSVG
                        }
                      }
                    }
      }
    }
  }
`
