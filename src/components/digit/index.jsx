import { createElement, createFragment } from "@jsxConverter"

import CenterPartDigit from "@images/center-part-digit.svg"
import SidePartDigit from "@images/side-part-digit.svg"
import TopPartDigit from "@images/top-part-digit.svg"

import "./digit.css"

/**
 * A lógica usada para a implementação do dígito foi relativamente simples.
 * Basicamente, a função deve receber um objeto 'activedParts', que representa
 * de forma binária quais LEDs devem acender:
 * "0": {
    "top": 1,
    "topLeft": 1,
    "topRight": 1,
    "center": 0,
    "bottom": 1,
    "bottomLeft": 1,
    "bottomRight": 1
 * }
 * Para representar o número 0, todas as LEDs, exceto a do meio, devem estar acessas.
 * 
 * O parâmetro 'status' se refere a qual cor os LEDs devem acender. Verde para sucesso,
 * vermelho para falha e, preto para nenhum evento especial.
 * 
 * Para manter a otimização do programa, apenas três imagens (em formato de desenho SVG)
 * estão sendo utilizadas, assim sendo, apenas é necessário rotacioná-las até a posição correta.
 * Para manter um otimização ainda melhor, as mesmas imagens podem ser usadas em diferentes cores,
 * simplesmente utilizando a propriedade 'filter' do css, que permite que elas sejam 'pintadas',
 * porém, matendo-se as mesmas, sem necessidades de novas cópias ou novas requisições aos arquivos.
*/

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