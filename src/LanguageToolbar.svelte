<div class="language-toolbar-container">
  <!-- this toolbar appears next to text messages -->
  {#if text || hasAudio}
    <div class="language-toolbar" style="left: {x}px; top:{y - 25}px;">
      {#if text}
        <TextControls {text} />
      {/if}
      {#if hasAudio}
        <AudioControls />
      {/if}
    </div>
  {/if}
</div>

<script>
  import AudioControls from "./LanguageToolbar.AudioControls.svelte"
  import TextControls from "./LanguageToolbar.TextControls.svelte"

  export let text = null
  export let hasAudio = false
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
    padding: 4px;
    background-color: rgba(255, 255, 255, 0.6);
    color: #000;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1px;
  }

  :global(.language-toolbar button) {
    padding: 5px 10px;
    background: none;
    border: none;
    color: #000;
    border-radius: 0;
    font-size: 12px;
    font-family: Arial;
  }

  :global(.language-toolbar button:hover) {
    background: rgba(255, 255, 255, 0.5);
  }

  :global(.language-toolbar button:first-child) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  :global(.language-toolbar button:last-child) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  :global(.language-toolbar button.selected) {
    background-color: #333;
    color: #fff;
  }
</style>