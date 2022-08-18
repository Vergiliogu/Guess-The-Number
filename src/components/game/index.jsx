import { createElement, createFragment } from "@jsxConverter"
import digitsActivedParts from "./led.config.json"
import Digit from "../digit"
import Button from "../common/button"
import { enableGuess, disableGuess } from "../guess"

import CircleArrowIcon from "@images/circle-arrow-icon.svg"
import { getNewRandomNumber } from "../../services/numberGenerator"

import "./game.css"

/**
 * Game é parte responsável por gerenciar os digitos que estão aparendo
 * para o usuário, bem como atualizá-los, exibir a mensagem correta e
 * mostrar o botão de nova partida quando necessário.
 * Também é de sua responsabilidade lidar com novas partidas quando o
 * palpite está certo ou quando um erro acontece.
*/

const setDigits = (number, status = "") => {
  const digitsContainer = document.getElementById("digits-container")
  const arrayNumber = Array.from(number)

  if (arrayNumber.length) {
    const fragment = new DocumentFragment()
    arrayNumber.forEach(n => fragment.appendChild(<Digit activedParts={digitsActivedParts[n]} status={status} />))

    digitsContainer.innerHTML = ""
    digitsContainer.appendChild(fragment)
  }
}

const setInfoMessage = (message, status = "") => {
  const infoMessageContainer = document.getElementById("info-message-container")

  if (!message) {
    infoMessageContainer.innerHTML = ""
    return;
  }

  const messageElement = (<p class="info-message">{message}</p>)

  let messageColor = "default-color"
  switch (status) {
    case "success":
      messageColor = "success-color"
      break
    case "fail":
      messageColor = "fail-color"
      break
  }

  messageElement.classList.add(messageColor)

  infoMessageContainer.innerHTML = ""
  infoMessageContainer.appendChild(messageElement)
}

export const handleUpdateLed = (number, message, status) => {
  setDigits(number, status)
  setInfoMessage(message, status)

  if (status == "success") {
    handleDisable()
  }
}

const handleNewMatch = async () => {
  const { success, statusCode, response } = await getNewRandomNumber()

  let nextNumber = "0"
  let message = null
  let status = ""

  if (success) {
    localStorage.setItem("targetNumber", response.value)
    const buttonContainer = document.getElementById("new-match-btn-container")
    buttonContainer.innerHTML = ""
    enableGuess()
  }
  else {
    nextNumber = String(statusCode)
    message = "Erro"
    status = "fail"
    handleDisable()
  }

  setDigits(nextNumber, status)
  setInfoMessage(message, status)
}

const handleDisable = () => {
  const buttonContainer = document.getElementById("new-match-btn-container")
  buttonContainer.innerHTML = ""
  buttonContainer.appendChild(
    <Button
      child={<><img class="refresh-icon" src={CircleArrowIcon} alt="refresh-icon" />NOVA PARTIDA</>}
      classes={["new-match-btn"]}
      attributes={{ onClick: () => handleNewMatch() }}
    />
  )

  disableGuess()
}

const Game = (props) => {
  handleNewMatch()

  return (
    <div id="game-container">
      <div id="info-message-container" />

      <div id="digits-container">
        <Digit activedParts={digitsActivedParts[props?.initialValue || "0"]} />
      </div>

      <div id="new-match-btn-container" />
    </div>
  )
}

export default Game