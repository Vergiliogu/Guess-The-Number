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

export const createFragment = (props, ...children) => {
  return children
}

const appendChild = (parent, child) => {
  if (Array.isArray(child)) {
    child.forEach(nestedChild => appendChild(parent, nestedChild))
  } else {
    parent.appendChild(
      child.nodeType ? child : document.createTextNode(child)
    )
  }
}