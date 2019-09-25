import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { DiscussionEmbed } from 'disqus-react';
import Content, { HTMLContent } from '../components/content';
import { FaFacebookF, FaInstagram, FaTwitter, FaRedditAlien } from 'react-icons/fa';

export const PostTemplate = ({ id, route, date, avatar, author, instagram, twitter, banner, title, contentComponent, content }) => {
  const PostContent = contentComponent || Content;
  const disqusShortname = 'example';  // Keep this outside of disqusConfig for Disqus to work
  const disqusConfig = {
    identifier: 'something-unique-12345', // Can Be Anything (recommend `${ id }`)
    title: 'Example Thread', // Can Be Anything (recommend `${ title }`)
    url: 'http://www.example.com/example-thread', // Can Be Anything (recommend `http://www.blogerist.netlify.com${ route }`)
    category_id: '123456' // Can Be Anything (recommend `${ id }`)
  };
  return(
  <div className='PageWrapper'>
    <div className='banner'>
      <Img fluid={ banner } alt={ title } className='blah' />
      <div className='authorBar'>
        <Img fluid={ avatar } alt={ author } className='authorImage' />
        <p>{ author }</p>
        <span>
          { date }<br />
          {instagram ? <a href={ instagram } title='Follow me on Instagram!' target='_blank' rel='noopener noreferrer'><FaInstagram className='ico' /></a> : <a href='https://instagram.com/blogerist' title='Follow me on Instagram!' target='_blank' rel='noopener noreferrer'><FaInstagram className='ico' /></a>}
          {twitter ? <a href={ twitter } title='Follow me on Twitter!' target='_blank' rel='noopener noreferrer'><FaTwitter className='ico' /></a> : <a href='https://twitter.com/blogerist' title='Follow me on Twitter!' target='_blank' rel='noopener noreferrer'><FaTwitter className='ico' /></a>}
        </span>
      </div>
      <div className='titleBar'>
        <p>{ title }</p>
      </div>
    </div>
    <PostContent content={ content } />
    <div className='message'>
      <p>Blogerist is reader supported, When you buy through links on our site we may earn an affiliate commission, <Link to='/terms' title='Learn More'>Learn More</Link></p>
    </div>
    <div className='shareBar'>
      <a href={ `https://www.facebook.com/sharer.php?u=https://blogerist.netlify.com${ route }&amp;t=Check out this awesome post from @blogerist "${ title }"` } title='Share To Facebook' target='_blank' rel='noopener noreferrer'><button className='shareBtn fb'><FaFacebookF className='ico' /> Share</button></a>
      <a href={ `https://twitter.com/intent/tweet?url=https://blogerist.netlify.com${ route }&amp;text=Check out this awesome post from @blogerist "${ title }"` } title='Share To Twitter' target='_blank' rel='noopener noreferrer'><button className='shareBtn twitter'><FaTwitter className='ico' /> Share</button></a>
      <a href={ `https://www.reddit.com/submit?url=https://blogerist.netlify.com${ route }` } title='Share To Reddit' target='_blank' rel='noopener noreferrer'><button className='shareBtn reddit'><FaRedditAlien className='ico' /> Share</button></a>
    </div>
    <DiscussionEmbed shortname={ disqusShortname } config={ disqusConfig } />
  </div>
  );
}
PostTemplate.propTypes = {
  title: PropTypes.string,
  contentComponent: PropTypes.func,
  content: PropTypes.node.isRequired
}
const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return(
  <Layout>
    <SEO title={ post.frontmatter.title ? `${ post.frontmatter.title } |` : '404: Not Found!' } />
    <PostTemplate id={ post.id } route={ post.fields.slug } date={ post.frontmatter.date } avatar={ post.frontmatter.avatar.childImageSharp.fluid } author={ post.frontmatter.author } instagram={ post.frontmatter.instagram } twitter={ post.frontmatter.twitter } banner={ post.frontmatter.cover.childImageSharp.fluid } title={ post.frontmatter.title } contentComponent={ HTMLContent } content={ post.html } />
  </Layout>
  );
}
BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}
export default BlogPost;
export const blogPostQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MM / DD / YY")
        avatar {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        author
        instagram
        twitter
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
`
