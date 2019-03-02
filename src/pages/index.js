import React from "react"
import { Link } from "gatsby"
import {
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
} from "re-geo"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Background pattern="microfab">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Center horizontal={true}>
        <H1>
          <GradationText
            fontSize={48}
            colorArray={["red", "blue", "green"]}
            isAnimate={true}
          >
            re-geo
          </GradationText>
        </H1>
      </Center>
      <H2 color="white">What is re-geo</H2>
      <Font color="white">
        re-geo is a react based UI components library to revive geo-cities. I am
        very inspired by{" "}
        <a href="https://github.com/divshot/geo-bootstrap">geo-bootstrap</a>.
        special thanks.
      </Font>
      <H2 color="white">Motivation</H2>
      <Font color="white">
        I like Geo Cities Style Design. But, Geo Cities will be close in this
        March in Japan.
      </Font>
      <Font color="white">
        Then I deside to revive geo-cities style design forever.
      </Font>
      <H2 color="white">How to use</H2>
      <div>
        <Font color="white">npm i -S re-geo</Font>
      </div>
      <div>
        <Font color="white">import Button from 're-geo'</Font>
      </div>
      <div>
        <Font color="white">
          Button type="primary" size="large"> PRIMARY /Button
        </Font>
      </div>
      <Button type="primary" size="large">
        PRIMARY
      </Button>
      <H2 color="white">Examples</H2>
      <Font color="white">
        All Example is Here.
        <a href="https://zen-nightingale-960cf0.netlify.com">storybook</a>
      </Font>
      <img src={Image.SevenUpspot} />
      <img src={Image.Geocities} />
      <img src={Image.New} />
      <br />
      <Zoom speed={1}>
        <a href="https://zen-nightingale-960cf0.netlify.com">storybook</a>
      </Zoom>
      <br />
      <Rotator speed={1}>
        <a href="https://zen-nightingale-960cf0.netlify.com">storybook</a>
      </Rotator>
      <Marquee direction="right">
        <a href="https://zen-nightingale-960cf0.netlify.com">storybook</a>
      </Marquee>
      <H2 color="white">ReleaseNote</H2>
      <Table
        headers={["date", "contents"]}
        rows={[["2019-02-25", "release v0.0.1"], ["2019-03-01", "open LP"]]}
      />
      <H2 color="white">Ohters</H2>
      <Font color="white">
        If you want to send me a message, please here.{" "}
        <a href="https://github.com/sadnessOjisan/re-geo">github</a>
        <img src={Image.Emailme} />
      </Font>

      <Link to="/ja/">Japanese</Link>
    </Background>
  </Layout>
)

export default IndexPage
