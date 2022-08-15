import { createElement, createFragment } from "JsxConverter"
import App from "./app"

import "./index.css"

const root = (
  <div id="root">
    <App />
  </div>
)

const body = document.querySelector("body").appendChild(root)
