import { Link } from "gatsby"
import styled from "styled-components"
import React, { useEffect, useState } from "react"
const Header = ({ siteTitle, setMode }) => {
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
        position: "fixed",
        width: "100%",
        top: "0px",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: "36px",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ position: "absolute", right: "12px", color: "white" }}>
        <a
          href="https://github.com/sadnessOjisan/re-geo"
          style={{ marginRight: "12px", color: "white" }}
        >
          Github
        </a>
        <a
          href="https://www.npmjs.com/package/re-geo"
          style={{ marginRight: "12px", color: "white" }}
        >
          npm
        </a>
        <a
          href="https://re-geo-storybook.netlify.com"
          style={{ marginRight: "12px", color: "white" }}
        >
          StoryBook
        </a>
        /
        <span
          style={{
            marginLeft: "12px",
            color: "white",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={setMode}
        >
          English
        </span>
        <span
          style={{
            marginLeft: "12px",
            color: "white",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={setMode}
        >
          日本語
        </span>
        /
        <a
          href="https://twitter.com/sadnessOjisan"
          style={{ marginLeft: "12px", color: "white" }}
        >
          About Me
        </a>
      </div>
    </Wrapper>
  )
}

export default Header
