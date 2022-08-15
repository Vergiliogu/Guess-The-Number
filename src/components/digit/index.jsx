import { createElement, createFragment } from "JsxConverter"

import CenterPartDigit from "@images/center-part-digit.svg"
import SidePartDigit from "@images/side-part-digit.svg"
import TopPartDigit from "@images/top-part-digit.svg"

import "./digit.css"

const Digit = ({ activedParts, status }) => {
  let colorsOfParts = {}

  const statusClasses = {
    "success": "green-filter",
    "fail": "red-filter",
  }

  for (let part in activedParts) {
    let className = "gray-filter"
    if (activedParts[part]) {
      className = statusClasses[status] || ""
    }
    colorsOfParts[part] = className
  }

  return (
    <div class="digit">
      <div class="parts-block-digit">
        <img class={`part-digit horizontal-part ${colorsOfParts.top} top-part-digit`} src={TopPartDigit} />
        <img class={`part-digit vertical-part ${colorsOfParts.topLeft} left-top-part-digit`} src={SidePartDigit} />
        <img class={`part-digit vertical-part ${colorsOfParts.topRight} right-top-part-digit`} src={SidePartDigit} />
      </div>
      <div class="center-digit">
        <img class={`part-digit ${colorsOfParts.center} center-part-digit`} src={CenterPartDigit} />
      </div>
      <div class="parts-block-digit">
        <img class={`part-digit horizontal-part ${colorsOfParts.bottom} bottom-part-digit`} src={TopPartDigit} />
        <img class={`part-digit vertical-part ${colorsOfParts.bottomLeft} left-bottom-part-digit`} src={SidePartDigit} />
        <img class={`part-digit vertical-part ${colorsOfParts.bottomRight} right-bottom-part-digit`} src={SidePartDigit} />
      </div>
    </div>
  )
}

export default Digit;