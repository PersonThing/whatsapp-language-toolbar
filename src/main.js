import LanguageToolbar from './LanguageToolbar.svelte'
import LanguageToolbarFixture from './LanguageToolbarFixture.svelte'

// if we're on web.whatsapp.com, inject the toolbar and listen for mouseover events
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
    const isFromMe = closestMessageAncestor.classList.contains('message-out')
    toolbar.$set({
      text: textContainer?.innerText?.trim(),
      position,
      isFromMe 
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

// if we're developing locally, attach sample html to pretend we're on whatsapp for testing
if (document.location.host != 'web.whatsapp.com') {
  new LanguageToolbarFixture({
    target: document.body
  })
}