import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import { Image, Background } from "re-geo"
const Header = ({ siteTitle }) => (
  <Wrapper>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </Wrapper>
)

const Wrapper = styled.header`
  height: 68px;
  padding: 12px;
  background: url(${Image.Stars}) top left;
  display: flex;
  align-items: center;
`

export default Header
