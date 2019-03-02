import { Link } from "gatsby"
import styled from "styled-components"
import React, { useEffect, useState } from "react"
const Header = ({ siteTitle, isSelectedJapanese, setJapaneseMode }) => {
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
    return ""
  }
  const Wrapper = styled.header`
    height: 68px;
    padding: 12px;
    display: flex;
    background: url(${Image.Stars}) top left;
    align-items: center;
  `
  return (
    <Wrapper
      style={{
        height: "68px",
        padding: "12px",
        display: "flex",
        background: `url(${Image.Flames}) top left`,
        alignItems: "center",
      }}
    >
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
      <div style={{ position: "absolute", right: "12px", color: "white" }}>
        <Link to="/" style={{ marginRight: "12px", color: "white" }}>
          English
        </Link>
        <Link to="/ja/" style={{ marginRight: "12px", color: "white" }}>
          日本語
        </Link>
      </div>
    </Wrapper>
  )
}

export default Header
