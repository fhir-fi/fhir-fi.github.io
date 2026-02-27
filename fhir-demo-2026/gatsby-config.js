/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `FHIR Demo 2026`,
    siteUrl: `https://hl7.fi/en/demo2026`,
  },
  pathPrefix: '/en/demo2026',
  flags: {
    DEV_SSR: true,
  },
  plugins: [],
}
