import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Index = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;
  return(
  <Layout>
    <SEO title=' ' />
    <div className='CardWrapper'>
      <div className='masonary'>
        {posts.map(({ node: post }) => (<Link to={ post.fields.slug } key={ post.frontmatter.title } title={ post.frontmatter.title }>
          <div className='card'>
            <Img fluid={ post.frontmatter.cover.childImageSharp.fluid } alt={ post.frontmatter.title } className='cardImage' />
            <div className='authorBar'>
              <Img fluid={ post.frontmatter.avatar.childImageSharp.fluid } alt={ post.frontmatter.author } className='authorImage' />
              <p>{ post.frontmatter.author }</p>
            </div>
            <div className='dis'>
              <h1>{ post.frontmatter.title }</h1>
              <p>{ post.excerpt }</p>
              <div className='tagBar'>
                <p>{ post.frontmatter.type }</p>
                <span>{ post.frontmatter.date }</span>
              </div>
            </div>
          </div>
        </Link>))}
      </div>
    </div>
  </Layout>
  );
}
Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object
  })
}
export default Index;
export const indexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            type
            date(formatString: "MM / DD / YY")
            avatar {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author
            cover {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
        }
      }
    }
  }
`