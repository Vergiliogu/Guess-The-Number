import { createElement, createFragment } from "JsxConverter"
import digitsActivedParts from "./led.config.json"
import Digit from "../digit"

import CircleArrowIcon from "@images/circle-arrow-icon.svg"

import "./led.css"

const Led = (props) => {
  return (
    <div id="led-container">
      <div id="info-message-container">
        <p class="info-message">Erro</p>
      </div>

      <div id="digits-container">
        <Digit activedParts={digitsActivedParts["5"]} status="fail" />
        <Digit activedParts={digitsActivedParts["0"]} status="fail" />
        <Digit activedParts={digitsActivedParts["2"]} status="fail" />
      </div>

      <div id="new-match-btn-container">
        <button class="new-match-btn">
          <img class="refresh-icon" src={CircleArrowIcon} alt="refresh-icon" />
          NOVA PARTIDA
        </button>
      </div>
    </div>
  )
}

export default Led