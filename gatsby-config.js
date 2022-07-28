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
        accessToken: process.env.accessToken,
        environment: "dev"
      },
    },
    `gatsby-plugin-image`,
  ]
}
