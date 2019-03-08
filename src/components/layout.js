import React, { useState } from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../util/reset.css"
import "../util/global.css"
const Layout = ({ children, setMode }) => {
  const [isSelectedJapanese, setJapaneseMode] = useState(false)
  return (
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
          <Header
            siteTitle={data.site.siteMetadata.title}
            isSelectedJapanese={isSelectedJapanese}
            setJapaneseMode={setJapaneseMode}
            setMode={setMode}
          />
          <Main style={{ paddingTop: "68px" }}>{children}</Main>
          <footer>
            © <a href="https://twitter.com/sadnessOjisan">sadnessOjisan</a>
            {new Date().getFullYear()}, Built with
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Wrapper>
      )}
    />
  )
}

const Wrapper = styled.div`
  height: 100%;
`

const Main = styled.main`
  height: 100%;
`

export default Layout
