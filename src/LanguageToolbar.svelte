{#if text}
  <div class="language-toolbar-container">
    <div class="language-toolbar" style:left="{left}px" style:top="{top}px" style:transform>
      <TextControls {text} />
    </div>
  </div>
{/if}

<script>
  import TextControls from './LanguageToolbar.TextControls.svelte'

  export let text = null
  export let position = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }

  $: left = position.left
  $: top = position.top
  $: transform = `translateX(-100%)`
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
    position: absolute;
    font-size: 12px;
    font-family: Arial;
    white-space: nowrap;
    padding: 10px;
    background-color: rgb(32, 44, 51);
    color: #e9edef;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }
</style>
