{#if text}
  <div class="language-toolbar-container">
    <div class="language-toolbar" style="left: {x}px; top:{y}px; transform: translateX(-100%);">
      <TextControls {text} />
    </div>
  </div>
{/if}

<script>
  import TextControls from "./LanguageToolbar.TextControls.svelte"

  export let text = null
  export let y = 0
  export let x = 0
</script>

<style>
  .language-toolbar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
  }

  .language-toolbar {
    font-size: 12px;
    font-family: Arial;
    position: absolute;
    white-space: nowrap;
    padding: 10px;
    background-color: #222E35;
    color: #e9edef;
    border-radius: 15px;
    border-top-right-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }
</style>