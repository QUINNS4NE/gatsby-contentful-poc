module.exports = {
  siteMetadata: {
    title: `gatsby-contentful-poc`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "8v87zvsfil1f",
        accessToken: "ueVzEdd4DVkQoJf59bE9NqMCz9VK7_hJCLFQ0YuhN5s",
        environment: "dev"
      },
    },
    `gatsby-plugin-image`,
  ]
}
