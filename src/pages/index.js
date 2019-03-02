import React from "react"
import { Link } from "gatsby"
import { Image, Background } from "re-geo"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Background pattern="microfab">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={Image.Emailme} />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Background>
  </Layout>
)

export default IndexPage
