import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [component, setComponent] = useState({
    Image: null,
    Background: null,
    isComponentDidMount: false,
  })
  useEffect(async () => {
    const {
      Image,
      Background,
      H1,
      Font,
      Center,
      GradationText,
      H2,
      Table,
      Zoom,
      Rotator,
      Button,
      Marquee,
      Alerts,
    } = await import("re-geo")
    setComponent({
      Image,
      Background,
      H1,
      Font,
      Center,
      GradationText,
      H2,
      Table,
      Zoom,
      Rotator,
      Button,
      Marquee,
      Alerts,
      isComponentDidMount: true,
    })
  }, [])
  const {
    Image,
    Background,
    H1,
    Font,
    Center,
    GradationText,
    H2,
    Table,
    Zoom,
    Rotator,
    Button,
    Marquee,
    Alerts,
    isComponentDidMount,
  } = component
  if (!isComponentDidMount) {
    return <Layout>LOADING</Layout>
  }

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Background pattern="microfab" style={{ padding: "24px" }}>
        <Wrapper style={{ padding: "24px" }}>
          <Marquee
            direction="right"
            behavior="alternate"
            scrollamount={24}
            style={{ color: "white" }}
          >
            this library is not support IE.
          </Marquee>
          <Section
            style={{
              marginTop: "36px",
              marginBottom: "36px",
              marginLeft: "-24px",
              height: "70vh",
              width: "100vw",
            }}
          >
            <Center vertical={true} horizontal={true}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Center horizontal={true}>
                  <H1>
                    <GradationText
                      fontSize={96}
                      colorArray={["red", "blue", "green"]}
                      isAnimate={true}
                    >
                      re-geo
                    </GradationText>
                  </H1>
                </Center>
                <div style={{ position: "absolute", right: "12px" }}>
                  <img src={Image.Geocities} />
                  <br />
                  <img src={Image.Hot} />
                </div>
                <div style={{ position: "absolute", left: "12px" }}>
                  <img src={Image.Notepad} />
                  <br />
                  <img src={Image.NSLogo} />
                  <br />
                  <img src={Image.Webtrips} />
                  <br />
                  <img src={Image.Wabwalk} />
                </div>
                <br />
                <br />
                <Center horizontal={true}>
                  <H2>react based geo cities style component</H2>
                </Center>
                <br />
                <Center horizontal={true}>
                  <div
                    style={{
                      color: "white",
                      padding: "12px 36px",
                      backgroundColor: "#555",
                      marginBottom: "12px",
                    }}
                  >
                    {"npm i -S re-geo"}
                  </div>
                </Center>
              </div>
            </Center>
          </Section>
          <hr />
          <Section
            style={{ marginTop: "36px", marginBottom: "36px", display: "flex" }}
          >
            <div style={{ marginRight: "36px" }}>
              <H2 color="white">What is re-geo</H2>
              <Font color="white">
                re-geo is a react based UI components library to revive
                geo-cities.
              </Font>
              <Font color="white">
                I am very inspired by
                <a
                  href="https://github.com/divshot/geo-bootstrap"
                  style={{ color: "white" }}
                >
                  geo-bootstrap
                </a>
                special thanks.
              </Font>
            </div>
            <div>
              <H2 color="white">Motivation</H2>
              <Font color="white">
                I like Geo Cities Style Design. But, Geo Cities will be close in
                this March in Japan.
              </Font>
              <Font color="white">
                Then I deside to revive geo-cities style design forever.
              </Font>
            </div>
          </Section>
          <Center horizontal={true}>
            <img src={Image.Computer01} />
            <img src={Image.Computer01} />
            <img src={Image.Computer01} />
          </Center>
          <hr />
          <hr />
          <Section style={{ marginTop: "36px", marginBottom: "36px" }}>
            <H2 color="white">How to use</H2>
            <div
              style={{
                color: "white",
                padding: "12px",
                backgroundColor: "#555",
                marginBottom: "12px",
                width: "80%",
              }}
            >
              {"npm i -S re-geo"}
            </div>
            <div
              style={{
                color: "white",
                padding: "12px",
                backgroundColor: "#555",
                marginBottom: "12px",
                width: "80%",
              }}
            >
              {'import { Button } from "re-geo"'}
            </div>
            <div
              style={{
                color: "white",
                padding: "12px",
                backgroundColor: "#555",
                marginBottom: "12px",
                width: "80%",
              }}
            >
              {'<Button type="primary" size="large"> PRIMARY </Button>'}
            </div>
            <Center horizontal={true}>
              <H1>
                <GradationText
                  fontSize={48}
                  colorArray={["red", "blue", "green"]}
                  isAnimate={true}
                >
                  ↓↓↓↓↓↓↓
                </GradationText>
              </H1>
            </Center>
            <br />
            <Center horizontal={true}>
              <H1>
                <Button type="primary" size="large">
                  PRIMARY
                </Button>
              </H1>
            </Center>
          </Section>
          <hr />
          <Section
            style={{
              marginTop: "36px",
              marginBottom: "36px",
              backgroundColor: "white",
            }}
          >
            <Background pattern="stars" style={{ padding: "24px" }}>
              <H2 color="white">Examples</H2>
              <div
                horizontal={true}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div style={{ width: "100%" }}>
                  <Font color="white">
                    All Example is Here.
                    <a href="https://zen-nightingale-960cf0.netlify.com">
                      storybook
                    </a>
                  </Font>
                </div>
                <div style={{ width: "100%" }}>
                  <Zoom speed={1}>
                    <a href="https://zen-nightingale-960cf0.netlify.com">
                      storybook
                    </a>
                  </Zoom>
                </div>
                <br />
                <div style={{ width: "100%" }}>
                  <Rotator speed={1}>
                    <a href="https://zen-nightingale-960cf0.netlify.com">
                      storybook
                    </a>
                  </Rotator>
                </div>
                <br />
                <div style={{ width: "100%" }}>
                  <Marquee direction="right">
                    <a href="https://zen-nightingale-960cf0.netlify.com">
                      storybook
                    </a>
                  </Marquee>
                </div>
                <br />
                <Alerts type="alert">
                  All Components is in{" "}
                  <a href="https://zen-nightingale-960cf0.netlify.com">
                    storybook
                  </a>
                  .
                </Alerts>
              </div>
            </Background>
          </Section>
          <hr />
          <Section style={{ marginTop: "36px", marginBottom: "36px" }}>
            <H2 color="white">Tips For Create Geo Cities Style</H2>
            <img src={Image.Construction} />
            <Font color="white">Now I am preparing</Font>
          </Section>
          <hr />
          <Section style={{ marginTop: "36px", marginBottom: "36px" }}>
            <H2 color="white">ReleaseNote</H2>
            <Table
              headers={["date", "contents"]}
              rows={[
                ["2019-02-25", "release v0.0.1"],
                ["2019-03-01", "open LP"],
              ]}
            />
          </Section>
          <hr />
          <Section style={{ marginTop: "36px", marginBottom: "36px" }}>
            <H2 color="white">Ohters</H2>
            <Font color="white">
              If you want to send me a message, please here.
              <a href="https://github.com/sadnessOjisan/re-geo">github</a>
              <img src={Image.Emailme} />
            </Font>
          </Section>
        </Wrapper>
      </Background>
    </Layout>
  )
}
const Wrapper = styled.div`
  padding: 12px;
  width: 100%;
  height: 100%;
`

const Section = styled.section`
  margin-top: 36px;
  margin-bottom: 36px;
`
export default IndexPage
