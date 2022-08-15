import { createElement, createFragment } from "JsxConverter"
import "./header.css"

const Header = (props) => {
  return (
    <div id="header">
      <h1 id="main-title">QUAL É O NÚMERO?</h1>
      <div class="horizontal-line" />
    </div>
  )
}

export default Header;