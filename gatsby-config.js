module.exports = {
  siteMetadata: {
    author: '@Bvlktech',
    title: 'Blogerist',
    description:'Starter blog built with GatsbyJS.',
    siteUrl: 'https://www.blogerist.netlify.com'
  },
  plugins: [
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-robots-txt',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${ __dirname }/static/images`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${ __dirname }/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Blogerist',
        short_name: 'Blogerist',
        start_url: '/',
        background_color: '#fdfdfd',
        theme_color: '#21232b',
        display: 'standalone',
        icon: 'static/images/icon.svg'
      }
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [''],
        pluginConfig: {
          respectDNT: true,
          head: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Open Sans'
          },
          {
            family: 'Lobster'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#e2127a',
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/
                    }
                  }
                }
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              }
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `{
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }`,
        feeds: [{
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                custom_elements: [{ 'content:encoded': edge.node.html }],
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                date: edge.node.frontmatter.date,
                description: edge.node.excerpt
              });
            });
          },
          query: `{
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
                    title
                  }
                }
              }
            }
          }`,
          output: '/rss.xml',
          title: 'RSS Feed'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${ __dirname }/src/cms/cms.js`
      }
    },
    'gatsby-plugin-netlify'
  ]
}
