import { createElement, createFragment } from "@jsxConverter"
import "./button.css"

/**
 * Componente reutilizável de um botão
*/

const Button = ({ child, classes = [], attributes }) => {
  return (
    <button class={`button ${classes.join(" ")}`} {...attributes}>
      {child}
    </button>
  )
}

export default Button