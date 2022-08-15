import { createElement, createFragment } from "JsxConverter"
import Header from "../components/header"
import Led from "../components/led"
import Guess from "../components/guess"

const Home = (props) => {
  return (
    <>
      <Header />
      <Led />
      <Guess />
    </>
  )
}

export default Home