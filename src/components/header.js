import { Link } from "gatsby"
import styled from "styled-components"
import React, { useEffect, useState } from "react"
const Header = ({ siteTitle }) => {
  const [component, setComponent] = useState({
    Image: { Stars: null },
    isComponentDidMount: false,
  })
  useEffect(async () => {
    const { Image } = await import("re-geo")
    setComponent({
      Image,
      isComponentDidMount: true,
    })
  }, [])
  const { Image, isComponentDidMount } = component
  if (!isComponentDidMount) {
    return "LOADING"
  }
  const Wrapper = styled.header`
    height: 68px;
    padding: 12px;
    display: flex;
    background: url(${Image.Stars}) top left;
    align-items: center;
  `
  return (
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
}

export default Header
