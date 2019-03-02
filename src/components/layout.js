import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Image, Button } from "re-geo"
import Header from "./header"
import "../util/reset.css"
import "../util/global.css"
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
        <footer>
          © <a href="https://twitter.com/sadnessOjisan">sadnessOjisan</a>
          {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Wrapper>
    )}
  />
)

const Wrapper = styled.div`
  height: 100vh;
`

const Main = styled.main`
  height: 100%;
`

export default Layout
