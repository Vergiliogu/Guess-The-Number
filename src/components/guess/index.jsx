import { createElement, createFragment } from "JsxConverter"

import "./guess.css"

const Guess = (props) => {
  return (
    <div id="guess-container">
      <input class="guess-input" type="number" name="guess" id="guess" placeholder="Digite o palpite" />

      <button class="guess-btn">
        ENVIAR
      </button>
    </div>
  )
}

export default Guess