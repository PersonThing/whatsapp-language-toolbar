<!-- 

    const textContainer = closestMessageAncestor.querySelector('.copyable-text.selectable-text')
    const messageContainer = closestMessageAncestor.querySelector('[data-testid=msg-container]')
    const position = messageContainer.getBoundingClientRect()
    const isFromMe = closestMessageAncestor.classList.contains('message-out')

-->

<div class="language-toolbar-fixture">
  <div class="message-list">
    <div class="focusable-list-item message-in">
      <div class="message copyable-text selectable-text" data-testid="msg-container">Eu sou uma mensagem recebida em português</div>
    </div>
    <div class="focusable-list-item message-out">
      <div class="message copyable-text selectable-text" data-testid="msg-container">I am an outgoing message in English</div>
    </div>
  </div>
</div>

<style>
  .language-toolbar-fixture {
    position: fixed;
    width: 100vw;
    height: 100vh; 
    top: 0;
    left: 0;
    background: #333;
    padding: 20px;
    padding-left: 200px;
    font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    font-size: 14px;
  }

  .message-list {
    max-width: 500px;
  }

  .focusable-list-item {
    margin: 10px;
    display: flex;
    flex-direction: row;
  }

  .message-in {
    justify-content: flex-start;
  }

  .message-out {
    justify-content: flex-end;
  }

  .message {
    border-radius: 10px;
    padding: 20px;
    max-width: 75%;
    color: #fff;
  }

  .message-in .message {
    background-color: #222E34;
  }

  .message-out .message {
    background-color: #005C4B;
  }
</style>