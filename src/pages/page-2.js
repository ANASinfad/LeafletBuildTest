import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Map from "../components/Map";

const SecondPage = () => {
    return (
    <>
    {typeof window !== 'undefined' &&
            <Map/>
    }
    </>
)
}

export default SecondPage
