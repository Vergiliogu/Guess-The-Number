import { createElement, createFragment } from "@jsxConverter"
import Header from "../components/header"
import Game from "../components/game"
import Guess from "../components/guess"

/**
 * Representa a tela principal (que nesse case, é também a única)
*/

const Home = (props) => {
  return (
    <>
      <Header />
      <Game />
      <Guess />
    </>
  )
}

export default Home