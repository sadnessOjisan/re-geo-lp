import React from "react"
import { Link } from "gatsby"
import { Image, Background, H1, Font } from "re-geo"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Background pattern="microfab">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <H1>へーーーーーーーい！</H1>
      <Font color="white">おらああああああああああ！！！</Font>
      <Font color="white">うりゃらら</Font>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={Image.Emailme} />
      </div>
      <Link to="/">en</Link>
    </Background>
  </Layout>
)

export default IndexPage
