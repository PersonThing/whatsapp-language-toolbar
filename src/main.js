import LanguageToolbar from './LanguageToolbar.svelte'
import LanguageToolbarFixture from './LanguageToolbarFixture.svelte'

// if we're on web.whatsapp.com, inject the toolbar and listen for mouseover events
if (document.location.host == 'web.whatsapp.com') {
  const container = document.createElement('div')
  document.body.prepend(container)

  const toolbar = new LanguageToolbar({
    target: container
  })

  // add a mouseover event listener to messages
  document.body.addEventListener('mouseover', e => {
    const closestMessageAncestor = e.target?.closest('.focusable-list-item')
    if (closestMessageAncestor) {
      const textContainer = closestMessageAncestor.querySelector('.copyable-text.selectable-text')
      const messageContainer = closestMessageAncestor.querySelector('[data-testid=msg-container]')
      const position = messageContainer.getBoundingClientRect()
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
} else {
  // if we're developing locally, just attach the toolbar fixture to the body for previewing
  const toolbar = new LanguageToolbarFixture({
    target: document.body
  })
}

