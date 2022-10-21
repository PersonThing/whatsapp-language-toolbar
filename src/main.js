import LanguageToolbar from './LanguageToolbar.svelte'

const container = document.createElement('div')
container.style = 'position: fixed; top: 0; left: 0; width: 100%; z-index: 9999;'
document.body.prepend(container)

const toolbar = new LanguageToolbar({
  target: container
})

// add a mouseover event listener to messages
document.body.addEventListener('mouseover', e => {
  const closestMessageAncestor = e.target?.closest('.focusable-list-item')
  if (closestMessageAncestor) {
    const position = closestMessageAncestor.getBoundingClientRect()
    const textContainer = closestMessageAncestor.querySelector('.copyable-text.selectable-text')
    toolbar.$set({
      text: textContainer?.innerText?.trim(),
      x: position.left,
      y: position.top
    })
  } else {
    // if the mouse isn't over the toolbar, hide the toolbar
    if (e.target?.closest('.language-toolbar') == null) {
      toolbar.$set({
        text: null
      })
    }
  }
})

export default toolbar
