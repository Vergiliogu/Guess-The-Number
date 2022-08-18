/**
 * createElement é a função usada para pegar os parametros passados pelo Babel
 * e transformá-los em Nodes e então em elementos HTML.
 * O fluxo da função funciona da seguinte forma: 
 * <div id="123"> <img/><img/> </div> -> createElement('div', {id: "123"}, [<img/>, <img/>])
*/

export const createElement = (htmlTag, props, ...children) => {
  if (typeof htmlTag === "function") {
    return htmlTag(props, children)
  }

  const element = document.createElement(htmlTag)

  Object.entries(props || {}).forEach(([name, value]) => {
    if (name.startsWith('on') && name.toLowerCase() in window)
      element.addEventListener(name.toLowerCase().slice(2), value)
    else element.setAttribute(name, value.toString())
  })

  children.forEach((child) => {
    appendChild(element, child)
  })

  return element
}

/**
 * Similar à função createElement, mas nesse caso, é usada para criar fragmentos
 * sem tag HTML, por exemplo: <></>.
*/
export const createFragment = (props, ...children) => {
  return children
}

/**
 * Função recursiva responsável por adicionar todas as tags "filhas" dentro de um mesmo
 * elemento.
*/
const appendChild = (parent, child) => {
  if (Array.isArray(child)) {
    child.forEach(nestedChild => appendChild(parent, nestedChild))
  } else {
    parent.appendChild(
      child.nodeType ? child : document.createTextNode(child)
    )
  }
}