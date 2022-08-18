import { createElement, createFragment } from "@jsxConverter"
import { handleUpdateLed } from "../game"
import Button from "../common/button"

import "./guess.css"

export const disableGuess = () => {
  document.getElementById("guess-button").setAttribute("disabled", true)
  document.getElementById("guess-input").setAttribute("disabled", true)
}

export const enableGuess = () => {
  document.getElementById("guess-button").removeAttribute("disabled")
  document.getElementById("guess-input").removeAttribute("disabled")
}

/**
 * Guess é a parte responsável por gerenciar o input de palpites e o botão de envio,
 * assim como fazer a checagem se o palpite estava correto ou não e enviar o novo número
 * ao componente reponsável pelos LEDs.
*/

const Guess = (props) => {

  const handleGuess = () => {
    const input = document.getElementById("guess-input")
    const guessNumber = input.value
    if (guessNumber.length < 1) return;

    const { message, status } = isGuessCorrect(guessNumber)
    handleUpdateLed(guessNumber, message, status)
    input.value = ""
  }

  const isGuessCorrect = (number) => {
    const targetNumber = Number.parseInt(localStorage.getItem("targetNumber"))
    number = Number.parseInt(number)

    let message = ""
    let status = ""

    if (number > targetNumber)
      message = "É menor"
    else if (number < targetNumber)
      message = "É maior"
    else if (number == targetNumber) {
      message = "Você acertou!!!"
      status = "success"
    }

    return { message, status }
  }

  const handleTyping = ({ target: input }) => {
    const filteredValue = input.value.replace(/\D/g, '')
    input.value = filteredValue.slice(0, 3)
  }

  return (
    <div id="guess-container">
      <input
        id="guess-input"
        type="text"
        name="guess-input"
        placeholder="Digite o palpite"
        oninput={(e) => handleTyping(e)}
      />

      <Button
        child={"ENVIAR"}
        attributes={{ onClick: () => handleGuess(), id: "guess-button" }} />
    </div>
  )
}

export default Guess