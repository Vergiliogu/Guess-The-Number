import { createElement, createFragment } from "@jsxConverter"
import App from "./app"

import "./index.css"

/** 
 * O programa foi escrito puramente em JavaScript, Html e Css, sem uso de
 * bibliotecas externas que pudessem ajudar, como expecificado nas instruções.
 * Unicamente foram usadas as bibliotecas necessárias para Bundler (WebPack), 
 * Transpiler (Babel) e Testes (Jest), dentro das mesmas também foram instalados
 * plugins, que ajudavam somente na organização e preparação do código, sem ajudar
 * diretamente no case técnico.
 * 
 * Para facilitar a escrita, utilizei Plugin do Babel para conversão de JSX em HTML,
 * o que me permitiu dividir melhor o código em diferentes módulos, mas mesmo essa
 * implementação de conversão, foi feita por mim, o Babel apenas lê o JSX e chama minha
 * função createElement.
*/

const root = (
  <div id="root">
    <App />
  </div>
)

const body = document.querySelector("body").appendChild(root)
