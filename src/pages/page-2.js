import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Test from "../components/Test"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p className="btn-blue">Welcome to page 2</p>
    <p className="btn-yellow">Welcome to page 2</p>
    <hr></hr>
    <Test />
    <hr></hr>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
