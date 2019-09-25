import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const NotFound = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;
  return(
  <Layout>
    <SEO title='404: NOT FOUND! |' />
    <div className='ErrStyle'>
      <div className='banner'>
        <ul>
          <h1>404</h1>
          <p>Oh no, You can go back to our <Link to='/' title='Blogerist Home'>home page</Link>, or explore some more post down below...</p>
        </ul>
      </div>
    </div>
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
NotFound.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object
  })
}
export default NotFound;
export const errorQuery = graphql`
  query ErrorQuery {
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
